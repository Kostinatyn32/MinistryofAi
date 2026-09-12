'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Check, CircleAlert, LockKeyhole, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { track } from '@/lib/analytics';

type Message = { role: 'agent' | 'visitor'; text: string };

const scenarios = {
  ecommerce: {
    label: 'Інтернет-магазин',
    opening: 'Вітаю! Допоможу підібрати товар і підкажу умови замовлення. Що шукаєте?',
    prompts: ['Потрібен подарунок до 2 000 грн', 'Чи є доставка завтра?', 'Хочу порівняти два варіанти'],
    answer: 'Уточню кілька деталей, щоб не радити навмання: для кого обираєте та коли потрібна доставка? Якщо питання виходить за межі каталогу, передам діалог менеджеру з усім контекстом.',
  },
  services: {
    label: 'Послуги та запис',
    opening: 'Вітаю! Підкажу щодо послуги та допоможу підібрати зручний наступний крок. Яке питання маєте?',
    prompts: ['Хочу записатися на консультацію', 'Скільки це коштує?', 'Чи є вільний час цього тижня?'],
    answer: 'Щоб запропонувати доречний варіант, уточню послугу й бажаний день. Вільні слоти та остаточне підтвердження перевіряються у підключеному календарі; якщо його немає — діалог бере менеджер.',
  },
  b2b: {
    label: 'B2B-кваліфікація',
    opening: 'Вітаю! Допоможу зрозуміти, чи підходить рішення вашій команді. Розкажіть коротко про задачу.',
    prompts: ['Потрібно автоматизувати заявки з трьох каналів', 'Чи інтегруєтесь з CRM?', 'Хочу зрозуміти бюджет'],
    answer: 'Зберу лише потрібний контекст: нішу, канали, обсяг звернень і бажаний результат. Після цього агент передає підготовлений запит менеджеру — без обіцянок інтеграції, яку ще не перевірили.',
  },
} as const;

export function DemoAgent() {
  const [scenario, setScenario] = useState<keyof typeof scenarios>('ecommerce');
  const [messages, setMessages] = useState<Message[]>([{ role: 'agent', text: scenarios.ecommerce.opening }]);
  const active = scenarios[scenario];
  function selectScenario(next: keyof typeof scenarios) {
    setScenario(next);
    setMessages([{ role: 'agent', text: scenarios[next].opening }]);
    track('demo_chat_started', { scenario: next });
  }
  function send(prompt: string) {
    setMessages((current) => [...current, { role: 'visitor', text: prompt }, { role: 'agent', text: active.answer }]);
    track('demo_chat_completed', { scenario });
  }
  return <section id="live-demo" className="section demo-agent-section"><div className="container demo-agent-layout"><div className="demo-agent-copy"><span className="section-label">Інтерактивне демо</span><h2>Перевірте логіку діалогу до дзвінка</h2><p>Це безпечна симуляція: вона не підключена до ваших каналів, не створює ліда й не зберігає написане. Оберіть типовий сценарій та подивіться, як агент уточнює потребу й передає складне питання людині.</p><div className="scenario-tabs" role="tablist" aria-label="Сценарій демонстрації">{(Object.entries(scenarios) as [keyof typeof scenarios, typeof active][]).map(([key, value]) => <button key={key} role="tab" aria-selected={scenario === key} onClick={() => selectScenario(key)}>{value.label}</button>)}</div><a className="text-link" href="/start?plan=demo">Податися на пілот <ArrowRight size={16}/></a></div><div className="live-demo" aria-label="Демонстраційний чат"><div className="live-demo-head"><span><Sparkles size={16}/> Demo-агент</span><small>Сценарій: {active.label}</small></div><div className="live-demo-messages" aria-live="polite">{messages.map((message, index) => <div className={`live-message ${message.role}`} key={`${message.text}-${index}`}>{message.text}</div>)}</div><div className="demo-prompts">{active.prompts.map((prompt) => <button key={prompt} onClick={() => send(prompt)}>{prompt}</button>)}</div><p className="demo-disclaimer"><LockKeyhole size={13}/> Навчальна симуляція. Не надсилайте тут персональні або конфіденційні дані.</p></div></div></section>;
}

function NumberField({ label, value, onChange, suffix }: { label: string; value: number; onChange: (value: number) => void; suffix?: string }) {
  return <label className="tool-field"><span>{label}</span><div><input type="number" min="0" value={value} onChange={(event) => onChange(Math.max(0, Number(event.target.value) || 0))}/>{suffix && <small>{suffix}</small>}</div></label>;
}

export function LossCalculator() {
  const [messages, setMessages] = useState(160);
  const [afterHours, setAfterHours] = useState(45);
  const [replyDelay, setReplyDelay] = useState(180);
  const [leadValue, setLeadValue] = useState(650);
  const result = useMemo(() => Math.round(messages * (afterHours / 100) * Math.min(replyDelay / 600, 0.55) * leadValue), [messages, afterHours, replyDelay, leadValue]);
  return <section className="tool-card" aria-labelledby="loss-title"><div><span className="tool-kicker">Калькулятор</span><h2 id="loss-title">Скільки звернень лишається без відповіді?</h2><p>Орієнтир для розмови про пілот, а не прогноз доходу. Розрахунок не враховує сезонність, якість трафіку й роботу менеджерів.</p></div><div className="tool-fields"><NumberField label="Звернень на місяць" value={messages} onChange={setMessages}/><NumberField label="Частка поза робочим часом" value={afterHours} onChange={setAfterHours} suffix="%"/><NumberField label="Час до відповіді" value={replyDelay} onChange={setReplyDelay} suffix="хв"/><NumberField label="Орієнтовна цінність ліда" value={leadValue} onChange={setLeadValue} suffix="€"/></div><div className="tool-result"><span>Потенційна цінність звернень, які ризикують охолонути</span><strong>≈ €{result.toLocaleString('uk-UA')} / міс.</strong><small>Оцінимо точніше на пілоті — за вашими каналами та реальними даними.</small></div></section>;
}

export function RoiCalculator() {
  const [messages, setMessages] = useState(160);
  const [hours, setHours] = useState(80);
  const [rate, setRate] = useState(8);
  const [conversion, setConversion] = useState(12);
  const [check, setCheck] = useState(240);
  const saved = hours * rate;
  const estimated = Math.round(messages * (conversion / 100) * check * 0.08);
  return <section className="tool-card" aria-labelledby="roi-title"><div><span className="tool-kicker">Калькулятор</span><h2 id="roi-title">Оцініть економіку до запуску</h2><p>Показуємо діапазон для перевірки гіпотези, не обіцяємо конверсію чи окупність.</p></div><div className="tool-fields"><NumberField label="Звернень на місяць" value={messages} onChange={setMessages}/><NumberField label="Годин на переписки / міс." value={hours} onChange={setHours}/><NumberField label="Вартість години менеджера" value={rate} onChange={setRate} suffix="€"/><NumberField label="Конверсія в цільову дію" value={conversion} onChange={setConversion} suffix="%"/><NumberField label="Середній чек" value={check} onChange={setCheck} suffix="€"/></div><div className="tool-result"><span>Часовий ресурс команди</span><strong>до €{saved.toLocaleString('uk-UA')} / міс.</strong><small>Обережний сценарій додаткової цінності: ≈ €{estimated.toLocaleString('uk-UA')} / міс. Це модель для перевірки на пілоті, а не прогноз доходу.</small></div></section>;
}

const readinessItems = ['Є актуальний прайс або опис послуг', 'Є відповіді на типові питання та заперечення', 'Визначено, коли діалог переходить менеджеру', 'Є відповідальний за контроль відповідей', 'Є законна підстава працювати з контактами клієнтів'];
export function ReadinessCheck() {
  const [checked, setChecked] = useState<boolean[]>(Array(readinessItems.length).fill(false));
  const total = checked.filter(Boolean).length;
  const label = total === readinessItems.length ? 'Можна готувати пілот' : total >= 3 ? 'Є база для спільного налаштування' : 'Почніть з мінімальної бази знань';
  return <section className="tool-card readiness-card" aria-labelledby="readiness-title"><div><span className="tool-kicker">Перевірка готовності</span><h2 id="readiness-title">Чи є дані для першого AI-агента?</h2><p>Чекліст не надсилає відповіді та не зберігає їх після закриття сторінки.</p></div><div className="check-grid">{readinessItems.map((item, index) => <label key={item}><input type="checkbox" checked={checked[index]} onChange={(event) => setChecked((current) => current.map((value, itemIndex) => itemIndex === index ? event.target.checked : value))}/><span>{item}</span></label>)}</div><div className="tool-result"><span>{total} з {readinessItems.length} пунктів</span><strong>{label}</strong><small>На пілоті разом визначимо прогалини, межі відповідей і роль менеджера.</small></div></section>;
}

const compatibility = [
  ['Telegram', 'Пілот', 'Перевіримо сценарій, доступи та передачу менеджеру до запуску.'],
  ['Instagram Direct', 'Пілот', 'Потрібна перевірка типу облікового запису та правил Meta.'],
  ['WhatsApp Business', 'За узгодженням', 'Залежить від доступу до Cloud API, шаблонів і політики каналу.'],
  ['Чат-віджет', 'За узгодженням', 'Підбираємо сценарій і спосіб встановлення під ваш сайт.'],
  ['CRM / API', 'Custom', 'Сумісність, обсяг робіт і спосіб передачі даних погоджуємо окремо.'],
] as const;
export function CompatibilityChecker() {
  const [selected, setSelected] = useState(0);
  const [market, setMarket] = useState<'ua' | 'eu'>('ua');
  const [volume, setVolume] = useState(200);
  const [name, status, note] = compatibility[selected];
  return <section className="tool-card compatibility-card" aria-labelledby="compatibility-title"><div><span className="tool-kicker">Перевірка сумісності</span><h2 id="compatibility-title">З чого безпечно почати підключення?</h2><p>Статуси відображають готовність до пілоту, а не автоматичне підключення. Остаточне рішення приймається після перевірки доступів і сценарію.</p></div><div className="compatibility-controls"><label className="tool-field"><span>Канал або система</span><select value={selected} onChange={(event) => setSelected(Number(event.target.value))}>{compatibility.map(([item], index) => <option value={index} key={item}>{item}</option>)}</select></label><label className="tool-field"><span>Ринок</span><select value={market} onChange={(event) => setMarket(event.target.value as 'ua' | 'eu')}><option value="ua">Україна</option><option value="eu">Європа</option></select></label><NumberField label="Звернень на місяць" value={volume} onChange={setVolume}/></div><div className="compatibility-result"><span className={`status-badge ${status === 'Пілот' ? 'pilot' : ''}`}>{status}</span><h3>{name}</h3><p>{note}</p><small>{market === 'eu' ? 'Для Європи додатково узгоджуємо правила даних і повідомлень.' : 'Для України перевіряємо робочий сценарій та відповідального менеджера.'} Орієнтовний обсяг: {volume.toLocaleString('uk-UA')} звернень/міс.</small></div></section>;
}

const onboardingSteps = ['Контекст бізнесу', 'Сценарій відповіді', 'Перевірка діалогу', 'Підключення каналу'];
export function OnboardingPreview() {
  const [step, setStep] = useState(0);
  return <section className="onboarding-preview"><div><span className="section-label">Як виглядає пілот</span><h2>Чотири кроки до тестового діалогу</h2><p>Попередній маршрут показує, що буде на старті. Дані тут не зберігаються, а реальне підключення виконується лише після спільної перевірки.</p></div><div className="onboarding-steps" role="tablist" aria-label="Кроки пілоту">{onboardingSteps.map((item, index) => <button key={item} role="tab" aria-selected={step === index} onClick={() => setStep(index)}><span>0{index + 1}</span>{item}</button>)}</div><div className="onboarding-panel"><div className="onboarding-progress"><span>Крок {step + 1} з {onboardingSteps.length}</span><i style={{ width: `${((step + 1) / onboardingSteps.length) * 100}%` }}/></div><h3>{onboardingSteps[step]}</h3><p>{['Опишіть продукт, канали й типові питання. Не додавайте паролі, ключі чи дані клієнтів у відкриті форми.', 'Разом визначаємо мету агента, тон, межі відповідей та умови передачі менеджеру.', 'Перевіряємо приклади діалогів, фіксуємо неточності й доопрацьовуємо базу знань.', 'Погоджуємо один перевірений канал, доступи, статус інтеграції та план контролю.'][step]}</p><button className="button button-outline" onClick={() => { if (step < onboardingSteps.length - 1) setStep(step + 1); else track('signup_started'); }}>{step < onboardingSteps.length - 1 ? 'Наступний крок' : 'Податися на пілот'}</button></div></section>;
}

export function SecurityPromise() {
  return <section className="security-promise"><ShieldCheck size={26}/><div><strong>Спочатку правила даних, потім підключення.</strong><p>На пілоті погоджуємо канал, доступи, строки зберігання, human handoff і спосіб видалення даних. Не просимо передавати секрети у формах або demo-чатах.</p></div><a href="/bezpeka">Як ми підходимо до безпеки <ArrowRight size={16}/></a></section>;
}
