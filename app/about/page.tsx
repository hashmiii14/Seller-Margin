import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { ShieldCheck, Zap, Heart, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About SellerMargin | Independent Seller Finance Toolkit',
  description: 'Learn about SellerMargin’s mission to provide fast, transparent, and accurate fee & profit calculators for online marketplace sellers.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          About SellerMargin
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
          Know Your Profit Before You Sell.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <p>
          SellerMargin was created to solve a universal problem faced by online sellers: hidden marketplace fees and complex unit economics. Whether you are crafting handmade goods for Etsy, storing inventory in Amazon FBA warehouses, or shipping print-on-demand t-shirts through Printify, knowing your true net take-home profit before listing an item is critical to building a sustainable business.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 pt-2">Our Core Principles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-500" /> Fast & Mobile-First
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Calculations occur instantly in your browser without lag, heavy scripts, or mandatory account logins.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500" /> Transparent Assumptions
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Every fee formula, listing charge, and processing rate is clearly documented with official source references.
            </p>
          </div>
        </div>

        <p className="pt-2 text-xs text-slate-500">
          SellerMargin operates as an independent educational financial tool. We are not affiliated with Etsy, Amazon, or third-party marketplace platforms.
        </p>
      </div>
    </div>
  );
}
