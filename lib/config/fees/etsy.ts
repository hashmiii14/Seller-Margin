export const ETSY_FEE_ASSUMPTIONS = {
  lastReviewed: '2026-08-01',
  officialSource: 'Etsy Seller Handbook & Legal Fees Policy',
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
      id: 'etsy-payment-ca',
      name: 'Payment Processing (CA)',
      rate: 3.0,
      fixed: 0.25,
      description: '3.0% + CA$0.25 CAD per transaction for Etsy Payments in Canada.',
    },
    {
      id: 'etsy-payment-au',
      name: 'Payment Processing (AU)',
      rate: 3.0,
      fixed: 0.25,
      description: '3.0% + A$0.25 AUD per transaction for Etsy Payments in Australia.',
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
