import React from 'react';
import type { Metadata } from 'next';
import { PodCalculator } from '@/components/calculators/PodCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Accordion } from '@/components/ui/Select';
import Link from 'next/link';
import { AdSlot } from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: 'Print-on-Demand Profit Calculator (2026) | Printify & Gelato Margin Tool',
  description:
    'Free Print-on-Demand (POD) profit calculator for Printify, Gelato & Printful. Calculate blank apparel costs, supplier shipping postage, Etsy/Shopify fees, ad spend & net take-home profit.',
};

const POD_FAQS = [
  {
    question: 'What is a realistic profit margin for Print-on-Demand in 2026?',
    answer:
      'A healthy target net margin for Print-on-Demand (POD) is 25% to 35% per sale. For a $32.00 custom hoodie or heavy cotton t-shirt, aim for at least $8.00 to $12.00 net profit after deducting blank item costs, shipping, platform fees, and marketing.',
  },
  {
    question: 'How do Printify and Gelato base blank garment costs differ?',
    answer:
      'Printify offers a marketplace of multiple independent print providers (e.g. Monster Digital, SwiftPOD) allowing you to pick lowest base prices ($7.50 to $9.50 per t-shirt). Gelato uses a unified global printing network with localized printing in 32+ countries to reduce international shipping times.',
  },
  {
    question: 'Should I offer Free Shipping or charge shipping on POD items?',
    answer:
      'Offering Free Shipping increases Etsy and Shopify search conversion rates by 20% to 30%. However, you must bake the supplier shipping cost ($4.50–$5.50 for t-shirts) directly into your retail selling price to preserve net profit.',
  },
  {
    question: 'How do Etsy fees impact Print-on-Demand margins?',
    answer:
      'Etsy deducts $0.20 listing fee + 6.5% transaction fee (on retail price + shipping) + 3.0% + $0.25 payment processing fee. For a $28 t-shirt, Etsy fees total roughly $2.95.',
  },
  {
    question: 'What is Printify Premium and is it worth it?',
    answer:
      'Printify Premium costs $29/month and provides up to 20% discounts on all blank garments. If you sell more than 20 to 25 items per month, the base cost savings exceed the subscription price.',
  },
];

export default function PodProfitCalculatorSeoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ name: 'POD Profit Calculator', href: '/pod-profit-calculator' }]} />

      <JsonLd
        type="FAQPage"
        data={{
          mainEntity: POD_FAQS.map((faq) => ({
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
          Print-on-Demand Profit & Margin Calculator (2026)
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Calculate net earnings for custom t-shirts, hoodies, mugs, and wall art fulfilled via Printify, Gelato, or Printful on Etsy, Shopify, or WooCommerce.
        </p>
      </div>

      <PodCalculator />

      <AdSlot type="leaderboard" />

      {/* Master Educational SEO Guide */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-8 shadow-sm">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            How to Price Print-on-Demand Apparel & Mugs for Maximum Margin
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
            Print-on-Demand eliminates inventory holding risk, but thin profit margins are the #1 killer of new POD stores. Calculating base garment costs, shipping fees, and storefront platform fees guarantees sustainable profits.
          </p>
        </div>

        {/* POD Print Provider Base Cost Matrix Table */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Print Provider Base Blank Cost & Shipping Benchmark (2026)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Product Type</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Printify Base Cost</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Gelato Base Cost</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">US Shipping Postage</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Rec. Retail Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Unisex T-Shirt (Bella+Canvas 3001)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$7.50 – $9.20</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$8.90 – $10.50</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$4.50 – $4.99</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">$24.99 – $29.99</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Heavy Blend Hoodie (Gildan 18000)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$16.50 – $19.00</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$18.20 – $21.00</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$7.99 – $9.50</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">$44.99 – $54.99</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Ceramic Mug (11 oz White)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$4.20 – $5.50</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$5.10 – $6.20</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">$5.50 – $6.50</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">$16.99 – $21.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Frequently Asked Questions (Print-on-Demand Profit Guide)
          </h3>
          {POD_FAQS.map((faq, i) => (
            <Accordion key={i} title={faq.question}>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs">{faq.answer}</p>
            </Accordion>
          ))}
        </div>

        {/* Related Pages */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Explore Specialized POD Calculators
          </h4>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link
              href="/printify-profit-calculator"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              Printify Profit Calculator →
            </Link>
            <Link
              href="/gelato-profit-calculator"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              Gelato Profit Calculator →
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
