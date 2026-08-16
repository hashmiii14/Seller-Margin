'use client';

import React, { useState, useTransition } from 'react';
import { EtsyInputs, CurrencyCode } from '@/lib/calculators/types';
import { calculateEtsyProfit } from '@/lib/calculators/etsy';
import { generatePriceSensitivityCurve } from '@/lib/calculators/core';
import { CURRENCIES } from '@/lib/config/currencies';
import { ETSY_FEE_ASSUMPTIONS } from '@/lib/config/fees/etsy';
import { CurrencyInput, PercentageInput } from '@/components/ui/Input';
import { Select, Toggle } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { ResultCard } from '@/components/calculators/ResultCard';
import { CostBreakdownChart } from '@/components/calculators/CostBreakdownChart';
import { PriceSensitivitySlider } from '@/components/calculators/PriceSensitivitySlider';
import { FeeAssumptionsDrawer } from '@/components/calculators/FeeAssumptionsDrawer';
import { ShareButton } from '@/components/calculators/ShareButton';
import { encodeCalculatorState } from '@/lib/calculators/url-state';
import { RotateCcw, SlidersHorizontal, Sparkles } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const EMPTY_INPUTS: EtsyInputs = {
  sellingPrice: 0,
  quantity: 1,
  shippingCharged: 0,
  productCost: 0,
  packagingCost: 0,
  shippingCost: 0,
  advertisingCost: 0,
  otherCosts: 0,
  listingFee: 0.20,
  transactionFeeRate: 6.5,
  paymentProcessingRate: 3.0,
  paymentProcessingFixed: 0.25,
  offsiteAdsEnabled: false,
  offsiteAdsRate: 15,
  currency: 'USD',
};

export const EtsyCalculator: React.FC<{ initialParams?: Partial<EtsyInputs> }> = ({ initialParams }) => {
  const [inputs, setInputs] = useState<EtsyInputs>({
    ...EMPTY_INPUTS,
    ...initialParams,
  });

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [, startTransition] = useTransition();

  const handleInput = <K extends keyof EtsyInputs>(key: K, value: EtsyInputs[K]) => {
    startTransition(() => {
      setInputs((prev) => ({ ...prev, [key]: value }));
    });
  };

  const handleReset = () => {
    setInputs(EMPTY_INPUTS);
    trackEvent('calculator_reset', { calculatorType: 'etsy' });
  };

  const hasInputValues = inputs.sellingPrice > 0;
  const result = calculateEtsyProfit(inputs);

  const sensitivityPoints = generatePriceSensitivityCurve(inputs.sellingPrice || 25, (testPrice) => {
    const res = calculateEtsyProfit({ ...inputs, sellingPrice: testPrice });
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
    { label: 'Etsy Platform Fees', amount: result.totalEtsyFees, color: '#f59e0b' },
    { label: 'Product & Packaging Cost', amount: (inputs.productCost + inputs.packagingCost) * inputs.quantity, color: '#3b82f6' },
    { label: 'Shipping Cost', amount: inputs.shippingCost * inputs.quantity, color: '#6366f1' },
    { label: 'Ads & Marketing', amount: inputs.advertisingCost * inputs.quantity, color: '#ec4899' },
    { label: 'Other Expenses', amount: inputs.otherCosts * inputs.quantity, color: '#94a3b8' },
  ];

  const getShareUrl = () => {
    if (typeof window === 'undefined') return '';
    const query = encodeCalculatorState({
      price: inputs.sellingPrice,
      cost: inputs.productCost,
      shipping: inputs.shippingCost,
      currency: inputs.currency,
    });
    return `${window.location.origin}${window.location.pathname}?${query}`;
  };

  return (
    <div className="w-full space-y-8">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-950 flex items-center justify-center font-bold text-orange-600 dark:text-orange-400 text-lg">
            E
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Etsy Profit Calculator</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Calculate listing, transaction & payment processing fees
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

      {/* Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Input Form Controls */}
        <div className="lg:col-span-6 space-y-5 bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-2">
            Sale & Product Costs
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="Selling Price (per item)"
              placeholder="e.g. 29.99"
              value={inputs.sellingPrice}
              onChange={(val) => handleInput('sellingPrice', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
            <CurrencyInput
              label="Product Material Cost"
              placeholder="e.g. 7.50"
              value={inputs.productCost}
              onChange={(val) => handleInput('productCost', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="Shipping Charged to Buyer"
              placeholder="e.g. 4.50"
              value={inputs.shippingCharged}
              onChange={(val) => handleInput('shippingCharged', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
            <CurrencyInput
              label="Shipping Paid by Seller"
              placeholder="e.g. 4.50"
              value={inputs.shippingCost}
              onChange={(val) => handleInput('shippingCost', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="Packaging & Mailer Cost"
              placeholder="e.g. 1.00"
              value={inputs.packagingCost}
              onChange={(val) => handleInput('packagingCost', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
            <CurrencyInput
              label="Etsy Ads / Marketing Spend"
              placeholder="e.g. 2.00"
              value={inputs.advertisingCost}
              onChange={(val) => handleInput('advertisingCost', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
          </div>

          {/* Advanced Options Toggle */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1.5 focus:outline-none"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              {showAdvanced ? 'Hide Advanced Etsy Fee Settings' : 'Configure Advanced Etsy Fees & Offsite Ads'}
            </button>
          </div>

          {showAdvanced && (
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-4 text-xs">
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Advanced Etsy Platform Fee Rules</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <CurrencyInput
                  label="Listing Fee"
                  value={inputs.listingFee}
                  onChange={(val) => handleInput('listingFee', val)}
                  currencySymbol={CURRENCIES[inputs.currency].symbol}
                />
                <PercentageInput
                  label="Etsy Transaction Fee %"
                  value={inputs.transactionFeeRate}
                  onChange={(val) => handleInput('transactionFeeRate', val)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <PercentageInput
                  label="Payment Processing %"
                  value={inputs.paymentProcessingRate}
                  onChange={(val) => handleInput('paymentProcessingRate', val)}
                />
                <CurrencyInput
                  label="Payment Fixed Fee"
                  value={inputs.paymentProcessingFixed}
                  onChange={(val) => handleInput('paymentProcessingFixed', val)}
                  currencySymbol={CURRENCIES[inputs.currency].symbol}
                />
              </div>

              <Toggle
                label="Etsy Offsite Ads Enabled"
                description="Etsy advertises your items on Google, Facebook & Pinterest."
                checked={inputs.offsiteAdsEnabled}
                onChange={(val) => handleInput('offsiteAdsEnabled', val)}
              />

              {inputs.offsiteAdsEnabled && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <Select
                    label="Offsite Ads Fee Tier"
                    options={[
                      { label: '15% (< $10k annual sales)', value: '15' },
                      { label: '12% (≥ $10k annual sales)', value: '12' },
                    ]}
                    value={String(inputs.offsiteAdsRate)}
                    onChange={(e) => handleInput('offsiteAdsRate', parseFloat(e.target.value))}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Live Results Dashboard */}
        <div className="lg:col-span-6 space-y-6">
          <ResultCard
            result={result}
            currency={inputs.currency}
            feeLabel="Total Etsy Fees"
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

      {/* Fee Assumptions Drawer */}
      <FeeAssumptionsDrawer
        platformName="Etsy"
        lastReviewed={ETSY_FEE_ASSUMPTIONS.lastReviewed}
        officialSource={ETSY_FEE_ASSUMPTIONS.officialSource}
        rules={ETSY_FEE_ASSUMPTIONS.rules}
      />
    </div>
  );
};
