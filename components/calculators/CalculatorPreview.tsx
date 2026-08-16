'use client';

import React, { useState } from 'react';
import { calculateEtsyProfit } from '@/lib/calculators/etsy';
import { CurrencyInput } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { CURRENCIES, formatCurrency } from '@/lib/config/currencies';
import { Badge } from '@/components/ui/Card';
import { ArrowRight, Calculator, CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export const CalculatorPreview: React.FC = () => {
  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [productCost, setProductCost] = useState<number>(0);
  const [shippingCost, setShippingCost] = useState<number>(0);

  const handleLoadExample = () => {
    setSellingPrice(29.99);
    setProductCost(7.25);
    setShippingCost(4.50);
  };

  const handleReset = () => {
    setSellingPrice(0);
    setProductCost(0);
    setShippingCost(0);
  };

  const hasInputs = sellingPrice > 0;

  const result = calculateEtsyProfit({
    sellingPrice: sellingPrice || 0,
    quantity: 1,
    shippingCharged: hasInputs ? 4.50 : 0,
    productCost: productCost || 0,
    packagingCost: hasInputs ? 1.00 : 0,
    shippingCost: shippingCost || 0,
    advertisingCost: hasInputs ? 2.00 : 0,
    otherCosts: hasInputs ? 0.50 : 0,
    listingFee: 0.20,
    transactionFeeRate: 6.5,
    paymentProcessingRate: 3.0,
    paymentProcessingFixed: 0.25,
    offsiteAdsEnabled: false,
    offsiteAdsRate: 15,
    currency: 'USD',
  });

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
      {/* Header Bar */}
      <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-brand-400" />
          <span className="font-bold text-sm sm:text-base">Interactive Hero Calculator</span>
        </div>
        <div className="flex items-center gap-2">
          {hasInputs ? (
            <Badge variant="brand" className="text-xs bg-brand-500/20 text-brand-300 border-brand-500/30">
              <Sparkles className="w-3 h-3 mr-1 inline" /> Live Result
            </Badge>
          ) : (
            <Badge variant="neutral" className="text-xs bg-slate-800 text-slate-300 border-slate-700">
              Empty State
            </Badge>
          )}
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        {/* Input Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <CurrencyInput
            label="Selling Price"
            placeholder="e.g. 29.99"
            value={sellingPrice}
            onChange={setSellingPrice}
            currencySymbol="$"
          />
          <CurrencyInput
            label="Product Cost"
            placeholder="e.g. 7.25"
            value={productCost}
            onChange={setProductCost}
            currencySymbol="$"
          />
          <CurrencyInput
            label="Shipping Cost"
            placeholder="e.g. 4.50"
            value={shippingCost}
            onChange={setShippingCost}
            currencySymbol="$"
          />
        </div>

        {/* Live Output Dashboard OR Empty Prompt */}
        {hasInputs ? (
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-baseline justify-between gap-4 border-b border-slate-200 dark:border-slate-700 pb-3">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Estimated Net Profit</span>
                <span className={`text-3xl sm:text-4xl font-black ${result.netProfit < 0 ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                  {formatCurrency(result.netProfit, 'USD')}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Net Margin</span>
                <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {result.profitMargin}%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
              <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Revenue</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{formatCurrency(result.grossRevenue, 'USD')}</span>
              </div>
              <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Est. Fees</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">{formatCurrency(result.totalFees, 'USD')}</span>
              </div>
              <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Break-Even</span>
                <span className="font-bold text-brand-600 dark:text-brand-400">{formatCurrency(result.breakEvenPrice, 'USD')}</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" /> Clear Inputs
              </button>
              <span className="text-[11px] italic">Based on verified 2026 Etsy fee rules</span>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 text-center space-y-3">
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Enter your retail selling price and product cost above to see instant fee deductions and net profit.
            </p>
            <Button variant="outline" size="sm" onClick={handleLoadExample} className="gap-1.5 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" /> Load Example Calculation ($29.99)
            </Button>
          </div>
        )}

        {/* CTA Link */}
        <div className="pt-1 text-center">
          <Link
            href="/etsy-profit-calculator"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
          >
            Open Full Etsy Profit Calculator <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
