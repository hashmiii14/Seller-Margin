import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Etsy vs Amazon FBA Fee & Profit Comparison | SellerMargin',
  description: 'Compare Etsy vs Amazon FBA seller fees, pricing flexibility, fulfillment, handmade suitability, and profitability.',
};

export default function EtsyVsAmazonComparisonPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs
        items={[
          { name: 'Compare', href: '/compare/etsy-vs-amazon' },
          { name: 'Etsy vs Amazon FBA', href: '/compare/etsy-vs-amazon' },
        ]}
      />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Etsy vs Amazon FBA: Fee & Profit Comparison
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Comparing two of the largest marketplace channels for online sellers. Understand the fee models, fulfillment options, and profit potential before choosing where to list.
        </p>
      </div>

      {/* Side by Side Platform Comparison Matrix */}
      <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 sm:p-6">
        <table className="w-full text-left text-sm min-w-[650px]">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100">
              <th className="py-3 px-4 font-bold">Feature / Dimension</th>
              <th className="py-3 px-4 font-bold text-orange-600 dark:text-orange-400">Etsy</th>
              <th className="py-3 px-4 font-bold text-amber-600 dark:text-amber-400">Amazon FBA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <tr>
              <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100">Listing / Subscription Fee</td>
              <td className="py-3.5 px-4">$0.20 USD per listing (auto-renews)</td>
              <td className="py-3.5 px-4">$39.99/mo Professional Account or $0.99/sale Individual</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100">Marketplace Referral Commission</td>
              <td className="py-3.5 px-4">6.5% of sale price + shipping</td>
              <td className="py-3.5 px-4">15% average (varies 8%–20% by category)</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100">Payment Processing Fee</td>
              <td className="py-3.5 px-4">3.0% + $0.25 USD (US Etsy Payments)</td>
              <td className="py-3.5 px-4">Included in referral commission</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100">Fulfillment & Shipping</td>
              <td className="py-3.5 px-4">Self-fulfilled or 3PL (seller ships)</td>
              <td className="py-3.5 px-4">Amazon FBA handles prime storage & packing ($3.22+)</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100">Handmade & Custom Products</td>
              <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Ideal for custom craft & vintage
              </td>
              <td className="py-3.5 px-4 text-slate-500">Requires Amazon Handmade approval</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100">Average Total Platform Take %</td>
              <td className="py-3.5 px-4 font-bold">10% – 16% of sale</td>
              <td className="py-3.5 px-4 font-bold">25% – 45% of sale (including FBA)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CTA Section Triggering Calculators */}
      <div className="p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold">Calculate Your Expected Net Profit</h3>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Test your product costs on both calculators to see which platform delivers higher take-home profit for your specific item.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/etsy-profit-calculator">
            <Button variant="primary" size="md">
              Calculate Etsy Profit
            </Button>
          </Link>
          <Link href="/amazon-fba-calculator">
            <Button variant="secondary" size="md">
              Calculate FBA Profit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
