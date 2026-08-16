import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { GUIDES } from '@/lib/config/guides';
import { BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ecommerce Seller Finance & Pricing Guides | SellerMargin',
  description: 'Practical, hype-free guides on Etsy fees, Amazon FBA calculations, print-on-demand pricing, margin vs markup, and break-even analysis.',
};

export default function GuidesHubPage() {
  const guideList = Object.values(GUIDES);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Guides', href: '/guides' }]} />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Seller Finance & Pricing Guides
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          In-depth, actionable tutorials designed to help online sellers optimize unit economics, avoid hidden fees, and set profitable retail prices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guideList.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group">
            <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md hover:border-brand-400 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950 px-2 py-0.5 rounded">
                  {guide.category} • {guide.readTime}
                </span>
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-3 group-hover:text-brand-600 transition-colors">
                  {guide.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {guide.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-600">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
