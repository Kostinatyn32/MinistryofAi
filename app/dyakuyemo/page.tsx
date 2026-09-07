import Link from 'next/link';
import {cookies} from 'next/headers';
import {CheckCircle,MessageCircle} from 'lucide-react';
export const metadata={title:'Статус заявки',robots:{index:false,follow:true}};
export default async function Page(){const submitted=(await cookies()).get('lead_submitted')?.value==='1';return <main id="main" className="container state-page">{submitted?<CheckCircle size={48}/>:<MessageCircle size={48}/>}<h1>{submitted?'Дякуємо. Заявку отримано':'Звʼяжімось щодо вашого бізнесу'}</h1><p>{submitted?'Звʼяжемось протягом робочого дня.':'Щоб домовитися про демо, залиште заявку або напишіть у Telegram.'}</p><div className="actions"><Link href={submitted?'/':'/demo'} className="button button-primary">{submitted?'На головну':'Записатись на демо'}</Link></div></main>}
