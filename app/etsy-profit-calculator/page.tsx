import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Accordion } from '@/components/ui/Select';
import { SEO_PAGES } from '@/lib/config/seo-pages';
import Link from 'next/link';

export const metadata: Metadata = {
  title: SEO_PAGES['etsy-profit-calculator'].title,
  description: SEO_PAGES['etsy-profit-calculator'].description,
};

export default function EtsyProfitCalculatorSeoPage() {
  const pageData = SEO_PAGES['etsy-profit-calculator'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ name: 'Etsy Profit Calculator', href: '/etsy-profit-calculator' }]} />

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

      {/* Structured Educational Content for Intent Matching */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          How to Accurately Calculate Etsy Take-Home Profit
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          To build a sustainable handmade or digital shop on Etsy, you must look beyond top-line revenue. Etsy deducts several layered fees automatically from every sale before disbursing funds to your bank account.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">1. Fixed & Percentage Fees</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Etsy assesses a $0.20 USD listing fee per quantity, a 6.5% transaction fee on item price + shipping, and a payment processing fee (3.0% + $0.25 in US).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">2. Optional Advertising Costs</h3>
            <p className="text-slate-600 dark:text-slate-400">
              If you run Etsy Onsite Ads or are enrolled in Etsy Offsite Ads (12%–15%), factor these marketing costs directly into your per-unit cost structure.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Frequently Asked Questions</h3>
          {pageData.faqs.map((faq, i) => (
            <Accordion key={i} title={faq.question}>
              <p>{faq.answer}</p>
            </Accordion>
          ))}
        </div>

        {/* Related Pages */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Related Calculators & Resources</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {pageData.relatedPages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
              >
                {link.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
