import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { ShieldCheck, Calculator, Target, Mail } from 'lucide-react';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sellrivo.site';
const pageUrl = `${siteUrl}/about`;

export const metadata: Metadata = {
  title: 'About Sellrivo — Independent Ecommerce Seller Calculators',
  description:
    'Learn about Sellrivo, our mission to make ecommerce fee calculations transparent, accurate, and accessible for sellers worldwide.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'About Sellrivo — Independent Ecommerce Seller Calculators',
    description: 'Learn about Sellrivo, our mission to make fee calculations transparent and accurate.',
    url: pageUrl,
    siteName: 'Sellrivo',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sellrivo',
    description: 'Learn about Sellrivo and our free seller fee calculators.',
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />

      <JsonLd
        type="WebPage"
        data={{
          name: 'About Sellrivo',
          description: 'Independent ecommerce seller financial calculation platform.',
        }}
      />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          About Sellrivo
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
          Know Your Profit Before You Sell. We build fast, accurate, and free financial calculation tools for online sellers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <ShieldCheck className="w-6 h-6 text-brand-600" />
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">100% Free & Independent</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            No mandatory accounts, paywalls, or credit card requirements. Built independently for ecommerce creators.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <Calculator className="w-6 h-6 text-emerald-600" />
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">Transparent Formulas</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Every fee percentage and fixed charge is clearly documented with official source references and review dates.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <Target className="w-6 h-6 text-blue-600" />
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">Privacy-First Architecture</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            All calculations execute locally inside your browser. We never store or transmit your sensitive pricing numbers.
          </p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
        <h3 className="text-xl font-bold">Contact & Feedback</h3>
        <p className="text-xs sm:text-sm text-slate-300">
          Have a feature request, fee update recommendation, or partner inquiry? We welcome seller feedback.
        </p>
        <div className="flex items-center gap-2 pt-2 text-sm font-semibold">
          <Mail className="w-4 h-4 text-brand-400" />
          <a href="mailto:mdhashmi955@gmail.com" className="text-brand-300 underline hover:text-brand-200">
            mdhashmi955@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
