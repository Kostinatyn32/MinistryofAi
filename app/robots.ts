import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: process.env.SITE_LIVE === 'true'
      ? { userAgent: '*', allow: '/', disallow: ['/api/'] }
      : { userAgent: '*', disallow: '/' },
    sitemap: 'https://www.ministrysale.org/sitemap.xml'
  };
}
