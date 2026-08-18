'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { EtsyInputs, CurrencyCode } from '@/lib/calculators/types';
import { calculateEtsyProfit, generatePriceSensitivityCurve } from '@/lib/calculators/etsy';
import { CURRENCIES } from '@/lib/config/currencies';
import { ETSY_COUNTRY_FEES } from '@/lib/config/fees/etsy';
import { CurrencyInput, NumberInput } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Toggle } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { ResultCard } from '@/components/calculators/ResultCard';
import { CostBreakdownChart } from '@/components/calculators/CostBreakdownChart';
import { PriceSensitivitySlider } from '@/components/calculators/PriceSensitivitySlider';
import { FeeAssumptionsDrawer } from '@/components/calculators/FeeAssumptionsDrawer';
import { ShareButton } from '@/components/calculators/ShareButton';
import { PresetsBar } from '@/components/calculators/PresetsBar';
import { FeeChart } from '@/components/calculators/FeeChart';
import { encodeCalculatorState } from '@/lib/calculators/url-state';
import { RotateCcw, SlidersHorizontal, Globe, ExternalLink, Calculator } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const DEFAULT_INPUTS: EtsyInputs = {
  sellingPrice: 29.99,
  quantity: 1,
  shippingCharged: 4.50,
  productCost: 7.50,
  packagingCost: 0,
  shippingCost: 4.50,
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

export const EtsyCalculator: React.FC<{
  initialParams?: Partial<EtsyInputs>;
  initialCountry?: string;
}> = ({ initialParams, initialCountry = 'US' }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>(initialCountry);

  const countryConfig = ETSY_COUNTRY_FEES[selectedCountry] || ETSY_COUNTRY_FEES.US;

  const [inputs, setInputs] = useState<EtsyInputs>({
    ...DEFAULT_INPUTS,
    paymentProcessingRate: countryConfig.paymentProcessingRate,
    paymentProcessingFixed: countryConfig.paymentProcessingFixed,
    currency: (countryConfig.currency as CurrencyCode) || 'USD',
    ...initialParams,
  });

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [, startTransition] = useTransition();

  // Auto Currency & Country Detection based on Browser Locale
  useEffect(() => {
    if (typeof window !== 'undefined' && initialCountry === 'US' && !initialParams?.currency) {
      const lang = navigator.language || '';
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      let detectedCountry = 'US';

      if (lang.includes('en-GB') || tz.includes('Europe/London')) {
        detectedCountry = 'UK';
      } else if (lang.includes('en-CA') || tz.includes('Toronto') || tz.includes('Vancouver')) {
        detectedCountry = 'CA';
      } else if (lang.includes('en-AU') || tz.includes('Australia') || tz.includes('Sydney')) {
        detectedCountry = 'AU';
      } else if (lang.includes('de') || tz.includes('Europe/Berlin')) {
        detectedCountry = 'DE';
      }

      if (detectedCountry !== 'US' && ETSY_COUNTRY_FEES[detectedCountry]) {
        handleCountryChange(detectedCountry);
      }
    }
  }, []);

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
    const cfg = ETSY_COUNTRY_FEES[countryCode] || ETSY_COUNTRY_FEES.US;
    setInputs((prev) => ({
      ...prev,
      paymentProcessingRate: cfg.paymentProcessingRate,
      paymentProcessingFixed: cfg.paymentProcessingFixed,
      currency: (cfg.currency as CurrencyCode) || prev.currency,
    }));
    trackEvent('etsy_country_changed', { country: countryCode });
  };

  const handleInput = <K extends keyof EtsyInputs>(key: K, value: EtsyInputs[K]) => {
    startTransition(() => {
      setInputs((prev) => ({ ...prev, [key]: value }));
    });
  };

  const handleReset = () => {
    const cfg = ETSY_COUNTRY_FEES[selectedCountry] || ETSY_COUNTRY_FEES.US;
    setInputs({
      ...DEFAULT_INPUTS,
      paymentProcessingRate: cfg.paymentProcessingRate,
      paymentProcessingFixed: cfg.paymentProcessingFixed,
      currency: (cfg.currency as CurrencyCode) || 'USD',
    });
    trackEvent('calculator_reset', { calculatorType: 'etsy' });
  };

  const handleSelectPreset = (preset: { price: number; cost: number; shipping: number }) => {
    setInputs((prev) => ({
      ...prev,
      sellingPrice: preset.price,
      productCost: preset.cost,
      shippingCost: preset.shipping,
      shippingCharged: preset.shipping,
    }));
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
    const query = encodeCalculatorState(inputs as any);
    if (typeof window !== 'undefined') {
      return `${window.location.origin}${window.location.pathname}?${query}`;
    }
    return '';
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Header Controls Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold text-lg">
            <Calculator className="w-5 h-5 text-brand-600 dark:text-brand-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Etsy Profit Calculator</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Country-aware Etsy Payments rates verified for August 2026
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          {/* Seller Country Selector */}
          <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 p-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
            <Globe className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <select
              value={selectedCountry}
              onChange={(e) => handleCountryChange(e.target.value)}
              className="bg-transparent text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none cursor-pointer"
            >
              {Object.values(ETSY_COUNTRY_FEES).map((c) => (
                <option key={c.countryCode} value={c.countryCode} className="dark:bg-slate-900">
                  {c.countryName} ({c.symbol})
                </option>
              ))}
            </select>
          </div>

          <Select
            options={Object.values(CURRENCIES).map((c) => ({ label: `${c.code} (${c.symbol})`, value: c.code }))}
            value={inputs.currency}
            onChange={(e) => handleInput('currency', e.target.value as CurrencyCode)}
            className="w-28 text-xs"
          />
          <ShareButton getShareUrl={getShareUrl} />
          <Button variant="ghost" size="sm" onClick={handleReset} title="Reset calculator">
            <RotateCcw className="w-4 h-4 text-slate-500" />
          </Button>
        </div>
      </div>

      {/* 1-Click Presets Bar */}
      <PresetsBar onSelectPreset={handleSelectPreset} />

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Input Form Controls */}
        <div className="lg:col-span-6 space-y-5 bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Sale & Product Costs
            </h3>
            <span className="text-[11px] text-brand-600 dark:text-brand-400 font-medium">
              Payment Rate: {countryConfig.paymentProcessingRate}% + {countryConfig.symbol}{countryConfig.paymentProcessingFixed}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="Retail Selling Price"
              value={inputs.sellingPrice}
              onChange={(v) => handleInput('sellingPrice', v)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
              placeholder="e.g. 29.99"
              tooltip="The retail price displayed on your Etsy listing (excluding shipping)."
            />

            <NumberInput
              label="Quantity Sold"
              value={inputs.quantity}
              onChange={(v) => handleInput('quantity', v)}
              min={1}
              step={1}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="Shipping Charged to Buyer"
              value={inputs.shippingCharged}
              onChange={(v) => handleInput('shippingCharged', v)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
              placeholder="e.g. 4.50"
              tooltip="Shipping fee collected from the buyer (Etsy applies 6.5% transaction fee to this amount)."
            />

            <CurrencyInput
              label="Product Cost of Goods (COGS)"
              value={inputs.productCost}
              onChange={(v) => handleInput('productCost', v)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
              placeholder="e.g. 7.50"
              tooltip="Your raw materials, wholesale cost, or print-on-demand supplier cost per unit."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CurrencyInput
              label="Shipping Cost (Paid by You)"
              value={inputs.shippingCost}
              onChange={(v) => handleInput('shippingCost', v)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
              placeholder="e.g. 4.50"
              tooltip="Actual postage cost you pay to USPS, UPS, Royal Mail, or Canada Post."
            />

            <CurrencyInput
              label="Packaging & Labels"
              value={inputs.packagingCost}
              onChange={(v) => handleInput('packagingCost', v)}
              currencySymbol={CURRENCIES[inputs.currency].symbol}
              placeholder="e.g. 0.50"
            />
          </div>

          {/* Advanced Fee Overrides Toggle */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              {showAdvanced ? 'Hide Advanced Fees & Ads' : 'Show Advanced Fee Rates & Offsite Ads'}
            </button>

            {showAdvanced && (
              <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-4 animate-in fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <CurrencyInput
                    label="Listing Fee Override"
                    value={inputs.listingFee}
                    onChange={(v) => handleInput('listingFee', v)}
                    currencySymbol={CURRENCIES[inputs.currency].symbol}
                    step={0.01}
                  />

                  <NumberInput
                    label="Transaction Fee Rate (%)"
                    value={inputs.transactionFeeRate}
                    onChange={(v) => handleInput('transactionFeeRate', v)}
                    min={0}
                    max={100}
                    step={0.1}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumberInput
                    label="Payment Processing Rate (%)"
                    value={inputs.paymentProcessingRate}
                    onChange={(v) => handleInput('paymentProcessingRate', v)}
                    min={0}
                    max={100}
                    step={0.1}
                  />

                  <CurrencyInput
                    label="Payment Processing Fixed"
                    value={inputs.paymentProcessingFixed}
                    onChange={(v) => handleInput('paymentProcessingFixed', v)}
                    currencySymbol={CURRENCIES[inputs.currency].symbol}
                    step={0.01}
                  />
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <Toggle
                    label="Etsy Offsite Ads Fee Enabled"
                    description="Charged if buyer purchased via Google/FB ad click (15% for under $10k/yr, 12% for over $10k/yr)"
                    checked={inputs.offsiteAdsEnabled}
                    onChange={(v) => handleInput('offsiteAdsEnabled', v)}
                  />

                  {inputs.offsiteAdsEnabled && (
                    <Select
                      label="Offsite Ads Fee Tier"
                      value={String(inputs.offsiteAdsRate)}
                      onChange={(e) => handleInput('offsiteAdsRate', Number(e.target.value))}
                      options={[
                        { label: '15% Fee (Under $10,000 Annual Sales)', value: '15' },
                        { label: '12% Fee (Over $10,000 Annual Sales)', value: '12' },
                      ]}
                    />
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 dark:border-slate-800">
            <span>Official Etsy House Rules Review: <strong className="text-slate-700 dark:text-slate-300">August 2026</strong></span>
            <a
              href={countryConfig.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 dark:text-brand-400 font-semibold hover:underline flex items-center gap-1"
            >
              Verify Source <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic Results & Breakdown */}
        <div className="lg:col-span-6 space-y-6">
          <ResultCard result={result} currency={inputs.currency} hasInputValues={hasInputValues} calculatorType="etsy" />

          {hasInputValues && (
            <>
              <FeeChart
                grossRevenue={result.grossRevenue}
                totalFees={result.totalFees}
                totalCosts={result.totalCosts}
                netProfit={result.netProfit}
                currency={inputs.currency}
              />

              <CostBreakdownChart items={breakdownItems} currency={inputs.currency} grossRevenue={result.grossRevenue} />

              <PriceSensitivitySlider
                points={sensitivityPoints}
                currentPrice={inputs.sellingPrice}
                currency={inputs.currency}
                onSelectPrice={(p) => handleInput('sellingPrice', p)}
              />
            </>
          )}

          <FeeAssumptionsDrawer />
        </div>
      </div>
    </div>
  );
};
