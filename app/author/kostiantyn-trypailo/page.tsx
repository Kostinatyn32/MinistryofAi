import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, BookOpen, BriefcaseBusiness, ExternalLink } from 'lucide-react';
import { author } from '@/lib/author';
import { articles } from '@/lib/blog';

const root = 'https://www.ministrysale.org';

export const metadata: Metadata = {
  title: 'Автор AI для продажів - Костянтин Тріпайло',
  description: 'Костянтин Тріпайло, співзасновник і CMO Міністерства з Продажів. Статті про AI-агентів, кваліфікацію лідів та автоматизацію діалогів.',
  alternates: { canonical: author.path },
  openGraph: {
    type: 'profile',
    title: 'Костянтин Тріпайло - автор про AI у продажах',
    description: 'Матеріали про AI-агентів, кваліфікацію лідів і автоматизацію діалогів із клієнтами.',
    url: author.path,
    images: [{ url: author.image, width: 1024, height: 1024, alt: author.imageAlt }],
    firstName: 'Костянтин',
    lastName: 'Тріпайло'
  }
};

function ProfileJsonLd() {
  const personId = `${root}${author.path}#person`;
  const graph = [
    {
      '@type': 'ProfilePage',
      '@id': `${root}${author.path}#webpage`,
      url: `${root}${author.path}`,
      name: 'Костянтин Тріпайло - автор про AI у продажах',
      inLanguage: 'uk',
      mainEntity: {
        '@type': 'Person',
        '@id': personId,
        name: author.name,
        url: `${root}${author.path}`,
        image: `${root}${author.image}`,
        jobTitle: author.role,
        sameAs: [...author.sameAs],
        worksFor: { '@type': 'Organization', '@id': `${root}/#organization`, name: 'Міністерство з Продажів', url: root },
        knowsAbout: [...author.expertise]
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Головна', item: root },
        { '@type': 'ListItem', position: 2, name: 'Блог', item: `${root}/blog` },
        { '@type': 'ListItem', position: 3, name: author.name, item: `${root}${author.path}` }
      ]
    }
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') }} />;
}

export default function AuthorPage() {
  const authorArticles = articles.filter((article) => article.author === author.name);

  return (
    <main id="main" className="author-page">
      <ProfileJsonLd />
      <div className="container">
        <nav className="breadcrumbs" aria-label="Хлібні крихти">
          <Link href="/">Головна</Link><span>/</span><Link href="/blog">Блог</Link><span>/</span><span aria-current="page">Автор</span>
        </nav>

        <section className="author-profile" aria-labelledby="author-name">
          <div className="author-profile-copy">
            <span className="section-label">Автор про AI для продажів</span>
            <h1 id="author-name">{author.name}</h1>
            <p className="author-role">{author.role}</p>
            {author.bio.map((paragraph) => <p className="author-bio" key={paragraph}>{paragraph}</p>)}
            <div className="author-links">
              <Link className="author-company-link" href="/ai-agent-dlya-prodazhiv">
                AI-агент для продажів <ArrowUpRight size={17} />
              </Link>
              <a className="author-company-link" href={author.sameAs[0]} target="_blank" rel="noopener noreferrer">
                Профіль на ministrysale.com <ExternalLink size={15} />
              </a>
            </div>
          </div>
          <div className="author-portrait-wrap">
            <Image
              className="author-portrait"
              src={author.image}
              alt={author.imageAlt}
              width={1024}
              height={1024}
              priority
              sizes="(max-width: 767px) 100vw, 42vw"
            />
          </div>
        </section>

        <section className="author-expertise" aria-labelledby="author-expertise-title">
          <div className="author-section-heading"><BriefcaseBusiness size={19} /><h2 id="author-expertise-title">Теми експертизи</h2></div>
          <ul>{author.expertise.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="author-articles" aria-labelledby="author-articles-title">
          <div className="author-section-heading"><BookOpen size={19} /><h2 id="author-articles-title">Статті Костянтина</h2></div>
          {authorArticles.length > 0 ? (
            <div className="author-article-list">
              {authorArticles.map((article) => (
                <article className="author-article" key={article.slug}>
                  <time dateTime={article.publishedAt}>{new Intl.DateTimeFormat('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${article.publishedAt}T12:00:00`))}</time>
                  <h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3>
                  <p>{article.description}</p>
                  <Link className="author-read-link" href={`/blog/${article.slug}`}>Читати статтю <ArrowUpRight size={16} /></Link>
                </article>
              ))}
            </div>
          ) : <p className="author-bio">Статті автора з’являться тут.</p>}
        </section>

        <aside className="author-fbd-note" aria-label="Окрема громадська діяльність">
          <div>
            <span className="section-label">Окрема громадська діяльність</span>
            <p>На сайті ГО «Формула Бізнес-Розвитку» Костянтин зазначений у команді з маркетингу та комунікацій. Ця роль і діяльність організації відокремлені від комерційних AI-рішень Міністерства з Продажів.</p>
          </div>
          <a href={author.fbdProfile} target="_blank" rel="noopener noreferrer">Профіль у команді FBD <ExternalLink size={15} /></a>
        </aside>

        <Link className="back-to-blog" href="/blog"><ArrowLeft size={16} />Усі статті блогу</Link>
      </div>
    </main>
  );
}
