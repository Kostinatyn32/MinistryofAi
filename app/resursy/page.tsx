import Link from 'next/link';
import { Calculator, CircleCheck, Network } from 'lucide-react';
import { CompatibilityChecker, LossCalculator, ReadinessCheck, RoiCalculator } from '@/components/activation-tools';
import { PageHeading, FinalCTA } from '@/components/sections';
import { JsonLd } from '@/components/seo';

export const metadata={title:'Інструменти для підготовки пілоту',description:'Оцініть втрати в переписках, економіку AI-продавця, готовність даних і сумісність каналу до пілоту.',alternates:{canonical:'/resursy'}};
export default function ResourcesPage(){return <main id="main"><JsonLd path="/resursy" title="Інструменти"/><div className="container"><PageHeading title="Перевірте гіпотезу до запуску" description="Інструменти не зберігають введені дані та не дають фінансових гарантій. Вони допомагають підготувати осмислену розмову про пілот."/><section className="resource-intro"><article><Calculator size={24}/><h2>Оцінки, а не обіцянки</h2><p>Калькулятори показують діапазон для перевірки вашої економіки.</p></article><article><CircleCheck size={24}/><h2>Готовність даних</h2><p>Зрозумійте, чого бракує для безпечного старту.</p></article><article><Network size={24}/><h2>Статус інтеграцій</h2><p>Пілот, узгодження або кастомна перевірка — без псевдоточності.</p></article></section><div className="tool-stack"><LossCalculator/><RoiCalculator/><ReadinessCheck/><CompatibilityChecker/></div><p className="resources-cta">Потрібно розібрати результат під ваш бізнес? <Link href="/start?plan=demo">Подайтеся на пілот</Link>.</p></div><FinalCTA/></main>}
