import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { CalculatorPreview } from '@/components/calculators/CalculatorPreview';
import { JsonLd } from '@/components/seo/JsonLd';
import { AffiliateProviderGrid } from '@/components/monetization/AffiliateCard';
import {
  Calculator,
  ShieldCheck,
  Zap,
  Globe,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Layers,
  HelpCircle,
  BookOpen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sellrivo — Etsy & Amazon FBA Seller Profit & Fee Calculator',
  description:
    'Calculate real marketplace fees, product costs, shipping, advertising, break-even price, and net profit before you list on Etsy, Amazon FBA, or Print-on-Demand.',
  openGraph: {
    title: 'Sellrivo — Know Your Profit Before You Sell',
    description:
      'Free seller finance calculator for Etsy, Amazon FBA, Print-on-Demand, and ecommerce creators.',
    url: 'https://www.sellrivo.site',
    type: 'website',
  },
};

export default function HomePage() {
  const websiteSchema = {
    name: 'Sellrivo',
    url: 'https://www.sellrivo.site',
    description: 'Etsy, Amazon FBA, and Print-on-Demand Seller Profit & Fee Calculators',
  };

  const softwareSchema = {
    name: 'Sellrivo Profit Calculator',
    operatingSystem: 'Any',
    applicationCategory: 'FinanceApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <JsonLd type="WebSite" data={websiteSchema} />
      <JsonLd type="SoftwareApplication" data={softwareSchema} />

      <div className="space-y-20 py-8 sm:py-12">
        {/* HERO SECTION ABOVE THE FOLD */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Messaging */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/80 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                FREE SELLER PROFIT CALCULATORS
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-[1.1]">
                Know Your Profit Before You Sell.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Calculate marketplace fees, product costs, shipping, advertising, break-even price, and net profit in seconds. Built for Etsy sellers, Amazon FBA, POD creators, and ecommerce brands.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link href="/etsy-profit-calculator">
                  <Button size="lg" variant="brand" className="w-full sm:w-auto text-base gap-2">
                    <Calculator className="w-5 h-5" /> Calculate My Profit
                  </Button>
                </Link>

                <a href="#suite">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
                    Explore All Calculators
                  </Button>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-600 dark:text-slate-400 text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>100% Free Always</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                  <span>No Login Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>USD, GBP, EUR, CAD</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span>Verified 2026 Fees</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Hero Calculator */}
            <div className="lg:col-span-6">
              <CalculatorPreview />
            </div>
          </div>
        </section>

        {/* CALCULATOR SUITE GRID */}
        <section id="suite" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Complete Ecommerce Profit Calculator Suite
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Select a specialized calculator tailored for your marketplace or pricing strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/etsy-profit-calculator"
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 hover:shadow-lg transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold text-xl">
                  E
                </div>
                <span className="text-xs font-bold text-orange-600 dark:text-orange-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Calculate <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-orange-600 transition-colors">
                  Etsy Profit & Fee Calculator
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Calculate Etsy $0.20 listing fees, 6.5% transaction charges, Etsy Payments processing rates, and optional Offsite Ads.
                </p>
              </div>
            </Link>

            <Link
              href="/amazon-fba-calculator"
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:shadow-lg transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xl">
                  a
                </div>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Calculate <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 transition-colors">
                  Amazon FBA Calculator
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Estimate 15% category referral fees, weight-based FBA fulfillment fees, monthly storage, inbound shipping, and PPC spend.
                </p>
              </div>
            </Link>

            <Link
              href="/pod-profit-calculator"
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-lg transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xl">
                  P
                </div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Calculate <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition-colors">
                  Print-on-Demand Calculator
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Calculate Printify & Gelato blank garment base costs, supplier shipping, store commissions, and net profit margins.
                </p>
              </div>
            </Link>

            <Link
              href="/profit-margin-calculator"
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-lg transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xl">
                  %
                </div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Calculate <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors">
                  Profit Margin & Markup Calculator
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Understand the financial difference between profit margin % and markup %, gross profit, and net return on investment.
                </p>
              </div>
            </Link>

            <Link
              href="/break-even-calculator"
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 hover:shadow-lg transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xl">
                  B
                </div>
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Calculate <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-purple-600 transition-colors">
                  Break-Even Price Calculator
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Find the exact price floor and required unit sales volume to cover monthly software, tools, and studio overhead.
                </p>
              </div>
            </Link>

            <Link
              href="/etsy-pricing-calculator"
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 hover:shadow-lg transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold text-xl">
                  $
                </div>
                <span className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Calculate <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 transition-colors">
                  Smart Pricing Assistant
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Solve "What Should I Charge?" by solving the exact retail price required to achieve your target 20%, 30%, or 40% margin.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">How Sellrivo Works</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Four clear steps to protect your margins before listing inventory.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
                <span className="w-7 h-7 rounded-lg bg-brand-500 text-white font-bold text-xs flex items-center justify-center">1</span>
                <h4 className="font-bold text-sm text-slate-100">Enter Your Numbers</h4>
                <p className="text-xs text-slate-400">Input your retail price, product material costs, and shipping fees.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
                <span className="w-7 h-7 rounded-lg bg-brand-500 text-white font-bold text-xs flex items-center justify-center">2</span>
                <h4 className="font-bold text-sm text-slate-100">Select Marketplace</h4>
                <p className="text-xs text-slate-400">Choose Etsy, Amazon FBA, or Print-on-Demand fee rules.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
                <span className="w-7 h-7 rounded-lg bg-brand-500 text-white font-bold text-xs flex items-center justify-center">3</span>
                <h4 className="font-bold text-sm text-slate-100">See Real Take-Home</h4>
                <p className="text-xs text-slate-400">View exact fee deductions, net profit amount, and profit margin %.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
                <span className="w-7 h-7 rounded-lg bg-brand-500 text-white font-bold text-xs flex items-center justify-center">4</span>
                <h4 className="font-bold text-sm text-slate-100">Test Price Sensitivity</h4>
                <p className="text-xs text-slate-400">Use our sensitivity curve to see what happens if you raise your price by $5.</p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TOOLS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 text-xs font-bold">
                <Layers className="w-3.5 h-3.5" /> Platform Comparison
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Etsy vs Amazon FBA Fee & Profit Comparison
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Compare marketplace referral fees, listing charges, fulfillment costs, and audience scale to decide which platform fits your product catalog best.
              </p>
            </div>

            <Link href="/compare/etsy-vs-amazon" className="shrink-0">
              <Button size="lg" variant="brand" className="gap-2">
                View Etsy vs Amazon Guide <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* CONTEXTUAL AFFILIATE PROVIDERS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <AffiliateProviderGrid />
        </section>

        {/* POPULAR GUIDES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                Popular Seller Guides & Finance Articles
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Actionable pricing tutorials written specifically for online sellers.
              </p>
            </div>
            <Link href="/guides" className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline">
              View All Guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/guides/how-to-calculate-etsy-profit" className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-400 transition-all space-y-2">
              <BookOpen className="w-5 h-5 text-orange-500" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">How to Calculate Real Etsy Profit</h4>
              <p className="text-xs text-slate-500 line-clamp-2">Complete breakdown of Etsy fees, listing costs, and transaction fees.</p>
            </Link>

            <Link href="/guides/how-to-price-print-on-demand-products" className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-400 transition-all space-y-2">
              <BookOpen className="w-5 h-5 text-emerald-500" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">How to Price Print-on-Demand Items</h4>
              <p className="text-xs text-slate-500 line-clamp-2">Learn how to factor in Printify & Gelato supplier blanks and shipping.</p>
            </Link>

            <Link href="/guides/margin-vs-markup-explained" className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-400 transition-all space-y-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">Profit Margin vs Markup Explained</h4>
              <p className="text-xs text-slate-500 line-clamp-2">Never confuse margin % and markup % when pricing product inventory.</p>
            </Link>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Everything you need to know about Sellrivo</p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-600 shrink-0" /> Is Sellrivo really 100% free?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 pl-6">
                Yes. Sellrivo is completely free to use with zero registration, account creation, or hidden subscription fees required.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-600 shrink-0" /> How up-to-date are the marketplace fee assumptions?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 pl-6">
                Our platform fee rules are updated for 2026 based on official published schedules from Etsy, Amazon FBA, Printify, and Gelato.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-600 shrink-0" /> Are my financial numbers saved or kept private?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 pl-6">
                All calculations run locally inside your web browser. We never store or transmit your sensitive pricing numbers to external servers.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-brand-600 text-white space-y-4 shadow-xl">
            <h2 className="text-3xl font-black">Ready to Know Your Real Selling Profit?</h2>
            <p className="text-sm text-brand-100 max-w-md mx-auto">
              Start calculating your true take-home earnings before you list your next product.
            </p>
            <div className="pt-2">
              <Link href="/etsy-profit-calculator">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-brand-50 text-base font-bold">
                  Open Etsy Profit Calculator
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
