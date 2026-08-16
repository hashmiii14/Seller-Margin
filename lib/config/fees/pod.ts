export const POD_FEE_ASSUMPTIONS = {
  lastReviewed: '2026-08-01',
  officialSource: 'Printify & Gelato Published Catalog Pricing',
  rules: [
    {
      name: 'Base Item Manufacturing Cost',
      description: 'Supplier charge for blank garment or product print manufacturing.',
    },
    {
      name: 'Supplier Shipping & Fulfillment',
      description: 'Carrier shipping charge calculated by print provider to customer address.',
    },
    {
      name: 'Etsy / Store Marketplace Fee',
      rate: 6.5,
      description: 'Standard store platform fee charged on combined item price + shipping.',
    },
    {
      name: 'Payment Processing Fee',
      rate: 2.9,
      fixed: 0.30,
      description: 'Stripe, PayPal, or Etsy Payments credit card processing transaction fee.',
    },
  ],
  providers: [
    {
      name: 'Printify',
      tagline: 'Global print-on-demand network with 900+ products',
      keyBenefit: 'Wide catalog selection & competitive provider network pricing.',
    },
    {
      name: 'Gelato',
      tagline: 'Local production in 32+ countries for faster shipping',
      keyBenefit: 'Shorter delivery times & reduced shipping carbon footprint.',
    },
  ],
};
