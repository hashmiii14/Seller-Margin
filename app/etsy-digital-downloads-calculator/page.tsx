import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { AdSlot } from '@/components/ads/AdSlot';
import { HelpCircle } from 'lucide-react';
import { SmartAffiliateCard } from '@/components/monetization/SmartAffiliateCard';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sellrivo.site';
const pageUrl = `${siteUrl}/etsy-digital-downloads-calculator`;

export const metadata: Metadata = {
  title: 'Etsy Digital Downloads Profit Calculator 2026 | Sellrivo',
  description:
    'Free Etsy digital downloads profit calculator. Calculate net profit for Canva templates, printable planners, SVG files, and digital art with $0 COGS & $0 shipping.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Etsy Digital Downloads Profit Calculator 2026 | Sellrivo',
    description:
      'Calculate net profit for Etsy digital downloads, Canva templates, and printables with zero shipping & zero physical cost.',
    url: pageUrl,
    siteName: 'Sellrivo',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Etsy Digital Downloads Profit Calculator | Sellrivo',
    description: 'Calculate net profit for digital products on Etsy.',
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function EtsyDigitalDownloadsCalculatorPage() {
  const faqs = [
    {
      question: 'Why are digital downloads so profitable on Etsy?',
      answer:
        'Digital products (Canva templates, digital planners, spreadsheet tools, SVG files) carry zero physical manufacturing cost and zero shipping fees, yielding 85% to 95% net profit margins after Etsy fees.',
    },
    {
      question: 'What fees does Etsy charge on digital downloads?',
      answer:
        'Etsy charges the standard $0.20 USD listing fee, 6.5% transaction fee, and Etsy Payments processing fee (e.g. 3.0% + $0.25 in the US) on every digital file sale.',
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
          { name: 'Etsy Digital Downloads Calculator', href: '/etsy-digital-downloads-calculator' },
        ]}
      />

      <JsonLd
        type="WebApplication"
        data={{
          name: 'Etsy Digital Downloads Calculator',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          url: pageUrl,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />
      <JsonLd type="FAQPage" data={faqSchemaData} />

      <AdSlot type="leaderboard" />

      {/* Pre-configured for digital goods: $0 cost of goods, $0 shipping */}
      <EtsyCalculator initialParams={{ productCost: 0, shippingCost: 0, shippingCharged: 0, sellingPrice: 9.99 }} />

      <SmartAffiliateCard partnerId="everbee" />

      <AdSlot type="responsive" />

      <section className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          Etsy Digital Products Profit Margin Guide (2026)
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Digital downloads (Canva templates, printable art, digital planners, spreadsheet tools) offer incredible <strong>85%–95% net profit margins</strong> because physical manufacturing and shipping costs are zero. Etsy still deducts the standard $0.20 listing fee, 6.5% transaction fee, and payment processing fees.
        </p>

        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-brand-600" /> Digital Download FAQs
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
