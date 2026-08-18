import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { HelpCircle } from 'lucide-react';
import { AdSlot } from '@/components/ads/AdSlot';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sellrivo.site';
const pageUrl = `${siteUrl}/etsy-fee-calculator-uk`;

export const metadata: Metadata = {
  title: 'UK Etsy Fee Calculator 2026 (GBP £) | Sellrivo',
  description:
    'Free UK Etsy fee calculator. Calculate 4.0% + £0.20 UK Etsy Payments processing fees, 6.5% transaction fees, 20% UK VAT on fees, and net profit in GBP.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'UK Etsy Fee Calculator 2026 (GBP £) | Sellrivo',
    description:
      'Calculate UK Etsy listing fees, 4% + £0.20 processing rates, 6.5% transaction fees, and net profit in GBP.',
    url: pageUrl,
    siteName: 'Sellrivo',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Etsy Fee Calculator 2026 (GBP £) | Sellrivo',
    description: 'Calculate UK Etsy fees, VAT, and net profit in GBP.',
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function EtsyFeeCalculatorUkPage() {
  const faqs = [
    {
      question: 'What are the official Etsy UK processing rates for 2026?',
      answer:
        'For UK shop owners, Etsy Payments processing rates are 4.0% + £0.20 GBP per transaction. Etsy also charges a 6.5% transaction fee on the total item price + shipping charged.',
    },
    {
      question: 'Is UK VAT charged on Etsy seller fees?',
      answer:
        'Yes. Etsy charges 20% UK VAT on listing fees, transaction fees, and Etsy Payments processing fees for non-VAT registered UK sellers.',
    },
    {
      question: 'How do regulatory operating fees affect UK sellers?',
      answer:
        'Etsy applies a 0.32% Regulatory Operating Fee on total sales for UK shop owners to cover local UK Digital Services Tax regulations.',
    },
  ];

  const faqSchemaData = {
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { name: 'Calculators', href: '/' },
          { name: 'UK Etsy Fee Calculator', href: '/etsy-fee-calculator-uk' },
        ]}
      />

      <JsonLd
        type="WebApplication"
        data={{
          name: 'UK Etsy Fee Calculator 2026',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          url: pageUrl,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
        }}
      />
      <JsonLd type="FAQPage" data={faqSchemaData} />

      <AdSlot type="leaderboard" />

      <EtsyCalculator initialCountry="UK" />

      <AdSlot type="responsive" />

      {/* Localized Content Section */}
      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          How to Calculate UK Etsy Seller Fees & VAT (2026 Guide)
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Selling on Etsy from the United Kingdom requires understanding localized payment processing rates, currency conversions, and UK VAT regulations. This free calculator applies official 2026 UK rates: <strong>4.0% + £0.20 GBP</strong> processing fee, <strong>6.5%</strong> transaction fee, and standard £0.16 GBP listing fees.
        </p>

        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-brand-600" /> UK Etsy Seller FAQs
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/60 dark:bg-slate-950/60 p-4 transition-all [&[open]]:bg-white dark:[&[open]]:bg-slate-900"
              >
                <summary className="font-bold text-sm text-slate-800 dark:text-slate-200 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-brand-600 dark:text-brand-400 font-black text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 border-t border-slate-200/50 dark:border-slate-800/50 pt-2">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
