import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Bot,
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardCheck,
  CircleCheck,
  CircleStop,
  Database,
  Globe2,
  Instagram,
  MessageCircle,
  MessageSquareText,
  Moon,
  Repeat2,
  Send,
  ShieldCheck,
  UserRound,
  UserRoundCheck,
  Workflow,
} from 'lucide-react';

const channels = [
  { label: 'Telegram', Icon: Send },
  { label: 'Instagram', Icon: Instagram },
  { label: 'Сайт', Icon: Globe2 },
];

export function ChannelBadges() {
  return <div className="product-channel-badges" aria-label="Канали звернень">
    {channels.map(({ label, Icon }) => <span className="product-channel-badge" key={label}>
      <Icon size={14} strokeWidth={1.7}/>{label}
    </span>)}
  </div>;
}

export function HeroSalesFlow() {
  return <section className="hero-sales-flow" aria-label="Як проходить звернення клієнта">
    <div className="visual-heading"><span><Workflow size={15}/> Маршрут звернення</span><small>Приклад процесу</small></div>
    <ChannelBadges/>
    <div className="hero-flow-connector" aria-hidden="true"><ArrowDown size={15}/></div>
    <div className="hero-flow-agent"><span className="visual-icon"><Bot size={19}/></span><span><strong>AI-продавець</strong><small>Веде діалог за правилами бізнесу</small></span><span className="status-pill status-active"><i/> Активний</span></div>
    <div className="hero-flow-connector" aria-hidden="true"><ArrowDown size={15}/></div>
    <div className="hero-flow-outcomes">
      <span><BadgeCheck size={15}/> Кваліфікація</span><ArrowRight size={14} aria-hidden="true"/><span><Database size={15}/> CRM</span><span><CalendarDays size={15}/> Зустріч</span><span><UserRoundCheck size={15}/> Менеджер</span>
    </div>
  </section>;
}

export function AgentProcessFlow() {
  const stages = [
    { label: 'Запит клієнта', Icon: MessageSquareText },
    { label: 'Уточнення', Icon: MessageCircle },
    { label: 'Кваліфікація', Icon: BadgeCheck },
  ];
  return <div className="agent-process-flow" aria-label="Процес роботи агента">
    {stages.map(({ label, Icon }, index) => <div className="process-stage" key={label}><span><Icon size={16}/>{label}</span>{index < stages.length - 1 && <ArrowRight size={15} aria-hidden="true"/>}</div>)}
    <ArrowRight className="process-branch-arrow" size={15} aria-hidden="true"/>
    <div className="process-outcomes"><span><Bot size={15}/> Продовжити діалог</span><span><CalendarDays size={15}/> Запланувати зустріч</span><span><UserRoundCheck size={15}/> Передати менеджеру</span></div>
  </div>;
}

export function MethodologyVisual() {
  const items = [
    { label: 'Скрипти', Icon: MessageSquareText },
    { label: 'Кваліфікація', Icon: BadgeCheck },
    { label: 'Заперечення', Icon: MessageCircle },
    { label: 'Контроль якості', Icon: ShieldCheck },
    { label: 'Аналітика', Icon: ChartNoAxesCombined },
  ];
  return <div className="methodology-visual" aria-label="Компоненти методології продажів">
    <div className="methodology-core"><Bot size={22}/><strong>AI-продавець</strong></div>
    {items.map(({ label, Icon }, index) => <div className={`methodology-item methodology-item-${index + 1}`} key={label}><Icon size={16}/><span>{label}</span></div>)}
  </div>;
}

export function PainSituationIcon({ index }: { index: number }) {
  const Icon = [Moon, MessageCircle, Repeat2, ChartNoAxesCombined][index] || MessageCircle;
  return <span className="pain-icon" aria-hidden="true"><Icon size={21} strokeWidth={1.55}/></span>;
}

const securitySteps = [
  { label: 'Клієнт', Icon: UserRound },
  { label: 'AI за правилами', Icon: Bot },
  { label: 'Погоджений контекст', Icon: ClipboardCheck },
  { label: 'CRM або менеджер', Icon: UserRoundCheck },
];

export function SecurityDataFlow() {
  return <section className="security-data-flow" aria-label="Потік даних у контрольованому сценарії">
    <div className="visual-heading"><span><ShieldCheck size={15}/> Межі передавання даних</span><small>Доступ і поля погоджуються до пілоту</small></div>
    <div className="security-flow-nodes">{securitySteps.map(({ label, Icon }, index) => <div className="security-flow-part" key={label}><span className="security-flow-node"><Icon size={17}/><strong>{label}</strong></span>{index < securitySteps.length - 1 && <ArrowRight className="security-flow-arrow" size={16} aria-hidden="true"/>}</div>)}</div>
    <div className="security-never-share"><strong><CircleStop size={15}/> Не передавати в демо та неперевірені сценарії</strong><span>Паролі</span><span>API-ключі</span><span>Секретні файли</span></div>
  </section>;
}

const roiStages = ['Процес', 'Baseline', 'Пілот', 'Вимірювання', 'Рішення'];

export function RoiMeasurementFlow() {
  return <section className="measurement-flow" aria-label="Кроки оцінки результату пілоту">
    <div className="visual-heading"><span><ChartNoAxesCombined size={15}/> Вимірювання до масштабування</span><small>Без гарантії фінансового результату</small></div>
    <ol>{roiStages.map((stage, index) => <li key={stage}><span>{String(index + 1).padStart(2, '0')}</span><strong>{stage}</strong>{index < roiStages.length - 1 && <ArrowRight size={15} aria-hidden="true"/>}</li>)}</ol>
    <p>До пілоту узгодьте вихідні дані, критерій якості й умову наступного рішення.</p>
  </section>;
}

const caseStages = [
  { label: 'Контекст', Icon: MessageSquareText },
  { label: 'Baseline', Icon: ChartNoAxesCombined },
  { label: 'Пілот', Icon: Workflow },
  { label: 'Вимірювання', Icon: ClipboardCheck },
  { label: 'Обмеження', Icon: ShieldCheck },
  { label: 'Висновок', Icon: CircleCheck },
];

export function CaseEvidenceFlow() {
  return <section className="case-evidence-flow" aria-label="Структура доказового кейсу">
    <div className="visual-heading"><span><ClipboardCheck size={15}/> Структура доказового кейсу</span><small>Кожен висновок спирається на вимірювання</small></div>
    <ol>{caseStages.map(({ label, Icon }, index) => <li key={label}><span><Icon size={16}/></span><strong>{label}</strong>{index < caseStages.length - 1 && <ArrowRight size={13} aria-hidden="true"/>}</li>)}</ol>
  </section>;
}

const solutionFlows = {
  ecommerce: {
    label: 'Приклад шляху товарного запиту',
    stages: ['Запит про товар', 'Уточнення параметрів', 'База знань', 'Підбір рішення'],
    outcomes: ['Типовий запит - відповідь AI', 'Наявність або умови - менеджер'],
  },
  poslugy: {
    label: 'Приклад шляху запиту на послугу',
    stages: ['Запит', 'Послуга', 'Формат і час', 'Контекст до запису'],
    outcomes: ['Підтверджений сценарій - наступний крок', 'Потрібна експертна оцінка - менеджер'],
  },
  b2b: {
    label: 'Приклад шляху B2B-запиту',
    stages: ['Задача компанії', 'Поточний процес', 'Обсяг і мета', 'Картка ліда'],
    outcomes: ['Контекст зібрано - передати команді', 'Умови та інтеграції - менеджер'],
  },
} as const;

export type SolutionKind = keyof typeof solutionFlows;

export function SolutionScenarioFlow({ kind }: { kind: SolutionKind }) {
  const flow = solutionFlows[kind];
  return <section className="solution-scenario-flow" aria-label={flow.label}>
    <div className="visual-heading"><span><Workflow size={15}/> {flow.label}</span><small>Демонстраційна схема</small></div>
    <ol>{flow.stages.map((label, index) => <li key={label}><span>{String(index + 1).padStart(2, '0')}</span><strong>{label}</strong>{index < flow.stages.length - 1 && <ArrowRight size={15} aria-hidden="true"/>}</li>)}</ol>
    <div className="solution-scenario-outcomes">{flow.outcomes.map((label, index) => <span className={index === 1 ? 'handoff' : ''} key={label}>{index === 1 ? <UserRoundCheck size={15}/> : <CircleCheck size={15}/>} {label}</span>)}</div>
  </section>;
}

export function EditorialCover({ topic, label, className = '' }: { topic: 'qualification' | 'messengers'; label: string; className?: string }) {
  const steps = topic === 'qualification'
    ? [{ label: 'Діалог', Icon: MessageSquareText }, { label: 'Кваліфікація', Icon: BadgeCheck }, { label: 'Контекст ліда', Icon: ClipboardCheck }]
    : [{ label: 'Telegram', Icon: Send }, { label: 'Instagram', Icon: Instagram }, { label: 'Сайт', Icon: Globe2 }];
  return <div className={'editorial-cover editorial-cover-' + topic + (className ? ' ' + className : '')} role="img" aria-label={label}>
    <div className="editorial-cover-frame"><div className="editorial-cover-top"><span className="editorial-cover-mark">мп</span><span>ПРАКТИКА ПРОДАЖІВ · AI</span></div>
      <div className="editorial-cover-flow">{steps.map(({ label: nodeLabel, Icon }, index) => <span className="editorial-cover-node" key={nodeLabel}><Icon size={17}/><strong>{nodeLabel}</strong>{index < steps.length - 1 && <ArrowRight size={14} className="editorial-cover-arrow"/>}</span>)}</div>
      <span className="editorial-cover-caption">ДЕМОНСТРАЦІЙНА СХЕМА</span>
    </div>
  </div>;
}

const integrationNodes = [
  { label: 'Telegram', Icon: Send, status: 'Пілот' },
  { label: 'Instagram', Icon: Instagram, status: 'Пілот' },
  { label: 'WhatsApp', Icon: MessageCircle, status: 'Перевірка' },
  { label: 'Чат на сайті', Icon: Globe2, status: 'Узгодження' },
];

const handoffNodes = [
  { label: 'CRM', Icon: Database, status: 'За сумісністю' },
  { label: 'Календар', Icon: CalendarDays, status: 'За погодженням' },
  { label: 'Менеджер', Icon: UserRoundCheck, status: 'Передача контексту' },
];

export function IntegrationMap() {
  return <section className="integration-map" aria-label="Схема напрямків інтеграції">
    <div className="visual-heading"><span><Workflow size={15}/> Маршрут даних</span><small>Сумісність погоджується для кожного пілоту</small></div>
    <div className="integration-map-grid">
      <div className="integration-map-group"><span className="map-group-label">Канали клієнта</span>{integrationNodes.map(({ label, Icon, status }) => <div className="map-node" key={label}><Icon size={17}/><strong>{label}</strong><small>{status}</small></div>)}</div>
      <div className="map-connector" aria-hidden="true"><i/><ArrowRight size={17}/></div>
      <div className="map-agent-node"><span className="visual-icon"><Bot size={23}/></span><strong>AI-продавець</strong><small>Діалог · контекст · правила</small><span className="status-pill status-active"><i/> Центральний сценарій</span></div>
      <div className="map-connector map-connector-out" aria-hidden="true"><i/><ArrowRight size={17}/></div>
      <div className="integration-map-group integration-map-outputs"><span className="map-group-label">Наступна дія</span>{handoffNodes.map(({ label, Icon, status }) => <div className="map-node" key={label}><Icon size={17}/><strong>{label}</strong><small>{status}</small></div>)}</div>
    </div>
    <p className="visual-disclaimer">Схема демонструє можливі зв’язки. Доступність каналу та обсяг автоматизації підтверджуються перед запуском.</p>
  </section>;
}

const qualificationSteps = [
  { label: 'Нове звернення', Icon: MessageSquareText },
  { label: 'Уточнення потреби', Icon: MessageCircle },
  { label: 'Збір контексту', Icon: ChartNoAxesCombined },
  { label: 'Перевірка критеріїв', Icon: CircleCheck },
];

export function QualificationFlow() {
  return <section className="qualification-visual" aria-label="Етапи кваліфікації звернення">
    <div className="visual-heading"><span><Workflow size={15}/> Кваліфікація звернення</span><small>Приклад логіки, налаштовується під бізнес</small></div>
    <div className="qualification-layout">
      <div className="qualification-process">
        <ol className="qualification-steps">{qualificationSteps.map(({ label, Icon }, index) => <li key={label}><span className="qualification-step-icon"><Icon size={17}/></span><span><small>Крок 0{index + 1}</small><strong>{label}</strong></span>{index < qualificationSteps.length - 1 && <ArrowDown className="qualification-step-arrow" size={15} aria-hidden="true"/>}</li>)}</ol>
        <div className="qualification-split" aria-hidden="true"><i/><span>Наступний крок</span><i/></div>
        <div className="qualification-outcomes"><div><Bot size={17}/><span><strong>Продовжити діалог</strong><small>Якщо вистачає контексту</small></span></div><div><UserRoundCheck size={17}/><span><strong>Передати менеджеру</strong><small>Якщо потрібне рішення людини</small></span></div></div>
      </div>
      <aside className="lead-summary-card"><div className="lead-summary-head"><span><UserRound size={16}/> Картка звернення</span><span className="status-pill status-qualified"><i/> Кваліфіковано</span></div><dl><div><dt>Канал</dt><dd>Instagram</dd></div><div><dt>Потреба</dt><dd>Автоматизувати первинний діалог</dd></div><div><dt>Обсяг</dt><dd>Близько 300 звернень / місяць</dd></div><div><dt>Наступна дія</dt><dd>Передати менеджеру</dd></div></dl><p><ShieldCheck size={14}/> Демонстраційний приклад - не результат клієнта</p></aside>
    </div>
  </section>;
}

const capabilities = [
  { label: 'Діалог', Icon: MessageCircle },
  { label: 'База знань', Icon: Database },
  { label: 'Кваліфікація', Icon: BadgeCheck },
  { label: 'Аналітика', Icon: ChartNoAxesCombined },
  { label: 'Follow-up', Icon: CalendarDays },
  { label: 'Інтеграції', Icon: Workflow },
];

export function CapabilityMap() {
  return <section className="capability-map" aria-label="Карта можливостей AI-продавця">
    <div className="capability-map-core"><Bot size={24}/><strong>AI Sales Agent</strong><small>Працює в межах погодженого сценарію</small></div>
    <div className="capability-map-items">{capabilities.map(({ label, Icon }) => <div className="capability-map-item" key={label}><Icon size={17}/><span>{label}</span></div>)}</div>
  </section>;
}
