import { Plus } from 'lucide-react';

export function FAQ({ items }: { items: string[][] }) {
  return <div className="faq-list">
    {items.map(([question, answer]) => <details className="faq-item" key={question}>
      <summary className="faq-trigger">{question}<Plus size={20}/></summary>
      <div className="faq-answer"><p>{answer}</p></div>
    </details>)}
  </div>;
}
