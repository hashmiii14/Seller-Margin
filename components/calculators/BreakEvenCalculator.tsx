'use client';

import React, { useState } from 'react';
import { BreakEvenInputs, CurrencyCode } from '@/lib/calculators/types';
import { calculateBreakEven } from '@/lib/calculators/breakeven';
import { CURRENCIES, formatCurrency } from '@/lib/config/currencies';
import { CurrencyInput, PercentageInput } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { MetricCard } from '@/components/ui/Card';

export const BreakEvenCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<BreakEvenInputs>({
    fixedCosts: 500, // Monthly website, tools, camera software
    variableCostPerUnit: 8.50,
    platformFeeRate: 6.5,
    paymentProcessingRate: 3.0,
    desiredProfitPerUnit: 10.00,
    currency: 'USD',
  });

  const handleInput = <K extends keyof BreakEvenInputs>(key: K, value: BreakEvenInputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const result = calculateBreakEven(inputs);

  const samplePrices = [
    inputs.breakEvenPrice * 0.9,
    inputs.breakEvenPrice,
    inputs.breakEvenPrice * 1.25,
    inputs.priceForTargetProfit,
    inputs.priceForTargetProfit * 1.5,
  ].filter((p) => p > 0);

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Break-Even Calculator</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Find the exact retail price and sales volume required to cover your costs
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
            Cost Structure Inputs
          </h3>

          <CurrencyInput
            label="Total Fixed Costs (Monthly / Annual Overhead)"
            helperText="Software, web hosting, domain, tool subscriptions, studio rent"
            value={inputs.fixedCosts}
            onChange={(val) => handleInput('fixedCosts', val)}
            currencySymbol={CURRENCIES[inputs.currency].symbol}
          />

          <CurrencyInput
            label="Variable Cost per Unit (Materials + Shipping)"
            value={inputs.variableCostPerUnit}
            onChange={(val) => handleInput('variableCostPerUnit', val)}
            currencySymbol={CURRENCIES[inputs.currency].symbol}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <PercentageInput
              label="Platform Fee % (e.g. Etsy 6.5%)"
              value={inputs.platformFeeRate}
              onChange={(val) => handleInput('platformFeeRate', val)}
            />
            <PercentageInput
              label="Payment Gateway Fee %"
              value={inputs.paymentProcessingRate}
              onChange={(val) => handleInput('paymentProcessingRate', val)}
            />
          </div>

          <CurrencyInput
            label="Desired Net Profit per Unit"
            value={inputs.desiredProfitPerUnit}
            onChange={(val) => handleInput('desiredProfitPerUnit', val)}
            currencySymbol={CURRENCIES[inputs.currency].symbol}
          />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MetricCard
              label="Minimum Break-Even Price"
              value={formatCurrency(result.breakEvenPrice, inputs.currency)}
              subValue="0% profit"
              variant="brand"
            />
            <MetricCard
              label="Price for Target Profit"
              value={formatCurrency(result.priceForTargetProfit, inputs.currency)}
              subValue={`+${formatCurrency(inputs.desiredProfitPerUnit, inputs.currency)} profit`}
              variant="profit"
            />
          </div>

          <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-slate-100">
              Required Unit Volume to Cover Overhead ({formatCurrency(inputs.fixedCosts, inputs.currency)})
            </h4>
            <div className="space-y-2 text-xs">
              {samplePrices.map((price, idx) => {
                const units = result.unitsToCoverFixedCostsAtPrice(price);
                return (
                  <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-800/60">
                    <span>If priced at <strong>{formatCurrency(price, inputs.currency)}</strong></span>
                    <span className="font-bold text-brand-400">
                      {isFinite(units) ? `${units} units required` : 'Loss (Never breaks even)'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
