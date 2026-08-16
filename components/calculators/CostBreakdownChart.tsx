import React from 'react';
import { CurrencyCode } from '@/lib/calculators/types';
import { formatCurrency } from '@/lib/config/currencies';

export interface BreakdownItem {
  label: string;
  amount: number;
  color: string; // CSS color string
}

export interface CostBreakdownChartProps {
  grossRevenue: number;
  items: BreakdownItem[];
  currency: CurrencyCode;
}

export const CostBreakdownChart: React.FC<CostBreakdownChartProps> = ({
  grossRevenue,
  items,
  currency,
}) => {
  const validRev = Math.max(0.01, grossRevenue);

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Where Your Money Goes
        </span>
        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
          Gross Sale: {formatCurrency(grossRevenue, currency)}
        </span>
      </div>

      {/* Accessible Stacked Bar Visualization */}
      <div
        className="w-full h-5 rounded-full overflow-hidden flex bg-slate-200 dark:bg-slate-800 shadow-inner"
        role="img"
        aria-label="Cost and profit breakdown stacked bar chart"
      >
        {items.map((item, idx) => {
          const pct = Math.max(0, (item.amount / validRev) * 100);
          if (pct <= 0) return null;
          return (
            <div
              key={idx}
              style={{ width: `${pct}%`, backgroundColor: item.color }}
              className="h-full transition-all duration-300 relative group"
              title={`${item.label}: ${formatCurrency(item.amount, currency)} (${pct.toFixed(1)}%)`}
            />
          );
        })}
      </div>

      {/* Accessible Legend & Table List */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
        {items.map((item, idx) => {
          const pct = ((item.amount / validRev) * 100).toFixed(1);
          return (
            <div key={idx} className="flex items-center gap-2 p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <div className="truncate">
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                  {item.label}
                </p>
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
                  {formatCurrency(item.amount, currency)}{' '}
                  <span className="text-[10px] font-normal text-slate-400">({pct}%)</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
