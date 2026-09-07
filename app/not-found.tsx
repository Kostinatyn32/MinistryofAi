import Link from 'next/link';
import {Button} from '@/components/ui/button';
export default function NotFound(){return <main id="main" className="container state-page"><span className="error-number">404</span><h1>Цей діалог ще не почався</h1><p>Сторінку не знайдено. Поверніться на головну або напишіть нам.</p><div className="actions"><Button asChild><Link href="/">На головну</Link></Button><Button asChild variant="outline"><Link href="/kontakty">Контакти</Link></Button></div></main>}
