import type { MetadataRoute } from 'next';
import { articles } from '@/lib/blog';

const root = 'https://www.ministrysale.org';

const pages = [
  '', '/ai-agent-dlya-prodazhiv', '/tarify', '/roi', '/mozhlyvosti', '/integratsii',
  '/integratsii/telegram', '/integratsii/instagram', '/integratsii/whatsapp', '/integratsii/site-widget', '/integratsii/calendar', '/integratsii/crm',
  '/author/kostiantyn-trypailo', '/lead-qualification', '/rishennia', '/rishennia/ecommerce', '/rishennia/poslugy', '/rishennia/b2b', '/keisy', '/bezpeka', '/resursy',
  '/resursy/avtomatyzatsiya-prodazhiv', '/demo', '/kontakty', '/blog'
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({
      url: `${root}${path}`
    })),
    ...articles.map((article) => ({
      url: `${root}/blog/${article.slug}`
    }))
  ];
}
