import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import {Header,Footer} from '@/components/shell';
import {Consent} from '@/components/consent';
const onest=localFont({src:[{path:'../node_modules/@fontsource-variable/onest/files/onest-cyrillic-wght-normal.woff2'},{path:'../node_modules/@fontsource-variable/onest/files/onest-latin-wght-normal.woff2'}],variable:'--font-onest',display:'swap'});
const unbounded=localFont({src:[{path:'../node_modules/@fontsource-variable/unbounded/files/unbounded-cyrillic-wght-normal.woff2'},{path:'../node_modules/@fontsource-variable/unbounded/files/unbounded-latin-wght-normal.woff2'}],variable:'--font-unbounded',display:'swap'});
export const metadata:Metadata={metadataBase:new URL('https://www.ministrysale.org'),title:{default:'AI-продавець для бізнесу | Міністерство з Продажів',template:'%s | Міністерство з Продажів'},description:'AI-продавець відповідає клієнтам у месенджерах, кваліфікує ліди та передає складні діалоги менеджеру.',robots:process.env.SITE_LIVE==='true'?{index:true,follow:true}:{index:false,follow:false},openGraph:{type:'website',locale:'uk_UA',siteName:'Міністерство з Продажів',images:[{url:'/ministry-sale-og.png',width:1734,height:906,alt:'AI-продавець Міністерства з Продажів'}]},twitter:{card:'summary_large_image',images:['/ministry-sale-og.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="uk" className={`${onest.variable} ${unbounded.variable}`}><body><a href="#main" className="skip-link">Перейти до вмісту</a><Header/>{children}<Footer/><Consent/></body></html>}
