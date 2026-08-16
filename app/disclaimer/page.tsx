import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Independent Software & Fee Disclaimer | SellerMargin',
  description: 'SellerMargin is an independent calculator tool. Read our official platform affiliation and fee estimate disclaimer.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Disclaimer', href: '/disclaimer' }]} />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Disclaimer & Affiliation Notice
        </h1>
        <p className="text-xs text-slate-400">Last updated: August 1, 2026</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-base">Independent Educational Tool</h2>
            <p className="text-xs mt-1">
              SellerMargin is an independent software calculator suite developed for educational purposes. We are not affiliated with, authorized by, endorsed by, or in any way officially connected with Etsy, Inc., Amazon.com, Inc., Printify, Inc., or Gelato ASA.
            </p>
          </div>
        </div>

        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Marketplace Trademark Notice</h2>
        <p>
          All product and company names (including "Etsy", "Amazon FBA", "Printify", and "Gelato") are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Calculation Accuracy & Payout Variations</h2>
        <p>
          Marketplace fee structures, payment gateway rates, currency exchange rates, and warehouse storage costs change over time. Calculations provided by SellerMargin are estimates based on user inputs and published platform schedules. Always verify current fee policies directly with official marketplace portals before pricing inventory or shipping products.
        </p>
      </div>
    </div>
  );
}
