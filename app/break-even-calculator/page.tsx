import React from 'react';
import type { Metadata } from 'next';
import { BreakEvenCalculator } from '@/components/calculators/BreakEvenCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Accordion } from '@/components/ui/Select';
import Link from 'next/link';
import { AdSlot } from '@/components/ads/AdSlot';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sellrivo.site';
const pageUrl = `${siteUrl}/break-even-calculator`;

export const metadata: Metadata = {
  title: 'Break-Even Calculator | Minimum Unit Sales & Price Floor Tool | Sellrivo',
  description:
    'Free Break-Even Calculator for ecommerce & retail sellers. Calculate exact minimum selling price floor and required unit sales volume to cover fixed monthly overhead costs.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Break-Even Calculator | Sellrivo',
    description:
      'Calculate minimum selling price floor and required unit sales volume to cover fixed monthly overhead.',
    url: pageUrl,
    siteName: 'Sellrivo',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Break-Even Calculator | Sellrivo',
    description: 'Calculate minimum price floor and break-even unit sales volume.',
    images: [`${siteUrl}/og-image.png`],
  },
};

const BREAK_EVEN_FAQS = [
  {
    question: 'What is the Break-Even Point formula in business?',
    answer:
      'The Break-Even Unit Volume formula is: Fixed Monthly Costs / (Selling Price per Unit - Variable Cost per Unit). The Break-Even Selling Price formula is: Total Expenses / (1 - Platform Fee Percentage).',
  },
  {
    question: 'What is the difference between Fixed Costs and Variable Costs?',
    answer:
      'Fixed costs are recurring overhead expenses that stay constant regardless of sales volume (e.g. Shopify plan $39/mo, eRank $10/mo, studio rent, software subscriptions). Variable costs scale directly with every sale (item materials, packaging boxes, shipping postage, platform transaction fees).',
  },
  {
    question: 'What is Contribution Margin Ratio?',
    answer:
      'Contribution Margin Ratio represents the percentage of retail revenue available to cover fixed monthly overhead. Contribution Margin = (Price - Variable Cost) / Price.',
  },
  {
    question: 'Why is knowing your Break-Even Price floor critical for sales & discounts?',
    answer:
      'Running a Black Friday sale or offering a 20% coupon code without knowing your break-even floor can cause you to lose money on every order sold. Sellrivo calculates your absolute minimum price floor to prevent loss.',
  },
];

export default function BreakEvenCalculatorSeoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ name: 'Break-Even Calculator', href: '/break-even-calculator' }]} />

      <JsonLd
        type="WebApplication"
        data={{
          name: 'Break-Even Calculator',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Any',
          url: pageUrl,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />
      <JsonLd
        type="FAQPage"
        data={{
          mainEntity: BREAK_EVEN_FAQS.map((faq) => ({
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
          Break-Even Point & Sales Volume Calculator
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Find the exact retail price floor and minimum monthly sales volume required to cover all fixed studio overhead, software subscriptions, and variable production costs.
        </p>
      </div>

      <BreakEvenCalculator />

      <AdSlot type="leaderboard" />

      {/* Master Educational SEO Guide */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-8 shadow-sm">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            How to Calculate Break-Even Point & Minimum Price Floor
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
            Your break-even point represents financial zero: total gross revenue equals total business operating costs. At this point, your business makes $0 net profit and $0 net loss.
          </p>
        </div>

        {/* Break-Even Formulas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">1. Break-Even Unit Volume</h3>
            <p className="font-mono text-brand-600 dark:text-brand-400 font-bold">
              Units = Fixed Costs / (Price - Variable Cost)
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Minimum number of orders required to cover fixed monthly software and studio rent.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">2. Break-Even Price Floor</h3>
            <p className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
              Price Floor = COGS + Shipping + Fees
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              The lowest selling price below which every sale loses money.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">3. Contribution Margin %</h3>
            <p className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">
              Margin = ((Price - Variable Cost) / Price) × 100
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Percentage of each sale left to pay down fixed operating overhead.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Frequently Asked Questions (Break-Even Guide)
          </h3>
          {BREAK_EVEN_FAQS.map((faq, i) => (
            <Accordion key={i} title={faq.question}>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs">{faq.answer}</p>
            </Accordion>
          ))}
        </div>

        {/* Related Pages */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Explore Related Calculators & Tools
          </h4>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link
              href="/profit-margin-calculator"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              Profit Margin Calculator →
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
