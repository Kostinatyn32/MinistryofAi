import Link from 'next/link';
import { BriefcaseBusiness, ShoppingBag, UserRound } from 'lucide-react';
import { FAQ } from '@/components/faq';
import { FinalCTA, PageHeading } from '@/components/sections';
import { JsonLd } from '@/components/seo';
import { SeoBlock } from '@/components/seo-block';

export const metadata = {
  title: 'AI-рішення для продажів',
  description: 'Оберіть AI-рішення для інтернет-магазину, послуг або B2B: сценарій першого діалогу, роль менеджера, інтеграції та безпечний пілот.',
  alternates: { canonical: '/rishennia' }
};

const solutions = [
  { href: '/rishennia/ecommerce', title: 'AI для інтернет-магазину', text: 'Відповіді про товар, підбір і наступний крок без вигаданих залишків, доставки чи знижок.', Icon: ShoppingBag },
  { href: '/rishennia/poslugy', title: 'AI для сфери послуг', text: 'Первинна кваліфікація запиту та підготовка контексту перед записом або розмовою з командою.', Icon: UserRound },
  { href: '/rishennia/b2b', title: 'AI для B2B-продажів', text: 'Збір задачі, контексту й критеріїв, з якими менеджер може почати предметну комерційну розмову.', Icon: BriefcaseBusiness }
];

const faq = [
  ['З чого почати впровадження AI у продажі?', 'З одного типу повторюваних звернень. На старті потрібно визначити ціль діалогу, дозволені відповіді, дані для менеджера та момент передачі людині.'],
  ['Чи підходить один сценарій для всіх бізнесів?', 'Ні. Навіть однаковий канал потребує різних правил для товарів, послуг і B2B. Тому сценарій узгоджується з реальними діалогами конкретної команди.'],
  ['Коли варто підключати CRM або календар?', 'Після того, як зрозуміло, які дані треба передавати та яка наступна дія потрібна менеджеру. Інтеграція не замінює правила процесу.']
];

export default function SolutionsPage() {
  return <main id="main">
    <JsonLd path="/rishennia" title="AI-рішення для продажів" faq={faq}/>
    <div className="container">
      <PageHeading title="AI-рішення для різних типів продажів" description="AI-продавець допомагає в першому діалозі: відповідає на підтверджені питання, збирає контекст і передає складні ситуації менеджеру. Сценарій залежить від процесу, а не лише від назви ніші."/>
      <section className="solution-hero">
        <div><span className="section-label">Проблема і рішення</span><h2>Менеджери витрачають час на однакові діалоги, а важливий контекст губиться між каналами</h2></div>
        <div className="solution-pilot"><strong>Що робить AI на пілоті</strong><p>Веде узгоджену частину переписки, ставить лише потрібні питання і готує для менеджера наступний крок без обіцянок, яких бізнес не підтвердив.</p></div>
      </section>
      <section className="solution-hub-grid" aria-label="Рішення за типом бізнесу">
        {solutions.map(({ href, title, text, Icon }) => <Link href={href} key={href}><Icon size={29}/><h2>{title}</h2><p>{text}</p><span>Переглянути сценарій →</span></Link>)}
      </section>
      <section className="section two-columns">
        <div><span className="section-label">Як працює сценарій</span><h2>Від першого звернення до підготовленого діалогу</h2></div>
        <div className="difference-copy"><p>Спочатку команда обирає один тип запиту: підбір товару, запис на послугу або первинний B2B-інтерес. Далі фіксує базу знань, питання, які впливають на наступну дію, та ситуації, коли потрібна людина.</p><p>У результаті менеджер отримує не просто новий чат, а потребу клієнта, важливі уточнення та причину передачі. Це приклад сценарію, який можна перевірити до масштабування.</p></div>
      </section>
      <section className="section two-columns evidence-panel">
        <div><span className="section-label">Кому корисно</span><h2>Командам із потоком повторюваних звернень</h2></div>
        <div className="difference-copy"><p>Рішення підходить інтернет-магазинам, сервісним бізнесам і B2B-командам, де клієнти пишуть у месенджери або через сайт, а менеджери регулярно уточнюють схожі речі.</p><p>Якщо кожен діалог одразу потребує вузького експерта або правила продукту суперечливі, спочатку варто впорядкувати інформацію та ролі команди.</p></div>
      </section>
      <section className="section faq-section"><div><span className="section-label">FAQ</span><h2>Питання перед вибором рішення</h2></div><FAQ items={faq}/></section>
      <SeoBlock label="Пов’язаний процес" title="Підготуйте рішення до вимірюваного пілоту" paragraphs={['Для якісного старту важливі не лише відповіді агента, а й критерії ліда, спосіб передачі даних та очікуваний результат для менеджера. На цих сторінках можна зібрати основу сценарію до розмови про підключення.']} links={[
        { href: '/lead-qualification', label: 'AI-кваліфікація лідів', description: 'Визначте дані, які потрібні менеджеру.' },
        { href: '/roi', label: 'ROI AI-продавця', description: 'Сформулюйте гіпотезу та критерії пілоту.' },
        { href: '/integratsii', label: 'Інтеграції AI-агента', description: 'Оберіть канал і перевірте вимоги.' },
        { href: '/tarify', label: 'Тарифи AI-продавця', description: 'Порівняйте формати після вибору сценарію.' },
        { href: '/keisy', label: 'Як вимірюємо кейси', description: 'Які дані фіксуємо до і після пілоту.' },
        { href: '/demo', label: 'Демо AI-агента', description: 'Обговоріть свій сценарій з командою.' }
      ]}/>
    </div>
    <FinalCTA/>
  </main>;
}
