import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Independent Software & Fee Disclaimer | Sellrivo',
  description:
    'Sellrivo is an independent calculator tool. Read our official platform affiliation and fee estimate disclaimer.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Disclaimer', href: '/disclaimer' }]} />

      <JsonLd
        type="WebPage"
        data={{
          name: 'Fee Disclaimer | Sellrivo',
          description: 'Official platform affiliation and fee calculation estimate disclaimer.',
        }}
      />

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          Platform Affiliation & Fee Disclaimer
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Last Updated: August 2026</p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base space-y-4">
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 flex items-start gap-3 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold">Independent Software Statement:</strong>
            Sellrivo is an independent software calculator suite developed for educational purposes. We are not affiliated with, authorized by, endorsed by, or in any way officially connected with Etsy, Inc., Amazon.com, Inc., Printify, Inc., or Gelato ASA.
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">Estimates & Policy Changes</h3>
        <p>
          Marketplace fee structures, payment gateway rates, currency exchange rates, and warehouse storage costs change over time. Calculations provided by Sellrivo are estimates based on user inputs and published platform schedules. Always verify current fee policies directly with official marketplace portals before pricing inventory or shipping products.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">Trademarks</h3>
        <p>
          "Etsy", "Amazon FBA", "Printify", and "Gelato" are trademarks or registered trademarks of their respective owners. Use of them on Sellrivo does not imply any affiliation with or endorsement by them.
        </p>
      </div>
    </div>
  );
}
