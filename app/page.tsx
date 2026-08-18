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

      <div className="space-y-12 pt-0 sm:pt-2 pb-12">
        {/* HERO SECTION ABOVE THE FOLD */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hero-glow-bg rounded-3xl pt-4 pb-6 sm:pt-6 sm:pb-8 border border-slate-200/50 dark:border-slate-800/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Messaging */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                <span className="text-slate-900 dark:text-slate-100">Know Your Profit</span>{' '}
                <span className="gradient-text-brand block sm:inline">Before You Sell.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-xl">
                Calculate marketplace fees, product costs, shipping, advertising, break-even price, and net profit in seconds. Built for Etsy sellers, Amazon FBA, POD creators, and ecommerce brands.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link href="/etsy-profit-calculator">
                  <Button size="lg" variant="brand" className="w-full sm:w-auto text-base gap-2 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all">
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
              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-600 dark:text-slate-400 text-xs font-semibold">
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
            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <CalculatorPreview />
              </div>
            </div>
          </div>
        </section>

        {/* CALCULATOR SUITE GRID */}
        <section id="suite" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" /> Specialized Tool Suite
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Stop Guessing Your Take-Home Pay. Built for Real Sellers.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Select a specialized fee calculator engineered for your exact marketplace, country rates, and pricing strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/etsy-profit-calculator"
              className="interactive-card group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 flex items-center justify-center font-black text-xl">
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
              className="interactive-card group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black text-xl">
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
              className="interactive-card group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-xl">
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
              className="interactive-card group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-xl">
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
              className="interactive-card group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black text-xl">
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
              className="interactive-card group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center font-black text-xl">
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

        {/* ALPHABETICAL & MARKETPLACE QUICK DIRECTORY GRID */}
        <section id="directory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm bg-subtle-grid space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider block">
                  Quick Alphabetical Index
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">
                  Marketplace & Tool Directory (A–Z)
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                10+ Specialized Tools Live
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-xs">
              <Link href="/amazon-fba-calculator" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500 transition-colors flex items-center gap-2.5 group">
                <span className="w-6 h-6 rounded-md bg-amber-500 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">A</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate">Amazon FBA</span>
              </Link>

              <Link href="/break-even-calculator" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500 transition-colors flex items-center gap-2.5 group">
                <span className="w-6 h-6 rounded-md bg-purple-500 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">B</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate">Break-Even</span>
              </Link>

              <Link href="/etsy-fee-calculator-canada" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500 transition-colors flex items-center gap-2.5 group">
                <span className="w-6 h-6 rounded-md bg-red-500 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">C</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate">Canada Etsy</span>
              </Link>

              <Link href="/etsy-digital-downloads-calculator" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500 transition-colors flex items-center gap-2.5 group">
                <span className="w-6 h-6 rounded-md bg-blue-500 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">D</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate">Digital Downloads</span>
              </Link>

              <Link href="/etsy-profit-calculator" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500 transition-colors flex items-center gap-2.5 group">
                <span className="w-6 h-6 rounded-md bg-orange-500 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">E</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate">Etsy Calculator</span>
              </Link>

              <Link href="/gelato-profit-calculator" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500 transition-colors flex items-center gap-2.5 group">
                <span className="w-6 h-6 rounded-md bg-emerald-500 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">G</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate">Gelato POD</span>
              </Link>

              <Link href="/etsy-fee-calculator-india" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500 transition-colors flex items-center gap-2.5 group">
                <span className="w-6 h-6 rounded-md bg-indigo-500 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">I</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate">India Etsy</span>
              </Link>

              <Link href="/profit-margin-calculator" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500 transition-colors flex items-center gap-2.5 group">
                <span className="w-6 h-6 rounded-md bg-cyan-500 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">M</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate">Margin & Markup</span>
              </Link>

              <Link href="/printify-profit-calculator" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500 transition-colors flex items-center gap-2.5 group">
                <span className="w-6 h-6 rounded-md bg-lime-500 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">P</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate">Printify POD</span>
              </Link>

              <Link href="/etsy-fee-calculator-uk" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500 transition-colors flex items-center gap-2.5 group">
                <span className="w-6 h-6 rounded-md bg-rose-500 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">U</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600 truncate">UK Etsy</span>
              </Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">4 Steps to Zero Fee Surprises</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Protect every dollar before you hit publish. Simple, exact calculations in seconds.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
                <span className="w-7 h-7 rounded-lg bg-brand-500 text-white font-bold text-xs flex items-center justify-center">1</span>
                <h4 className="font-bold text-sm text-slate-100">Enter Product Details</h4>
                <p className="text-xs text-slate-400">Input your retail price, garment/item manufacturing cost, and shipping fees.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
                <span className="w-7 h-7 rounded-lg bg-brand-500 text-white font-bold text-xs flex items-center justify-center">2</span>
                <h4 className="font-bold text-sm text-slate-100">Pick Target Platform</h4>
                <p className="text-xs text-slate-400">Select Etsy, Amazon FBA, or Print-on-Demand (Printify/Gelato) rules.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
                <span className="w-7 h-7 rounded-lg bg-brand-500 text-white font-bold text-xs flex items-center justify-center">3</span>
                <h4 className="font-bold text-sm text-slate-100">Audit Take-Home Pay</h4>
                <p className="text-xs text-slate-400">See real fee deductions, net payout, and net profit margin % instantly.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
                <span className="w-7 h-7 rounded-lg bg-brand-500 text-white font-bold text-xs flex items-center justify-center">4</span>
                <h4 className="font-bold text-sm text-slate-100">Simulate Price Hikes</h4>
                <p className="text-xs text-slate-400">Use our sensitivity curve to see what happens to your margin if you raise price by $5.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10x COMPETITIVE SUPERIORITY MATRIX */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-8 shadow-sm">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                Why Sellrivo is <span className="gradient-text-brand">10x Better</span> Than Other Fee Calculators
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Old calculator tools rely on outdated 2022 fee rates, ad-stuffed popups, and simple single-unit math. See how Sellrivo revolutionizes seller profit calculations.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-800">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-850 text-slate-900 dark:text-slate-100">
                    <th className="p-3.5 border border-slate-200 dark:border-slate-800 font-bold">Feature / Capability</th>
                    <th className="p-3.5 border border-slate-200 dark:border-slate-800 font-bold text-brand-600 dark:text-brand-400">Sellrivo Suite</th>
                    <th className="p-3.5 border border-slate-200 dark:border-slate-800 font-bold text-slate-500">Old Generic Calculators</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 font-bold">2026 Verified Global Fee Schedules</td>
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-bold">✅ Real-Time Rates (US, UK, EU, CA, AU, IN)</td>
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 text-slate-400">❌ Outdated 2022 Flat Fees</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 font-bold">Interactive Price Sensitivity Curve</td>
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-bold">✅ Live Multi-Price Simulation Slider</td>
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 text-slate-400">❌ Manual One-by-One Re-typing</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 font-bold">Niche Product Quick Preset Templates</td>
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-bold">✅ 1-Click Load (Handmade, POD, Digital, Wholesale)</td>
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 text-slate-400">❌ Blank Forms Only</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 font-bold">Printable PDF & Clipboard Report Cards</td>
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-bold">✅ Free 1-Click PDF & Report Card Export</td>
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 text-slate-400">❌ No Export Options</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 font-bold">Loss Warning & Break-Even Floor Meter</td>
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-bold">✅ Automatic Safety Alerts & Min Price Floor</td>
                    <td className="p-3.5 border border-slate-200 dark:border-slate-800 text-slate-400">❌ Silent Negative Numbers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* COMPARISON TOOLS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="space-y-3 text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 text-xs font-bold">
                <Layers className="w-3.5 h-3.5" /> Platform Showdown
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">
                Etsy vs Amazon FBA: Which One Makes You More Money?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Compare marketplace referral fees, listing charges, fulfillment costs, and audience scale before choosing where to list.
              </p>
            </div>

            <Link href="/compare/etsy-vs-amazon" className="shrink-0">
              <Button size="lg" variant="brand" className="gap-2 shadow-md">
                View Full Platform Matrix <ArrowRight className="w-4 h-4" />
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
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
                Master Marketplace Economics & Scale Profits
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Real math, step-by-step formulas, and battle-tested pricing strategies written for creators.
              </p>
            </div>
            <Link href="/guides" className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline">
              View All Guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/guides/how-to-calculate-etsy-profit" className="interactive-card p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-400 space-y-2">
              <BookOpen className="w-5 h-5 text-orange-500" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">How to Calculate Real Etsy Profit</h4>
              <p className="text-xs text-slate-500 line-clamp-2">Complete breakdown of Etsy fees, listing costs, and transaction fees.</p>
            </Link>

            <Link href="/guides/how-to-price-print-on-demand-tshirts" className="interactive-card p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-400 space-y-2">
              <BookOpen className="w-5 h-5 text-emerald-500" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">How to Price Print-on-Demand Items</h4>
              <p className="text-xs text-slate-500 line-clamp-2">Learn how to factor in Printify & Gelato supplier blanks and shipping.</p>
            </Link>

            <Link href="/guides/margin-vs-markup-formula" className="interactive-card p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-400 space-y-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">Profit Margin vs Markup Explained</h4>
              <p className="text-xs text-slate-500 line-clamp-2">Never confuse margin % and markup % when pricing product inventory.</p>
            </Link>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">Clear Answers to Your Seller Math Questions</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">No fluff. Transparent financial calculations for every major platform.</p>
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
          <div className="p-8 sm:p-12 rounded-3xl bg-brand-600 text-white space-y-5 shadow-2xl border border-brand-500">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Ready to Know Your Real Selling Profit?</h2>
            <p className="text-sm sm:text-base text-brand-100 max-w-md mx-auto font-medium">
              Start calculating your true take-home earnings before you list your next product.
            </p>
            <div className="pt-3">
              <Link href="/etsy-profit-calculator">
                <button
                  type="button"
                  className="px-7 py-4 rounded-xl bg-white text-slate-900 font-black text-base shadow-xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2.5"
                >
                  <Calculator className="w-5 h-5 text-brand-600" />
                  <span>Open Etsy Profit Calculator</span>
                  <ArrowRight className="w-4 h-4 text-brand-600" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ABOUT & CONTACT SECTION */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" /> High-Trust Utility
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">About Sellrivo</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                  Sellrivo was built with one clear mission: to provide 100% free, transparent, and accurate fee calculators for online sellers across Etsy, Amazon FBA, Print-on-Demand, and Shopify.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link href="/about">
                  <Button size="sm" variant="outline">Learn More</Button>
                </Link>
                <Link href="/contact">
                  <Button size="sm" variant="brand">Contact Support</Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">🔒 100% Client-Side Privacy</span>
                <p className="text-slate-600 dark:text-slate-400">All financial calculations execute locally inside your web browser. We never store or transmit your sensitive pricing numbers.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">⚡ Verified 2026 Fee Rules</span>
                <p className="text-slate-600 dark:text-slate-400">Fee percentages and fixed charges are continuously verified against official marketplace House Rules for US, UK, CA, AU, & IN.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">✉️ Direct Team Contact</span>
                <p className="text-slate-600 dark:text-slate-400">Questions or fee updates? Email us directly at <a href="mailto:mdhashmi955@gmail.com" className="text-brand-600 dark:text-brand-400 font-bold hover:underline">mdhashmi955@gmail.com</a>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRIVACY POLICY & TRUST HIGHLIGHT SECTION */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                  Data Security & Transparency Guarantee
                </span>
                <h3 className="text-xl font-black text-white">Privacy Policy Overview</h3>
              </div>
              <Link href="/privacy-policy">
                <Button size="sm" variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800 text-xs">
                  Read Full Privacy Policy →
                </Button>
              </Link>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
              Sellrivo takes seller data privacy with total seriousness. Your cost inputs, retail pricing, profit margins, and sales estimates remain 100% private to your device. We do not require accounts, we do not log pricing entries on remote servers, and we strictly comply with global GDPR & CCPA standards.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
