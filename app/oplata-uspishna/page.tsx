import Link from 'next/link';
import {CircleHelp} from 'lucide-react';
export const metadata={title:'Статус оплати',robots:{index:false,follow:true}};
export default function Page(){return <main id="main" className="container state-page"><CircleHelp size={48}/><h1>Перевірка оплати</h1><p>Ця сторінка сама по собі не підтверджує платіж. Інформацію про оплату та доступ перевіряйте в кабінеті або зверніться до нашої команди.</p><div className="actions"><Link href="/kontakty" className="button button-primary">Звʼязатись із командою</Link><Link href="/tarify" className="button button-outline">До тарифів</Link></div></main>}
