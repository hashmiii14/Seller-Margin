'use client';

import React, { useState } from 'react';
import { SharedCalculationResult, CurrencyCode } from '@/lib/calculators/types';
import { formatCurrency } from '@/lib/config/currencies';
import { Badge } from '@/components/ui/Card';
import { AlertTriangle, Calculator, Target, Lightbulb, Printer, Code } from 'lucide-react';
import { SmartAffiliateCard } from '@/components/monetization/SmartAffiliateCard';
import { EmbedWidgetModal } from '@/components/calculators/EmbedWidgetModal';

export interface ResultCardProps {
  result: SharedCalculationResult;
  currency: CurrencyCode;
  feeLabel?: string;
  hasInputValues?: boolean;
  calculatorType?: 'etsy' | 'pod' | 'fba' | 'general';
}

export const ResultCard: React.FC<ResultCardProps> = ({
  result,
  currency,
  feeLabel = 'Total Platform Fees',
  hasInputValues = true,
  calculatorType = 'etsy',
}) => {
  const [embedModalOpen, setEmbedModalOpen] = useState<boolean>(false);
  const isLoss = result.netProfit < 0;

  if (!hasInputValues || result.grossRevenue === 0) {
    return (
      <div className="w-full rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 p-6 sm:p-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto">
          <Calculator className="w-6 h-6" />
        </div>
        <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
          Enter Your Product Numbers Above
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          Fill in your retail selling price, product cost, and shipping fees to calculate your take-home net profit and break-even price instantly.
        </p>
      </div>
    );
  }

  const validProfit = Math.max(0.01, result.netProfit);
  const salesFor500 = Math.ceil(500 / validProfit);
  const salesFor1000 = Math.ceil(1000 / validProfit);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full space-y-4">
      {/* Primary Net Profit Banner */}
      <div
        className={`rounded-xl p-5 sm:p-6 border transition-all shadow-md ${
          isLoss
            ? 'bg-rose-50/90 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800'
            : 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800'
        }`}
      >
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            Estimated Net Profit
          </span>
          <div className="flex items-center gap-2">
            <Badge variant={isLoss ? 'danger' : result.profitMargin >= 25 ? 'success' : 'warning'}>
              {isLoss ? 'Selling at a Loss' : result.profitMargin >= 25 ? 'Strong Margin' : 'Moderate Margin'}
            </Badge>
          </div>
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <span
            className={`text-4xl sm:text-5xl font-black tracking-tight ${
              isLoss ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'
            }`}
          >
            {formatCurrency(result.netProfit, currency)}
          </span>
          <span className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-300">
            {result.profitMargin}% <span className="text-xs font-normal text-slate-500">margin</span>
          </span>
        </div>

        {isLoss ? (
          <div className="mt-3 p-2.5 rounded-lg bg-rose-100 dark:bg-rose-900/40 border border-rose-200 dark:border-rose-800 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
            <div>
              <p className="font-bold">Loss Warning:</p>
              <p>
                This selling price produces a net loss of {formatCurrency(Math.abs(result.netProfit), currency)}. To break even, your minimum price must be at least{' '}
                <strong className="underline">{formatCurrency(result.breakEvenPrice, currency)}</strong>.
              </p>
            </div>
          </div>
        ) : (
          <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
            You keep {result.profitMargin}% of gross revenue as net profit after deducting fees and expenses.
          </p>
        )}

        {/* Action Toolbar: Print & Embed */}
        <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between gap-2 text-xs">
          <button
            onClick={handlePrint}
            className="py-1.5 px-3 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" /> Print / Export PDF
          </button>
          <button
            onClick={() => setEmbedModalOpen(true)}
            className="py-1.5 px-3 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition-colors"
          >
            <Code className="w-3.5 h-3.5 text-brand-500" /> Embed Widget
          </button>
        </div>
      </div>

      {/* Grid of Key Secondary Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block uppercase">
            Gross Revenue
          </span>
          <span className="text-lg font-bold text-slate-900 dark:text-slate-100 block mt-1">
            {formatCurrency(result.grossRevenue, currency)}
          </span>
        </div>

        <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block uppercase truncate">
            {feeLabel}
          </span>
          <span className="text-lg font-bold text-amber-600 dark:text-amber-400 block mt-1">
            {formatCurrency(result.totalFees, currency)}
          </span>
        </div>

        <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block uppercase">
            Markup %
          </span>
          <span className="text-lg font-bold text-slate-900 dark:text-slate-100 block mt-1">
            {result.markup}%
          </span>
        </div>

        <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block uppercase">
            Break-Even Price
          </span>
          <span className="text-lg font-bold text-brand-600 dark:text-brand-400 block mt-1">
            {formatCurrency(result.breakEvenPrice, currency)}
          </span>
        </div>
      </div>

      {/* Smart Monetization Affiliate Offer Card */}
      <SmartAffiliateCard margin={result.profitMargin} calculatorType={calculatorType} />

      {/* Profit Goal Milestones */}
      {!isLoss && (
        <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
            <Target className="w-3.5 h-3.5" /> Profit Goal Milestones
          </div>
          <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
              <span className="text-slate-400 block text-[11px]">To Make {formatCurrency(500, currency)} Net:</span>
              <span className="text-base font-bold text-white">{salesFor500} sales</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
              <span className="text-slate-400 block text-[11px]">To Make {formatCurrency(1000, currency)} Net:</span>
              <span className="text-base font-bold text-emerald-400">{salesFor1000} sales</span>
            </div>
          </div>
        </div>
      )}

      {/* Actionable Optimization Tips */}
      <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
        <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-slate-100">
          <Lightbulb className="w-4 h-4 text-amber-500" /> Profit Optimization Insights
        </div>
        <ul className="space-y-1 text-slate-600 dark:text-slate-400 pl-5 list-disc">
          <li>
            Raising retail price by {formatCurrency(3, currency)} boosts net profit by approximately +{formatCurrency(2.70, currency)} per sale.
          </li>
          <li>
            Negotiating a {formatCurrency(1.5, currency)} reduction in unit product costs directly increases take-home margin by +{(1.5 / Math.max(1, result.grossRevenue) * 100).toFixed(1)}%.
          </li>
        </ul>
      </div>

      <EmbedWidgetModal isOpen={embedModalOpen} onClose={() => setEmbedModalOpen(false)} />
    </div>
  );
};
