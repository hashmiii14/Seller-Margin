import React from 'react';
import { clsx } from 'clsx';

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-4 sm:p-6 transition-all',
        className
      )}
    >
      {children}
    </div>
  );
};

export interface MetricCardProps {
  label: string;
  value: string;
  subValue?: string;
  trend?: 'up' | 'down' | 'neutral';
  variant?: 'default' | 'profit' | 'loss' | 'brand';
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  subValue,
  variant = 'default',
  className,
}) => {
  const variantStyles = {
    default: 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100',
    profit: 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/50 text-emerald-950 dark:text-emerald-100',
    loss: 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800/50 text-rose-950 dark:text-rose-100',
    brand: 'bg-brand-50/70 dark:bg-brand-950/30 border-brand-200 dark:border-brand-800/50 text-brand-950 dark:text-brand-100',
  };

  const valStyles = {
    default: 'text-slate-900 dark:text-slate-100',
    profit: 'text-emerald-600 dark:text-emerald-400 font-bold',
    loss: 'text-rose-600 dark:text-rose-400 font-bold',
    brand: 'text-brand-600 dark:text-brand-400 font-bold',
  };

  return (
    <div className={clsx('rounded-xl border p-4 shadow-sm flex flex-col justify-between', variantStyles[variant], className)}>
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </span>
      <div className="mt-2 flex items-baseline justify-between gap-2">
        <span className={clsx('text-2xl sm:text-3xl tracking-tight', valStyles[variant])}>{value}</span>
        {subValue && (
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{subValue}</span>
        )}
      </div>
    </div>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; variant?: 'success' | 'danger' | 'warning' | 'neutral' | 'brand'; className?: string }> = ({
  children,
  variant = 'neutral',
  className,
}) => {
  const styles = {
    success: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    danger: 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800',
    warning: 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    neutral: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
    brand: 'bg-brand-100 dark:bg-brand-950 text-brand-800 dark:text-brand-300 border-brand-200 dark:border-brand-800',
  };

  return (
    <span className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border', styles[variant], className)}>
      {children}
    </span>
  );
};
