import Link from 'next/link';
import { FAQ } from '@/components/faq';

type SeoLink = { href: string; label: string; description: string };
type SeoBlockProps = {
  label?: string;
  title: string;
  paragraphs: string[];
  links: SeoLink[];
  faq?: string[][];
};

export function SeoBlock({ label = 'Корисно за темою', title, paragraphs, links, faq }: SeoBlockProps) {
  return (
    <section className="section seo-content-block" aria-label={title}>
      <div className="seo-content-copy">
        <span className="section-label">{label}</span>
        <h2>{title}</h2>
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="seo-link-grid" aria-label="Пов’язані сторінки">
        {links.map((link) => (
          <Link href={link.href} key={link.href} className="seo-link-card">
            <strong>{link.label}</strong>
            <span>{link.description}</span>
            <b aria-hidden="true">→</b>
          </Link>
        ))}
      </div>
      {faq && <div className="seo-faq"><div><span className="section-label">Питання й відповіді</span><h2>Що важливо знати перед стартом</h2></div><FAQ items={faq}/></div>}
    </section>
  );
}
