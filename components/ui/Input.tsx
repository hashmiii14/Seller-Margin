'use client';

import React from 'react';
import { clsx } from 'clsx';
import { HelpCircle } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  prefixSymbol?: string;
  suffixSymbol?: string;
  tooltip?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, prefixSymbol, suffixSymbol, tooltip, className, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1">
        {label && (
          <div className="flex items-center justify-between mb-1">
            <label htmlFor={inputId} className="block text-xs font-bold text-slate-800 dark:text-slate-200 tracking-tight">
              {label}
            </label>
            {tooltip && (
              <span className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-help" title={tooltip}>
                <HelpCircle className="w-3.5 h-3.5" />
              </span>
            )}
          </div>
        )}
        <div className="relative flex items-center rounded-xl shadow-sm">
          {prefixSymbol && (
            <span className="absolute left-3.5 text-slate-600 dark:text-slate-400 text-sm font-bold select-none">
              {prefixSymbol}
            </span>
          )}
          <input
            id={inputId}
            ref={ref}
            className={clsx(
              'w-full rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-base sm:text-sm py-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 min-h-[46px] font-semibold placeholder:text-slate-400 dark:placeholder:text-slate-500',
              prefixSymbol ? 'pl-8' : 'pl-3.5',
              suffixSymbol ? 'pr-8' : 'pr-3.5',
              error ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600',
              className
            )}
            {...props}
          />
          {suffixSymbol && (
            <span className="absolute right-3.5 text-slate-600 dark:text-slate-400 text-sm font-bold select-none">
              {suffixSymbol}
            </span>
          )}
        </div>
        {error ? (
          <p className="mt-1 text-xs font-semibold text-red-600 dark:text-red-400">{error}</p>
        ) : helperText ? (
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface CurrencyInputProps extends Omit<InputProps, 'value' | 'onChange' | 'type'> {
  value: number | string;
  onChange: (val: number) => void;
  currencySymbol?: string;
  placeholder?: string;
  tooltip?: string;
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  value,
  onChange,
  currencySymbol = '$',
  placeholder = 'Enter amount',
  tooltip,
  ...props
}) => {
  return (
    <Input
      type="number"
      step="any"
      min="0"
      prefixSymbol={currencySymbol}
      placeholder={placeholder}
      tooltip={tooltip}
      value={value === 0 || value === '0' || value === '' ? '' : value}
      onChange={(e) => {
        const val = parseFloat(e.target.value);
        onChange(isNaN(val) ? 0 : val);
      }}
      {...props}
    />
  );
};

export interface PercentageInputProps extends Omit<InputProps, 'value' | 'onChange' | 'type'> {
  value: number | string;
  onChange: (val: number) => void;
  placeholder?: string;
  tooltip?: string;
}

export const PercentageInput: React.FC<PercentageInputProps> = ({
  value,
  onChange,
  placeholder = '0',
  tooltip,
  ...props
}) => {
  return (
    <Input
      type="number"
      step="any"
      min="0"
      max="100"
      suffixSymbol="%"
      placeholder={placeholder}
      tooltip={tooltip}
      value={value === 0 || value === '0' || value === '' ? '' : value}
      onChange={(e) => {
        const val = parseFloat(e.target.value);
        onChange(isNaN(val) ? 0 : val);
      }}
      {...props}
    />
  );
};

export interface NumberInputProps extends Omit<InputProps, 'value' | 'onChange' | 'type'> {
  value: number | string;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  tooltip?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  placeholder = '0',
  tooltip,
  ...props
}) => {
  return (
    <Input
      type="number"
      step={step}
      min={min}
      max={max}
      placeholder={placeholder}
      tooltip={tooltip}
      value={value === 0 || value === '0' || value === '' ? '' : value}
      onChange={(e) => {
        const val = parseFloat(e.target.value);
        onChange(isNaN(val) ? 0 : val);
      }}
      {...props}
    />
  );
};
