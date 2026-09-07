import Link from 'next/link';
import type {Metadata} from 'next';
import {ArrowUpRight,Play,Check} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {ChatMessages} from '@/components/ui/chat-messages';
import {PainSection,FeaturesSection,HowSection,DashboardSection,DifferenceSection,TrustSection,FinalCTA,SalesSystemCTA} from '@/components/sections';
import {Pricing} from '@/components/pricing';
import {FAQ} from '@/components/faq';
import {faq} from '@/lib/content';
import {getMarket} from '@/lib/market';
import {JsonLd} from '@/components/seo';
export const metadata:Metadata={alternates:{canonical:'/'}};
export default async function Home(){const market=await getMarket();return <main id="main"><JsonLd faq={faq}/><section className="hero container"><div className="hero-copy"><div className="eyebrow"><span/> AI-агенти для продажів у переписках</div><h1>Ваші клієнти пишуть о 23:40.<br/>Ваш продавець відповідає</h1><p>AI-агент веде переписку в Telegram, Instagram, Facebook і на сайті: відповідає на питання, знімає заперечення, збирає контакт і записує на зустріч. Цілодобово, у всіх каналах одночасно, без вихідних і без «відповімо завтра».</p><div className="actions"><Button asChild><Link href="/start?plan=demo">Спробувати безкоштовно <ArrowUpRight size={18}/></Link></Button><Button asChild variant="ghost"><a href="#how"><Play size={16}/> Подивитись, як це працює</a></Button></div><div className="micro"><Check size={14}/> Без картки. Демо-агент запускається за 15 хвилин.</div></div><ChatMessages/></section><div className="channel-strip container"><span>Там, де ваші клієнти</span><strong>Telegram</strong><strong>Instagram</strong><strong>Messenger</strong><strong>WhatsApp</strong><strong>Чат на сайті</strong></div><PainSection/><FeaturesSection/><HowSection/><DashboardSection/><DifferenceSection/><TrustSection/><section className="section pricing-section container"><div className="section-intro"><span className="section-label">Тарифи</span><h2>Продавець під ваш масштаб</h2></div><Pricing initialMarket={market}/></section><section className="section faq-section container" id="faq"><div><span className="section-label">Відповіді</span><h2>Питання перед першим діалогом</h2><p>Залишилось своє?<br/><a href="https://t.me/tripailo_ads">Напишіть нам у Telegram ↗</a></p></div><FAQ items={faq}/></section><FinalCTA/><SalesSystemCTA/></main>}
