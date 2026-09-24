import Link from 'next/link';
import { CalendarDays, Check, MessageSquare } from 'lucide-react';
import { FAQ } from '@/components/faq';
import { LeadForm } from '@/components/lead-form';
import { leadsReady } from '@/lib/config';
import { JsonLd } from '@/components/seo';
import { SeoBlock } from '@/components/seo-block';
import { PageHeading } from '@/components/sections';

export const metadata = {
  title: 'Коротка консультація про AI-продавця',
  description: 'Запишіться на коротку консультацію: розберемо типові діалоги, підберемо перший сценарій AI-продавця, перевіримо канал і визначимо наступний крок.',
  alternates: { canonical: '/demo' }
};

const faq = [
  ['Що потрібно підготувати до демо?', 'Достатньо коротко описати продукт, канал звернень і типові питання клієнтів. Паролі, API-ключі та інші секретні дані для першої розмови не потрібні.'],
  ['Чи буде на демо готова інтеграція?', 'На демо ми визначаємо сценарій і перевіряємо вимоги. Підключення конкретного каналу або CRM погоджується після технічної перевірки.'],
  ['Чи підходить демо, якщо ще немає CRM?', 'Так. Спочатку можна розібрати сам діалог, потрібний контекст і роль менеджера. Потреба в CRM залежить від обраного сценарію.']
];

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const query = await searchParams;
  const plan = ['demo', 'start', 'business', 'scale'].includes(query.plan || '') ? query.plan as 'demo' | 'start' | 'business' | 'scale' : '';
  const market = query.market === 'ua' || query.market === 'eu' ? query.market : '';

  return <main id="main" className="container">
    <JsonLd path="/demo" title="Коротка консультація про AI-продавця" faq={faq}/>
    <PageHeading title="Запишіться на коротку консультацію" description="За 15 хвилин розберемо ваші типові звернення, підберемо перший реалістичний сценарій AI-продавця та визначимо наступний крок. Залиште заявку, щоб узгодити зручний час."/>
    <div className="contact-layout">
      <div className="demo-expect">
        <CalendarDays size={38} strokeWidth={1.2}/><h2>Що отримаєте на демо</h2>
        <ol className="check-list">{['Розбір типових звернень клієнтів і поточного процесу.', 'Приклад того, як AI може вести першу частину діалогу.', 'Визначення каналу, бази знань і моменту передачі менеджеру.', 'Чесний наступний крок: тест, підготовка даних або технічна перевірка.'].map((item) => <li key={item}><Check size={18}/>{item}</li>)}</ol>
        {plan && <p className="selected-plan">Ви обрали: <strong>{plan === 'demo' ? 'Demo' : plan[0].toUpperCase() + plan.slice(1)}</strong>{market && `, ${market === 'ua' ? 'Україна' : 'Європа'}`}</p>}
        <div className="inline-note"><MessageSquare size={22}/><div><strong>Хочете одразу домовитись про час?</strong><p>Напишіть у <a href="https://t.me/tripailo_ads">Telegram @tripailo_ads</a>. Узгодимо зручний слот особисто.</p></div></div>
      </div>
      <LeadForm ready={leadsReady()} plan={plan} market={market}/>
    </div>
    <section className="section two-columns evidence-panel"><div><span className="section-label">Як проходить розмова</span><h2>Від задачі до реалістичного пілоту</h2></div><div className="difference-copy"><p>Ми не починаємо з обіцянки автоматизувати всі продажі. Спершу обираємо один повторюваний тип запиту, визначаємо дозволені відповіді й дані, потрібні менеджеру.</p><p>Якщо сценарій потребує CRM, календаря або месенджера, перевіряємо вимоги конкретного каналу. Це допомагає не витрачати час на непідтверджені інтеграції.</p></div></section>
    <section className="section faq-section"><div><span className="section-label">FAQ</span><h2>Питання про демо</h2></div><FAQ items={faq}/></section>
    <SeoBlock label="Підготовка до розмови" title="Оберіть тему, яку хочете перевірити першою" paragraphs={['Перед демо можна переглянути сценарії за типом продажів, підхід до кваліфікації лідів та вимоги до інтеграцій. Це допоможе швидше перейти до конкретного процесу вашої команди.']} links={[
      { href: '/rishennia', label: 'AI-рішення для продажів', description: 'Оберіть свій тип бізнесу та сценарій.' },
      { href: '/lead-qualification', label: 'Кваліфікація лідів', description: 'Визначте, який контекст потрібен менеджеру.' },
      { href: '/integratsii', label: 'Інтеграції', description: 'Перевірте вимоги до каналу.' },
      { href: '/roi', label: 'ROI AI-продавця', description: 'Сформулюйте гіпотезу пілоту.' },
      { href: '/tarify', label: 'Тарифи', description: 'Порівняйте формати роботи.' },
      { href: '/bezpeka', label: 'Безпека та дані', description: 'Дізнайтеся, що погоджуємо перед стартом.' }
    ]}/>
    <p className="resources-cta">Потрібно спочатку переглянути можливості? <Link href="/ai-agent-dlya-prodazhiv">Дізнайтеся, як працює AI-агент для продажів</Link>.</p>
  </main>;
}
