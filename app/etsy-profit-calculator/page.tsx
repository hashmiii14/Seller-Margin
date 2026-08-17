import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Accordion } from '@/components/ui/Select';
import { SEO_PAGES } from '@/lib/config/seo-pages';
import Link from 'next/link';
import { AdSlot } from '@/components/ads/AdSlot';

export const metadata: Metadata = {
  title: 'Etsy Profit Calculator (2026 Updated Rates) | Calculate Etsy Fees & Net Profit',
  description:
    'Free Etsy profit calculator. Estimate exact $0.20 listing fees, 6.5% transaction fee, Etsy Payments processing rates (US, UK, EU, CA, AU, IN), Offsite Ads commission, and take-home seller net profit.',
};

const DETAILED_FAQS = [
  {
    question: 'What fees does Etsy deduct from every sale in 2026?',
    answer:
      'Etsy deducts four main fees per transaction: 1) $0.20 USD Listing Fee (charged per quantity sold), 2) 6.5% Transaction Fee (applied to item retail price plus shipping charged to buyer), 3) Etsy Payments Processing Fee (3.0% + $0.25 in US; 4.0% + £0.20 in UK; 4.0% + €0.30 in EU), and 4) Optional Offsite Ads fee (12% to 15% if an ad leads to a sale).',
  },
  {
    question: 'How does Etsy calculate the 6.5% transaction fee?',
    answer:
      'Etsy applies the 6.5% transaction fee to the gross order total paid by the buyer (Selling Price + Shipping Charge). For example, if an item sells for $30.00 with $5.00 shipping, the total is $35.00. Etsy’s transaction fee is 6.5% of $35.00 = $2.28.',
  },
  {
    question: 'What is the difference between Etsy Onsite Ads and Offsite Ads?',
    answer:
      'Onsite Ads are pay-per-click (PPC) ads that appear directly within Etsy search results (you control the daily budget). Offsite Ads are paid ads running on Google, Facebook, Instagram, and Pinterest; Etsy only charges a fee (15% for shops <$10k/year, 12% for shops >$10k/year) when an offsite ad results in a sale within 30 days.',
  },
  {
    question: 'Are digital downloads cheaper to sell on Etsy?',
    answer:
      'Yes! Digital products (e.g. printable wall art, SVG cut files, Canva templates, digital planners) have $0 shipping costs and $0 cost of goods sold (COGS). This yields higher net profit margins (often 75% to 85% net take-home margin).',
  },
  {
    question: 'How do I calculate my Etsy break-even price floor?',
    answer:
      'Your break-even price is the absolute lowest selling price at which Net Profit equals $0. Calculate it by adding your item cost + packaging + shipping postage, then dividing by (1 - total percentage fee rate). Use Sellrivo to automatically calculate your exact break-even floor.',
  },
  {
    question: 'Do Etsy fees include VAT or Sales Tax?',
    answer:
      'Etsy automatically collects and remits buyer sales tax in most US states and VAT/GST in eligible countries. Seller fees displayed in Sellrivo reflect direct shop account ledger deductions.',
  },
];

export default function EtsyProfitCalculatorSeoPage() {
  const pageData = SEO_PAGES['etsy-profit-calculator'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ name: 'Etsy Profit Calculator', href: '/etsy-profit-calculator' }]} />

      <JsonLd
        type="FAQPage"
        data={{
          mainEntity: DETAILED_FAQS.map((faq) => ({
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
          Etsy Profit & Fee Calculator (2026 Verified Rates)
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Accurately calculate your real take-home seller profit, total Etsy fees, payment processing costs, break-even floor, and net profit margin % in seconds before you list your next product.
        </p>
      </div>

      <EtsyCalculator />

      <AdSlot type="leaderboard" />

      {/* Master Educational & SEO Guide */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-8 shadow-sm">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            How to Accurately Price Products & Calculate Take-Home Etsy Profit
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
            Running a profitable handmade, vintage, or digital printables business on Etsy requires knowing your exact cost structure. Etsy deducts multiple layered fees automatically from every sale before disbursing funds to your bank account.
          </p>
        </div>

        {/* 2026 Global Etsy Fee Rate Comparison Matrix Table */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            2026 Etsy Fee Rates by Country & Currency
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Country / Region</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Listing Fee</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Transaction Fee</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Payment Processing Fee</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-800 font-bold">Offsite Ads Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">🇺🇸 United States (USD $)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$0.20 USD</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">6.5%</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">3.0% + $0.25 USD</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">12% or 15%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">🇬🇧 United Kingdom (GBP £)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$0.20 USD (~£0.16)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">6.5%</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">4.0% + £0.20 GBP</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">12% or 15%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">🇩🇪 Germany & EU (EUR €)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$0.20 USD (~€0.19)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">6.5%</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">4.0% + €0.30 EUR</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">12% or 15%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">🇨🇦 Canada (CAD $)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$0.20 USD (~$0.27)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">6.5%</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">3.0% + $0.25 CAD</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">12% or 15%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">🇦🇺 Australia (AUD $)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$0.20 USD (~$0.30)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">6.5%</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">3.0% + $0.25 AUD</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">12% or 15%</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-3 border border-slate-200 dark:border-slate-800 font-bold">🇮🇳 India (INR ₹)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">$0.20 USD (~₹16.5)</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">6.5%</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">5.0% + ₹25.0 INR</td>
                  <td className="p-3 border border-slate-200 dark:border-slate-800">12% or 15%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 5-Step Formula Breakdown */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Step-by-Step Etsy Take-Home Profit Formula
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">1. Gross Order Revenue</h4>
              <p className="font-mono text-brand-600 dark:text-brand-400 font-bold">
                Revenue = (Selling Price × Quantity) + Shipping Charged to Buyer
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Total money received from the customer before any deductions or postage costs.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">2. Total Etsy Platform Fees</h4>
              <p className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                Fees = Listing + (6.5% × Revenue) + Processing + Offsite Ads
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                All mandatory and optional Etsy account ledger deductions combined.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">3. Total Seller Expenses</h4>
              <p className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                Expenses = Item Materials Cost + Actual Shipping Postage + Ad Spend
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Your direct manufacturing cost of goods sold (COGS) plus shipping supplies.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">4. Net Take-Home Profit</h4>
              <p className="font-mono text-slate-900 dark:text-slate-100 font-bold">
                Net Profit = Revenue - Total Etsy Fees - Total Expenses
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                The exact net dollar amount deposited into your bank account.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Frequently Asked Questions (Etsy Fee & Profit Guide)
          </h3>
          {DETAILED_FAQS.map((faq, i) => (
            <Accordion key={i} title={faq.question}>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs">{faq.answer}</p>
            </Accordion>
          ))}
        </div>

        {/* Localized Country Links */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Explore Country-Specific Etsy Fee Calculators
          </h4>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link
              href="/etsy-fee-calculator-uk"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              🇬🇧 UK Etsy Fee Calculator (GBP £) →
            </Link>
            <Link
              href="/etsy-fee-calculator-germany"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              🇩🇪 Germany Etsy Fee Calculator (EUR €) →
            </Link>
            <Link
              href="/etsy-fee-calculator-canada"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              🇨🇦 Canada Etsy Fee Calculator (CAD $) →
            </Link>
            <Link
              href="/etsy-fee-calculator-australia"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              🇦🇺 Australia Etsy Fee Calculator (AUD $) →
            </Link>
            <Link
              href="/etsy-fee-calculator-india"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 transition-colors"
            >
              🇮🇳 India Etsy Fee Calculator (INR ₹) →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
