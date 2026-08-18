import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AdSlot } from '@/components/ads/AdSlot';
import { SmartAffiliateCard } from '@/components/monetization/SmartAffiliateCard';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sellrivo.site';
const pageUrl = `${siteUrl}/compare/etsy-vs-amazon-fba`;

export const metadata: Metadata = {
  title: 'Etsy vs Amazon FBA Fee & Profitability Comparison (2026) | Sellrivo',
  description:
    'Complete head-to-head fee comparison between Etsy and Amazon FBA in 2026. Compare listing fees, referral rates, pick & pack costs, and net seller profit margins.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Etsy vs Amazon FBA Fee & Profitability Comparison (2026) | Sellrivo',
    description:
      'Compare referral fees, fulfillment costs, listing charges, and take-home profits on Etsy vs Amazon FBA.',
    url: pageUrl,
    siteName: 'Sellrivo',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Etsy vs Amazon FBA Fee Comparison | Sellrivo',
    description: 'Detailed side-by-side fee comparison between Etsy and Amazon FBA.',
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function EtsyVsAmazonFbaPage() {
  const faqSchemaData = {
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Amazon FBA more expensive than Etsy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Amazon FBA fee burden typically ranges between 30% and 45% due to referral rates and pick-and-pack fulfillment costs, compared to 11% to 15% on Etsy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which platform is best for print-on-demand products?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Etsy is significantly better for print-on-demand because you can self-fulfill or connect suppliers directly without paying monthly Amazon FBA inventory storage fees.',
        },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ name: 'Etsy vs Amazon FBA', href: '/compare/etsy-vs-amazon-fba' }]} />

      <JsonLd
        type="WebPage"
        data={{
          name: 'Etsy vs Amazon FBA Comparison',
          description: 'Side-by-side comparison of Etsy and Amazon FBA selling fees and profit margins.',
          url: pageUrl,
        }}
      />
      <JsonLd type="FAQPage" data={faqSchemaData} />

      <AdSlot type="leaderboard" />

      <div className="space-y-3 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> 2026 Marketplace Breakdown
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Etsy vs Amazon FBA: 2026 Profitability Showdown
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Compare 6.5% Etsy transaction fees against Amazon’s 15% referral and pick-and-pack fulfillment costs to discover which platform delivers higher net margins for your business.
        </p>
      </div>

      {/* Comparison Table */}
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
              <td className="p-4 font-semibold">Monthly Plan Fee</td>
              <td className="p-4">$0 (Free basic store)</td>
              <td className="p-4">$39.99/mo (Professional Account)</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Listing / Insertion Fee</td>
              <td className="p-4">$0.20 per listing / 4 months</td>
              <td className="p-4">$0 (Included in Professional plan)</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Base Commission Fee</td>
              <td className="p-4 font-bold text-slate-900 dark:text-slate-100">6.5% transaction fee</td>
              <td className="p-4 font-bold text-slate-900 dark:text-slate-100">15% referral fee (avg)</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Payment Processing</td>
              <td className="p-4">3.0% + $0.25 (US Etsy Payments)</td>
              <td className="p-4">Included in referral fee</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Fulfillment Method</td>
              <td className="p-4">Merchant self-ships or uses POD</td>
              <td className="p-4">Amazon FBA Pick & Pack ($3.50+ / unit)</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Monthly Inventory Storage</td>
              <td className="p-4">$0</td>
              <td className="p-4">$0.87 / cu.ft (Q1-Q3) / $2.40 (Q4)</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Average Total Fee Burden</td>
              <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">11% – 15% of sale price</td>
              <td className="p-4 font-bold text-amber-600 dark:text-amber-400">30% – 45% of sale price</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Ideal Business Model</td>
              <td className="p-4">Handmade, custom gifts, digital, POD</td>
              <td className="p-4">High-volume private label, retail arbitrage</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SmartAffiliateCard partnerId="junglescout" />
        <SmartAffiliateCard partnerId="helium10" />
      </div>

      <AdSlot type="responsive" />

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
