import Link from 'next/link';
import type {Metadata} from 'next';
import {ArrowUpRight,Play,Check} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {ChatMessages} from '@/components/ui/chat-messages';
import {PainSection,FeaturesSection,HowSection,DashboardSection,DifferenceSection,TrustSection,FinalCTA,SalesSystemCTA} from '@/components/sections';
import {DemoAgent,SecurityPromise} from '@/components/activation-tools';
import {Pricing} from '@/components/pricing';
import {FAQ} from '@/components/faq';
import {faq} from '@/lib/content';
import {getMarket} from '@/lib/market';
import {JsonLd} from '@/components/seo';
export const metadata:Metadata={title:'AI-продавець для бізнесу — AI для продажів 24/7',description:'AI-продавець для бізнесу веде переписки, кваліфікує ліди та передає складні діалоги менеджеру. Почніть із безпечного пілоту.',alternates:{canonical:'/'}};
export default async function Home(){const market=await getMarket();return <main id="main"><JsonLd faq={faq}/><section className="hero container"><div className="hero-copy"><div className="eyebrow"><span/> AI-агенти для продажів у переписках</div><h1>AI-продавець для бізнесу,<br/>який відповідає клієнтам 24/7</h1><p>AI-агент для продажів веде переписку, уточнює потребу й передає складні діалоги менеджеру. Починаємо з одного перевіреного сценарію, щоб не обіцяти те, що ще не підключено.</p><div className="actions"><Button asChild><Link href="/start?plan=demo">Податися на пілот <ArrowUpRight size={18}/></Link></Button><Button asChild variant="ghost"><a href="#live-demo"><Play size={16}/> Спробувати demo-діалог</a></Button></div><div className="micro"><Check size={14}/> Без картки. Demo-чат не зберігає введені дані.</div></div><ChatMessages/></section><div className="channel-strip container"><span>Сценарії для каналів</span><strong>Telegram</strong><strong>Instagram</strong><strong>Messenger</strong><strong>WhatsApp</strong><strong>Чат на сайті</strong></div><DemoAgent/><PainSection/><FeaturesSection/><HowSection/><DashboardSection/><SecurityPromise/><DifferenceSection/><TrustSection/><section className="section pricing-section container"><div className="section-intro"><span className="section-label">Тарифи</span><h2>Продавець під ваш масштаб</h2><p>Підбираємо тариф після перевірки каналу, сценарію та обсягу звернень на пілоті.</p></div><Pricing initialMarket={market}/></section><section className="section faq-section container" id="faq"><div><span className="section-label">Відповіді</span><h2>Питання перед першим діалогом</h2><p>Залишилось своє?<br/><a href="https://t.me/tripailo_ads">Напишіть нам у Telegram ↗</a></p></div><FAQ items={faq}/></section><FinalCTA/><SalesSystemCTA/></main>}
