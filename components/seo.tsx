import { author } from '@/lib/author';

const root = 'https://www.ministrysale.org';

export function SiteJsonLd() {
  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${root}/#website`,
      url: `${root}/`,
      name: 'Міністерство з Продажів',
      inLanguage: 'uk'
    },
    {
      '@type': 'Organization',
      '@id': `${root}/#organization`,
      name: 'Міністерство з Продажів',
      url: `${root}/`,
      sameAs: ['https://ministrysale.com', 'https://t.me/tripailo_ads'],
      founder: { '@type': 'Person', '@id': `${root}${author.path}#person`, name: author.name, url: `${root}${author.path}` }
    }
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') }} />;
}

type PageType = 'WebPage' | 'ContactPage' | 'CollectionPage';

export function JsonLd({
  path,
  title,
  description,
  pageType = 'WebPage',
  breadcrumb = false
}: {
  faq?: string[][];
  path: string;
  title: string;
  description?: string;
  pageType?: PageType;
  breadcrumb?: boolean;
}) {
  const url = `${root}${path === '/' ? '/' : path}`;
  const graph: Record<string, unknown>[] = [
    {
      '@type': pageType,
      '@id': `${url}#webpage`,
      url,
      name: title,
      ...(description ? { description } : {}),
      inLanguage: 'uk',
      isPartOf: { '@id': `${root}/#website` },
      publisher: { '@id': `${root}/#organization` }
    }
  ];

  if (path === '/ai-agent-dlya-prodazhiv' || path === '/rishennia' || path.startsWith('/rishennia/') || path === '/integratsii' || path.startsWith('/integratsii/')) {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: title,
      serviceType: 'AI-агент для продажів',
      provider: { '@id': `${root}/#organization` },
      url,
      inLanguage: 'uk',
      mainEntityOfPage: { '@id': `${url}#webpage` }
    });
  }

  // Breadcrumbs are emitted only when the same navigation is visible on the page.
  if (breadcrumb || path === '/ai-agent-dlya-prodazhiv') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Головна', item: `${root}/` },
        { '@type': 'ListItem', position: 2, name: title, item: url }
      ]
    });
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') }} />;
}
