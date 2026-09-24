import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  CalendarDays,
  ChartNoAxesCombined,
  Database,
  Instagram,
  LayoutDashboard,
  MessageCircle,
  MessageSquare,
  Tag,
  UserRoundCheck,
  Workflow,
} from 'lucide-react';
import { dashboard, differences, features, pains, steps } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { SeoBlock } from '@/components/seo-block';
import { NumberTicker } from '@/components/ui/number-ticker';
import { AgentProcessFlow, MethodologyVisual, PainSituationIcon } from '@/components/product-visuals';

const featureIcons = [MessageCircle, BookOpen, Workflow, UserRoundCheck, CalendarDays, ChartNoAxesCombined];
const painContexts = ['Після робочого дня', 'У кількох месенджерах', 'На повторних питаннях', 'Без обліку звернень'];

export function PainSection() {
  return <section className="section container">
    <div className="section-intro"><span className="section-label">Знайомі ситуації</span><h2>Скільки клієнтів ви втратили, поки писали цей рядок</h2></div>
    <div className="pain-grid">{pains.map((pain, index) => <article key={pain}><PainSituationIcon index={index}/><p>{pain}</p><span className="pain-context">{painContexts[index]}</span></article>)}</div>
    <p className="closing-line">Кожен непрочитаний діалог це гроші, які пішли до конкурента. AI-агент закриває цей розрив за секунди.</p>
  </section>;
}

export function FeaturesSection() {
  return <section className="section feature-section"><div className="container">
    <div className="section-intro"><span className="section-label">Що робить агент</span><h2>Не автовідповідач. Продавець</h2><p>Агент веде діалог, а не віддає готові відповіді зі списку.</p></div>
    <div className="bento-grid">{features.map(([title, body], index) => { const Icon = featureIcons[index]; return <article className={`feature-card feature-${index}`} key={title}>
      <Icon size={27} strokeWidth={1.5}/><h3>{title}</h3><p>{body}</p>{index === 0 && <AgentProcessFlow/>}
    </article>; })}</div>
    <div className="center-link"><Link href="/mozhlyvosti">Усі можливості агента ↗</Link></div>
  </div></section>;
}

export function HowSection() {
  return <section id="how" className="section container">
    <div className="section-intro"><span className="section-label">Запуск</span><h2>Від «нічого немає» до першого діалогу за один вечір</h2></div>
    <ol className="steps-grid">{steps.map(([title, body], index) => <li key={title}>
      <span className="step-number">0{index + 1}</span><span className="step-icon"><Workflow size={17}/></span><h3>{title}</h3><p>{body}</p>
    </li>)}</ol>
    <p className="closing-line">Базове налаштування займає від 15 хвилин. Глибока база знань, кілька сценаріїв і інтеграції: до одного робочого дня.</p>
  </section>;
}

function WorkspaceDashboard() {
  const navigation = [
    { label: 'Огляд', Icon: LayoutDashboard }, { label: 'Діалоги', Icon: MessageSquare },
    { label: 'Ліди', Icon: Database }, { label: 'Знання', Icon: BookOpen }, { label: 'Теги', Icon: Tag },
  ];
  const conversations = [
    ['Підбір рішення для команди', 'Instagram', 'Кваліфіковано'],
    ['Питання про послугу', 'Telegram', 'Новий'],
    ['Запит на консультацію', 'Сайт', 'Менеджер'],
  ];
  return <div className="workspace-preview">
    <aside className="workspace-sidebar" aria-label="Розділи демонстраційного інтерфейсу">
      <span className="dashboard-brand">мп</span>{navigation.map(({ label, Icon }) => <span className="workspace-nav-item" key={label}><Icon size={17}/><small>{label}</small></span>)}
    </aside>
    <div className="workspace-main">
      <div className="workspace-topbar"><div><span className="section-label">Робочий простір</span><strong>Огляд діалогів</strong></div><span className="status-pill status-demo">Демонстраційний інтерфейс</span></div>
      <div className="workspace-kpis">{[['Нові ліди', '12', 'демо'], ['Активні діалоги', '08', 'демо'], ['Передано менеджеру', '03', 'демо']].map(([label, value, note]) => <div className="workspace-kpi" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></div>)}</div>
      <div className="workspace-columns">
        <section className="workspace-inbox"><div className="workspace-panel-title"><strong>Вхідні звернення</strong><span>3 приклади</span></div>
          {conversations.map(([subject, channel, status]) => <div className="workspace-inbox-row" key={channel}>
            <span className="workspace-channel-mark"><MessageCircle size={15}/></span><span><strong>{subject}</strong><small>{channel} · приклад діалогу</small></span><em>{status}</em>
          </div>)}
        </section>
        <section className="workspace-conversation"><div className="workspace-panel-title"><strong>Діалог</strong><span className="product-channel-badge"><Instagram size={13}/> Instagram</span></div>
          <div className="workspace-message workspace-message-user">Потрібно швидше обробляти звернення з реклами.</div>
          <div className="workspace-message workspace-message-agent">Підкажіть, будь ласка, скільки звернень команда отримує на місяць?</div>
          <div className="workspace-message workspace-message-user">Приблизно 300. Зараз усім відповідаємо вручну.</div>
          <div className="workspace-message workspace-message-agent">Зрозумів. Підготую контекст для наступного кроку.</div>
        </section>
        <aside className="workspace-lead"><div className="workspace-panel-title"><strong>Контекст ліда</strong><span className="status-pill status-qualified"><i/> Кваліфіковано</span></div>
          <dl><div><dt>Потреба</dt><dd>Автоматизація першої відповіді</dd></div><div><dt>Обсяг</dt><dd>Близько 300 звернень</dd></div><div><dt>Наступна дія</dt><dd>Передати менеджеру</dd></div></dl>
          <div className="workspace-handoff"><UserRoundCheck size={15}/> Контекст підготовлено менеджеру</div>
        </aside>
      </div>
      <div className="workspace-analytics"><span><ChartNoAxesCombined size={17}/> Аналітика за каналами</span><div className="analytics-bars" aria-label="Демонстраційна гістограма">{Array.from({ length: 12 }, (_, index) => <i key={index}/>)}</div><small>Демо-візуалізація без фактичних даних</small></div>
      <p className="preview-caption">Назви, статуси й обсяги в макеті наведені виключно для демонстрації інтерфейсу.</p>
    </div>
  </div>;
}

export function DashboardSection() {
  return <section className="section dashboard-section"><div className="container">
    <div className="section-intro"><span className="section-label">Робочий простір</span><h2>Видно, що відбувається в діалогах і куди рухається лід</h2><p>Макет показує, як команда може бачити канали, контекст і наступну дію в одному робочому просторі.</p></div>
    <WorkspaceDashboard/>
    <div className="dashboard-features">{dashboard.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
  </div></section>;
}

export function DifferenceSection() {
  return <section className="section difference-section"><div className="container">
    <div className="two-columns"><div><span className="section-label">Експертиза за технологією</span><h2>Різниця між ботом і продавцем - у методології</h2></div><div className="difference-copy">
      <p>Агента можна купити де завгодно. Питання в тому, чи вміє він продавати.</p>
      <p>Ми будуємо відділи продажів з 2023 року: 130+ проєктів, 30+ ніш, 3 600+ годин консалтингу. Ті самі скрипти, та сама робота із запереченнями і та сама логіка кваліфікації, які ми ставимо живим менеджерам, лягають в основу агента.</p>
      <p>Тому агент не просто відповідає. Він кваліфікує, веде до наступного кроку і передає менеджеру рівно тоді, коли це потрібно.</p>
    </div></div>
    <MethodologyVisual/>
    <div className="difference-grid">{differences.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
    <Button asChild variant="outline"><a href="https://ministrysale.com/ai-agent">Дізнатись про повний супровід <ArrowUpRight size={18}/></a></Button>
  </div></section>;
}

export function TrustSection() {
  const stats = [{ value: 130, suffix: '+', label: 'реалізованих проєктів' }, { value: 30, suffix: '+', label: 'ніш' }, { value: 3600, suffix: '+', label: 'годин консалтингу' }, { value: 2023, suffix: '', label: 'рік реєстрації торгової марки' }];
  return <section className="section trust-section container"><div className="trust-grid">{stats.map(({ value, suffix, label }, index) => <div key={label}><strong><NumberTicker value={value} delay={index * .08}/>{suffix}</strong><span>{label}</span></div>)}</div><p>Компанія «Міністерство з Продажів». Будуємо системні відділи продажів для українського і європейського МСБ.</p></section>;
}

export function FinalCTA() {
  return <section className="section container final-cta"><span className="section-label">Ваш наступний крок</span><h2>Перестаньте втрачати клієнтів у ночі та вихідні</h2><p>Почніть із короткого пілоту: перевіримо один сценарій, роль менеджера та готовність каналу до запуску.</p><div className="actions"><Button asChild><Link href="/start?plan=demo">Податися на пілот <ArrowUpRight size={18}/></Link></Button><Button asChild variant="outline"><Link href="/demo">Обговорити demo, 15 хвилин</Link></Button></div></section>;
}

export function SalesSystemCTA() {
  return <><section className="section container sales-system-cta"><span className="section-label">Повна система продажів</span><h2>Потрібно більше, ніж AI-продавець у переписці?</h2><p>«Міністерство з Продажів» допомагає побудувати весь відділ продажів: CRM, скрипти, KPI, навчання менеджерів і контроль якості.</p><Button asChild variant="outline"><a href="https://ministrysale.com" target="_blank" rel="noopener noreferrer">Перейти на сайт Міністерства з Продажів <ArrowUpRight size={18}/></a></Button></section>
    <div className="container"><SeoBlock label="AI для продажів" title="AI-продавець для бізнесу: з чого почати" paragraphs={[
      'AI-продавець допомагає обробляти повторювані звернення у месенджерах та на сайті. Щоб він був корисним, на старті потрібні чіткі правила: про що агент може відповідати, що передає менеджеру та який результат вважати цільовим.',
      'На цьому сайті зібрані окремі сторінки для вибору сценарію, каналу та формату пілоту. Так ви можете перейти від загальної ідеї AI для продажів до перевірки конкретного процесу.',
    ]} links={[
      { href: '/ai-agent-dlya-prodazhiv', label: 'AI-агент для продажів', description: 'Як агент веде діалог і передає менеджеру.' },
      { href: '/integratsii', label: 'Канали та інтеграції', description: 'Статуси Telegram, Instagram, CRM і календаря.' },
      { href: '/rishennia/ecommerce', label: 'Рішення для бізнесу', description: 'Сценарії для e-commerce, послуг і B2B.' },
      { href: '/resursy', label: 'Калькулятори та чеклісти', description: 'Оцініть втрати, ROI і готовність до пілоту.' },
      { href: '/tarify', label: 'Тарифи AI-продавця', description: 'Порівняйте формати перед обговоренням пілоту.' },
      { href: '/bezpeka', label: 'Безпека та дані', description: 'Що погоджуємо перед підключенням.' },
    ]}/></div></>;
}

function headingLinks(title: string) {
  const lower = title.toLowerCase();
  if (lower.includes('інтеграц') || lower.includes('telegram') || lower.includes('instagram') || lower.includes('whatsapp') || lower.includes('calendar') || lower.includes('crm')) return [{ href: '/ai-agent-dlya-prodazhiv', label: 'AI-агент для продажів' }, { href: '/bezpeka', label: 'Безпека та дані' }, { href: '/resursy', label: 'Перевірити сумісність' }];
  if (lower.includes('тариф') || lower.includes('демо')) return [{ href: '/ai-agent-dlya-prodazhiv', label: 'Як працює AI-агент' }, { href: '/resursy', label: 'Калькулятор ROI' }, { href: '/integratsii', label: 'Статуси інтеграцій' }];
  if (lower.includes('безпек')) return [{ href: '/ai-agent-dlya-prodazhiv', label: 'AI-агент для продажів' }, { href: '/integratsii', label: 'Статуси інтеграцій' }, { href: '/dpa', label: 'Умови обробки даних' }];
  if (lower.includes('кейс') || lower.includes('результат')) return [{ href: '/resursy', label: 'Оцінити економіку' }, { href: '/ai-agent-dlya-prodazhiv', label: 'Як працює агент' }, { href: '/start?plan=demo', label: 'Податися на пілот' }];
  if (lower.includes('контакт')) return [{ href: '/ai-agent-dlya-prodazhiv', label: 'AI-агент для продажів' }, { href: '/demo', label: 'Демо AI-продавця' }, { href: '/tarify', label: 'Тарифи' }];
  if (lower.includes('рішенн') || lower.includes('інтернет-магазин') || lower.includes('послуг') || lower.includes('b2b')) return [{ href: '/ai-agent-dlya-prodazhiv', label: 'AI-агент для продажів' }, { href: '/integratsii', label: 'Канали та інтеграції' }, { href: '/resursy', label: 'Підготувати пілот' }];
  return [{ href: '/ai-agent-dlya-prodazhiv', label: 'AI-агент для продажів' }, { href: '/integratsii', label: 'Канали та інтеграції' }, { href: '/resursy', label: 'Інструменти для пілоту' }];
}

export function PageHeading({ title, description }: { title: string; description: string }) {
  const links = headingLinks(title);
  return <div className="page-heading"><nav aria-label="Хлібні крихти" className="breadcrumbs"><Link href="/">Головна</Link><span>/</span><span aria-current="page">{title}</span></nav><h1>{title}</h1><p>{description}</p><nav className="seo-inline-links" aria-label="Пов’язані сторінки">{links.map((link) => <Link href={link.href} key={link.href}>{link.label} <span aria-hidden="true">→</span></Link>)}</nav></div>;
}
