import React from 'react';
import { clsx } from 'clsx';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  prefixSymbol?: string;
  suffixSymbol?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, prefixSymbol, suffixSymbol, className, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            {label}
          </label>
        )}
        <div className="relative flex items-center rounded-lg shadow-sm">
          {prefixSymbol && (
            <span className="absolute left-3 text-slate-500 dark:text-slate-400 text-sm font-semibold select-none">
              {prefixSymbol}
            </span>
          )}
          <input
            id={inputId}
            ref={ref}
            className={clsx(
              'w-full rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-base sm:text-sm py-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 min-h-[44px]',
              prefixSymbol ? 'pl-8' : 'pl-3.5',
              suffixSymbol ? 'pr-8' : 'pr-3.5',
              error ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-700',
              className
            )}
            {...props}
          />
          {suffixSymbol && (
            <span className="absolute right-3 text-slate-500 dark:text-slate-400 text-sm font-semibold select-none">
              {suffixSymbol}
            </span>
          )}
        </div>
        {error ? (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>
        ) : helperText ? (
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface CurrencyInputProps extends Omit<InputProps, 'value' | 'onChange' | 'type'> {
  value: number;
  onChange: (val: number) => void;
  currencySymbol?: string;
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  value,
  onChange,
  currencySymbol = '$',
  ...props
}) => {
  return (
    <Input
      type="number"
      step="any"
      min="0"
      prefixSymbol={currencySymbol}
      value={value === 0 ? '' : value}
      onChange={(e) => {
        const val = parseFloat(e.target.value);
        onChange(isNaN(val) ? 0 : val);
      }}
      {...props}
    />
  );
};

export interface PercentageInputProps extends Omit<InputProps, 'value' | 'onChange' | 'type'> {
  value: number;
  onChange: (val: number) => void;
}

export const PercentageInput: React.FC<PercentageInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  return (
    <Input
      type="number"
      step="any"
      min="0"
      max="100"
      suffixSymbol="%"
      value={value === 0 ? '' : value}
      onChange={(e) => {
        const val = parseFloat(e.target.value);
        onChange(isNaN(val) ? 0 : val);
      }}
      {...props}
    />
  );
};
