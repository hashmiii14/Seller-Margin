import React from 'react';
import type { Metadata } from 'next';
import { ProfitMarginCalculator } from '@/components/calculators/ProfitMarginCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Accordion } from '@/components/ui/Select';
import Link from 'next/link';
import { AdSlot } from '@/components/ads/AdSlot';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sellrivo.site';
const pageUrl = `${siteUrl}/profit-margin-calculator`;

export const metadata: Metadata = {
  title: 'Profit Margin & Markup Calculator | Gross vs Net Margin Tool | Sellrivo',
  description:
    'Free Profit Margin & Markup Calculator. Calculate gross profit dollars, net profit margin %, markup multiplier %, and Return on Investment (ROI) instantly.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Profit Margin & Markup Calculator | Sellrivo',
    description:
      'Calculate gross profit dollars, net profit margin %, markup multiplier %, and Return on Investment (ROI).',
    url: pageUrl,
    siteName: 'Sellrivo',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Profit Margin & Markup Calculator | Sellrivo',
    description: 'Calculate gross profit, net margin %, markup %, and ROI.',
    images: [`${siteUrl}/og-image.png`],
  },
};

const MARGIN_FAQS = [
  {
    question: 'What is the main difference between Profit Margin % and Markup %?',
    answer:
      'Profit Margin % uses total sales revenue as the denominator (Profit / Revenue). Markup % uses raw item cost as the denominator (Profit / Cost). A 50% markup on a $10 item ($15 price) produces a 33.3% profit margin.',
  },
  {
    question: 'How do I convert Margin % to Markup %?',
    answer:
      'Markup Formula from Margin: Markup % = Margin % / (1 - Margin %). For example, if your desired margin is 40% (0.40), Markup = 0.40 / 0.60 = 66.7% markup.',
  },
  {
    question: 'What is Gross Profit vs Net Profit?',
    answer:
      'Gross profit is retail revenue minus direct product manufacturing cost (COGS). Net profit is what remains after deducting all operating fees, shipping postage, storage, and advertising costs.',
  },
];

export default function ProfitMarginCalculatorSeoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ name: 'Profit Margin Calculator', href: '/profit-margin-calculator' }]} />

      <JsonLd
        type="WebApplication"
        data={{
          name: 'Profit Margin & Markup Calculator',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          url: pageUrl,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />
      <JsonLd
        type="FAQPage"
        data={{
          mainEntity: MARGIN_FAQS.map((faq) => ({
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
          Profit Margin & Markup Calculator
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Calculate gross profit dollars, net profit margin %, markup multiplier %, and return on investment (ROI) across retail, wholesale, and ecommerce products.
        </p>
      </div>

      <ProfitMarginCalculator />

      <AdSlot type="leaderboard" />

      {/* Master Educational SEO Guide */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-8 shadow-sm">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            Margin vs Markup Conversion Matrix & Financial Formulas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
            Confusing profit margin % with markup % is the #1 mistake new sellers make. Because markup compares profit against cost while margin compares profit against revenue, margin is always lower than markup.
          </p>
        </div>

        {/* Margin to Markup Conversion Matrix Table */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Profit Margin % to Markup % Quick Lookup Table
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Desired Profit Margin %</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">Equivalent Markup % Required</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Example ($10 Cost)</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Net Profit ($)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">20% Profit Margin</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">25.0% Markup</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$12.50 Price</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-emerald-600 dark:text-emerald-400">$2.50 Profit</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">33.3% Profit Margin</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">50.0% Markup</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$15.00 Price</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-emerald-600 dark:text-emerald-400">$5.00 Profit</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">50.0% Profit Margin</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">100.0% Markup (Keystone)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$20.00 Price</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-emerald-600 dark:text-emerald-400">$10.00 Profit</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">66.7% Profit Margin</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">200.0% Markup</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$30.00 Price</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-emerald-600 dark:text-emerald-400">$20.00 Profit</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">75.0% Profit Margin</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">300.0% Markup</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$40.00 Price</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-emerald-600 dark:text-emerald-400">$30.00 Profit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Frequently Asked Questions (Profit Margin & Markup Guide)
          </h3>
          {MARGIN_FAQS.map((faq, i) => (
            <Accordion key={i} title={faq.question}>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs">{faq.answer}</p>
            </Accordion>
          ))}
        </div>

        {/* Related Pages */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Explore Related Financial Calculators
          </h4>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link
              href="/break-even-calculator"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              Break-Even Calculator →
            </Link>
            <Link
              href="/profit-goal-calculator"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              Profit Goal Calculator →
            </Link>
            <Link
              href="/etsy-profit-calculator"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              Etsy Profit Calculator →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
