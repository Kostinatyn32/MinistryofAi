import {PageHeading} from '@/components/sections';
import {LeadForm} from '@/components/lead-form';
import {leadsReady} from '@/lib/config';
import {JsonLd} from '@/components/seo';
import {Mail,Send} from 'lucide-react';
export const metadata={title:'Контакти',description:'Звʼяжіться з Міністерством з Продажів щодо AI-агентів, демо, тарифів та інтеграцій. Email info@ministrysale.org, Telegram @tripailo_ads.',alternates:{canonical:'/kontakty'}};
export default function Page(){return <main id="main" className="container"><JsonLd path="/kontakty" title="Контакти"/><PageHeading title="Поговорімо про ваші продажі" description="Підберемо сценарій під ваш бізнес і відповімо на питання щодо агента."/><div className="contact-layout"><div className="contact-details"><a href="mailto:info@ministrysale.org"><Mail/><span><small>Email</small>info@ministrysale.org</span></a><a href="https://t.me/tripailo_ads"><Send/><span><small>Telegram</small>@tripailo_ads</span></a><div className="company-details"><h2>Реквізити</h2><p>ФОП Проценко Марта Олександрівна</p><p>Міністерство з Продажів</p><p className="muted">Повні реквізити, адресу й телефон додамо перед запуском оплати.</p><a href="https://ministrysale.com">Головний сайт компанії ↗</a></div></div><LeadForm formId="contact" ready={leadsReady()}/></div></main>}
