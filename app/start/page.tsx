import { Check, Clock3, ShieldCheck } from 'lucide-react';
import { LeadForm } from '@/components/lead-form';
import { OnboardingPreview } from '@/components/activation-tools';
import { leadsReady } from '@/lib/config';
import { JsonLd } from '@/components/seo';

export const metadata = { title: 'Податися на пілот', description: 'Розкажіть про свій бізнес — разом підготуємо безпечний пілот AI-продавця на одному каналі.', alternates: { canonical: '/start' } };

export default async function StartPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const query = await searchParams;
  const plan = ['demo', 'start', 'business', 'scale'].includes(query.plan || '') ? query.plan as 'demo' | 'start' | 'business' | 'scale' : '';
  const market = query.market === 'ua' || query.market === 'eu' ? query.market : '';
  return <main id="main"><JsonLd path="/start" title="Податися на пілот"/><div className="container"><section className="start-hero"><div><span className="section-label">Assisted pilot</span><h1>Почнімо з одного безпечного сценарію</h1><p>Замість обіцянки миттєвого self-service ми спочатку розберемо ваш продукт, один канал і роль менеджера. Так перший тестовий діалог буде корисним, а не випадковим.</p><ul className="check-list">{['15-хвилинний fit-call', 'Один сценарій і канал для пілоту', 'Перевірка діалогів перед запуском', 'Прозорий наступний крок після тесту'].map((item) => <li key={item}><Check size={18}/>{item}</li>)}</ul><div className="start-notes"><span><Clock3 size={17}/> Не потребує картки</span><span><ShieldCheck size={17}/> Не просимо секрети у формі</span></div></div><LeadForm formId="demo" plan={plan} market={market} ready={leadsReady()} /></section></div><OnboardingPreview/></main>;
}
