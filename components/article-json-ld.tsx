import type { BlogArticle } from '@/lib/blog';
import { author as siteAuthor } from '@/lib/author';

export function ArticleJsonLd({ article }: { article: BlogArticle }) {
  const root = 'https://www.ministrysale.org';
  const url = `${root}/blog/${article.slug}`;
  const graph = [
    {
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.description,
      image: `${root}${article.image}`,
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      author: { '@type': 'Person', '@id': `${root}${siteAuthor.path}#person`, name: article.author, url: `${root}${siteAuthor.path}` },
      publisher: { '@type': 'Organization', name: 'Міністерство з Продажів', url: root },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      inLanguage: 'uk'
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Головна', item: root },
        { '@type': 'ListItem', position: 2, name: 'Блог', item: `${root}/blog` },
        { '@type': 'ListItem', position: 3, name: article.title, item: url }
      ]
    }
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') }} />;
}
