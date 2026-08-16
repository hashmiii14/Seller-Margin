'use client';

import React, { useState } from 'react';
import { PricingAssistantInputs, CurrencyCode } from '@/lib/calculators/types';
import { calculateRecommendedPricing } from '@/lib/calculators/pricing';
import { CURRENCIES, formatCurrency } from '@/lib/config/currencies';
import { CurrencyInput, PercentageInput } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { MetricCard } from '@/components/ui/Card';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const PricingAssistant: React.FC = () => {
  const [inputs, setInputs] = useState<PricingAssistantInputs>({
    productCost: 8.50,
    shippingCost: 4.50,
    platformFeeRate: 6.5, // Etsy
    paymentFeeRate: 3.0,
    paymentFeeFixed: 0.25,
    advertisingCost: 2.00,
    targetMarginRate: 30, // 30% desired margin
    targetProfitDollar: 12.00, // $12 target profit
    currency: 'USD',
  });

  const handleInput = <K extends keyof PricingAssistantInputs>(key: K, value: PricingAssistantInputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const result = calculateRecommendedPricing(inputs);

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-brand-900 to-slate-900 text-white shadow-md">
        <div>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" /> Smart Pricing Assistant ("What Should I Charge?")
          </h2>
          <p className="text-xs text-slate-300">
            Enter your product costs to calculate your optimal retail prices for target margin & profit goals.
          </p>
        </div>

        <Select
          options={Object.values(CURRENCIES).map((c) => ({ label: `${c.code} (${c.symbol})`, value: c.code }))}
          value={inputs.currency}
          onChange={(e) => handleInput('currency', e.target.value as CurrencyCode)}
          className="w-32 text-xs text-slate-900 dark:text-slate-100"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-4 bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-2">
            Your Product Costs & Fee Assumptions
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="Product Material / Item Cost"
              value={inputs.productCost}
              onChange={(val) => handleInput('productCost', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
            <CurrencyInput
              label="Packaging & Shipping Paid"
              value={inputs.shippingCost}
              onChange={(val) => handleInput('shippingCost', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <PercentageInput
              label="Platform Fee % (e.g. Etsy 6.5%)"
              value={inputs.platformFeeRate}
              onChange={(val) => handleInput('platformFeeRate', val)}
            />
            <CurrencyInput
              label="Estimated Ad Spend per Unit"
              value={inputs.advertisingCost}
              onChange={(val) => handleInput('advertisingCost', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-3">Profit Targets</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <PercentageInput
                label="Target Margin Rate %"
                value={inputs.targetMarginRate}
                onChange={(val) => handleInput('targetMarginRate', val)}
              />
              <CurrencyInput
                label="Target Profit Amount ($)"
                value={inputs.targetProfitDollar}
                onChange={(val) => handleInput('targetProfitDollar', val)}
                currencySymbol={CURRENCIES[inputs.currency].symbol}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
              Recommended Target Retail Price
            </span>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                {formatCurrency(result.priceForTargetMargin, inputs.currency)}
              </span>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                {inputs.targetMarginRate}% target margin
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
              At this price, you cover all product costs, shipping, ad spend, platform commissions, and earn a net {inputs.targetMarginRate}% profit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MetricCard
              label="Minimum Break-Even Price"
              value={formatCurrency(result.breakEvenPrice, inputs.currency)}
              subValue="Zero Profit Floor"
              variant="default"
            />
            <MetricCard
              label={`Price for ${formatCurrency(inputs.targetProfitDollar, inputs.currency)} Profit`}
              value={formatCurrency(result.priceForTargetProfitDollar, inputs.currency)}
              subValue="Fixed Net Profit Target"
              variant="brand"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
