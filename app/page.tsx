import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CalculatorPreview } from '@/components/calculators/CalculatorPreview';
import { AdSlot } from '@/components/monetization/AdSlot';
import { GUIDES } from '@/lib/config/guides';
import {
  Calculator,
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
  TrendingUp,
  Package,
  Layers,
  Sparkles,
} from 'lucide-react';

export default function HomePage() {
  const guideList = Object.values(GUIDES).slice(0, 3);

  return (
    <div className="w-full space-y-16 py-8 sm:py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Independent Ecommerce Seller Finance Engine</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-[1.1]">
              Know Your Profit <br className="hidden sm:inline" />
              <span className="text-brand-600 dark:text-brand-400">Before You Sell.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Calculate Etsy fees, Amazon FBA fees, product material costs, profit margins, break-even prices, and estimated take-home earnings in seconds.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Link href="/etsy-profit-calculator">
                <Button variant="primary" size="lg" className="gap-2">
                  Calculate My Profit <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/compare/etsy-vs-amazon">
                <Button variant="outline" size="lg">
                  Compare Etsy vs Amazon
                </Button>
              </Link>
            </div>

            {/* Compact Trust Badges */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-500" /> 100% Free
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-500" /> No Account Needed
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-500" /> Browser Calculations
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-500" /> Multi-Currency
              </div>
            </div>
          </div>

          {/* Right Hero Column: Live Interactive Calculator Preview */}
          <div className="lg:col-span-5">
            <CalculatorPreview />
          </div>
        </div>
      </section>

      {/* Above-the-fold Ad Slot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot format="horizontal" />
      </div>

      {/* Primary Calculator Cards Suite */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Free Profitability Calculator Suite
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Select a specialized marketplace calculator tailored to your business model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Etsy Card */}
          <Link href="/etsy-profit-calculator" className="group">
            <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md hover:border-brand-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950 flex items-center justify-center font-bold text-orange-600 dark:text-orange-400 text-xl mb-4">
                  E
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  Etsy Profit Calculator
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Calculate listing fees ($0.20), 6.5% transaction fees, Etsy Payments processing, and offsite ad rates.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-bold text-brand-600 dark:text-brand-400">
                Calculate Etsy Profit <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Amazon FBA Card */}
          <Link href="/amazon-fba-calculator" className="group">
            <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md hover:border-brand-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center font-bold text-amber-600 dark:text-amber-400 text-xl mb-4">
                  a
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  Amazon FBA Calculator
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Estimate 15% referral commissions, weight-based FBA fulfillment fees, storage costs, and PPC ad spend.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-bold text-brand-600 dark:text-brand-400">
                Calculate Amazon Profit <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Print-on-Demand Card */}
          <Link href="/pod-profit-calculator" className="group">
            <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md hover:border-brand-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center font-bold text-emerald-600 dark:text-emerald-400 text-xl mb-4">
                  P
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  Print-on-Demand Calculator
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Calculate margins for Printify and Gelato blanks, shipping charges, store commissions, and net profit.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-bold text-brand-600 dark:text-brand-400">
                Calculate POD Margins <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Break-Even Card */}
          <Link href="/break-even-calculator" className="group">
            <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md hover:border-brand-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400 text-xl mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  Break-Even Price Calculator
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Find the exact minimum retail price and sales volume required to cover fixed overhead and variable costs.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-bold text-brand-600 dark:text-brand-400">
                Find Break-Even Price <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Profit Margin Card */}
          <Link href="/profit-margin-calculator" className="group">
            <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md hover:border-brand-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950 flex items-center justify-center font-bold text-purple-600 dark:text-purple-400 text-xl mb-4">
                  %
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  Profit Margin & Markup Calculator
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Calculate Net Profit Margin %, Price Markup %, Gross Profit, and Return on Investment (ROI).
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-bold text-brand-600 dark:text-brand-400">
                Calculate Margin vs Markup <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Smart Pricing Assistant Card */}
          <Link href="/calculators/pricing" className="group">
            <div className="h-full rounded-2xl border border-brand-200 dark:border-brand-900 bg-gradient-to-br from-brand-50/50 to-white dark:from-brand-950/20 dark:to-slate-900 p-6 shadow-sm hover:shadow-md hover:border-brand-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center font-bold text-white text-xl mb-4">
                  <Sparkles className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  Smart Pricing Assistant
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  "What Should I Charge?" Input your costs to calculate the exact retail price for your target profit.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-bold text-brand-600 dark:text-brand-400">
                Use Pricing Assistant <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Guides & Educational Content Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Popular Seller Finance Guides
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Actionable guides on pricing, marketplace fees, and unit economics.
            </p>
          </div>
          <Link href="/guides" className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline">
            View All Guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guideList.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group">
              <div className="h-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    {guide.category} • {guide.readTime}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-1.5 group-hover:text-brand-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">
                    {guide.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-brand-600">
                  Read Article →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
