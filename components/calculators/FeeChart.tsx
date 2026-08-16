'use client';

import React from 'react';
import { CurrencyCode } from '@/lib/calculators/types';
import { formatCurrency } from '@/lib/config/currencies';
import { PieChart } from 'lucide-react';

export interface FeeChartProps {
  grossRevenue: number;
  totalFees: number;
  totalCosts: number;
  netProfit: number;
  currency: CurrencyCode;
}

export const FeeChart: React.FC<FeeChartProps> = ({
  grossRevenue,
  totalFees,
  totalCosts,
  netProfit,
  currency,
}) => {
  if (grossRevenue <= 0) return null;

  const validRevenue = Math.max(0.01, grossRevenue);
  const costPct = Math.max(0, Math.min(100, Math.round((totalCosts / validRevenue) * 100)));
  const feePct = Math.max(0, Math.min(100, Math.round((totalFees / validRevenue) * 100)));
  const profitPct = Math.max(0, Math.round((Math.max(0, netProfit) / validRevenue) * 100));

  return (
    <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 uppercase tracking-wider">
          <PieChart className="w-4 h-4 text-brand-500" /> Revenue Breakdown
        </span>
        <span className="text-xs text-slate-500 font-mono">100% of {formatCurrency(grossRevenue, currency)}</span>
      </div>

      {/* Visual Progress Bar Stack */}
      <div className="w-full h-4 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex shadow-inner">
        <div
          style={{ width: `${costPct}%` }}
          className="h-full bg-blue-500 transition-all duration-500"
          title={`Costs: ${formatCurrency(totalCosts, currency)} (${costPct}%)`}
        />
        <div
          style={{ width: `${feePct}%` }}
          className="h-full bg-amber-500 transition-all duration-500"
          title={`Fees: ${formatCurrency(totalFees, currency)} (${feePct}%)`}
        />
        <div
          style={{ width: `${profitPct}%` }}
          className="h-full bg-emerald-500 transition-all duration-500"
          title={`Net Profit: ${formatCurrency(netProfit, currency)} (${profitPct}%)`}
        />
      </div>

      {/* Legend Table */}
      <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
        <div className="p-2 rounded-lg bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50">
          <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 block uppercase">Product Costs</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">{formatCurrency(totalCosts, currency)}</span>
          <span className="text-[10px] text-slate-500 block">{costPct}%</span>
        </div>

        <div className="p-2 rounded-lg bg-amber-50/60 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/50">
          <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 block uppercase">Platform Fees</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">{formatCurrency(totalFees, currency)}</span>
          <span className="text-[10px] text-slate-500 block">{feePct}%</span>
        </div>

        <div className="p-2 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50">
          <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block uppercase">Take-Home Pay</span>
          <span className="font-bold text-slate-900 dark:text-slate-100">{formatCurrency(netProfit, currency)}</span>
          <span className="text-[10px] text-slate-500 block">{profitPct}%</span>
        </div>
      </div>
    </div>
  );
};
