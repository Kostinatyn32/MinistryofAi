'use client';
import * as Accordion from '@radix-ui/react-accordion';
import {Plus} from 'lucide-react';
import {track} from '@/lib/analytics';
export function FAQ({items}:{items:string[][]}){return <Accordion.Root type="single" collapsible className="faq-list" onValueChange={value=>{if(value)track('faq_open',{question:value})}}>{items.map(([q,a])=><Accordion.Item className="faq-item" value={q} key={q}><Accordion.Header><Accordion.Trigger className="faq-trigger">{q}<Plus size={20}/></Accordion.Trigger></Accordion.Header><Accordion.Content className="faq-answer"><p>{a}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root>}
