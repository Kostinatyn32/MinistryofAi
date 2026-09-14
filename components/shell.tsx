'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

type NavItem = { label: string; href: string; description: string };
type NavGroup = { label: string; items: NavItem[] };

export const navigation: NavGroup[] = [
  { label: 'Продукт', items: [
    { label: 'AI-продавець', href: '/ai-agent-dlya-prodazhiv', description: 'Первинний діалог і передача менеджеру' },
    { label: 'Можливості', href: '/mozhlyvosti', description: 'Що перевіряємо у сценарії' },
    { label: 'Кваліфікація лідів', href: '/lead-qualification', description: 'Збір контексту до передачі' },
    { label: 'Тарифи', href: '/tarify', description: 'Формати роботи' },
    { label: 'ROI і пілот', href: '/roi', description: 'Як перевірити гіпотезу' }
  ]},
  { label: 'Рішення', items: [
    { label: 'Усі рішення', href: '/rishennia', description: 'Обрати сценарій за типом продажів' },
    { label: 'Інтернет-магазин', href: '/rishennia/ecommerce', description: 'Типові товарні звернення' },
    { label: 'Сфера послуг', href: '/rishennia/poslugy', description: 'Первинна кваліфікація' },
    { label: 'B2B-продажі', href: '/rishennia/b2b', description: 'Контекст для складних запитів' }
  ]},
  { label: 'Інтеграції', items: [
    { label: 'Усі інтеграції', href: '/integratsii', description: 'Статуси та вимоги до пілоту' },
    { label: 'Instagram Direct', href: '/integratsii/instagram', description: 'Перевірка каналу й handoff' },
    { label: 'Telegram', href: '/integratsii/telegram', description: 'Сценарій для бота бізнесу' },
    { label: 'Чат на сайті', href: '/integratsii/site-widget', description: 'Віджет для вхідних звернень' },
    { label: 'CRM', href: '/integratsii/crm', description: 'Передача контексту в процес продажів' }
  ]},
  { label: 'Ресурси', items: [
    { label: 'Блог', href: '/blog', description: 'Практичні матеріали про AI у продажах' },
    { label: 'Інструменти', href: '/resursy', description: 'Калькулятори й чеклісти' },
    { label: 'Автоматизація продажів', href: '/resursy/avtomatyzatsiya-prodazhiv', description: 'Що віддати AI, а що - команді' },
    { label: 'Кейси', href: '/keisy', description: 'Як підходимо до вимірювання результату' },
    { label: 'Безпека', href: '/bezpeka', description: 'Дані, доступи й контрольований запуск' }
  ]}
];

export const links = navigation.flatMap((group) => group.items.map(({ label, href }) => [label, href] as const));

export function Brand() {
  return <Link href="/" className="brand" aria-label="Міністерство з Продажів, головна"><span className="brand-logo-frame"><img src="/logo-white.png" alt="Міністерство з Продажів" className="brand-logo"/></span><span className="brand-product">AI-агенти для продажів</span></Link>;
}

function isGroupActive(path: string, group: NavGroup) {
  return group.items.some((item) => path === item.href || (item.href !== '/' && path.startsWith(`${item.href}/`)));
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return <header className={scrolled ? 'header scrolled' : 'header'}><div className="container header-inner"><Brand/>
    <nav className="desktop-nav" aria-label="Основне меню">{navigation.map((group) => <details className="desktop-nav-group" name="main-navigation" key={group.label}><summary aria-current={isGroupActive(path, group) ? 'page' : undefined}>{group.label}<ChevronDown size={14}/></summary><div className="desktop-nav-panel">{group.items.map((item) => <Link href={item.href} key={item.href}><strong>{item.label}</strong><small>{item.description}</small></Link>)}</div></details>)}</nav>
    <Button asChild className="header-cta"><Link href="/start?plan=demo">Податися на пілот</Link></Button>
    <Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Trigger asChild><button className="menu-toggle" aria-label="Відкрити меню"><Menu/></button></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="overlay"/><Dialog.Content className="mobile-menu"><Dialog.Title>Меню</Dialog.Title><Dialog.Description className="sr-only">Навігація сайтом</Dialog.Description><Dialog.Close className="close-button" aria-label="Закрити меню"><X/></Dialog.Close><Brand/><nav>{navigation.map((group) => <section className="mobile-nav-group" key={group.label}><strong>{group.label}</strong>{group.items.map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}><span>{item.label}</span><small>{item.description}</small></Link>)}</section>)}<Link className="mobile-pilot-link" href="/start?plan=demo" onClick={() => setOpen(false)}>Податися на пілот</Link></nav></Dialog.Content></Dialog.Portal></Dialog.Root>
  </div></header>;
}

const legal = [['Публічна оферта', '/oferta'], ['Політика конфіденційності', '/privacy-policy'], ['Політика cookie', '/cookie-policy'], ['Умови обробки даних', '/dpa'], ['Повернення коштів', '/refund-policy']];
export function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-grid"><div><Brand/><p>Продажі продовжуються.<br/>Навіть коли робочий день закінчився.</p></div><div><h3>Продукт</h3>{navigation[0].items.slice(0, 4).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}<Link href="/demo">Демо</Link></div><div><h3>Компанія</h3><Link href="/kontakty">Контакти</Link><a href="tel:+380939082254">+380 93 908 22 54</a><a href="mailto:info@ministrysale.org">info@ministrysale.org</a><a href="https://t.me/tripailo_ads">Telegram</a></div><div><h3>Правове</h3>{legal.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div></div><section className="partner-resources" aria-labelledby="partner-resources-title"><h3 id="partner-resources-title">Партнерські ресурси</h3><div><a href="https://ministrysale.com/" target="_blank" rel="noopener noreferrer">Міністерство з Продажів <span aria-hidden="true">↗</span></a><a href="https://www.fbd-ua.org/" target="_blank" rel="noopener noreferrer">ГО «Формула Бізнес-Розвитку» <span aria-hidden="true">↗</span></a></div></section><div className="footer-bottom"><span>© {new Date().getFullYear()} Міністерство з Продажів</span><span>ФОП Проценко Марта Олександрівна</span><button onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}>Налаштування cookie</button></div></div></footer>;
}
