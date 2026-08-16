'use client';

import React from 'react';
import { Accordion } from '@/components/ui/Select';
import { Info, Calendar } from 'lucide-react';

export interface FeeAssumptionsDrawerProps {
  platformName: string;
  lastReviewed: string;
  officialSource: string;
  rules: { name: string; description: string; rate?: number; fixed?: number }[];
}

export const FeeAssumptionsDrawer: React.FC<FeeAssumptionsDrawerProps> = ({
  platformName,
  lastReviewed,
  officialSource,
  rules,
}) => {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900/60 rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-brand-600 dark:text-brand-400" /> Verified {platformName} Fee Assumptions
        </h4>
        <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" /> Reviewed: {lastReviewed}
          </span>
        </div>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
        Calculations are based on current official {platformName} published schedules. Platform policies change periodically; verify fees directly before finalizing inventory pricing.
      </p>

      <Accordion title={`View All (${rules.length}) ${platformName} Fee Calculation Rules`}>
        <div className="space-y-3 pt-2">
          {rules.map((r, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
              <div className="flex items-center justify-between font-semibold text-slate-800 dark:text-slate-200 mb-1">
                <span>{r.name}</span>
                <span className="text-brand-600 dark:text-brand-400 font-mono">
                  {r.rate !== undefined && `${r.rate}%`} {r.fixed !== undefined && `+ $${r.fixed.toFixed(2)}`}
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400">{r.description}</p>
            </div>
          ))}

          <div className="text-[11px] text-slate-400 pt-2 flex items-center gap-1">
            <span>Source: {officialSource}</span>
          </div>
        </div>
      </Accordion>
    </div>
  );
};
