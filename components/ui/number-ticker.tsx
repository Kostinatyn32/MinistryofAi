'use client';

// Adapted from Number Ticker by dillionverma, retrieved via 21st.dev.
import {useEffect,useRef} from 'react';
import {useInView,useMotionValue,useReducedMotion,useSpring} from 'motion/react';
import {cn} from '@/lib/utils';

type NumberTickerProps={
  value:number;
  className?:string;
  delay?:number;
};

const formatter=new Intl.NumberFormat('uk-UA',{maximumFractionDigits:0});

export function NumberTicker({value,className,delay=0}:NumberTickerProps){
  const ref=useRef<HTMLSpanElement>(null);
  const reduceMotion=useReducedMotion();
  const motionValue=useMotionValue(reduceMotion?value:0);
  const springValue=useSpring(motionValue,{damping:60,stiffness:100});
  const inView=useInView(ref,{once:true,margin:'0px 0px -10% 0px'});

  useEffect(()=>{
    if(reduceMotion){motionValue.set(value);return;}
    if(!inView)return;
    const timer=window.setTimeout(()=>motionValue.set(value),delay*1000);
    return()=>window.clearTimeout(timer);
  },[delay,inView,motionValue,reduceMotion,value]);

  useEffect(()=>springValue.on('change',latest=>{
    if(ref.current)ref.current.textContent=formatter.format(Math.round(latest));
  }),[springValue]);

  return <span ref={ref} className={cn('number-ticker',className)} aria-label={formatter.format(value)}>{formatter.format(reduceMotion?value:0)}</span>;
}
