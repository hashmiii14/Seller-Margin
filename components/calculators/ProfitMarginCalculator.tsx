'use client';

import React, { useState } from 'react';
import { MarginInputs, CurrencyCode } from '@/lib/calculators/types';
import { calculateGeneralMargin } from '@/lib/calculators/margin';
import { CURRENCIES, formatCurrency } from '@/lib/config/currencies';
import { CurrencyInput } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { MetricCard } from '@/components/ui/Card';

export const ProfitMarginCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<MarginInputs>({
    sellingPrice: 49.99,
    costOfGoods: 14.50,
    shipping: 5.00,
    fees: 6.50,
    advertising: 4.00,
    other: 1.00,
    currency: 'USD',
  });

  const handleInput = <K extends keyof MarginInputs>(key: K, value: MarginInputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const result = calculateGeneralMargin(inputs);

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Profit Margin & Markup Calculator</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Calculate Net Margin %, Markup %, Gross Profit, and Return on Investment (ROI)
          </p>
        </div>

        <Select
          options={Object.values(CURRENCIES).map((c) => ({ label: `${c.code} (${c.symbol})`, value: c.code }))}
          value={inputs.currency}
          onChange={(e) => handleInput('currency', e.target.value as CurrencyCode)}
          className="w-32 text-xs"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-4 bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-2">
            Revenue & Cost Inputs
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="Selling Price"
              value={inputs.sellingPrice}
              onChange={(val) => handleInput('sellingPrice', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
            <CurrencyInput
              label="Cost of Goods Sold (COGS)"
              value={inputs.costOfGoods}
              onChange={(val) => handleInput('costOfGoods', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="Shipping Cost"
              value={inputs.shipping}
              onChange={(val) => handleInput('shipping', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
            <CurrencyInput
              label="Platform & Payment Fees"
              value={inputs.fees}
              onChange={(val) => handleInput('fees', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="Advertising / Marketing"
              value={inputs.advertising}
              onChange={(val) => handleInput('advertising', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
            <CurrencyInput
              label="Other Miscellaneous Costs"
              value={inputs.other}
              onChange={(val) => handleInput('other', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <MetricCard
              label="Net Profit Margin"
              value={`${result.profitMargin}%`}
              subValue={formatCurrency(result.netProfit, inputs.currency)}
              variant={result.profitMargin >= 20 ? 'profit' : 'loss'}
            />
            <MetricCard
              label="Price Markup %"
              value={`${result.markup}%`}
              subValue="Above Direct Cost"
              variant="brand"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <MetricCard
              label="Gross Profit"
              value={formatCurrency(result.grossProfit, inputs.currency)}
              subValue="Price − Product Cost"
            />
            <MetricCard
              label="Return on Investment"
              value={`${result.roi}%`}
              subValue="ROI on Product Cost"
            />
          </div>

          {/* Educational Margin vs Markup Comparison Callout */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
            <h4 className="font-bold text-slate-800 dark:text-slate-200">Margin vs Markup Explained</h4>
            <p className="text-slate-600 dark:text-slate-400">
              <strong>Profit Margin ({result.profitMargin}%)</strong> represents the portion of retail price that remains as profit after deducting expenses.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              <strong>Price Markup ({result.markup}%)</strong> is the percentage added to your direct costs to arrive at your retail selling price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
