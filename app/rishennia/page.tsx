import Link from 'next/link';
import { BriefcaseBusiness, ShoppingBag, UserRound } from 'lucide-react';
import { FinalCTA, PageHeading } from '@/components/sections';
import { JsonLd } from '@/components/seo';

export const metadata = { title: 'AI-продавець для бізнесу: рішення за типом продажів', description: 'Оберіть сценарій AI-продавця для інтернет-магазину, сфери послуг або B2B-продажів і почніть із контрольованого пілоту.', alternates: { canonical: '/rishennia' } };

const solutions = [
  { href: '/rishennia/ecommerce', title: 'Інтернет-магазин', text: 'Типові питання про товар, підбір і передача нестандартних ситуацій менеджеру.', Icon: ShoppingBag },
  { href: '/rishennia/poslugy', title: 'Сфера послуг', text: 'Первинна кваліфікація запиту та підготовка контексту до розмови з командою.', Icon: UserRound },
  { href: '/rishennia/b2b', title: 'B2B-продажі', text: 'Збір контексту про задачу й передача комерційних умов та винятків людині.', Icon: BriefcaseBusiness }
];

export default function SolutionsPage() {
  return <main id="main"><JsonLd path="/rishennia" title="Рішення для бізнесу"/><div className="container"><PageHeading title="AI-продавець для різних типів бізнесу" description="Сценарій залежить не від назви ніші, а від того, які звернення повторюються, що потрібно з’ясувати в першому діалозі та коли потрібен менеджер."/><section className="solution-hub-grid">{solutions.map(({href, title, text, Icon}) => <Link href={href} key={href}><Icon size={29}/><h2>{title}</h2><p>{text}</p><span>Переглянути сценарій →</span></Link>)}</section><section className="section two-columns"><div><span className="section-label">Як обрати напрям</span><h2>Почніть не з галузі, а з діалогу</h2></div><div className="difference-copy"><p>Візьміть реальні переписки та знайдіть один повторюваний тип звернень. Далі визначте дозволені відповіді, потрібний контекст і момент передачі менеджеру.</p><p>Не потрібно обіцяти автоматизацію всього процесу. Перший пілот має бути безпечним, зрозумілим і перевірюваним.</p></div></section></div><FinalCTA/></main>;
}
