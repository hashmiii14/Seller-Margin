import React from 'react';
import type { Metadata } from 'next';
import { PodCalculator } from '@/components/calculators/PodCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { AdSlot } from '@/components/ads/AdSlot';
import { SmartAffiliateCard } from '@/components/monetization/SmartAffiliateCard';
import { HelpCircle } from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sellrivo.site';
const pageUrl = `${siteUrl}/printify-profit-calculator`;

export const metadata: Metadata = {
  title: 'Printify Profit Calculator 2026 | Print-on-Demand Margins | Sellrivo',
  description:
    'Free Printify profit calculator. Calculate blank item costs, print provider shipping, Etsy/Shopify fees, and net profit for print-on-demand sellers.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Printify Profit Calculator 2026 | Sellrivo',
    description:
      'Calculate Printify blank costs, shipping, Etsy/Shopify transaction fees, and net profit margins.',
    url: pageUrl,
    siteName: 'Sellrivo',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printify Profit Calculator | Sellrivo',
    description: 'Calculate Printify POD costs and net take-home earnings.',
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function PrintifyProfitCalculatorPage() {
  const faqs = [
    {
      question: 'How do I calculate profit margin for Printify products?',
      answer:
        'Subtract Printify garment base cost, shipping cost, and store fees (e.g. Etsy 6.5% + processing) from your retail selling price.',
    },
    {
      question: 'Is Printify Premium worth it for higher margins?',
      answer:
        'Yes. Printify Premium costs $29/mo and reduces product base costs by up to 20%, saving $2 to $3+ per t-shirt.',
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
          { name: 'Printify Profit Calculator', href: '/printify-profit-calculator' },
        ]}
      />

      <JsonLd
        type="WebApplication"
        data={{
          name: 'Printify Profit Calculator 2026',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          url: pageUrl,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />
      <JsonLd type="FAQPage" data={faqSchemaData} />

      <AdSlot type="leaderboard" />

      <PodCalculator />

      <SmartAffiliateCard partnerId="printify" />

      <AdSlot type="responsive" />

      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          How to Calculate Printify POD Profit Margins (2026 Guide)
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Printify sellers must carefully balance blank garment costs (e.g. Bella+Canvas 3001, Gildan 18000), print provider shipping, marketplace transaction fees (Etsy 6.5%, Shopify 2.9%), and advertising. A healthy POD net margin ranges between <strong>25% and 40%</strong>.
        </p>

        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-brand-600" /> Printify Seller FAQs
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
