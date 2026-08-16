export interface GuideArticle {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  readTime: string;
  publishedDate: string;
  category: 'Etsy' | 'Amazon' | 'POD' | 'Pricing' | 'Finance';
  calculatorCta: { text: string; href: string };
  content: string; // Markdown / HTML formatted text
  faqs: { question: string; answer: string }[];
}

export const GUIDES: Record<string, GuideArticle> = {
  'how-to-calculate-etsy-profit': {
    slug: 'how-to-calculate-etsy-profit',
    title: 'How to Calculate Etsy Profit: The Complete Seller Guide',
    subtitle: 'Stop losing money to hidden fees. Learn how to calculate net profit on Etsy step by step.',
    excerpt: 'Calculate real Etsy transaction fees, listing costs, payment processing, packaging, and shipping to determine your true take-home pay.',
    readTime: '6 min read',
    publishedDate: '2026-08-01',
    category: 'Etsy',
    calculatorCta: { text: 'Use Etsy Profit Calculator', href: '/etsy-profit-calculator' },
    content: `
### Why Most Etsy Sellers Miscalculate Profit

Many handmade and digital sellers assume their profit is simply **Sale Price minus Material Cost**. Unfortunately, platform fees can easily devour **15% to 35%** of your gross revenue if you don't account for every line item.

### The Standard Etsy Fee Structure

1. **Listing Fee**: $0.20 USD per item auto-renewed upon sale or every 4 months.
2. **Transaction Fee**: 6.5% charged on total buyer payment (Item Price + Shipping Charged).
3. **Payment Processing Fee**: 3.0% + $0.25 USD per transaction in the US (varies by country).
4. **Offsite Ads Fee**: 15% (if under $10k sales) or 12% (if over $10k annual revenue).

### Step-by-Step Profit Formula

$$\\text{Net Profit} = \\text{Gross Revenue} - \\text{Material Cost} - \\text{Packaging} - \\text{Seller Shipping} - \\text{Etsy Fees} - \\text{Ads}$$

For example, if you sell a personalized mug for **$25.00** with **$5.00** shipping charged to the customer:
- **Gross Revenue**: $30.00
- **Etsy Transaction Fee (6.5%)**: $1.95
- **Payment Processing (3% + $0.25)**: $1.15
- **Listing Fee**: $0.20
- **Total Etsy Fees**: $3.30
- **Blank Mug & Print Cost**: $6.50
- **Shipping Box & Postage**: $4.50
- **Net Take-Home Profit**: **$15.70** (52.3% Net Margin)
    `,
    faqs: [
      {
        question: 'Does Etsy take a fee on shipping charged to the buyer?',
        answer: 'Yes, Etsy applies the 6.5% transaction fee to the full amount paid by the buyer, including shipping charges.',
      },
    ],
  },

  'etsy-fees-explained': {
    slug: 'etsy-fees-explained',
    title: 'Etsy Fees Explained: Listing, Transaction, Processing & Offsite Ads',
    subtitle: 'A transparent line-by-line teardown of every fee charged by Etsy.',
    excerpt: 'Demystify Etsy’s complex fee rules, payment processing rates by region, and offsite advertising charges.',
    readTime: '5 min read',
    publishedDate: '2026-08-01',
    category: 'Etsy',
    calculatorCta: { text: 'Calculate Your Etsy Fees', href: '/etsy-fee-calculator' },
    content: `
### Complete 2026 Etsy Fee Matrix

Etsy's business model relies on multiple stacked fee components. Knowing how each fee is calculated allows you to set profitable retail prices.

#### 1. Listing Fees
- **$0.20 USD** per item created or renewed.
- Auto-renews whenever an item sells or after 4 months.

#### 2. Transaction Fees
- **6.5%** of the gross sale price.
- Applied to shipping and gift wrap fees collected from buyers.

#### 3. Payment Processing Rates by Country
- **United States**: 3.0% + $0.25 USD
- **United Kingdom**: 4.0% + £0.20 GBP
- **Canada**: 3.0% + CA$0.25 CAD
- **Australia**: 3.0% + A$0.25 AUD
    `,
    faqs: [
      {
        question: 'Can I opt out of Etsy Offsite Ads?',
        answer: 'Sellers who have made less than $10,000 USD in the past 365 days can opt out in shop settings. Sellers making over $10,000 are required to participate at a reduced 12% rate.',
      },
    ],
  },

  'how-to-price-handmade-products': {
    slug: 'how-to-price-handmade-products',
    title: 'How to Price Handmade Products for Profitability & Growth',
    subtitle: 'Stop undercharging for your labor. Learn formulaic handmade product pricing.',
    excerpt: 'Master handmade pricing formulas that cover your materials, hourly labor wage, overhead, and platform commission.',
    readTime: '7 min read',
    publishedDate: '2026-08-01',
    category: 'Pricing',
    calculatorCta: { text: 'Use Smart Pricing Assistant', href: '/calculators/pricing' },
    content: `
### The Classic Craft Pricing Dilemma

Most artisans price their products by looking at competitors and picking a lower number. This leads to burnout, unpaid labor, and unsustainable businesses.

### The 4-Part Handmade Pricing Formula

$$\\text{Wholesale Price} = (\\text{Materials} + \\text{Packaging} + \\text{Labor}) \\times 2$$

$$\\text{Retail Price} = \\text{Wholesale Price} \\times 2$$

Always verify that your Retail Price leaves room for **15%–20% Etsy fees** and marketing spend!
    `,
    faqs: [
      {
        question: 'How do I calculate labor cost for handmade goods?',
        answer: 'Decide on a reasonable hourly wage (e.g. $20/hr). If an item takes 30 minutes to craft, your labor cost is $10.00.',
      },
    ],
  },

  'how-to-calculate-amazon-fba-profit': {
    slug: 'how-to-calculate-amazon-fba-profit',
    title: 'How to Calculate Amazon FBA Profit: Referral & Storage Fees Guide',
    subtitle: 'Master FBA fee tiers, inbound shipping costs, and advertising ROI.',
    excerpt: 'Calculate Amazon referral commissions, weight-based fulfillment charges, and monthly warehouse storage fees.',
    readTime: '6 min read',
    publishedDate: '2026-08-01',
    category: 'Amazon',
    calculatorCta: { text: 'Use Amazon FBA Calculator', href: '/amazon-fba-calculator' },
    content: `
### Navigating Amazon FBA Unit Economics

Amazon FBA handles fulfillment, packing, and customer service, but charges a series of detailed fees based on product size, category, and storage duration.

### FBA Cost Breakdown

1. **Referral Fee**: Typically 15% of retail price ($0.30 minimum).
2. **Fulfillment Fee**: Fixed fee based on weight and dimensions (e.g., $3.22–$5.50 for standard items).
3. **Monthly Storage Fee**: Per cubic foot stored per month.
4. **PPC Advertising (ACOS)**: Ad spend required to rank and sell inventory.
    `,
    faqs: [
      {
        question: 'What is a good ACOS on Amazon?',
        answer: 'Target ACOS (Advertising Cost of Sale) depends on your profit margin before ads. If your net margin before ads is 30%, keeping ACOS under 25% ensures profitability.',
      },
    ],
  },

  'margin-vs-markup': {
    slug: 'margin-vs-markup',
    title: 'Margin vs Markup: Differences, Formulas & Conversion Guide',
    subtitle: 'Never confuse margin and markup again. Crucial accounting knowledge for ecommerce.',
    excerpt: 'Understand the difference between profit margin and price markup with clear examples and conversion formulas.',
    readTime: '4 min read',
    publishedDate: '2026-08-01',
    category: 'Finance',
    calculatorCta: { text: 'Calculate Margin vs Markup', href: '/profit-margin-calculator' },
    content: `
### Key Difference Defined

- **Profit Margin**: The percentage of retail price that is profit.
- **Markup**: The percentage added to product cost to get retail price.

### Practical Example

If you buy a product for **$50** and sell it for **$100**:
- **Gross Profit**: $50
- **Profit Margin**: $\\frac{\\$50}{\\$100} = 50\\%$
- **Markup**: $\\frac{\\$50}{\\$50} = 100\\%$
    `,
    faqs: [
      {
        question: 'Is Margin always lower than Markup?',
        answer: 'Yes! Profit margin can never exceed 100%, whereas markup can be 200%, 500%, or higher.',
      },
    ],
  },

  'how-to-price-print-on-demand-products': {
    slug: 'how-to-price-print-on-demand-products',
    title: 'How to Price Print-on-Demand Products (Printify & Gelato Guide)',
    subtitle: 'Set profitable prices for custom t-shirts, mugs, and wall art.',
    excerpt: 'Avoid thin margins on POD products by setting prices that cover supplier base costs, shipping, platform fees, and ads.',
    readTime: '5 min read',
    publishedDate: '2026-08-01',
    category: 'POD',
    calculatorCta: { text: 'Use POD Profit Calculator', href: '/pod-profit-calculator' },
    content: `
### Print-on-Demand Unit Economics

Print-on-demand eliminates inventory risk, but leaves smaller profit margins compared to bulk manufacturing.

### POD Target Pricing Guidelines

- **T-Shirts**: Cost $10–$14 base → Retail for $24–$29 (30%+ margin).
- **Hoodies**: Cost $20–$26 base → Retail for $48–$58 (35%+ margin).
- **Mugs**: Cost $4.50–$6 base → Retail for $16–$19 (40%+ margin).
    `,
    faqs: [
      {
        question: 'Should I offer free shipping on POD items?',
        answer: 'If you offer free shipping, embed the shipping cost ($4–$6) into your retail item price to protect your net profit.',
      },
    ],
  },
};
