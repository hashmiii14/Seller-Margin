'use client';

import React from 'react';
import { PriceSensitivityPoint, CurrencyCode } from '@/lib/calculators/types';
import { formatCurrency } from '@/lib/config/currencies';
import { TrendingUp } from 'lucide-react';

export interface PriceSensitivitySliderProps {
  currentPrice: number;
  points: PriceSensitivityPoint[];
  currency: CurrencyCode;
  onSelectPrice?: (price: number) => void;
}

export const PriceSensitivitySlider: React.FC<PriceSensitivitySliderProps> = ({
  currentPrice,
  points,
  currency,
  onSelectPrice,
}) => {
  return (
    <div className="w-full bg-slate-900 text-white rounded-xl p-4 sm:p-5 shadow-lg border border-slate-800">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-brand-400" /> Price Sensitivity Matrix
          </h4>
          <p className="text-xs text-slate-400">
            See how testing higher or lower retail prices impacts your bottom line.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <table className="w-full text-left text-xs min-w-[500px]">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400">
              <th className="py-2 px-2">Retail Price</th>
              <th className="py-2 px-2">Gross Revenue</th>
              <th className="py-2 px-2">Platform Fees</th>
              <th className="py-2 px-2">Net Profit</th>
              <th className="py-2 px-2">Margin</th>
              <th className="py-2 px-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {points.map((pt, idx) => {
              const isCurrent = Math.abs(pt.price - currentPrice) < 0.05;
              const isProfit = pt.netProfit > 0;

              return (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    isCurrent ? 'bg-brand-950/60 border-l-2 border-brand-500 font-bold' : 'hover:bg-slate-800/40'
                  }`}
                >
                  <td className="py-2.5 px-2 font-medium text-slate-200">
                    {formatCurrency(pt.price, currency)}{' '}
                    {isCurrent && <span className="text-[10px] text-brand-400 font-normal">(Current)</span>}
                  </td>
                  <td className="py-2.5 px-2 text-slate-300">{formatCurrency(pt.revenue, currency)}</td>
                  <td className="py-2.5 px-2 text-slate-400">{formatCurrency(pt.totalFees, currency)}</td>
                  <td className={`py-2.5 px-2 font-bold ${isProfit ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {formatCurrency(pt.netProfit, currency)}
                  </td>
                  <td className="py-2.5 px-2 text-slate-300">{pt.margin}%</td>
                  <td className="py-2.5 px-2 text-right">
                    {onSelectPrice && (
                      <button
                        type="button"
                        onClick={() => onSelectPrice(pt.price)}
                        className="text-[11px] font-semibold text-brand-400 hover:text-brand-300 underline"
                      >
                        Apply Price
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
