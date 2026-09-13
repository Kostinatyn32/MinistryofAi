import Link from 'next/link';
import { Check, CircleAlert } from 'lucide-react';
import { FAQ } from '@/components/faq';
import { FinalCTA, PageHeading } from '@/components/sections';
import { JsonLd } from '@/components/seo';
import { SeoBlock } from '@/components/seo-block';

type LinkItem = { href: string; label: string; description: string };
type Section = { title: string; paragraphs: string[]; items?: string[] };

export function ClusterPage({
  path, title, description, label, goal, sections, faq, links, note
}: {
  path: string;
  title: string;
  description: string;
  label: string;
  goal: string;
  sections: Section[];
  faq: string[][];
  links: LinkItem[];
  note?: string;
}) {
  return <main id="main">
    <JsonLd path={path} title={title} faq={faq}/>
    <div className="container">
      <PageHeading title={title} description={description}/>
      <section className="cluster-intro">
        <div><span className="section-label">{label}</span><h2>{goal}</h2></div>
        <div className="cluster-note"><CircleAlert size={23}/><p>{note || 'Починаємо з одного зрозумілого сценарію, фіксуємо межі відповідей і перевіряємо результат разом із командою до масштабування.'}</p></div>
      </section>
      <div className="cluster-sections">
        {sections.map((section, index) => <section className="cluster-section" key={section.title}>
          <span className="cluster-number">0{index + 1}</span>
          <div><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.items && <ul className="check-list">{section.items.map((item) => <li key={item}><Check size={18}/>{item}</li>)}</ul>}
          </div>
        </section>)}
      </div>
      <SeoBlock label="Наступний крок" title="Зберіть сценарій до запуску" paragraphs={['Ця сторінка — робоча основа для вибору сценарію. Деталі інтеграцій, ціни, доступи й очікувані результати погоджуються під час пілоту, а не припускаються за замовчуванням.']} links={links} faq={faq}/>
      <div className="cluster-back"><Link href="/demo" className="button button-primary">Обговорити сценарій пілоту</Link></div>
    </div>
    <FinalCTA/>
  </main>;
}
