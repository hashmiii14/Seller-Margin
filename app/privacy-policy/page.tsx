import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | SellerMargin',
  description: 'Understand how SellerMargin protects user privacy. Client-side calculations with zero personal data collection.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400">Last updated: August 1, 2026</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">1. Client-Side Financial Calculations</h2>
        <p>
          SellerMargin operates as a client-side web application. All financial numbers, product costs, selling prices, and fee inputs entered into our calculators are processed locally in your web browser. We do not transmit, collect, or store your private business calculations on any server.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">2. Local Storage</h2>
        <p>
          We use browser `localStorage` solely to persist non-sensitive user preferences such as dark/light mode themes and currency selections. You can clear this data at any time through your browser settings.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">3. Analytics & Third-Party Cookies</h2>
        <p>
          We may use privacy-conscious analytics tools (such as Plausible or Google Analytics) to monitor website traffic and usage trends. Analytics events do not include specific financial amounts entered by users.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">4. Contact Information</h2>
        <p>
          If you contact us directly via email at <strong>mdhashmi955@gmail.com</strong>, we will use your email address only to respond to your inquiry.
        </p>
      </div>
    </div>
  );
}
