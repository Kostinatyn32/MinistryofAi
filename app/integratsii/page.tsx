import Link from 'next/link';
import {Send,Instagram,MessageCircle,Phone,PanelBottom,CalendarDays,Webhook,Code2} from 'lucide-react';
import {PageHeading,FinalCTA} from '@/components/sections';
import {integrationItems} from '@/lib/content';
import {JsonLd} from '@/components/seo';
const icons=[Send,Instagram,MessageCircle,Phone,PanelBottom,CalendarDays,Webhook,Code2];
export const metadata={title:'Канали та інтеграції',description:'Підключіть Telegram, Instagram, Facebook Messenger, WhatsApp, чат на сайті та Google Calendar. Вебхуки й API для ваших робочих процесів.',alternates:{canonical:'/integratsii'}};
export default function Page(){return <main id="main"><JsonLd path="/integratsii" title="Інтеграції"/><div className="container"><PageHeading title="Усі діалоги. Одна система" description="Зустрічайте клієнтів там, де вони вже спілкуються. Агент використовує одну базу знань у всіх підключених каналах."/><div className="integration-grid">{integrationItems.map(([name,desc,kind],i)=>{const Icon=icons[i];return <article key={name}><div className="integration-top"><Icon size={30} strokeWidth={1.4}/><span className="tag">Доступно</span></div><span className="integration-kind">{kind}</span><h2>{name}</h2><p>{desc}</p></article>})}</div><div className="inline-callout"><div><h3>Потрібне підключення до вашої CRM?</h3><p>Перевіримо сумісність і сценарій передачі даних під час демо. Конкретний перелік CRM погоджуємо окремо.</p></div><Link href="/demo" className="button button-outline">Обговорити інтеграцію</Link></div></div><FinalCTA/></main>}
