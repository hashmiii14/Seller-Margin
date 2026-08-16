import React from 'react';
import { clsx } from 'clsx';

export interface AdSlotProps {
  slotId?: string;
  format?: 'horizontal' | 'rectangle' | 'responsive';
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ format = 'responsive', className }) => {
  return (
    <div
      className={clsx(
        'my-6 w-full rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-4 text-center flex flex-col items-center justify-center min-h-[100px] select-none transition-opacity',
        className
      )}
      aria-label="Advertisement placeholder"
    >
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
        ADVERTISEMENT
      </span>
      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
        Ad Space ({format}) — Configurable via Ad Network Script
      </p>
    </div>
  );
};
