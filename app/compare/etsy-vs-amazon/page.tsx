import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Etsy vs Amazon FBA Fee & Profit Comparison | Sellrivo',
  description:
    'Compare Etsy vs Amazon FBA fees, fulfillment requirements, listing charges, audience scale, and profit margins to decide where to sell your products.',
};

export default function EtsyVsAmazonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ name: 'Etsy vs Amazon FBA', href: '/compare/etsy-vs-amazon' }]} />

      <JsonLd
        type="WebPage"
        data={{
          name: 'Etsy vs Amazon FBA Comparison',
          description: 'Side-by-side comparison of Etsy and Amazon FBA selling fees.',
        }}
      />

      <div className="space-y-3 text-left">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Etsy vs Amazon FBA: Fee & Profit Comparison (2026)
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
          Compare referral fees, listing costs, fulfillment complexity, and profit margin potential for handmade, custom, and private label goods.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 font-bold border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="p-4">Feature / Fee</th>
              <th className="p-4 text-orange-600 dark:text-orange-400">Etsy Marketplace</th>
              <th className="p-4 text-amber-600 dark:text-amber-400">Amazon FBA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
            <tr>
              <td className="p-4 font-semibold">Listing Fee</td>
              <td className="p-4">$0.20 USD per item (4-month renewal)</td>
              <td className="p-4">$0 (Individual plan has $0.99/item fee)</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Transaction Fee</td>
              <td className="p-4 font-bold text-slate-900 dark:text-slate-100">6.5% of sale price + shipping</td>
              <td className="p-4 font-bold text-slate-900 dark:text-slate-100">15% average referral fee</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Payment Processing</td>
              <td className="p-4">3.0% + $0.25 (US Etsy Payments)</td>
              <td className="p-4">Included in Amazon referral fee</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Fulfillment</td>
              <td className="p-4">Merchant ships or uses POD supplier</td>
              <td className="p-4">Amazon picks, packs & ships (FBA fee applies)</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Best Product Types</td>
              <td className="p-4">Handmade, vintage, craft supplies, POD</td>
              <td className="p-4">Private label, brand registry, high volume</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <Link href="/etsy-profit-calculator">
          <Button size="lg" variant="brand" className="w-full justify-between">
            <span>Open Etsy Calculator</span> <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <Link href="/amazon-fba-calculator">
          <Button size="lg" variant="outline" className="w-full justify-between">
            <span>Open Amazon FBA Calculator</span> <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
