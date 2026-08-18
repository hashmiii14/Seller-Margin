import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sellrivo.site';
const pageUrl = `${siteUrl}/privacy-policy`;

export const metadata: Metadata = {
  title: 'Privacy Policy | Sellrivo',
  description:
    'Understand how Sellrivo protects user privacy. Client-side calculations with zero personal data collection.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Privacy Policy | Sellrivo',
    description: 'Understand how Sellrivo protects user privacy. Client-side calculations with zero data tracking.',
    url: pageUrl,
    siteName: 'Sellrivo',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Sellrivo',
    description: 'Client-side calculation privacy disclosures.',
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />

      <JsonLd
        type="WebPage"
        data={{
          name: 'Privacy Policy | Sellrivo',
          description: 'Client-side processing privacy disclosures.',
        }}
      />

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Effective Date: August 2026</p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">1. Client-Side Financial Calculations</h3>
        <p>
          Sellrivo operates as a client-side web application. All financial numbers, product costs, selling prices, and fee inputs entered into our calculators are processed locally in your web browser. We do not transmit, collect, or store your private business calculations on any server.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">2. Local Storage</h3>
        <p>
          We use your browser’s <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">localStorage</code> strictly to persist non-sensitive user preferences such as your visual theme selection (light or dark mode) and currency code choice.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">3. Third-Party Analytics & Cookies</h3>
        <p>
          Sellrivo uses privacy-focused anonymous telemetry (such as page view counts) to understand general usage trends. No personally identifiable information or exact financial calculation numbers are ever transmitted to third-party analytics services.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">4. Contacting Us</h3>
        <p>
          If you have questions about this Privacy Policy, you may contact us at <a href="mailto:mdhashmi955@gmail.com" className="text-brand-600 dark:text-brand-400 underline">mdhashmi955@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
