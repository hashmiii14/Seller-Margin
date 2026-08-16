import React from 'react';
import type { Metadata } from 'next';
import { BreakEvenCalculator } from '@/components/calculators/BreakEvenCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { SEO_PAGES } from '@/lib/config/seo-pages';

export const metadata: Metadata = {
  title: SEO_PAGES['break-even-calculator'].title,
  description: SEO_PAGES['break-even-calculator'].description,
};

export default function BreakEvenCalculatorPage() {
  const pageData = SEO_PAGES['break-even-calculator'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Calculators', href: '/calculators/break-even' }, { name: 'Break-Even Calculator', href: '/break-even-calculator' }]} />

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          {pageData.h1}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          {pageData.intro}
        </p>
      </div>

      <BreakEvenCalculator />
    </div>
  );
}
