export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Etsy Calculator', href: '/etsy-profit-calculator', description: 'Estimate listing, transaction & processing fees' },
  { label: 'Amazon FBA', href: '/amazon-fba-calculator', description: 'Referral, fulfillment weight & storage costs' },
  { label: 'Print-on-Demand', href: '/pod-profit-calculator', description: 'Printify, Gelato & store margin calculator' },
  { label: 'Break-Even', href: '/break-even-calculator', description: 'Calculate unit volume & break-even price' },
  { label: 'Margin & Markup', href: '/profit-margin-calculator', description: 'Gross profit, net profit, margin & ROI' },
  { label: 'Pricing Assistant', href: '/calculators/pricing', badge: 'Smart', description: 'Calculate what to charge for target margin' },
];

export const FOOTER_NAV_GROUPS = {
  calculators: [
    { label: 'Etsy Profit Calculator', href: '/etsy-profit-calculator' },
    { label: 'Etsy Fee Calculator', href: '/etsy-fee-calculator' },
    { label: 'Amazon FBA Calculator', href: '/amazon-fba-calculator' },
    { label: 'Print-on-Demand Calculator', href: '/pod-profit-calculator' },
    { label: 'Break-Even Calculator', href: '/break-even-calculator' },
    { label: 'Profit Margin Calculator', href: '/profit-margin-calculator' },
  ],
  resources: [
    { label: 'Seller Guides', href: '/guides' },
    { label: 'Etsy vs Amazon Profit Comparison', href: '/compare/etsy-vs-amazon' },
    { label: 'How to Price Handmade Products', href: '/guides/how-to-price-handmade-products' },
    { label: 'Etsy Fees Explained', href: '/guides/etsy-fees-explained' },
    { label: 'Margin vs Markup Guide', href: '/guides/margin-vs-markup' },
  ],
  company: [
    { label: 'About SellerMargin', href: '/about' },
    { label: 'Contact & Feedback', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
};
