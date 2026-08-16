import { CurrencyCode, CurrencyConfig } from '../calculators/types';

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', name: 'US Dollar ($)', locale: 'en-US' },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound (£)', locale: 'en-GB' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro (€)', locale: 'de-DE' },
  CAD: { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar (CA$)', locale: 'en-CA' },
  AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar (A$)', locale: 'en-AU' },
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee (₹)', locale: 'en-IN' },
  NZD: { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar (NZ$)', locale: 'en-NZ' },
};

export function formatCurrency(amount: number, currencyCode: CurrencyCode = 'USD'): string {
  const config = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const absAmount = Math.abs(amount);
  const formatted = new Intl.NumberFormat(config.locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(absAmount);

  const prefix = amount < 0 ? '-' : '';
  return `${prefix}${config.symbol}${formatted}`;
}
