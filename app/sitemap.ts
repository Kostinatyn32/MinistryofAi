import type { MetadataRoute } from 'next';
import { articles } from '@/lib/blog';

const root = 'https://www.ministrysale.org';
const updatedOn = new Date('2026-09-23T00:00:00.000Z');
const updatedPaths = new Set([
  '/rishennia', '/rishennia/ecommerce', '/rishennia/poslugy', '/rishennia/b2b', '/integratsii',
  '/integratsii/telegram', '/integratsii/instagram', '/integratsii/whatsapp', '/integratsii/site-widget', '/integratsii/calendar', '/integratsii/crm',
  '/lead-qualification', '/roi', '/demo', '/bezpeka', '/kontakty', '/resursy', '/resursy/avtomatyzatsiya-prodazhiv', '/blog'
]);

const pages = [
  '', '/ai-agent-dlya-prodazhiv', '/tarify', '/roi', '/mozhlyvosti', '/integratsii',
  '/integratsii/telegram', '/integratsii/instagram', '/integratsii/whatsapp', '/integratsii/site-widget', '/integratsii/calendar', '/integratsii/crm',
  '/lead-qualification', '/rishennia', '/rishennia/ecommerce', '/rishennia/poslugy', '/rishennia/b2b', '/keisy', '/bezpeka', '/resursy',
  '/resursy/avtomatyzatsiya-prodazhiv', '/demo', '/kontakty', '/blog'
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({
      url: `${root}${path}`,
      lastModified: updatedPaths.has(path) ? updatedOn : undefined,
      changeFrequency: 'monthly' as const,
      priority: path ? path === '/lead-qualification' || path === '/roi' || path === '/rishennia' ? 0.8 : path.startsWith('/rishennia') ? 0.8 : 0.7 : 1
    })),
    ...articles.map((article) => ({
      url: `${root}/blog/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }))
  ];
}
