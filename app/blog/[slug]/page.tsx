import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock3, UserRound } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getArticle, articles } from '@/lib/blog';
import { FAQ } from '@/components/faq';
import { ArticleJsonLd } from '@/components/article-json-ld';
import { FinalCTA } from '@/components/sections';
import { EditorialCover } from '@/components/product-visuals';
import { author as siteAuthor } from '@/lib/author';

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: 'Статтю не знайдено' };
  return { title: article.metaTitle ?? article.title, description: article.description, alternates: { canonical: `/blog/${article.slug}` }, openGraph: { type: 'article', title: article.title, description: article.description, images: [{ url: article.image, alt: article.imageAlt }], publishedTime: article.publishedAt, authors: [article.author] } };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const date = new Intl.DateTimeFormat('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${article.publishedAt}T12:00:00`));
  return <main id="main"><ArticleJsonLd article={article}/><article className="article-page container"><nav className="breadcrumbs" aria-label="Хлібні крихти"><Link href="/">Головна</Link><span>/</span><Link href="/blog">Блог</Link><span>/</span><span aria-current="page">{article.title}</span></nav><header className="article-header"><span className="section-label">AI для продажів</span><h1>{article.title}</h1><p>{article.description}</p><div className="article-byline"><Link href={siteAuthor.path}><UserRound size={16}/>Автор: {article.author}</Link><span><Clock3 size={16}/>{article.readTime}</span><time dateTime={article.publishedAt}>Опубліковано: {date}</time></div></header><EditorialCover className="article-hero" topic={article.slug.includes('kvalifikatsiya') ? 'qualification' : 'messengers'} label={article.imageAlt}/><div className="article-layout"><div className="article-content"><div className="article-lead">{article.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div><section className="article-takeaways"><h2>Коротко</h2><ol>{article.takeaways.map(item => <li key={item}>{item}</li>)}</ol></section>{article.sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.items && <ol>{section.items.map(item => <li key={item}>{item}</li>)}</ol>}{section.link && <Link className="article-context-link" href={section.link.href}><span>{section.link.label}</span><small>{section.link.description}</small><ArrowUpRight size={17}/></Link>}</section>)}<section><h2>Висновки</h2>{article.conclusion.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<Link className="button button-primary" href="/demo">Перевірити AI-продавця на демо <ArrowUpRight size={18}/></Link></section><section className="article-faq"><div><span className="section-label">FAQ</span><h2>Часті питання: {article.title}</h2></div><FAQ items={article.faq}/></section></div><aside className="article-aside"><strong>Читайте також</strong>{article.related.map(link => <Link href={link.href} key={link.href}><span>{link.label}</span><small>{link.description}</small><ArrowUpRight size={15}/></Link>)}</aside></div><Link className="back-to-blog" href="/blog"><ArrowLeft size={16}/>Усі статті</Link></article><FinalCTA/></main>;
}
