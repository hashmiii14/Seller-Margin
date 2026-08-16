export interface SeoPageConfig {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  faqs: { question: string; answer: string }[];
  relatedPages: { title: string; href: string }[];
}

export const SEO_PAGES: Record<string, SeoPageConfig> = {
  'etsy-profit-calculator': {
    slug: 'etsy-profit-calculator',
    title: 'Etsy Profit Calculator | Calculate Etsy Fees & Net Profit | Sellrivo',
    description:
      'Free Etsy profit calculator. Instantly estimate $0.20 listing fees, 6.5% transaction fees, Etsy Payments processing rates, and take-home seller profit.',
    h1: 'Etsy Profit Calculator (2026)',
    intro:
      'Determine your real take-home earnings before you publish a listing on Etsy. Calculate transaction fees, processing rates, material costs, and shipping.',
    faqs: [
      {
        question: 'What fees does Etsy deduct from every sale?',
        answer:
          'Etsy deducts a $0.20 USD listing fee (renewed every 4 months or per sale), a 6.5% transaction fee on the item price + shipping charged, and Etsy Payments processing fees (e.g. 3.0% + $0.25 in the US).',
      },
      {
        question: 'Are Etsy Offsite Ads mandatory?',
        answer:
          'Offsite Ads are optional (15% fee) for shops making under $10,000 USD per year. Once your shop reaches $10,000 in 12 months, participation is required at a discounted 12% fee.',
      },
    ],
    relatedPages: [
      { title: 'Etsy Fee Calculator', href: '/etsy-fee-calculator' },
      { title: 'Etsy Pricing Calculator', href: '/etsy-pricing-calculator' },
      { title: 'Etsy Break-Even Calculator', href: '/etsy-break-even-calculator' },
    ],
  },
  'etsy-fee-calculator': {
    slug: 'etsy-fee-calculator',
    title: 'Etsy Fee Calculator | Breakdown of Etsy Selling Fees | Sellrivo',
    description:
      'Detailed Etsy fee calculator. Breakdown listing charges, transaction fees, credit card processing rates, and optional advertising expenses.',
    h1: 'Etsy Fee Calculator',
    intro:
      'Break down every single fee charged by Etsy per transaction so you know where every dollar goes.',
    faqs: [
      {
        question: 'Does Etsy fee apply to shipping charged to buyers?',
        answer:
          'Yes. Etsy’s 6.5% transaction fee applies to both the item selling price and the shipping amount you charge to the buyer.',
      },
    ],
    relatedPages: [
      { title: 'Etsy Profit Calculator', href: '/etsy-profit-calculator' },
      { title: 'Etsy Pricing Calculator', href: '/etsy-pricing-calculator' },
    ],
  },
  'etsy-pricing-calculator': {
    slug: 'etsy-pricing-calculator',
    title: 'Etsy Pricing Calculator | What Should I Charge on Etsy? | Sellrivo',
    description:
      'Smart Etsy pricing calculator. Enter your costs and target profit margin % to calculate the exact retail price you should charge.',
    h1: 'Etsy Pricing Calculator — What Should You Charge?',
    intro:
      'Find the exact retail price needed to achieve your desired 20%, 30%, or 50% profit margin after all Etsy fees.',
    faqs: [
      {
        question: 'How do I price handmade items to stay profitable?',
        answer:
          'Add your material costs + labor rate + shipping expenses, then divide by (1 - total fee % - target margin %). This guarantees your target margin.',
      },
    ],
    relatedPages: [
      { title: 'Etsy Profit Calculator', href: '/etsy-profit-calculator' },
      { title: 'Break-Even Calculator', href: '/break-even-calculator' },
    ],
  },
  'amazon-fba-calculator': {
    slug: 'amazon-fba-calculator',
    title: 'Amazon FBA Calculator | Estimate FBA Fees & Profit Margin | Sellrivo',
    description:
      'Free Amazon FBA profit calculator. Calculate 15% category referral fees, weight fulfillment fees, monthly storage, inbound shipping, and net profit.',
    h1: 'Amazon FBA Profit & Fee Calculator',
    intro:
      'Estimate your Amazon FBA referral fees, pick & pack fulfillment costs, and storage fees to evaluate private label or arbitrage product margins.',
    faqs: [
      {
        question: 'How are Amazon FBA fulfillment fees calculated?',
        answer:
          'Fulfillment fees are based on unit shipping weight and dimensions (small standard, large standard, or oversize tiers).',
      },
    ],
    relatedPages: [
      { title: 'Profit Margin Calculator', href: '/profit-margin-calculator' },
      { title: 'Break-Even Calculator', href: '/break-even-calculator' },
    ],
  },
  'pod-profit-calculator': {
    slug: 'pod-profit-calculator',
    title: 'Print-on-Demand Profit Calculator | Printify & Gelato Margin | Sellrivo',
    description:
      'Calculate Printify and Gelato print-on-demand profits. Factor in blank item base costs, supplier shipping, store fees, and net margin.',
    h1: 'Print-on-Demand (POD) Profit Calculator',
    intro:
      'Calculate net earnings for custom t-shirts, mugs, and apparel fulfilled via Printify or Gelato on Etsy or Shopify.',
    faqs: [
      {
        question: 'What is a good profit margin for Print-on-Demand?',
        answer:
          'A healthy target net margin for POD is 25%–35% after accounting for blank garment costs, shipping, store fees, and ad spend.',
      },
    ],
    relatedPages: [
      { title: 'Etsy Profit Calculator', href: '/etsy-profit-calculator' },
      { title: 'Profit Margin Calculator', href: '/profit-margin-calculator' },
    ],
  },
  'break-even-calculator': {
    slug: 'break-even-calculator',
    title: 'Break-Even Calculator | Calculate Break-Even Units & Price | Sellrivo',
    description:
      'Calculate minimum break-even price and required unit sales volume to cover monthly software, tools, studio rent, and fixed overhead.',
    h1: 'Break-Even Price & Unit Volume Calculator',
    intro:
      'Find the exact retail price floor and sales volume needed to cover fixed overhead expenses.',
    faqs: [
      {
        question: 'What is fixed cost vs variable cost?',
        answer:
          'Fixed costs (software, rent) remain constant regardless of sales volume. Variable costs (materials, shipping, platform fees) scale with every unit sold.',
      },
    ],
    relatedPages: [
      { title: 'Profit Margin Calculator', href: '/profit-margin-calculator' },
      { title: 'Etsy Pricing Calculator', href: '/etsy-pricing-calculator' },
    ],
  },
  'profit-margin-calculator': {
    slug: 'profit-margin-calculator',
    title: 'Profit Margin Calculator | Gross Margin, Net Margin & Markup | Sellrivo',
    description:
      'Free profit margin and markup calculator. Calculate gross profit, net profit margin %, markup %, and return on investment.',
    h1: 'Profit Margin & Markup Calculator',
    intro:
      'Understand the financial difference between profit margin % and markup % to avoid underpricing product catalog inventory.',
    faqs: [
      {
        question: 'What is the difference between margin and markup?',
        answer:
          'Profit margin is profit divided by revenue. Markup is profit divided by cost. A 50% markup equals a 33.3% profit margin.',
      },
    ],
    relatedPages: [
      { title: 'Break-Even Calculator', href: '/break-even-calculator' },
      { title: 'Etsy Profit Calculator', href: '/etsy-profit-calculator' },
    ],
  },
};

export const LOCALIZED_PAGES = {
  us: {
    slug: 'etsy-profit-calculator/us',
    title: 'Etsy Profit Calculator USA (USD $) | Sellrivo',
    country: 'United States',
    currency: 'USD',
  },
  uk: {
    slug: 'etsy-profit-calculator/uk',
    title: 'Etsy Profit Calculator UK (GBP £) | Sellrivo',
    country: 'United Kingdom',
    currency: 'GBP',
  },
  canada: {
    slug: 'etsy-profit-calculator/canada',
    title: 'Etsy Profit Calculator Canada (CAD $) | Sellrivo',
    country: 'Canada',
    currency: 'CAD',
  },
  australia: {
    slug: 'etsy-profit-calculator/australia',
    title: 'Etsy Profit Calculator Australia (AUD $) | Sellrivo',
    country: 'Australia',
    currency: 'AUD',
  },
};
