import { notFound } from 'next/navigation';
import { PageHeading } from '@/components/sections';
import { legalContent } from '@/lib/legal-content';
import { legalPages } from '@/lib/content';

export function generateStaticParams() {
  return Object.keys(legalPages).map((legal) => ({ legal }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ legal: string }> }) {
  const { legal } = await params;
  return {
    title: legalPages[legal as keyof typeof legalPages] || 'Документ',
    description: 'Правові документи Міністерства з Продажів.',
    robots: { index: false, follow: true },
    alternates: { canonical: `/${legal}` },
  };
}

export default async function Page({ params }: { params: Promise<{ legal: string }> }) {
  const { legal } = await params;
  const title = legalPages[legal as keyof typeof legalPages];
  const document = legalContent[legal];

  if (!title || !document) notFound();

  return (
    <main id="main" className="container">
      <PageHeading title={title} description={document.intro} />
      <div className="legal-layout">
        <nav className="side-nav" aria-label="Зміст документа">
          <a href="#status">Статус документа</a>
          {document.sections.map((section) => (
            <a href={`#${section.id}`} key={section.id}>
              {section.title.replace(/^\d+\.\s*/, '')}
            </a>
          ))}
        </nav>
        <article className="legal-document">
          <section id="status">
            <span className="tag">Робоча редакція</span>
            <h2>Документ доступний для ознайомлення</h2>
            <p>Редакція від {document.updated}. Перед початком приймання оплат рекомендуємо погодити текст із юристом і платіжним провайдером.</p>
          </section>
          {document.sections.map((section) => (
            <section id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul className="numbered-list">
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
