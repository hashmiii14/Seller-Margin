import React from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'brand';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-bold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none';

  const variants = {
    primary: 'bg-brand-600 hover:bg-brand-700 text-white shadow-md hover:shadow-lg focus:ring-brand-500 border border-brand-500/20',
    brand: 'bg-brand-600 hover:bg-brand-700 text-white shadow-md hover:shadow-lg focus:ring-brand-500 border border-brand-500/20',
    secondary: 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 shadow-sm border border-slate-700/60 focus:ring-slate-500',
    outline: 'border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:border-brand-500 dark:hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400 shadow-sm focus:ring-brand-500',
    ghost: 'bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 focus:ring-brand-500 border border-slate-200/50 dark:border-slate-700/50',
    accent: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg focus:ring-emerald-500 border border-emerald-500/20',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 min-h-[38px]',
    md: 'text-sm px-4.5 py-2.5 min-h-[44px]',
    lg: 'text-base px-6 py-3.5 min-h-[50px]',
  };

  return (
    <button
      className={clsx(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
