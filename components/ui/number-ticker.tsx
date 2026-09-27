import { cn } from '@/lib/utils';

type NumberTickerProps={
  value:number;
  className?:string;
};

const formatter = new Intl.NumberFormat('uk-UA', { maximumFractionDigits: 0 });

export function NumberTicker({ value, className }: NumberTickerProps) {
  return <span className={cn('number-ticker', className)}>{formatter.format(value)}</span>;
}
