import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GUIDES } from '@/lib/config/guides';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';

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

  return {
    title: `${guide.title} | Sellrivo Guide`,
    description: guide.excerpt,
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs
        items={[
          { name: 'Guides', href: '/guides' },
          { name: guide.title, href: `/guides/${guide.slug}` },
        ]}
      />

      <JsonLd
        type="Article"
        data={{
          headline: guide.title,
          description: guide.excerpt,
          author: { '@type': 'Organization', name: 'Sellrivo Editorial Team' },
          datePublished: guide.publishedDate,
        }}
      />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          {guide.title}
        </h1>
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-4">
          <span>By Sellrivo Editorial Team</span>
          <span>•</span>
          <span>Published: {guide.publishedDate}</span>
          <span>•</span>
          <span>{guide.readTime}</span>
        </div>
      </div>

      <article className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed space-y-6">
        <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
          {guide.excerpt}
        </p>

        <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
          {guide.content}
        </div>
      </article>
    </div>
  );
}
