import React from 'react';
import type { Metadata } from 'next';
import { EtsyCalculator } from '@/components/calculators/EtsyCalculator';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { LOCALIZED_PAGES } from '@/lib/config/seo-pages';
import { notFound } from 'next/navigation';

type LocalizedKey = keyof typeof LOCALIZED_PAGES;

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const key = country.toLowerCase() as LocalizedKey;
  const pageData = LOCALIZED_PAGES[key];

  if (!pageData) {
    return { title: 'Etsy Profit Calculator | Sellrivo' };
  }

  return {
    title: pageData.title,
    description: `Calculate Etsy fees and profit in ${pageData.currency} for ${pageData.country} sellers.`,
  };
}

export default async function LocalizedEtsyCalculatorPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const key = country.toLowerCase() as LocalizedKey;
  const pageData = LOCALIZED_PAGES[key];

  if (!pageData) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs
        items={[
          { name: 'Etsy Profit Calculator', href: '/etsy-profit-calculator' },
          { name: pageData.country || country.toUpperCase(), href: `/etsy-profit-calculator/${country}` },
        ]}
      />

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          {pageData.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          Calculate marketplace fees and net profit in {pageData.currency} for sellers in {pageData.country}.
        </p>
      </div>

      <EtsyCalculator initialParams={{ currency: pageData.currency as any }} initialCountry={country.toUpperCase()} />
    </div>
  );
}
