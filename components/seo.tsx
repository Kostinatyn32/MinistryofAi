export function JsonLd({ path, title }: { faq?: string[][]; path?: string; title?: string }) {
  const root = 'https://www.ministrysale.org';
  const graph: Record<string, unknown>[] = [
    { '@type': 'WebSite', '@id': `${root}/#website`, url: root, name: 'Міністерство з Продажів', inLanguage: 'uk' },
    {
      '@type': 'Organization',
      '@id': `${root}/#organization`,
      name: 'Міністерство з Продажів',
      url: root,
      sameAs: ['https://ministrysale.com', 'https://t.me/tripailo_ads'],
      founder: [{ '@type': 'Person', name: 'Костянтин Тріпайло' }, { '@type': 'Person', name: 'Андрій Тимощук' }]
    }
  ];

  if (path === '/ai-agent-dlya-prodazhiv') {
    graph.push({ '@type': 'SoftwareApplication', name: 'AI-продавець', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', inLanguage: 'uk', url: root + path, description: 'AI-агент для продажів у переписках із передачею складних діалогів менеджеру та пілотним впровадженням.' });
  }

  if (path && title && (path === '/rishennia' || path.startsWith('/rishennia/') || path === '/integratsii' || path.startsWith('/integratsii/'))) {
    graph.push({
      '@type': 'Service',
      '@id': `${root}${path}#service`,
      name: title,
      serviceType: 'AI-агент для продажів',
      provider: { '@id': `${root}/#organization` },
      url: root + path,
      inLanguage: 'uk',
      areaServed: 'Україна'
    });
  }

  if (path && title) graph.push({ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Головна', item: root }, { '@type': 'ListItem', position: 2, name: title, item: root + path }] });

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') }} />;
}
