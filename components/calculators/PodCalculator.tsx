'use client';

import React, { useState, useTransition } from 'react';
import { PodInputs, CurrencyCode } from '@/lib/calculators/types';
import { calculatePodProfit } from '@/lib/calculators/pod';
import { generatePriceSensitivityCurve } from '@/lib/calculators/core';
import { CURRENCIES } from '@/lib/config/currencies';
import { POD_FEE_ASSUMPTIONS } from '@/lib/config/fees/pod';
import { CurrencyInput, PercentageInput } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { ResultCard } from '@/components/calculators/ResultCard';
import { CostBreakdownChart } from '@/components/calculators/CostBreakdownChart';
import { PriceSensitivitySlider } from '@/components/calculators/PriceSensitivitySlider';
import { FeeAssumptionsDrawer } from '@/components/calculators/FeeAssumptionsDrawer';
import { ShareButton } from '@/components/calculators/ShareButton';
import { AffiliateProviderGrid } from '@/components/monetization/AffiliateCard';
import { encodeCalculatorState } from '@/lib/calculators/url-state';
import { RotateCcw } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const EMPTY_POD_INPUTS: PodInputs = {
  sellingPrice: 0,
  shippingCharged: 0,
  podBaseCost: 0,
  podShippingCost: 0,
  marketplaceFeeRate: 6.5,
  paymentProcessingRate: 2.9,
  paymentProcessingFixed: 0.30,
  advertisingCost: 0,
  otherCosts: 0,
  productCost: 0,
  shippingCost: 0,
  currency: 'USD',
};

export const PodCalculator: React.FC<{ initialParams?: Partial<PodInputs> }> = ({ initialParams }) => {
  const [inputs, setInputs] = useState<PodInputs>({
    ...EMPTY_POD_INPUTS,
    ...initialParams,
  });

  const [, startTransition] = useTransition();

  const handleInput = <K extends keyof PodInputs>(key: K, value: PodInputs[K]) => {
    startTransition(() => {
      setInputs((prev) => ({ ...prev, [key]: value }));
    });
  };

  const handleReset = () => {
    setInputs(EMPTY_POD_INPUTS);
    trackEvent('calculator_reset', { calculatorType: 'pod' });
  };

  const hasInputValues = inputs.sellingPrice > 0;
  const result = calculatePodProfit(inputs);

  const sensitivityPoints = generatePriceSensitivityCurve(inputs.sellingPrice || 28, (testPrice) => {
    const res = calculatePodProfit({ ...inputs, sellingPrice: testPrice });
    return {
      grossRevenue: res.grossRevenue,
      netProfit: res.netProfit,
      profitMargin: res.profitMargin,
      totalFees: res.totalFees,
      totalCosts: res.totalCosts,
    };
  });

  const breakdownItems = [
    { label: 'Net Profit', amount: Math.max(0, result.netProfit), color: '#10b981' },
    { label: 'POD Blank Item Cost', amount: inputs.podBaseCost, color: '#3b82f6' },
    { label: 'POD Supplier Shipping', amount: inputs.podShippingCost, color: '#6366f1' },
    { label: 'Marketplace & Payment Fees', amount: result.totalFees, color: '#f59e0b' },
    { label: 'Ads & Marketing', amount: inputs.advertisingCost, color: '#ec4899' },
  ];

  const getShareUrl = () => {
    if (typeof window === 'undefined') return '';
    const query = encodeCalculatorState({
      price: inputs.sellingPrice,
      cost: inputs.podBaseCost,
      currency: inputs.currency,
    });
    return `${window.location.origin}${window.location.pathname}?${query}`;
  };

  return (
    <div className="w-full space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center font-bold text-emerald-600 dark:text-emerald-400 text-lg">
            P
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Print-on-Demand Profit Calculator</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Calculate Printify & Gelato blank costs, shipping & store profit
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Select
            options={Object.values(CURRENCIES).map((c) => ({ label: `${c.code} (${c.symbol})`, value: c.code }))}
            value={inputs.currency}
            onChange={(e) => handleInput('currency', e.target.value as CurrencyCode)}
            className="w-32 text-xs"
          />
          <ShareButton getShareUrl={getShareUrl} />
          <Button variant="ghost" size="sm" onClick={handleReset} title="Reset calculator">
            <RotateCcw className="w-4 h-4 text-slate-500" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-5 bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-2">
            POD Retail & Supplier Costs
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="Retail Selling Price"
              placeholder="e.g. 28.00"
              value={inputs.sellingPrice}
              onChange={(val) => handleInput('sellingPrice', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
            <CurrencyInput
              label="POD Base Blank Item Cost"
              placeholder="e.g. 11.50"
              value={inputs.podBaseCost}
              onChange={(val) => handleInput('podBaseCost', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="Shipping Charged to Buyer"
              placeholder="e.g. 4.99"
              value={inputs.shippingCharged}
              onChange={(val) => handleInput('shippingCharged', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
            <CurrencyInput
              label="POD Supplier Shipping Cost"
              placeholder="e.g. 4.99"
              value={inputs.podShippingCost}
              onChange={(val) => handleInput('podShippingCost', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <PercentageInput
              label="Marketplace Fee % (e.g. Etsy 6.5%)"
              value={inputs.marketplaceFeeRate}
              onChange={(val) => handleInput('marketplaceFeeRate', val)}
            />
            <CurrencyInput
              label="Ad Spend / Marketing per Item"
              placeholder="e.g. 3.00"
              value={inputs.advertisingCost}
              onChange={(val) => handleInput('advertisingCost', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <ResultCard
            result={result}
            currency={inputs.currency}
            feeLabel="Total Platform & Payment Fees"
            hasInputValues={hasInputValues}
          />

          {hasInputValues && (
            <CostBreakdownChart
              grossRevenue={result.grossRevenue}
              items={breakdownItems}
              currency={inputs.currency}
            />
          )}
        </div>
      </div>

      {hasInputValues && (
        <PriceSensitivitySlider
          currentPrice={inputs.sellingPrice}
          points={sensitivityPoints}
          currency={inputs.currency}
          onSelectPrice={(newPrice) => handleInput('sellingPrice', newPrice)}
        />
      )}

      {/* Contextual Affiliate Cards */}
      <AffiliateProviderGrid />

      <FeeAssumptionsDrawer
        platformName="Print-on-Demand"
        lastReviewed={POD_FEE_ASSUMPTIONS.lastReviewed}
        officialSource={POD_FEE_ASSUMPTIONS.officialSource}
        rules={POD_FEE_ASSUMPTIONS.rules}
      />
    </div>
  );
};
