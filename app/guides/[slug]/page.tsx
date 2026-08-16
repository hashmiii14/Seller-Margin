import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Select';
import { GUIDES } from '@/lib/config/guides';
import { notFound } from 'next/navigation';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES[slug];

  if (!guide) {
    return { title: 'Guide Not Found | SellerMargin' };
  }

  return {
    title: `${guide.title} | SellerMargin Guide`,
    description: guide.excerpt,
  };
}

export default async function GuideArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = GUIDES[slug];

  if (!guide) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs
        items={[
          { name: 'Guides', href: '/guides' },
          { name: guide.title, href: `/guides/${guide.slug}` },
        ]}
      />

      <JsonLd
        type="WebPage"
        data={{
          name: guide.title,
          description: guide.excerpt,
          datePublished: guide.publishedDate,
        }}
      />

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-3 text-xs font-semibold text-brand-600 dark:text-brand-400">
          <span className="px-2.5 py-0.5 rounded-full bg-brand-100 dark:bg-brand-950">
            {guide.category}
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Clock className="w-3.5 h-3.5" /> {guide.readTime}
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Calendar className="w-3.5 h-3.5" /> Updated: {guide.publishedDate}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
          {guide.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
          {guide.subtitle}
        </p>
      </header>

      {/* Embedded Calculator CTA Card */}
      <div className="p-5 rounded-xl bg-gradient-to-r from-brand-900 to-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Interactive Tool</span>
          <h3 className="text-base font-bold">Put This Guide into Action</h3>
        </div>
        <Link href={guide.calculatorCta.href}>
          <Button variant="primary" size="sm" className="w-full sm:w-auto gap-1.5 whitespace-nowrap">
            {guide.calculatorCta.text} <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </div>

      {/* Article Markdown Body Content */}
      <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 space-y-4 text-sm sm:text-base leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: guide.content.replace(/\n/g, '<br/>') }} />
      </div>

      {/* FAQs Section if present */}
      {guide.faqs && guide.faqs.length > 0 && (
        <section className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Frequently Asked Questions</h3>
          {guide.faqs.map((faq, idx) => (
            <Accordion key={idx} title={faq.question}>
              <p>{faq.answer}</p>
            </Accordion>
          ))}
        </section>
      )}
    </article>
  );
}
