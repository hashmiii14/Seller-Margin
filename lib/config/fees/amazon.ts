export const AMAZON_FBA_FEE_ASSUMPTIONS = {
  lastReviewed: '2026-08-01',
  officialSource: 'Amazon Seller Central Fee Schedules',
  rules: [
    {
      id: 'referral-standard',
      name: 'Standard Referral Fee',
      rate: 15.0,
      description: 'Typically 15% of gross sale price for most product categories ($0.30 minimum fee).',
    },
    {
      id: 'fulfillment-standard-small',
      name: 'FBA Fulfillment (Small Standard)',
      fixed: 3.22,
      description: 'Estimated fulfillment cost for standard small items under 4 oz.',
    },
    {
      id: 'fulfillment-standard-large',
      name: 'FBA Fulfillment (Large Standard 1lb)',
      fixed: 4.75,
      description: 'Estimated fulfillment cost for large standard items up to 1 lb.',
    },
    {
      id: 'storage-standard-peak',
      name: 'Monthly Storage (Standard Non-Peak)',
      fixed: 0.78,
      description: 'Per cubic foot per month (Jan–Sep). Approximately $0.25 - $0.50 per unit.',
    },
    {
      id: 'returns-allowance',
      name: 'Returns Reserve / Customer Returns',
      rate: 2.0,
      description: 'Estimated 2% allowance for customer returns, processing, and damaged stock.',
    },
  ],
};
