export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
  category?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Etsy Calculator', href: '/etsy-profit-calculator', category: 'calculators', description: 'Estimate listing, transaction & processing fees' },
  { label: 'Amazon FBA', href: '/amazon-fba-calculator', category: 'calculators', description: 'Referral, fulfillment weight & storage costs' },
  { label: 'Print-on-Demand', href: '/pod-profit-calculator', category: 'calculators', description: 'Printify, Gelato & store margin calculator' },
  { label: 'Profit Goal', href: '/profit-goal-calculator', category: 'calculators', description: 'Calculate required daily & monthly sales volume' },
  { label: 'Break-Even', href: '/break-even-calculator', category: 'calculators', description: 'Calculate unit volume & break-even price' },
  { label: 'Margin & Markup', href: '/profit-margin-calculator', category: 'calculators', description: 'Gross profit, net profit, margin & ROI' },
  { label: 'Guides', href: '/guides', category: 'resources', description: 'Educational articles and seller tutorials' },
  { label: 'Compare', href: '/compare/etsy-vs-amazon', category: 'resources', description: 'Etsy vs Amazon FBA comparison' },
];

export const NAVIGATION_ITEMS = MAIN_NAV_ITEMS;

export const FOOTER_NAV_GROUPS = {
  calculators: [
    { label: 'Etsy Profit Calculator', href: '/etsy-profit-calculator' },
    { label: 'Seller Profit Goal Calculator', href: '/profit-goal-calculator' },
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
    { label: 'About Sellrivo', href: '/about' },
    { label: 'Contact & Feedback', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
};
