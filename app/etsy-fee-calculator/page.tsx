import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Accordion } from '@/components/ui/Select';
import { SEO_PAGES } from '@/lib/config/seo-pages';
import Link from 'next/link';
import { AdSlot } from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: SEO_PAGES['etsy-fee-calculator'].title,
  description: SEO_PAGES['etsy-fee-calculator'].description,
};

export default function EtsyFeeCalculatorPage() {
  const pageData = SEO_PAGES['etsy-fee-calculator'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ name: 'Etsy Fee Calculator', href: '/etsy-fee-calculator' }]} />

      <JsonLd
        type="FAQPage"
        data={{
          mainEntity: pageData.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }}
      />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          {pageData.h1}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {pageData.intro}
        </p>
      </div>

      <EtsyCalculator />

      <AdSlot type="leaderboard" />

      {/* Structured SEO Educational Content */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          Complete Etsy Fee Breakdown & Calculation Guide (2026 Updated Rates)
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Etsy automatically deducts four primary fee types from your seller payment account every time an order is placed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs pt-2">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">1. Listing Fee</h3>
            <p className="font-bold text-brand-600 dark:text-brand-400">$0.20 USD</p>
            <p className="text-slate-600 dark:text-slate-400">
              Fixed fee charged per item listing, renewed every 4 months or upon sale of a unit.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">2. Transaction Fee</h3>
            <p className="font-bold text-brand-600 dark:text-brand-400">6.5% of Total</p>
            <p className="text-slate-600 dark:text-slate-400">
              Assessed on the total item price plus shipping charged to the buyer.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">3. Payment Processing</h3>
            <p className="font-bold text-brand-600 dark:text-brand-400">3.0% + $0.25 (US)</p>
            <p className="text-slate-600 dark:text-slate-400">
              Etsy Payments rate varies by country (e.g. UK 4.0% + £0.20, Germany 4.0% + €0.30).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">4. Offsite Ads Fee</h3>
            <p className="font-bold text-brand-600 dark:text-brand-400">12% to 15%</p>
            <p className="text-slate-600 dark:text-slate-400">
              Charged only when a customer clicks a web ad on Google/Facebook and purchases within 30 days.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 mb-4">Frequently Asked Questions</h3>
          {pageData.faqs.map((faq, i) => (
            <Accordion key={i} title={faq.question}>
              <p>{faq.answer}</p>
            </Accordion>
          ))}
        </div>

        {/* Country Specific Calculators */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Localized Country Etsy Fee Calculators</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link
              href="/etsy-fee-calculator-uk"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              🇬🇧 UK Etsy Fee Calculator →
            </Link>
            <Link
              href="/etsy-fee-calculator-germany"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              🇩🇪 Germany Etsy Fee Calculator →
            </Link>
            <Link
              href="/etsy-fee-calculator-canada"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              🇨🇦 Canada Etsy Fee Calculator →
            </Link>
            <Link
              href="/etsy-fee-calculator-australia"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              🇦🇺 Australia Etsy Fee Calculator →
            </Link>
            <Link
              href="/etsy-fee-calculator-india"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              🇮🇳 India Etsy Fee Calculator →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
