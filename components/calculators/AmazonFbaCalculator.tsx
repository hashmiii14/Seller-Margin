'use client';

import React, { useState, useTransition } from 'react';
import { AmazonFbaInputs, CurrencyCode } from '@/lib/calculators/types';
import { calculateAmazonFbaProfit } from '@/lib/calculators/amazon';
import { generatePriceSensitivityCurve } from '@/lib/calculators/core';
import { CURRENCIES } from '@/lib/config/currencies';
import { AMAZON_FBA_FEE_ASSUMPTIONS } from '@/lib/config/fees/amazon';
import { CurrencyInput, PercentageInput } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { ResultCard } from '@/components/calculators/ResultCard';
import { CostBreakdownChart } from '@/components/calculators/CostBreakdownChart';
import { PriceSensitivitySlider } from '@/components/calculators/PriceSensitivitySlider';
import { FeeAssumptionsDrawer } from '@/components/calculators/FeeAssumptionsDrawer';
import { ShareButton } from '@/components/calculators/ShareButton';
import { encodeCalculatorState } from '@/lib/calculators/url-state';
import { RotateCcw, SlidersHorizontal } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const EMPTY_AMAZON_INPUTS: AmazonFbaInputs = {
  sellingPrice: 0,
  productCost: 0,
  shippingCharged: 0,
  shippingCost: 0,
  inboundShipping: 0,
  advertisingCost: 0,
  otherCosts: 0,
  referralFeeRate: 15,
  fbaFulfillmentFee: 4.75,
  monthlyStorageFee: 0.45,
  returnsAllowanceRate: 2,
  marketplace: 'US',
  currency: 'USD',
};

export const AmazonFbaCalculator: React.FC<{ initialParams?: Partial<AmazonFbaInputs> }> = ({ initialParams }) => {
  const [inputs, setInputs] = useState<AmazonFbaInputs>({
    ...EMPTY_AMAZON_INPUTS,
    ...initialParams,
  });

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [, startTransition] = useTransition();

  const handleInput = <K extends keyof AmazonFbaInputs>(key: K, value: AmazonFbaInputs[K]) => {
    startTransition(() => {
      setInputs((prev) => ({ ...prev, [key]: value }));
    });
  };

  const handleReset = () => {
    setInputs(EMPTY_AMAZON_INPUTS);
    trackEvent('calculator_reset', { calculatorType: 'amazon' });
  };

  const hasInputValues = inputs.sellingPrice > 0;
  const result = calculateAmazonFbaProfit(inputs);

  const sensitivityPoints = generatePriceSensitivityCurve(inputs.sellingPrice || 35, (testPrice) => {
    const res = calculateAmazonFbaProfit({ ...inputs, sellingPrice: testPrice });
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
    { label: 'Amazon Referral Fee', amount: result.referralFeeTotal, color: '#f59e0b' },
    { label: 'FBA Fulfillment Fee', amount: result.fulfillmentFeeTotal, color: '#d97706' },
    { label: 'Storage & Returns', amount: result.storageFeeTotal + result.returnsAllowanceTotal, color: '#b45309' },
    { label: 'Product Cost', amount: inputs.productCost, color: '#3b82f6' },
    { label: 'Inbound Freight', amount: inputs.inboundShipping, color: '#6366f1' },
    { label: 'PPC Ads', amount: inputs.advertisingCost, color: '#ec4899' },
  ];

  const getShareUrl = () => {
    if (typeof window === 'undefined') return '';
    const query = encodeCalculatorState({
      price: inputs.sellingPrice,
      cost: inputs.productCost,
      currency: inputs.currency,
    });
    return `${window.location.origin}${window.location.pathname}?${query}`;
  };

  return (
    <div className="w-full space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-950 flex items-center justify-center font-bold text-amber-600 dark:text-amber-400 text-lg">
            a
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Amazon FBA Profit Calculator</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Estimate referral fees, weight fulfillment & storage fees
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

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-5 bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-2">
            Amazon Sales & Inventory Costs
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="Selling Price"
              placeholder="e.g. 34.99"
              value={inputs.sellingPrice}
              onChange={(val) => handleInput('sellingPrice', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
            <CurrencyInput
              label="Unit Product Cost (Landed)"
              placeholder="e.g. 8.50"
              value={inputs.productCost}
              onChange={(val) => handleInput('productCost', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="FBA Fulfillment Fee per Unit"
              placeholder="e.g. 4.75"
              value={inputs.fbaFulfillmentFee}
              onChange={(val) => handleInput('fbaFulfillmentFee', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
            <CurrencyInput
              label="Inbound Shipping to FBA"
              placeholder="e.g. 1.25"
              value={inputs.inboundShipping}
              onChange={(val) => handleInput('inboundShipping', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="Amazon PPC Ad Spend / Unit"
              placeholder="e.g. 3.50"
              value={inputs.advertisingCost}
              onChange={(val) => handleInput('advertisingCost', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
            <CurrencyInput
              label="Monthly Storage Fee / Unit"
              placeholder="e.g. 0.45"
              value={inputs.monthlyStorageFee}
              onChange={(val) => handleInput('monthlyStorageFee', val)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
            />
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1.5 focus:outline-none"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              {showAdvanced ? 'Hide Advanced Amazon Parameters' : 'Configure Referral Rates & Customer Returns Allowance'}
            </button>
          </div>

          {showAdvanced && (
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-4 text-xs">
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Advanced Amazon Fee Rates</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <PercentageInput
                  label="Category Referral Fee %"
                  value={inputs.referralFeeRate}
                  onChange={(val) => handleInput('referralFeeRate', val)}
                />
                <PercentageInput
                  label="Customer Returns Allowance %"
                  value={inputs.returnsAllowanceRate}
                  onChange={(val) => handleInput('returnsAllowanceRate', val)}
                />
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-6 space-y-6">
          <ResultCard
            result={result}
            currency={inputs.currency}
            feeLabel="Total Amazon Fees"
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

      <FeeAssumptionsDrawer
        platformName="Amazon FBA"
        lastReviewed={AMAZON_FBA_FEE_ASSUMPTIONS.lastReviewed}
        officialSource={AMAZON_FBA_FEE_ASSUMPTIONS.officialSource}
        rules={AMAZON_FBA_FEE_ASSUMPTIONS.rules}
      />
    </div>
  );
};
