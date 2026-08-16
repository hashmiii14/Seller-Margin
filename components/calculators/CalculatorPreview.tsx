'use client';

import React, { useState } from 'react';
import { calculateEtsyProfit } from '@/lib/calculators/etsy';
import { CurrencyInput } from '@/components/ui/Input';
import { CURRENCIES, formatCurrency } from '@/lib/config/currencies';
import { Badge } from '@/components/ui/Card';
import { ArrowRight, Calculator, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const CalculatorPreview: React.FC = () => {
  const [sellingPrice, setSellingPrice] = useState<number>(29.99);
  const [productCost, setProductCost] = useState<number>(7.25);
  const [shippingCost, setShippingCost] = useState<number>(4.50);

  const result = calculateEtsyProfit({
    sellingPrice,
    quantity: 1,
    shippingCharged: 4.50,
    productCost,
    packagingCost: 1.00,
    shippingCost,
    advertisingCost: 2.00,
    otherCosts: 0.50,
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
          <span className="font-bold text-sm sm:text-base">Interactive Profit Calculator</span>
        </div>
        <Badge variant="brand" className="text-xs bg-brand-500/20 text-brand-300 border-brand-500/30">
          <Sparkles className="w-3 h-3 mr-1 inline" /> Example Calculation
        </Badge>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        {/* Input Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <CurrencyInput
            label="Selling Price"
            value={sellingPrice}
            onChange={setSellingPrice}
            currencySymbol="$"
          />
          <CurrencyInput
            label="Product Cost"
            value={productCost}
            onChange={setProductCost}
            currencySymbol="$"
          />
          <CurrencyInput
            label="Shipping Cost"
            value={shippingCost}
            onChange={setShippingCost}
            currencySymbol="$"
          />
        </div>

        {/* Live Calculation Output Dashboard */}
        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-baseline justify-between gap-4 border-b border-slate-200 dark:border-slate-700 pb-3">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Estimated Net Profit</span>
              <span className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">
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
        </div>

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
