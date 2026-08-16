export interface EtsyCountryFeeConfig {
  countryCode: string;
  countryName: string;
  currency: string;
  symbol: string;
  paymentProcessingRate: number; // percentage
  paymentProcessingFixed: number; // fixed amount in local currency
  sourceUrl: string;
  lastVerified: string;
}

export const ETSY_COUNTRY_FEES: Record<string, EtsyCountryFeeConfig> = {
  US: {
    countryCode: 'US',
    countryName: 'United States',
    currency: 'USD',
    symbol: '$',
    paymentProcessingRate: 3.0,
    paymentProcessingFixed: 0.25,
    sourceUrl: 'https://www.etsy.com/legal/fees/',
    lastVerified: 'August 2026',
  },
  UK: {
    countryCode: 'UK',
    countryName: 'United Kingdom',
    currency: 'GBP',
    symbol: '£',
    paymentProcessingRate: 4.0,
    paymentProcessingFixed: 0.20,
    sourceUrl: 'https://www.etsy.com/legal/fees/',
    lastVerified: 'August 2026',
  },
  CA: {
    countryCode: 'CA',
    countryName: 'Canada',
    currency: 'CAD',
    symbol: 'CA$',
    paymentProcessingRate: 3.0,
    paymentProcessingFixed: 0.25,
    sourceUrl: 'https://www.etsy.com/legal/fees/',
    lastVerified: 'August 2026',
  },
  AU: {
    countryCode: 'AU',
    countryName: 'Australia',
    currency: 'AUD',
    symbol: 'A$',
    paymentProcessingRate: 3.0,
    paymentProcessingFixed: 0.25,
    sourceUrl: 'https://www.etsy.com/legal/fees/',
    lastVerified: 'August 2026',
  },
  IN: {
    countryCode: 'IN',
    countryName: 'India',
    currency: 'INR',
    symbol: '₹',
    paymentProcessingRate: 4.0,
    paymentProcessingFixed: 15.0,
    sourceUrl: 'https://www.etsy.com/legal/fees/',
    lastVerified: 'August 2026',
  },
  DE: {
    countryCode: 'DE',
    countryName: 'Germany',
    currency: 'EUR',
    symbol: '€',
    paymentProcessingRate: 4.0,
    paymentProcessingFixed: 0.30,
    sourceUrl: 'https://www.etsy.com/legal/fees/',
    lastVerified: 'August 2026',
  },
  FR: {
    countryCode: 'FR',
    countryName: 'France',
    currency: 'EUR',
    symbol: '€',
    paymentProcessingRate: 4.0,
    paymentProcessingFixed: 0.30,
    sourceUrl: 'https://www.etsy.com/legal/fees/',
    lastVerified: 'August 2026',
  },
  IT: {
    countryCode: 'IT',
    countryName: 'Italy',
    currency: 'EUR',
    symbol: '€',
    paymentProcessingRate: 4.0,
    paymentProcessingFixed: 0.30,
    sourceUrl: 'https://www.etsy.com/legal/fees/',
    lastVerified: 'August 2026',
  },
  ES: {
    countryCode: 'ES',
    countryName: 'Spain',
    currency: 'EUR',
    symbol: '€',
    paymentProcessingRate: 4.0,
    paymentProcessingFixed: 0.30,
    sourceUrl: 'https://www.etsy.com/legal/fees/',
    lastVerified: 'August 2026',
  },
  NL: {
    countryCode: 'NL',
    countryName: 'Netherlands',
    currency: 'EUR',
    symbol: '€',
    paymentProcessingRate: 4.0,
    paymentProcessingFixed: 0.30,
    sourceUrl: 'https://www.etsy.com/legal/fees/',
    lastVerified: 'August 2026',
  },
  NZ: {
    countryCode: 'NZ',
    countryName: 'New Zealand',
    currency: 'NZD',
    symbol: 'NZ$',
    paymentProcessingRate: 4.0,
    paymentProcessingFixed: 0.30,
    sourceUrl: 'https://www.etsy.com/legal/fees/',
    lastVerified: 'August 2026',
  },
};

export const ETSY_FEE_ASSUMPTIONS = {
  lastReviewed: 'August 2026',
  officialSource: 'Etsy House Rules & Legal Fees Policy (https://www.etsy.com/legal/fees)',
  rules: [
    {
      id: 'etsy-listing',
      name: 'Listing Fee',
      fixed: 0.20,
      description: '$0.20 USD per listed item. Auto-renews upon sale or every 4 months.',
    },
    {
      id: 'etsy-transaction',
      name: 'Transaction Fee',
      rate: 6.5,
      description: '6.5% of total sales price (including item price, shipping charged, and gift wrapping).',
    },
    {
      id: 'etsy-payment-us',
      name: 'Payment Processing (US)',
      rate: 3.0,
      fixed: 0.25,
      description: '3.0% + $0.25 USD per transaction for Etsy Payments in the United States.',
    },
    {
      id: 'etsy-payment-uk',
      name: 'Payment Processing (UK)',
      rate: 4.0,
      fixed: 0.20,
      description: '4.0% + £0.20 GBP per transaction for Etsy Payments in the United Kingdom.',
    },
    {
      id: 'etsy-offsite-ads-under10k',
      name: 'Offsite Ads (< $10k sales)',
      rate: 15.0,
      description: '15% optional fee when a buyer clicks an Etsy Google/Social ad and purchases within 30 days.',
    },
    {
      id: 'etsy-offsite-ads-over10k',
      name: 'Offsite Ads (≥ $10k sales)',
      rate: 12.0,
      description: '12% mandatory fee when a buyer purchases via an Etsy offsite ad.',
    },
  ],
};
