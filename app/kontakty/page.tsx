import { PageHeading } from '@/components/sections';
import { LeadForm } from '@/components/lead-form';
import { leadsReady } from '@/lib/config';
import { JsonLd } from '@/components/seo';
import { operatorDetails } from '@/lib/legal-content';
import { Mail, Send, MapPin, Landmark, Phone } from 'lucide-react';

export const metadata = {
  title: 'Контакти',
  description: 'Звʼяжіться з Міністерством з Продажів щодо AI-агентів, демо, тарифів та інтеграцій.',
  alternates: { canonical: '/kontakty' },
};

export default function Page() {
  return (
    <main id="main" className="container">
      <JsonLd path="/kontakty" title="Контакти" />
      <PageHeading title="Поговорімо про ваші продажі" description="Підберемо сценарій під ваш бізнес і відповімо на питання щодо агента." />
      <div className="contact-layout">
        <div className="contact-details">
          <a href={`mailto:${operatorDetails.email}`}>
            <Mail /><span><small>Email</small>{operatorDetails.email}</span>
          </a>
          <a href={operatorDetails.telegramUrl}>
            <Send /><span><small>Telegram</small>{operatorDetails.telegram}</span>
          </a>
          <a href="tel:+380939082254">
            <Phone /><span><small>Телефон</small>{operatorDetails.phone}</span>
          </a>
          <div className="company-details">
            <h2>Реквізити</h2>
            <p>{operatorDetails.name}</p>
            <p>РНОКПП: {operatorDetails.taxId}</p>
            <p><MapPin size={16} aria-hidden="true" /> {operatorDetails.address}</p>
            <p><Landmark size={16} aria-hidden="true" /> {operatorDetails.bank}<br />IBAN: {operatorDetails.iban}</p>
            <p className="muted">Питання щодо замовлення та повернення коштів приймаємо електронною поштою або в Telegram.</p>
            <a href={operatorDetails.site} target="_blank" rel="noopener noreferrer">Головний сайт компанії ↗</a>
          </div>
        </div>
        <LeadForm formId="contact" ready={leadsReady()} />
      </div>
    </main>
  );
}
