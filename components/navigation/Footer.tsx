import React from 'react';
import Link from 'next/link';
import { FOOTER_NAV_GROUPS } from '@/lib/config/navigation';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-black text-2xl text-white tracking-tight hover:text-brand-400 transition-colors">
                Sellrivo
              </span>
            </Link>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Know Your Profit Before You Sell. Fast, browser-based profit & fee calculators built for Etsy sellers, Amazon FBA merchants, Print-on-Demand creators, and ecommerce brands.
            </p>
            <div className="flex items-center gap-2 text-slate-300 pt-1">
              <Mail className="w-4 h-4 text-brand-400" />
              <a href="mailto:mdhashmi955@gmail.com" className="hover:text-white transition-colors font-medium">
                mdhashmi955@gmail.com
              </a>
            </div>
          </div>

          {/* Nav Group 1: Calculators */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Calculators</h4>
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

          {/* Nav Group 2: Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Resources</h4>
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

          {/* Nav Group 3: Company & Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Company & Legal</h4>
            <ul className="space-y-2">
              {FOOTER_NAV_GROUPS.company.concat(FOOTER_NAV_GROUPS.legal).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Sellrivo. Independent software tool. Not affiliated with Etsy, Amazon, Printify, or Gelato.</p>
          <p>Calculations are estimates based on published fee schedules.</p>
        </div>
      </div>
    </footer>
  );
};
