export interface SeoPageData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  calculatorType: 'etsy' | 'amazon' | 'pod' | 'breakeven' | 'margin' | 'pricing';
  country?: 'US' | 'UK' | 'CA' | 'AU';
  currency?: 'USD' | 'GBP' | 'CAD' | 'AUD' | 'EUR';
  faqs: { question: string; answer: string }[];
  relatedPages: { title: string; href: string }[];
}

export const SEO_PAGES: Record<string, SeoPageData> = {
  'etsy-profit-calculator': {
    slug: 'etsy-profit-calculator',
    title: 'Etsy Profit Calculator | Calculate Etsy Fees & Net Profit | SellerMargin',
    description: 'Calculate real Etsy transaction fees, payment processing costs, listing fees, and net profit margins before you list your products. Free, instant, mobile-friendly.',
    h1: 'Etsy Fee & Profit Calculator',
    intro: 'Enter your selling price, product cost, shipping, and advertising expenses below to see your exact Etsy fees, net profit per order, and profit margin percentage in seconds.',
    calculatorType: 'etsy',
    faqs: [
      {
        question: 'What fees does Etsy charge on each sale?',
        answer: 'Etsy charges a $0.20 USD listing fee, a 6.5% transaction fee on item price + shipping charged, and an Etsy Payments processing fee (typically 3.0% + $0.25 in the US, 4.0% + £0.20 in the UK). Offsite ads add 12% to 15% if applicable.',
      },
      {
        question: 'How do I calculate Etsy profit margin?',
        answer: 'Etsy Profit Margin (%) is calculated as: [(Gross Revenue − Total Etsy Fees − Product Cost − Shipping Paid − Advertising Cost) / Gross Revenue] × 100.',
      },
      {
        question: 'What is a good profit margin for Etsy sellers?',
        answer: 'A healthy Etsy profit margin typically falls between 25% and 50% for handmade items, and 20% to 35% for print-on-demand products, after accounting for all hidden platform fees.',
      },
    ],
    relatedPages: [
      { title: 'Etsy Fee Calculator', href: '/etsy-fee-calculator' },
      { title: 'Etsy Pricing Calculator', href: '/etsy-pricing-calculator' },
      { title: 'Print-on-Demand Calculator', href: '/pod-profit-calculator' },
      { title: 'Etsy Profit Calculator (UK)', href: '/etsy-profit-calculator/uk' },
    ],
  },
  'etsy-fee-calculator': {
    slug: 'etsy-fee-calculator',
    title: 'Etsy Fee Calculator | Breakdown of Etsy Selling Fees | SellerMargin',
    description: 'Get an exact breakdown of listing fees, 6.5% transaction fees, and payment processing charges. See where every dollar goes on Etsy.',
    h1: 'Etsy Fee Breakdown Calculator',
    intro: 'Understand every hidden Etsy fee line item before pricing your inventory. Use this breakdown calculator to optimize your margins.',
    calculatorType: 'etsy',
    faqs: [
      {
        question: 'Does Etsy charge fees on shipping?',
        answer: 'Yes, Etsy applies the 6.5% transaction fee to both the item price and the shipping amount charged to the buyer.',
      },
    ],
    relatedPages: [
      { title: 'Etsy Profit Calculator', href: '/etsy-profit-calculator' },
      { title: 'Etsy vs Amazon Profit', href: '/compare/etsy-vs-amazon' },
    ],
  },
  'etsy-pricing-calculator': {
    slug: 'etsy-pricing-calculator',
    title: 'Etsy Pricing Calculator | What Should I Charge on Etsy? | SellerMargin',
    description: 'Calculate the minimum required selling price to hit your target profit margin or dollar goal on Etsy. Prevent selling at a loss.',
    h1: 'Etsy Product Pricing Calculator',
    intro: 'Stop guessing your Etsy prices. Enter your material costs and target profit to get the exact retail price you should charge on Etsy.',
    calculatorType: 'pricing',
    faqs: [
      {
        question: 'How do I price handmade items on Etsy?',
        answer: 'A common handmade pricing formula is: Retail Price = (Materials + Packaging + Shipping + Labor) × 2 to 3, adjusted for Etsy transaction and payment fees.',
      },
    ],
    relatedPages: [
      { title: 'Etsy Profit Calculator', href: '/etsy-profit-calculator' },
      { title: 'Break-Even Calculator', href: '/break-even-calculator' },
    ],
  },
  'amazon-fba-calculator': {
    slug: 'amazon-fba-calculator',
    title: 'Amazon FBA Calculator | Estimate FBA Fees & Profit Margin | SellerMargin',
    description: 'Calculate Amazon FBA referral fees, fulfillment costs, storage fees, returns allowance, and real net profit ROI for Amazon marketplace sellers.',
    h1: 'Amazon FBA Profitability Calculator',
    intro: 'Estimate your net FBA payout after referral fees, fulfillment weight fees, storage costs, and advertising spend across US, UK, and global marketplaces.',
    calculatorType: 'amazon',
    faqs: [
      {
        question: 'What is Amazon FBA referral fee?',
        answer: 'The referral fee is Amazon’s commission for selling on their marketplace. It is typically 15% of total sales price with a $0.30 minimum.',
      },
      {
        question: 'How are FBA fulfillment fees calculated?',
        answer: 'FBA fulfillment fees are based on unit weight, product dimensions, and size tier (e.g., Small Standard vs Large Standard vs Oversize).',
      },
    ],
    relatedPages: [
      { title: 'Amazon FBA Fee Calculator', href: '/amazon-fba-fee-calculator' },
      { title: 'Etsy vs Amazon FBA', href: '/compare/etsy-vs-amazon' },
      { title: 'Profit Margin Calculator', href: '/profit-margin-calculator' },
    ],
  },
  'pod-profit-calculator': {
    slug: 'pod-profit-calculator',
    title: 'Print-on-Demand Profit Calculator | Printify & Gelato Margin | SellerMargin',
    description: 'Calculate print-on-demand profit margins for Printify, Gelato, and custom print suppliers sold on Etsy, Shopify, or Amazon.',
    h1: 'Print-on-Demand (POD) Profit Calculator',
    intro: 'Calculate retail price, print provider production cost, shipping, marketplace fees, and net profit per t-shirt, mug, or canvas order.',
    calculatorType: 'pod',
    faqs: [
      {
        question: 'Is print-on-demand profitable on Etsy?',
        answer: 'Yes, but success requires maintaining a 30%+ profit margin by setting retail prices high enough to cover $12–$16 base garment costs, shipping, and Etsy fees.',
      },
    ],
    relatedPages: [
      { title: 'Etsy Profit Calculator', href: '/etsy-profit-calculator' },
      { title: 'POD Pricing Calculator', href: '/pod-pricing-calculator' },
    ],
  },
  'break-even-calculator': {
    slug: 'break-even-calculator',
    title: 'Break-Even Calculator | Calculate Break-Even Units & Price | SellerMargin',
    description: 'Find your break-even selling price and unit sales target required to cover fixed overhead, product costs, and platform fees.',
    h1: 'Ecommerce Break-Even Calculator',
    intro: 'Calculate exactly how many units you need to sell or what minimum price you must charge to cover all fixed and variable business costs.',
    calculatorType: 'breakeven',
    faqs: [
      {
        question: 'What is a break-even price?',
        answer: 'The break-even price is the exact selling price at which total revenue equals total expenses (product costs + shipping + fees), resulting in zero net profit or loss.',
      },
    ],
    relatedPages: [
      { title: 'Profit Margin Calculator', href: '/profit-margin-calculator' },
      { title: 'Etsy Pricing Calculator', href: '/etsy-pricing-calculator' },
    ],
  },
  'profit-margin-calculator': {
    slug: 'profit-margin-calculator',
    title: 'Profit Margin Calculator | Gross Margin, Net Margin & Markup | SellerMargin',
    description: 'Calculate net profit margin, gross margin, markup percentage, and ROI for ecommerce products across any platform.',
    h1: 'Ecommerce Profit Margin & Markup Calculator',
    intro: 'Calculate your true net margin vs markup percentage with clear visual explanations of the difference between profit margin and price markup.',
    calculatorType: 'margin',
    faqs: [
      {
        question: 'What is the difference between Margin and Markup?',
        answer: 'Margin is net profit divided by Selling Price. Markup is net profit divided by Product Cost. For example, buying for $50 and selling for $100 gives a 50% Margin and a 100% Markup.',
      },
    ],
    relatedPages: [
      { title: 'Break-Even Calculator', href: '/break-even-calculator' },
      { title: 'Etsy Profit Calculator', href: '/etsy-profit-calculator' },
    ],
  },
};

// Localized Pages Config
export const LOCALIZED_PAGES: Record<string, SeoPageData> = {
  'etsy-profit-calculator-us': {
    slug: 'etsy-profit-calculator/us',
    title: 'Etsy Profit Calculator US | Calculate US Etsy Fees (USD $)',
    description: 'Calculate Etsy selling fees, 3.0% + $0.25 US Etsy Payments fee, shipping, and net profit in US Dollars.',
    h1: 'Etsy Profit Calculator (United States)',
    intro: 'Designed specifically for US Etsy sellers utilizing USD ($) pricing and standard US Etsy Payments rates.',
    calculatorType: 'etsy',
    country: 'US',
    currency: 'USD',
    faqs: [
      {
        question: 'What are US Etsy payment processing fees?',
        answer: 'Etsy Payments in the United States charges 3.0% of the total order + $0.25 USD per transaction.',
      },
    ],
    relatedPages: [{ title: 'Etsy Profit Calculator (UK)', href: '/etsy-profit-calculator/uk' }],
  },
  'etsy-profit-calculator-uk': {
    slug: 'etsy-profit-calculator/uk',
    title: 'Etsy Profit Calculator UK | Calculate UK Etsy Fees (GBP £)',
    description: 'Calculate Etsy fees, 4.0% + £0.20 UK Etsy Payments fee, Royal Mail shipping, and net profit in Pounds (£).',
    h1: 'Etsy Profit Calculator (United Kingdom)',
    intro: 'Tailored for UK Etsy sellers using GBP (£) pricing and UK Etsy Payments processing rules.',
    calculatorType: 'etsy',
    country: 'UK',
    currency: 'GBP',
    faqs: [
      {
        question: 'What are UK Etsy payment processing fees?',
        answer: 'Etsy Payments in the UK charges 4.0% of the total order + £0.20 GBP per sale.',
      },
    ],
    relatedPages: [{ title: 'Etsy Profit Calculator (US)', href: '/etsy-profit-calculator/us' }],
  },
  'etsy-profit-calculator-canada': {
    slug: 'etsy-profit-calculator/canada',
    title: 'Etsy Profit Calculator Canada | Calculate Canadian Etsy Fees (CAD CA$)',
    description: 'Calculate Etsy fees, 3.0% + CA$0.25 Canada Etsy Payments fee, Canada Post shipping, and net profit in CAD.',
    h1: 'Etsy Profit Calculator (Canada)',
    intro: 'Optimized for Canadian Etsy sellers using CAD (CA$) pricing and Canadian fee assumptions.',
    calculatorType: 'etsy',
    country: 'CA',
    currency: 'CAD',
    faqs: [
      {
        question: 'What are Canadian Etsy payment processing fees?',
        answer: 'Etsy Payments in Canada charges 3.0% + CA$0.25 CAD per transaction.',
      },
    ],
    relatedPages: [{ title: 'Etsy Profit Calculator (US)', href: '/etsy-profit-calculator/us' }],
  },
  'etsy-profit-calculator-australia': {
    slug: 'etsy-profit-calculator/australia',
    title: 'Etsy Profit Calculator Australia | Calculate Australian Etsy Fees (AUD A$)',
    description: 'Calculate Etsy fees, 3.0% + A$0.25 Australian Etsy Payments fee, Australia Post shipping, and net profit in AUD.',
    h1: 'Etsy Profit Calculator (Australia)',
    intro: 'Built for Australian Etsy sellers using AUD (A$) pricing and Australian fee assumptions.',
    calculatorType: 'etsy',
    country: 'AU',
    currency: 'AUD',
    faqs: [
      {
        question: 'What are Australian Etsy payment processing fees?',
        answer: 'Etsy Payments in Australia charges 3.0% + A$0.25 AUD per sale.',
      },
    ],
    relatedPages: [{ title: 'Etsy Profit Calculator (US)', href: '/etsy-profit-calculator/us' }],
  },
};
