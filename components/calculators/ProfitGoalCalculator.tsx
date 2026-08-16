'use client';

import React, { useState } from 'react';
import { CurrencyInput, NumberInput } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { CurrencyCode, CURRENCIES, formatCurrency } from '@/lib/config/currencies';
import { Card } from '@/components/ui/Card';
import { Target, TrendingUp, Calendar, Copy, Check } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export const ProfitGoalCalculator: React.FC = () => {
  const [targetMonthlyProfit, setTargetMonthlyProfit] = useState<number>(1000);
  const [profitPerSale, setProfitPerSale] = useState<number>(12);
  const [sellingPrice, setSellingPrice] = useState<number>(29.99);
  const [workingDays, setWorkingDays] = useState<number>(20);
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [copied, setCopied] = useState<boolean>(false);

  // Calculations
  const validProfit = Math.max(0.01, profitPerSale);
  const validTarget = Math.max(0, targetMonthlyProfit);
  const monthlyOrders = Math.ceil(validTarget / validProfit);
  const weeklyOrders = Math.ceil(monthlyOrders / 4.33);
  const dailyOrders = Math.ceil(monthlyOrders / Math.max(1, workingDays));
  const requiredRevenue = monthlyOrders * Math.max(0, sellingPrice);

  // Scenarios: Profit per sale $12, $18, $25
  const scenarioLowProfit = Math.max(1, profitPerSale * 0.75);
  const scenarioCurrentProfit = profitPerSale;
  const scenarioHighProfit = profitPerSale * 1.5;

  const scenarios = [
    { label: 'Current Margin', profit: scenarioCurrentProfit, orders: Math.ceil(validTarget / scenarioCurrentProfit) },
    { label: '+50% Margin Boost', profit: scenarioHighProfit, orders: Math.ceil(validTarget / scenarioHighProfit) },
    { label: '-25% Discounted Margin', profit: scenarioLowProfit, orders: Math.ceil(validTarget / scenarioLowProfit) },
  ];

  const handleCopySummary = () => {
    const text = `Sellrivo Profit Goal Report:
Target Monthly Profit: ${formatCurrency(targetMonthlyProfit, currency)}
Profit Per Sale: ${formatCurrency(profitPerSale, currency)}
Selling Price: ${formatCurrency(sellingPrice, currency)}
--------------------------------
Required Monthly Sales: ${monthlyOrders} orders
Required Daily Sales (${workingDays} days/mo): ${dailyOrders} orders/day
Required Monthly Revenue: ${formatCurrency(requiredRevenue, currency)}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackEvent('profit_goal_copied', { target: targetMonthlyProfit });
  };

  return (
    <div className="space-y-8">
      {/* Title Header */}
      <div className="text-left space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
          <Target className="w-3.5 h-3.5" /> Signature Tool
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Seller Profit Goal Calculator
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          Set your target monthly income and find out exactly how many unit sales you need per day and week to reach your goal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Input Form */}
        <Card className="lg:col-span-5 border-slate-200 dark:border-slate-800">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-600" /> Goal Assumptions
            </h3>
          </div>
          <div className="space-y-4">
            <Select
              label="Display Currency"
              value={currency}
              onChange={(v) => setCurrency(v as CurrencyCode)}
              options={Object.values(CURRENCIES).map((c) => ({
                value: c.code,
                label: `${c.name} (${c.symbol})`,
              }))}
            />

            <CurrencyInput
              label="Target Monthly Profit Goal"
              value={targetMonthlyProfit}
              onChange={setTargetMonthlyProfit}
              currencySymbol={CURRENCIES[currency].symbol}
              placeholder="e.g. 1000"
            />

            <CurrencyInput
              label="Estimated Net Profit Per Sale"
              value={profitPerSale}
              onChange={setProfitPerSale}
              currencySymbol={CURRENCIES[currency].symbol}
              placeholder="e.g. 12.00"
            />

            <CurrencyInput
              label="Retail Selling Price"
              value={sellingPrice}
              onChange={setSellingPrice}
              currencySymbol={CURRENCIES[currency].symbol}
              placeholder="e.g. 29.99"
            />

            <NumberInput
              label="Working Fulfillment Days / Month"
              value={workingDays}
              onChange={setWorkingDays}
              min={1}
              max={31}
              step={1}
            />
          </div>
        </Card>

        {/* Right Dashboard & Results */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Goal Cards */}
          <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Target Monthly Income</span>
                <p className="text-3xl font-black text-emerald-400">
                  {formatCurrency(targetMonthlyProfit, currency)}
                </p>
              </div>
              <Button size="sm" variant="outline" onClick={handleCopySummary} className="text-slate-300 border-slate-700 hover:bg-slate-800 gap-1.5 text-xs">
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy Goal'}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                <span className="text-[11px] font-semibold text-slate-400 uppercase block">Monthly Orders</span>
                <span className="text-2xl font-black text-white">{monthlyOrders}</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">sales / month</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                <span className="text-[11px] font-semibold text-slate-400 uppercase block">Weekly Pace</span>
                <span className="text-2xl font-black text-brand-400">{weeklyOrders}</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">sales / week</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                <span className="text-[11px] font-semibold text-slate-400 uppercase block">Daily Target</span>
                <span className="text-2xl font-black text-emerald-400">{dailyOrders}</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">sales / day</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Required Gross Monthly Revenue:</span>
              <span className="font-bold text-slate-200">{formatCurrency(requiredRevenue, currency)}</span>
            </div>
          </div>

          {/* Scenario Matrix */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-brand-600" /> Margin Impact Scenarios
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              See how increasing your profit per sale reduces the total sales volume needed to reach your goal.
            </p>

            <div className="overflow-x-auto pt-1">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500">
                    <th className="py-2 px-2">Scenario</th>
                    <th className="py-2 px-2">Profit Per Sale</th>
                    <th className="py-2 px-2 text-right">Required Sales / Month</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {scenarios.map((sc, idx) => (
                    <tr key={idx} className={idx === 0 ? 'bg-brand-50/50 dark:bg-brand-950/30 font-bold' : ''}>
                      <td className="py-2.5 px-2 text-slate-800 dark:text-slate-200">{sc.label}</td>
                      <td className="py-2.5 px-2 text-slate-600 dark:text-slate-400">{formatCurrency(sc.profit, currency)}</td>
                      <td className="py-2.5 px-2 text-right font-bold text-slate-900 dark:text-slate-100">
                        {sc.orders} sales
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
