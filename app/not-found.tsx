import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Calculator, ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 font-black text-2xl flex items-center justify-center mx-auto">
        404
      </div>

      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
        Page Not Found
      </h1>

      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md mx-auto">
        We couldn't find the page you were looking for. Select one of our seller profit calculators below to continue.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto text-left pt-4">
        <Link href="/etsy-profit-calculator" className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-400 transition-all flex items-center gap-3">
          <Calculator className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Etsy Profit Calculator</span>
        </Link>

        <Link href="/amazon-fba-calculator" className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-400 transition-all flex items-center gap-3">
          <Calculator className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Amazon FBA Calculator</span>
        </Link>

        <Link href="/pod-profit-calculator" className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-400 transition-all flex items-center gap-3">
          <Calculator className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">POD Profit Calculator</span>
        </Link>

        <Link href="/profit-margin-calculator" className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-400 transition-all flex items-center gap-3">
          <Calculator className="w-4 h-4 text-purple-500" />
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Profit Margin Calculator</span>
        </Link>
      </div>

      <div className="pt-6">
        <Link href="/">
          <Button variant="outline" size="md" className="gap-2">
            <Home className="w-4 h-4" /> Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
