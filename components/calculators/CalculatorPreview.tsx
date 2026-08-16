'use client';

import React, { useState } from 'react';
import { calculateEtsyProfit } from '@/lib/calculators/etsy';
import { formatCurrency } from '@/lib/config/currencies';
import { CurrencyInput } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CalculatorPreview: React.FC = () => {
  const [price, setPrice] = useState(29.99);
  const [cost, setCost] = useState(7.50);
  const [shipping, setShipping] = useState(4.50);

  const res = calculateEtsyProfit({
    sellingPrice: price,
    quantity: 1,
    shippingCharged: shipping,
    productCost: cost,
    packagingCost: 1.00,
    shippingCost: shipping,
    advertisingCost: 1.50,
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
    <div className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-xl backdrop-blur-md p-5 sm:p-6 text-left">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            Live Profit Calculator Demo
          </span>
        </div>
        <span className="text-[11px] font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950 px-2 py-0.5 rounded">
          Etsy Preset
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        <CurrencyInput
          label="Selling Price"
          value={price}
          onChange={setPrice}
          currencySymbol="$"
        />
        <CurrencyInput
          label="Product Cost"
          value={cost}
          onChange={setCost}
          currencySymbol="$"
        />
        <CurrencyInput
          label="Shipping Cost"
          value={shipping}
          onChange={setShipping}
          currencySymbol="$"
        />
      </div>

      <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
            Estimated Take-Home Profit
          </span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-3xl font-black text-emerald-400">
              {formatCurrency(res.netProfit, 'USD')}
            </span>
            <span className="text-sm font-bold text-slate-300">
              ({res.profitMargin}% margin)
            </span>
          </div>
        </div>

        <Link href="/etsy-profit-calculator">
          <Button variant="primary" size="sm" className="w-full sm:w-auto gap-1.5 whitespace-nowrap">
            Open Full Calculator <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
