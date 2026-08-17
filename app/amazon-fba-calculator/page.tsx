import React from 'react';
import type { Metadata } from 'next';
import { AmazonFbaCalculator } from '@/components/calculators/AmazonFbaCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Accordion } from '@/components/ui/Select';
import { SEO_PAGES } from '@/lib/config/seo-pages';
import Link from 'next/link';
import { AdSlot } from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: 'Amazon FBA Calculator (2026 Rules) | Estimate FBA Fees & Net Profit Margin',
  description:
    'Free Amazon FBA calculator. Estimate 15% category referral fees, pick & pack fulfillment costs, monthly inventory storage, PPC ad spend, and net take-home seller profit margins.',
};

const AMAZON_FAQS = [
  {
    question: 'How are Amazon FBA category referral fees calculated in 2026?',
    answer:
      'Amazon charges a percentage referral fee on the total sales price of your product (including item price and any buyer shipping). Most primary categories (Home, Apparel, Electronics, Toys, Beauty) range between 8% and 15% per sale.',
  },
  {
    question: 'What is the difference between Amazon FBA and FBM?',
    answer:
      'FBA (Fulfillment by Amazon) means Amazon handles storage, pick, pack, customer shipping (with Prime badge), and returns for a fulfillment fee. FBM (Fulfillment by Merchant) means you store and ship orders yourself, paying only referral fees to Amazon.',
  },
  {
    question: 'How do Q4 peak monthly storage fees work on Amazon?',
    answer:
      'Amazon charges standard monthly storage fees from January to September ($0.87 per cubic foot for standard size). During the Q4 peak holiday shopping season (October to December), storage rates increase to $2.40 per cubic foot.',
  },
  {
    question: 'What is a good net profit margin for Amazon FBA Private Label?',
    answer:
      'A healthy target net margin for Amazon FBA sellers is 20% to 30% after deducting category referral fees, FBA pick/pack fees, product manufacturing cost (COGS), inbound freight, and Amazon PPC ad spend.',
  },
  {
    question: 'What are Amazon FBA inbound placement service fees?',
    answer:
      'Introduced in 2024–2026, Amazon charges an inbound placement fee ($0.21 to $0.68 per unit) when sellers split inventory across fewer fulfillment centers, giving discounts if inventory is sent to multiple hubs across the country.',
  },
  {
    question: 'How does Amazon PPC advertising affect net profit per unit?',
    answer:
      'Sponsored Products PPC spend is deducted per unit sold (often called ACoS or Advertising Cost of Sale). Enter your target ACoS or dollar ad spend per unit into Sellrivo to calculate true net take-home pay.',
  },
];

export default function AmazonFbaCalculatorSeoPage() {
  const pageData = SEO_PAGES['amazon-fba-calculator'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ name: 'Amazon FBA Calculator', href: '/amazon-fba-calculator' }]} />

      <JsonLd
        type="FAQPage"
        data={{
          mainEntity: AMAZON_FAQS.map((faq) => ({
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
          Amazon FBA Profit & Fee Calculator (2026 Rules)
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Accurately calculate your Amazon category referral fees, FBA pick & pack costs, storage fees, PPC advertising spend, and net take-home profit margin % before sourcing your next product.
        </p>
      </div>

      <AmazonFbaCalculator />

      <AdSlot type="leaderboard" />

      {/* Master Amazon Educational SEO Guide */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-8 shadow-sm">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            Complete Amazon FBA Fee Breakdown & Margin Guide (2026)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
            Selling on Amazon FBA grants access to over 200 million Prime members worldwide. However, miscalculating weight tiers, referral percentages, or monthly storage rates can erase your entire profit margin.
          </p>
        </div>

        {/* 2026 Amazon Referral Fee Rate Matrix Table */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            2026 Amazon Category Referral Fee Percentage Matrix
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Product Category</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Referral Fee %</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Minimum Fee / Threshold Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Apparel & Accessories</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">8% to 15%</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">8% for items under $15; 15% for items over $15 ($0.30 min)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Beauty, Health & Personal Care</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">8% to 15%</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">8% for items $10 or less; 15% for items over $10 ($0.30 min)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Consumer Electronics & Accessories</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">8% to 15%</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">15% up to $100; 8% on portion over $100 ($0.30 min)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Home & Kitchen, Toys & Games</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">15%</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">Standard 15% across all price points ($0.30 min)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Books & Media</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">15% + $1.80</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">15% referral fee plus $1.80 closing fee per media item</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FBA vs FBM Direct Comparison Table */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            FBA (Fulfillment by Amazon) vs FBM (Merchant Fulfilled)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
                📦 Amazon FBA Model
              </h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc pl-4">
                <li>Automatic Prime Badge & Buy Box preference</li>
                <li>Amazon stores inventory & handles 24/7 customer service</li>
                <li>Deducts Weight Fulfillment + Category Referral Fees</li>
                <li>Best for high-volume, standardized small-to-medium goods</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
                🏷️ Amazon FBM Model
              </h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc pl-4">
                <li>Seller stores items in own warehouse or 3PL</li>
                <li>Seller packages and ships orders directly to buyers</li>
                <li>Pays only Category Referral Fees (15%) to Amazon</li>
                <li>Best for heavy/oversized goods or custom handmade items</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Frequently Asked Questions (Amazon FBA Guide)
          </h3>
          {AMAZON_FAQS.map((faq, i) => (
            <Accordion key={i} title={faq.question}>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs">{faq.answer}</p>
            </Accordion>
          ))}
        </div>

        {/* Related Pages */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Explore Related Calculators & Comparison Tools
          </h4>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link
              href="/profit-margin-calculator"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              Profit Margin Calculator →
            </Link>
            <Link
              href="/break-even-calculator"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              Break-Even Calculator →
            </Link>
            <Link
              href="/compare/etsy-vs-amazon"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              Etsy vs Amazon Profit Comparison →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
