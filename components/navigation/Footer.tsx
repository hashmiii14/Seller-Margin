import React from 'react';
import Link from 'next/link';
import { FOOTER_NAV_GROUPS } from '@/lib/config/navigation';
import { ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-base">
                $
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                Seller<span className="text-brand-400">Margin</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              SellerMargin is a fast, trustworthy, mobile-first profitability calculator suite for Etsy, Amazon FBA, Print-on-Demand, and ecommerce sellers. Know your real profit before you sell.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Free • No Registration Required • Browser-Based</span>
            </div>
          </div>

          {/* Nav Group: Calculators */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Calculators</h4>
            <ul className="space-y-2">
              {FOOTER_NAV_GROUPS.calculators.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Group: Resources */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Resources</h4>
            <ul className="space-y-2">
              {FOOTER_NAV_GROUPS.resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Group: Company & Legal */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Legal & Info</h4>
            <ul className="space-y-2">
              {FOOTER_NAV_GROUPS.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              {FOOTER_NAV_GROUPS.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800 text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>
            © {new Date().getFullYear()} SellerMargin. All rights reserved. SellerMargin is an independent software tool and is not affiliated with, endorsed by, or sponsored by Etsy, Inc. or Amazon.com, Inc.
          </p>
          <p className="flex items-center gap-1 shrink-0">
            Built for sellers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};
