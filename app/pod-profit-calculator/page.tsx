import React from 'react';
import type { Metadata } from 'next';
import { PodCalculator } from '@/components/calculators/PodCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Accordion } from '@/components/ui/Select';
import { SEO_PAGES } from '@/lib/config/seo-pages';
import Link from 'next/link';
import { AdSlot } from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: SEO_PAGES['pod-profit-calculator'].title,
  description: SEO_PAGES['pod-profit-calculator'].description,
};

export default function PodProfitCalculatorSeoPage() {
  const pageData = SEO_PAGES['pod-profit-calculator'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ name: 'POD Profit Calculator', href: '/pod-profit-calculator' }]} />

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

      <PodCalculator />

      <AdSlot type="leaderboard" />

      {/* Structured SEO Content Section */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
          How to Price Print-on-Demand Products for Maximum Take-Home Profit
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Print-on-Demand (POD) via Printify, Gelato, or Gooten allows zero inventory holding costs. However, low profit margins are the #1 reason POD sellers fail. To stay profitable, you must account for blank apparel base prices, supplier shipping, and storefront transaction commissions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">1. Blank Garment Base Cost</h3>
            <p className="text-slate-600 dark:text-slate-400">
              The wholesale cost charged by Printify or Gelato to print your design on t-shirts (e.g. Bella+Canvas 3001), hoodies, or mugs.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">2. Print Provider Shipping</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Shipping fees billed by the print provider to deliver the parcel to your customer. Calculate whether you charge shipping or offer "Free Shipping".
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">3. Storefront Selling Fees</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Commissions charged by Etsy (6.5% + $0.20), Shopify Payments (2.9% + $0.30), or WooCommerce payment gateways per order.
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
