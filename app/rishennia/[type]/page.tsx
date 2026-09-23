import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, MessageCircleMore, UserRoundCheck } from 'lucide-react';
import { FAQ } from '@/components/faq';
import { FinalCTA, PageHeading } from '@/components/sections';
import { JsonLd } from '@/components/seo';
import { SeoBlock } from '@/components/seo-block';

type Solution = {
  title: string;
  metaTitle: string;
  description: string;
  goal: string;
  audience: string;
  capabilities: string[];
  flow: string[];
  example: string;
  limits: string[];
  faq: string[][];
};

const solutions: Record<string, Solution> = {
  ecommerce: {
    title: 'AI-продавець для інтернет-магазину',
    metaTitle: 'AI для інтернет-магазину',
    description: 'AI-продавець для інтернет-магазину допомагає відповідати на типові питання про товар і підбір, збирати деталі запиту та передавати нестандартні ситуації менеджеру.',
    goal: 'Швидше відповідати на повторювані запити, не вигадуючи наявність, доставку чи знижку без перевірки.',
    audience: 'Інтернет-магазинам із регулярними питаннями про товар, характеристики, варіанти, доставку та наступний крок у замовленні.',
    capabilities: ['Відповідає на підтверджені питання з бази знань про товар і процес.', 'Уточнює параметри, які потрібні для підбору або передачі менеджеру.', 'Маркує нестандартні запити, де потрібна перевірка наявності, оплати чи умов доставки.'],
    flow: ['Клієнт описує товар, задачу або обмеження.', 'Агент уточнює ключові параметри й пропонує лише підтверджений наступний крок.', 'Питання про нестандартну знижку, залишки, оплату або повернення передаються менеджеру з контекстом.'],
    example: 'Наприклад, клієнт шукає товар для конкретного сценарію. Агент може зібрати потрібні параметри та показати погоджені варіанти, а менеджер перевіряє те, що змінюється: наявність, строк або індивідуальні умови.',
    limits: ['Не вигадує залишки, строки доставки чи умови повернення.', 'Не приймає платіжні дані в демо або без погодженого платіжного процесу.'],
    faq: [['Чи може AI підтвердити наявність товару?', 'Лише якщо для цього є окремо перевірене джерело даних і погоджений сценарій. Інакше запит передається менеджеру.'], ['Чи замінює AI менеджера магазину?', 'Ні. AI бере на себе повторювану первинну комунікацію, а винятки, оплата та нестандартні умови залишаються за командою.']]
  },
  poslugy: {
    title: 'AI-агент для послуг і запису',
    metaTitle: 'AI для послуг і запису',
    description: 'AI-агент для послуг допомагає кваліфікувати первинний запит, зібрати потрібний контекст до запису та передати менеджеру діалог із погодженим наступним кроком.',
    goal: 'Не залишати звернення без відповіді та швидше готувати контекст до розмови з командою.',
    audience: 'Сервісним бізнесам, де клієнти запитують про формат послуги, вартість, доступний час або умови співпраці перед записом.',
    capabilities: ['Пояснює підтверджений формат послуги й типові умови.', 'Уточнює потребу, бажаний час і дані, потрібні для наступного кроку.', 'Передає менеджеру нестандартні питання або запити, що потребують експертної оцінки.'],
    flow: ['Клієнт пояснює потребу та бажаний час.', 'Агент уточнює послугу, формат і важливі обмеження.', 'Підтвердження слоту та нестандартні питання передаються людині або погодженому календарю.'],
    example: 'Для первинного запису агент може зібрати послугу, місто або формат, бажаний час і спосіб звʼязку. Менеджер отримує ці дані та підтверджує можливість запису відповідно до реального розкладу.',
    limits: ['Не підтверджує запис без підключеного та перевіреного календаря.', 'Не дає медичних, юридичних чи фінансових порад.'],
    faq: [['Чи може AI самостійно записати клієнта?', 'Лише в сценарії з перевіреним календарем і чіткими правилами слотів. До цього він збирає запит і передає його менеджеру.'], ['Які послуги можна автоматизувати?', 'Ті, де є повторювані первинні питання та узгоджений наступний крок. Складні консультації варто залишати профільному спеціалісту.']]
  },
  b2b: {
    title: 'AI-кваліфікація B2B-лідів',
    metaTitle: 'AI-кваліфікація B2B-лідів',
    description: 'AI-кваліфікація B2B-лідів допомагає зібрати задачу, процес і критерії клієнта, щоб менеджер починав комерційну розмову з підготовленим контекстом.',
    goal: 'Зменшити ручну роботу з первинними питаннями без втрати важливого контексту для комерційної розмови.',
    audience: 'B2B-командам із довшим циклом продажу, де потрібно зрозуміти задачу, процес, масштаби та учасників рішення до першого дзвінка.',
    capabilities: ['Ставить короткі питання про процес, потребу й очікуваний результат.', 'Збирає контекст, з яким менеджер може підготувати предметний наступний крок.', 'Передає людині комерційні умови, технічні інтеграції та винятки.'],
    flow: ['Лід описує бізнес-задачу.', 'Агент уточнює процес, обсяг і бажаний результат без перетворення діалогу на довгу анкету.', 'Менеджер отримує контекст і бере на себе умови, інтеграції та комерційну пропозицію.'],
    example: 'Якщо компанія хоче скоротити час відповіді в кількох каналах, агент може зібрати поточний процес, обсяг звернень і ціль пілоту. Менеджер продовжує розмову з уже зрозумілим контекстом.',
    limits: ['Не обіцяє інтеграцію чи строк без технічної перевірки.', 'Не створює комерційну пропозицію без погоджених даних.'],
    faq: [['Які питання ставить AI B2B-ліду?', 'Лише ті, що впливають на наступний крок: задача, процес, обсяг, канал або залучені учасники. Перелік погоджується з командою.'], ['Чи підходить сценарій для складних продажів?', 'Так, якщо AI відповідає за первинний контекст, а переговори, умови та експертні винятки залишаються менеджеру.']]
  }
};

export function generateStaticParams() { return Object.keys(solutions).map((type) => ({ type })); }

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const item = solutions[type];
  return item ? { title: item.metaTitle, description: item.description, alternates: { canonical: `/rishennia/${type}` } } : { title: 'Рішення не знайдено' };
}

export default async function SolutionPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const item = solutions[type];
  if (!item) notFound();

  return <main id="main">
    <JsonLd path={`/rishennia/${type}`} title={item.title} faq={item.faq}/>
    <div className="container">
      <PageHeading title={item.title} description={item.description}/>
      <section className="solution-hero"><div><span className="section-label">Проблема клієнта</span><h2>{item.goal}</h2></div><div className="solution-pilot"><MessageCircleMore size={26}/><strong>Кому підходить сценарій</strong><p>{item.audience}</p></div></section>
      <section className="section two-columns"><div><span className="section-label">Функціональність</span><h2>Що AI бере на себе в першому діалозі</h2></div><ul className="check-list">{item.capabilities.map((capability) => <li key={capability}><Check size={18}/>{capability}</li>)}</ul></section>
      <section className="section two-columns"><div><span className="section-label">Сценарій пілоту</span><h2>Як перевіряємо цінність</h2></div><ol className="numbered-list">{item.flow.map((step) => <li key={step}>{step}</li>)}</ol></section>
      <section className="section evidence-panel"><span className="section-label">Приклад</span><h2>Як це виглядає у робочому процесі</h2><p className="difference-copy">{item.example}</p></section>
      <section className="limits-panel"><UserRoundCheck size={25}/><div><h2>Межі, які не обходять</h2><ul className="check-list">{item.limits.map((limit) => <li key={limit}><Check size={18}/>{limit}</li>)}</ul></div></section>
      <section className="section faq-section"><div><span className="section-label">FAQ</span><h2>Питання про цей сценарій</h2></div><FAQ items={item.faq}/></section>
      <SeoBlock label="Наступний крок" title="Підготуйте сценарій до запуску" paragraphs={['Оберіть канал, визначте критерії першого діалогу та зафіксуйте дані, які має отримати менеджер. Це дає основу для безпечного й вимірюваного пілоту.']} links={[
        { href: '/lead-qualification', label: 'AI-кваліфікація лідів', description: 'Визначте питання та контекст для менеджера.' },
        { href: '/integratsii', label: 'Інтеграції AI-агента', description: 'Оберіть канал для першого пілоту.' },
        { href: '/roi', label: 'ROI AI-продавця', description: 'Сформулюйте гіпотезу та критерії успіху.' },
        { href: '/keisy', label: 'Вимірювання кейсів', description: 'Подивіться, що фіксуємо в пілоті.' },
        { href: '/tarify', label: 'Тарифи', description: 'Порівняйте формати роботи.' },
        { href: '/demo', label: 'Демо AI-агента', description: 'Обговоріть сценарій для свого бізнесу.' }
      ]}/>
      <div className="solution-links"><Link href="/rishennia/ecommerce">AI для інтернет-магазину</Link><Link href="/rishennia/poslugy">AI для послуг</Link><Link href="/rishennia/b2b">AI для B2B</Link></div>
    </div>
    <FinalCTA/>
  </main>;
}
