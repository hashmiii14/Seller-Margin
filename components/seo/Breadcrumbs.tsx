import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { JsonLd } from './JsonLd';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export const Breadcrumbs: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
  const fullItems = [{ name: 'Home', href: '/' }, ...items];

  const itemListElement = fullItems.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://sellermargin.com${item.href}`,
  }));

  return (
    <>
      <JsonLd type="BreadcrumbList" data={{ itemListElement }} />
      <nav aria-label="Breadcrumb" className="my-4">
        <ol className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 overflow-x-auto">
          {fullItems.map((item, idx) => {
            const isLast = idx === fullItems.length - 1;
            return (
              <li key={item.href} className="flex items-center shrink-0">
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 mx-1 text-slate-400" />}
                {isLast ? (
                  <span className="font-semibold text-slate-800 dark:text-slate-200" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                    {idx === 0 ? <Home className="w-3.5 h-3.5 inline mr-1" /> : null}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
