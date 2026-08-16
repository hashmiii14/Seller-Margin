import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Mail, MessageSquare, Bug, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Sellrivo — Support & Inquiries',
  description:
    'Contact Sellrivo for general feedback, fee schedule corrections, calculator bug reports, or partnership opportunities.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />

      <JsonLd
        type="WebPage"
        data={{
          name: 'Contact Sellrivo',
          description: 'Get in touch with the Sellrivo team.',
        }}
      />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Contact & Feedback
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
          We welcome feedback from Etsy, Amazon, and Print-on-Demand sellers to help keep our fee tools accurate.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 flex items-center justify-center font-bold text-xl">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">Primary Contact Email</h3>
            <a href="mailto:mdhashmi955@gmail.com" className="text-brand-600 dark:text-brand-400 font-bold hover:underline text-base">
              mdhashmi955@gmail.com
            </a>
          </div>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
          Please reach out for fee schedule updates, feature requests, partnership opportunities, or technical inquiries. We aim to respond within 24–48 business hours.
        </p>
      </div>
    </div>
  );
}
