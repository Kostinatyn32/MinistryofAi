import Link from 'next/link';
import type {Metadata} from 'next';
import {ArrowUpRight,Play} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {ChatMessages} from '@/components/ui/chat-messages';
import {PainSection,FeaturesSection,HowSection,DashboardSection,DifferenceSection,TrustSection,FinalCTA,SalesSystemCTA} from '@/components/sections';
import {DemoAgent,SecurityPromise} from '@/components/activation-tools';
import {Pricing} from '@/components/pricing';
import {FAQ} from '@/components/faq';
import {faq} from '@/lib/content';
import {getMarket} from '@/lib/market';
import {JsonLd} from '@/components/seo';
export const metadata:Metadata={title:'AI-продавець для бізнесу 24/7',description:'AI-продавець для бізнесу відповідає клієнтам 24/7, кваліфікує звернення та передає менеджеру готовий контекст. Запишіться на консультацію.',alternates:{canonical:'/'}};
export default async function Home(){
  const market=await getMarket();
  return <main id="main">
    <JsonLd faq={faq}/>
    <section className="hero container">
      <div className="hero-copy">
        <h1>AI-продавець для бізнесу: відповідає клієнтам 24/7</h1>
        <p>Веде діалог у месенджерах, уточнює потребу й передає менеджеру готовий контекст.</p>
        <div className="actions hero-actions">
          <Button asChild><Link href="/demo">Записатися на консультацію <ArrowUpRight size={18}/></Link></Button>
          <Button asChild variant="ghost"><a href="#live-demo"><Play size={16}/> Переглянути демо</a></Button>
        </div>
        <p className="hero-reassurance">15 хвилин · без зобов’язань</p>
      </div>
      <div className="hero-product"><ChatMessages/></div>
    </section>
    <div className="channel-strip container"><span>Працює зі сценаріями для каналів</span><strong>Telegram</strong><strong>Instagram</strong><strong>Messenger</strong><strong>WhatsApp</strong><strong>Чат на сайті</strong></div>
    <DemoAgent/><PainSection/><FeaturesSection/><HowSection/><DashboardSection/><SecurityPromise/><DifferenceSection/><TrustSection/>
    <section className="section pricing-section container"><div className="section-intro"><span className="section-label">Тарифи</span><h2>Продавець під ваш масштаб</h2><p>Підбираємо тариф після перевірки каналу, сценарію та обсягу звернень на пілоті.</p></div><Pricing initialMarket={market}/></section>
    <section className="section faq-section container" id="faq"><div><span className="section-label">Відповіді</span><h2>Питання перед першим діалогом</h2><p>Залишилось своє?<br/><a href="https://t.me/tripailo_ads">Напишіть нам у Telegram ↗</a></p></div><FAQ items={faq}/></section>
    <FinalCTA/><SalesSystemCTA/>
  </main>
}
