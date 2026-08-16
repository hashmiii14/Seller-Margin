import React from 'react';
import type { Metadata } from 'next';
import { ProfitMarginCalculator } from '@/components/calculators/ProfitMarginCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { SEO_PAGES } from '@/lib/config/seo-pages';

export const metadata: Metadata = {
  title: SEO_PAGES['profit-margin-calculator'].title,
  description: SEO_PAGES['profit-margin-calculator'].description,
};

export default function ProfitMarginCalculatorPage() {
  const pageData = SEO_PAGES['profit-margin-calculator'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Calculators', href: '/calculators/profit-margin' }, { name: 'Profit Margin Calculator', href: '/profit-margin-calculator' }]} />

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          {pageData.h1}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          {pageData.intro}
        </p>
      </div>

      <ProfitMarginCalculator />
    </div>
  );
}
