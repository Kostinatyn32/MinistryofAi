import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import { articles } from '@/lib/blog';
import { PageHeading, FinalCTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Блог про AI для продажів',
  description: 'Практичні матеріали про AI-агентів, кваліфікацію лідів, автоматизацію переписок, CRM та безпечне впровадження AI у продажі.',
  alternates: { canonical: '/blog' }
};

export default function BlogPage() {
  return <main id="main"><div className="container"><PageHeading title="Блог про AI для продажів" description="Практичні матеріали для команд, які хочуть впроваджувати AI у переписки, кваліфікацію лідів і робочі процеси продажів без магічних обіцянок."/><section className="blog-intro"><p>Пишемо про реальні сценарії, межі автоматизації, бази знань, передачу менеджеру та вимірювання пілотів. Кожен матеріал пов’язаний із конкретними сторінками продукту, щоб після читання було зрозуміло, який крок робити далі.</p></section><section className="article-grid" aria-label="Статті">{articles.map(article => <article className="article-card" key={article.slug}><Link href={`/blog/${article.slug}`} aria-label={article.title}><Image src={article.image} alt={article.imageAlt} width={1600} height={900} sizes="(max-width: 767px) 100vw, 50vw"/></Link><div><span className="article-meta">{new Intl.DateTimeFormat('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${article.publishedAt}T12:00:00`))}</span><h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2><p>{article.description}</p><div className="article-card-bottom"><span><Clock3 size={15}/>{article.readTime}</span><Link href={`/blog/${article.slug}`}>Читати статтю <ArrowUpRight size={16}/></Link></div></div></article>)}</section></div><FinalCTA/></main>;
}
