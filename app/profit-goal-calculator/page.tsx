import React from 'react';
import type { Metadata } from 'next';
import { ProfitGoalCalculator } from '@/components/calculators/ProfitGoalCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Accordion } from '@/components/ui/Select';
import Link from 'next/link';
import { AdSlot } from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: 'Seller Profit Goal Calculator | Calculate Daily & Monthly Sales Target | Sellrivo',
  description:
    'Calculate how many unit sales you need per day and month to hit $500, $1,000, or $5,000 in net profit on Etsy, Amazon FBA, or Shopify.',
};

const FAQS = [
  {
    question: 'How do I calculate how many sales I need to make $1,000 a month?',
    answer: 'Divide your target monthly profit ($1,000) by your net profit earned per unit sold. For example, if you earn $10 net profit per order on Etsy, you need 100 sales per month (approx. 3.3 sales per day) to hit your $1,000 monthly goal.',
  },
  {
    question: 'What is net profit vs gross profit target?',
    answer: 'Gross profit is revenue minus direct product costs. Net profit is what remains after deducting all marketplace transaction fees, payment processing, shipping postage, and advertising spend. Always base your monthly financial goals on Net Take-Home Profit.',
  },
  {
    question: 'How does conversion rate affect sales target volume?',
    answer: 'If your Etsy or Amazon listing converts at 3%, you need 100 store visits to make 3 sales. Knowing your required daily unit volume helps calculate the total daily shop traffic required to reach your target income.',
  },
];

export default function ProfitGoalPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ name: 'Profit Goal Calculator', href: '/profit-goal-calculator' }]} />

      <JsonLd
        type="FAQPage"
        data={{
          mainEntity: FAQS.map((faq) => ({
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
          Seller Profit Goal & Sales Target Calculator
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Reverse-engineer your monthly income targets into actionable daily and weekly unit sales goals across Etsy, Amazon FBA, Print-on-Demand, or Shopify.
        </p>
      </div>

      <ProfitGoalCalculator />

      <AdSlot type="leaderboard" />

      {/* Structured SEO Content Section */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          How to Set Realistic Income Targets for Your Ecommerce Business
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Hitting your dream income goal (whether $1,000/mo or $10,000/mo) requires working backward from net profit per unit to daily order volume.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">1. Required Daily Unit Sales</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Calculates how many individual items you must package and ship every single day to hit your monthly target.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">2. Required Monthly Gross Revenue</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Shows total dollar volume processed through your store to leave your net profit after marketplace fees and expenses.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">3. Estimated Traffic Volume</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Estimates shop traffic needed based on standard 2.5% ecommerce conversion rates.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 mb-4">Frequently Asked Questions</h3>
          {FAQS.map((faq, i) => (
            <Accordion key={i} title={faq.question}>
              <p>{faq.answer}</p>
            </Accordion>
          ))}
        </div>

        {/* Related Pages */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Related Calculators & Resources</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link
              href="/etsy-profit-calculator"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              Etsy Profit Calculator →
            </Link>
            <Link
              href="/amazon-fba-calculator"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              Amazon FBA Calculator →
            </Link>
            <Link
              href="/break-even-calculator"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              Break-Even Calculator →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
