import React from 'react';
import type { Metadata } from 'next';
import { BreakEvenCalculator } from '@/components/calculators/BreakEvenCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Accordion } from '@/components/ui/Select';
import { SEO_PAGES } from '@/lib/config/seo-pages';
import Link from 'next/link';
import { AdSlot } from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: SEO_PAGES['break-even-calculator'].title,
  description: SEO_PAGES['break-even-calculator'].description,
};

export default function BreakEvenCalculatorSeoPage() {
  const pageData = SEO_PAGES['break-even-calculator'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ name: 'Break-Even Calculator', href: '/break-even-calculator' }]} />

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

      <BreakEvenCalculator />

      <AdSlot type="leaderboard" />

      {/* Structured SEO Content Section */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          How to Calculate Break-Even Point & Minimum Unit Volume
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Your break-even point is the exact sales volume or retail price floor where total revenue equals total operating costs (Fixed Costs + Variable Costs). At this point, your business makes $0 profit and $0 loss.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Fixed Overhead Costs</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Monthly expenses that stay constant regardless of how many items you sell (e.g. eRank subscription, Shopify plan, Adobe Creative Cloud, studio rent).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Variable Per-Unit Costs</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Direct production costs incurred every time a unit sells (materials, packaging supplies, shipping postage, platform transaction fees).
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

        {/* Related Pages */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Related Calculators & Guides</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {pageData.relatedPages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
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
