import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { HelpCircle } from 'lucide-react';
import { AdSlot } from '@/components/ads/AdSlot';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sellrivo.site';
const pageUrl = `${siteUrl}/etsy-fee-calculator-australia`;

export const metadata: Metadata = {
  title: 'Australia Etsy Fee Calculator 2026 (AUD $) | Sellrivo',
  description:
    'Free Australia Etsy fee calculator. Calculate 3.0% + A$0.25 Australia Etsy Payments processing rates, 6.5% transaction fees, GST, and net profit in AUD.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Australia Etsy Fee Calculator 2026 (AUD $) | Sellrivo',
    description:
      'Calculate Australian Etsy listing fees, 3% + A$0.25 processing rates, 6.5% transaction fees, and net profit in AUD.',
    url: pageUrl,
    siteName: 'Sellrivo',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australia Etsy Fee Calculator 2026 (AUD $) | Sellrivo',
    description: 'Calculate Australian Etsy fees, GST, and net profit in AUD.',
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function EtsyFeeCalculatorAustraliaPage() {
  const faqs = [
    {
      question: 'What are the official Etsy Australia processing rates for 2026?',
      answer:
        'For Australian shop owners, Etsy Payments processing rates are 3.0% + A$0.25 AUD per transaction. Etsy also charges a 6.5% transaction fee on total buyer payment.',
    },
    {
      question: 'How does 10% Australian GST work on Etsy?',
      answer:
        'Etsy automatically collects 10% GST on low-value imported physical goods and digital downloads sold to Australian buyers where required.',
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
          { name: 'Australia Etsy Fee Calculator', href: '/etsy-fee-calculator-australia' },
        ]}
      />

      <JsonLd
        type="WebApplication"
        data={{
          name: 'Australia Etsy Fee Calculator 2026',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          url: pageUrl,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
        }}
      />
      <JsonLd type="FAQPage" data={faqSchemaData} />

      <AdSlot type="leaderboard" />

      <EtsyCalculator initialCountry="AU" />

      <AdSlot type="responsive" />

      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          How to Calculate Australian Etsy Seller Fees & GST (2026 Guide)
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Estimate take-home earnings for Etsy shop owners in Australia. Pre-configured with official 2026 Australian rates: <strong>3.0% + A$0.25 AUD</strong> processing fee, <strong>6.5%</strong> transaction fee, and A$0.30 AUD listing fee.
        </p>

        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-brand-600" /> Australian Etsy Seller FAQs
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
