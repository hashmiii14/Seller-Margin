import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail } from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sellrivo.site';
const pageUrl = `${siteUrl}/contact`;

export const metadata: Metadata = {
  title: 'Contact Sellrivo — Direct Team Support & Feedback',
  description:
    'Get in touch with the Sellrivo team for fee schedule updates, feature requests, partnership inquiries, or platform feedback.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Contact Sellrivo — Support & Feedback',
    description: 'Get in touch with the Sellrivo team for fee updates and partnership inquiries.',
    url: pageUrl,
    siteName: 'Sellrivo',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Sellrivo Support',
    description: 'Contact Sellrivo team for fee updates and support.',
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />

      <JsonLd
        type="WebPage"
        data={{
          name: 'Contact Sellrivo',
          description: 'Get in touch with the Sellrivo team for fee schedule updates and support.',
          url: pageUrl,
        }}
      />

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Contact & Feedback
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
          Have a question, fee schedule correction, or partnership proposal? Get in touch with our team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Contact Details */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">Direct Email Support</h3>
                <a href="mailto:mdhashmi955@gmail.com" className="text-brand-400 font-semibold hover:underline text-sm">
                  mdhashmi955@gmail.com
                </a>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-4 space-y-2 text-xs text-slate-400 leading-relaxed">
              <p>📍 <strong>Platform Support:</strong> Global (US, UK, Canada, Australia, India, Europe)</p>
              <p>⏱️ <strong>Response Time:</strong> Within 24–48 business hours</p>
              <p>💡 <strong>Topics:</strong> Fee schedule updates, feature requests, affiliate partnerships</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
