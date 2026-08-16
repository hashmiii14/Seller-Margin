import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Mail, MessageSquare, Bug, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact SellerMargin | Feedback & Inquiries',
  description: 'Have feedback, bug reports, fee correction requests, or affiliate partnership inquiries? Contact SellerMargin.',
};

export default function ContactPage() {
  const contactEmail = 'mdhashmi955@gmail.com';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
          We welcome feedback, fee update corrections, bug reports, and partnership inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Send an Email</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Click below to open your default email client or email us directly at <strong>{contactEmail}</strong>.
          </p>

          <a href={`mailto:${contactEmail}?subject=SellerMargin%20Inquiry`} className="block">
            <Button variant="primary" size="lg" className="w-full gap-2">
              <Mail className="w-5 h-5" /> Email {contactEmail}
            </Button>
          </a>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3 text-xs text-slate-500">
            <p><strong>Response Time:</strong> We typically respond to seller inquiries and fee updates within 24–48 hours.</p>
          </div>
        </div>

        <div className="md:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
              <Bug className="w-4 h-4 text-brand-600" /> Fee Corrections & Bug Reports
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Did a marketplace update their fee percentage? Let us know so we can update our calculation formulas.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
              <Handshake className="w-4 h-4 text-emerald-600" /> Partnerships & Affiliates
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Are you an ecommerce tool, shipping provider, or POD supplier? Inquire about placement opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
