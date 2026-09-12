import {PageHeading,FinalCTA} from '@/components/sections';
import {Pricing} from '@/components/pricing';
import {FAQ} from '@/components/faq';
import {billingFaq} from '@/lib/content';
import {getMarket} from '@/lib/market';
import {JsonLd} from '@/components/seo';
export const metadata={title:'Тарифи AI-продавця для бізнесу',description:'Порівняйте тарифи AI-продавця Start, Business і Scale: агенти, ліміти повідомлень, канали та інтеграції.',alternates:{canonical:'/tarify'}};
export default async function Page(){const market=await getMarket();return <main id="main"><JsonLd faq={billingFaq} path="/tarify" title="Тарифи"/><div className="container"><PageHeading title="Тарифи" description="Почніть із безкоштовного діалогу. Оберіть можливості, коли переконаєтесь у роботі агента."/><Pricing initialMarket={market} full/><section className="section faq-section"><div><span className="section-label">Умови</span><h2>Про тарифи й оплату</h2></div><FAQ items={billingFaq}/></section></div><FinalCTA/></main>}
