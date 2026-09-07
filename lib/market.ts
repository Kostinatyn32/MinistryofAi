import {cookies,headers} from 'next/headers';
import type {Market} from '@/components/pricing';
export async function getMarket():Promise<Market>{const saved=(await cookies()).get('market')?.value;if(saved==='ua'||saved==='eu')return saved;return (await headers()).get('x-vercel-ip-country')==='UA'?'ua':'eu';}
