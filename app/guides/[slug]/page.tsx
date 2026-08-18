import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GUIDES } from '@/lib/config/guides';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { AdSlot } from '@/components/ads/AdSlot';
import { ArrowRight, HelpCircle, Calculator } from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sellrivo.site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const guide = GUIDES[resolvedParams.slug];
  if (!guide) {
    return { title: 'Guide Not Found | Sellrivo' };
  }

  const pageUrl = `${siteUrl}/guides/${guide.slug}`;

  return {
    title: `${guide.title} | Sellrivo Guide`,
    description: guide.excerpt,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${guide.title} | Sellrivo Guide`,
      description: guide.excerpt,
      url: pageUrl,
      siteName: 'Sellrivo',
      type: 'article',
      publishedTime: guide.publishedDate,
      authors: ['Sellrivo Editorial Team'],
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guide.title} | Sellrivo Guide`,
      description: guide.excerpt,
      images: [`${siteUrl}/og-image.png`],
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const guide = GUIDES[resolvedParams.slug];

  if (!guide) {
    notFound();
  }

  const pageUrl = `${siteUrl}/guides/${guide.slug}`;

  const faqSchemaData = {
    mainEntity: guide.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbsSchemaData = {
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: `${siteUrl}/guides`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guide.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { name: 'Guides', href: '/guides' },
          { name: guide.title, href: `/guides/${guide.slug}` },
        ]}
      />

      {/* Article Schema */}
      <JsonLd
        type="Article"
        data={{
          headline: guide.title,
          description: guide.excerpt,
          url: pageUrl,
          author: { '@type': 'Organization', name: 'Sellrivo Editorial Team', url: siteUrl },
          publisher: { '@type': 'Organization', name: 'Sellrivo', logo: { '@type': 'ImageObject', url: `${siteUrl}/icon.png` } },
          datePublished: guide.publishedDate,
          mainEntityOfPage: pageUrl,
        }}
      />

      {/* BreadcrumbList Schema */}
      <JsonLd type="BreadcrumbList" data={breadcrumbsSchemaData} />

      {/* FAQPage Schema */}
      {guide.faqs.length > 0 && <JsonLd type="FAQPage" data={faqSchemaData} />}

      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
          {guide.category} Guide
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
          {guide.title}
        </h1>

        <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
          {guide.subtitle}
        </p>

        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-4">
          <span>By Sellrivo Editorial Team</span>
          <span>•</span>
          <span>Updated: {guide.publishedDate}</span>
          <span>•</span>
          <span>{guide.readTime}</span>
        </div>
      </div>

      {/* Interactive Mini-Calculator CTA Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-900 to-slate-900 text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-brand-800">
        <div className="space-y-1">
          <h3 className="font-bold text-lg text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-brand-400" /> Want to calculate your exact product profit?
          </h3>
          <p className="text-xs text-slate-300">
            Use our free, real-time fee calculator to estimate net profit before listing.
          </p>
        </div>
        <Link
          href={guide.calculatorCta.href}
          className="py-2.5 px-5 rounded-xl bg-brand-500 hover:bg-brand-600 font-bold text-xs text-white flex items-center gap-2 transition-all shadow-md shrink-0"
        >
          {guide.calculatorCta.text} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <article className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed space-y-6">
        <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 whitespace-pre-line">
          {guide.content}
        </div>
      </article>

      {/* Strategic Native Content Ad Placement (Halfway through article) */}
      <div className="my-8">
        <AdSlot type="responsive" />
      </div>

      {/* Expandable FAQs Section with HTML <details> and <summary> tags for crawler readability */}
      {guide.faqs && guide.faqs.length > 0 && (
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <HelpCircle className="w-6 h-6 text-brand-600 dark:text-brand-400" />
            <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {guide.faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/60 dark:bg-slate-950/60 p-4 transition-all [&[open]]:bg-white dark:[&[open]]:bg-slate-900"
              >
                <summary className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-brand-600 dark:text-brand-400 font-black text-lg transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/50 dark:border-slate-800/50 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
