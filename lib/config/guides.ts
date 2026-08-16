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

### The Standard Etsy Fee Structure (2026 Update)

1. **Listing Fee**: $0.20 USD per item auto-renewed upon sale or every 4 months.
2. **Transaction Fee**: 6.5% charged on total buyer payment (Item Price + Shipping Charged).
3. **Payment Processing Fee**: 3.0% + $0.25 USD per transaction in the US (varies by country).
4. **Offsite Ads Fee**: 15% (if under $10k sales) or 12% (if over $10k annual revenue).

### Step-by-Step Profit Formula

$$\\text{Net Profit} = \\text{Gross Revenue} - \\text{Material Cost} - \\text{Packaging} - \\text{Seller Shipping} - \\text{Etsy Fees} - \\text{Ads}$$

For example, if you sell a personalized mug for **$25.00** with **$5.00** shipping charged to the customer:
- **Gross Revenue**: $30.00
- **Listing Fee**: $0.20
- **Transaction Fee (6.5%)**: $1.95
- **Payment Processing (3.0% + $0.25)**: $1.15
- **Total Etsy Fees**: $3.30 (11.0% of revenue)
- **Net Profit**: $15.52 (45.0% profit margin)
    `,
    faqs: [
      {
        question: 'Does Etsy fee apply to shipping charged to buyers?',
        answer: 'Yes. Etsy charges its 6.5% transaction fee on the full payment collected from the buyer including item price and shipping.',
      },
    ],
  },
  'etsy-fees-explained-2026': {
    slug: 'etsy-fees-explained-2026',
    title: 'Etsy Fees Explained (2026 Breakdown): Listing, Transaction & Ads',
    subtitle: 'A complete, transparent guide to every fee charged by Etsy in 2026.',
    excerpt: 'Detailed breakdown of Etsy listing fees, transaction costs, processing fees across US, UK, Canada, Australia, and India.',
    readTime: '8 min read',
    publishedDate: '2026-08-10',
    category: 'Etsy',
    calculatorCta: { text: 'Calculate Your Etsy Fees', href: '/etsy-fee-calculator' },
    content: `
### Complete 2026 Etsy Fee Matrix

Understanding Etsy's fee schedule is essential for establishing profitable product prices.

| Country | Listing Fee | Transaction Fee | Payment Processing Rate |
| :--- | :--- | :--- | :--- |
| **United States** | $0.20 USD | 6.5% | 3.0% + $0.25 USD |
| **United Kingdom** | £0.16 GBP | 6.5% | 4.0% + £0.20 GBP (+ 20% VAT) |
| **Canada** | CA$0.25 CAD | 6.5% | 3.0% + CA$0.25 CAD |
| **Australia** | A$0.30 AUD | 6.5% | 3.0% + A$0.25 AUD |
| **India** | ₹15 INR | 6.5% | 4.0% + ₹15 INR |

### Hidden Fees to Watch Out For

- **Currency Conversion Fee**: 2.5% if your shop currency differs from your bank account currency.
- **Regulatory Operating Fees**: Charged in specific countries (UK 0.32%, France 0.40%, Italy 0.25%, Spain 0.40%, Turkey 1.1%).
- **Offsite Ads**: 15% mandatory fee for sales originating from Etsy external search ads once shop reaches $10,000 in 12 months.
    `,
    faqs: [
      {
        question: 'How do I avoid Etsy currency conversion fees?',
        answer: 'Set your shop listing currency to match your domestic bank payout currency.',
      },
    ],
  },
  'etsy-vs-amazon-fba-fee-comparison': {
    slug: 'etsy-vs-amazon-fba-fee-comparison',
    title: 'Etsy vs Amazon FBA Fee Comparison: Which Marketplace Costs Less?',
    subtitle: 'Compare marketplace referral fees, storage costs, and fulfillment margins side by side.',
    excerpt: 'Deep dive side-by-side fee comparison between Etsy and Amazon FBA to help ecommerce sellers choose the right platform.',
    readTime: '9 min read',
    publishedDate: '2026-08-12',
    category: 'Finance',
    calculatorCta: { text: 'Compare FBA vs Etsy Margins', href: '/amazon-fba-calculator' },
    content: `
### Key Fee Differences: Etsy vs Amazon FBA

| Metric / Fee | Etsy | Amazon FBA |
| :--- | :--- | :--- |
| **Listing / Subscription Fee** | $0.20 per listing / 4 mo | $39.99/mo Professional Account |
| **Base Commission Fee** | 6.5% transaction fee | 15% referral fee (avg) |
| **Fulfillment Options** | Self-ship / Merchant Fulfilled | Amazon FBA Pick & Pack ($3.50+) |
| **Storage Fees** | None | $0.87 / cu.ft monthly storage |
| **Average Fee Burden** | **11% – 15%** of sale price | **30% – 45%** of sale price |

### When to Choose Etsy
Choose Etsy for handmade crafts, custom print-on-demand goods, vintage items, and digital templates where fulfillment is handled in-house.

### When to Choose Amazon FBA
Choose Amazon FBA for high-volume standard size products where automated prime shipping and scale outweigh higher fulfillment costs.
    `,
    faqs: [
      {
        question: 'Is Amazon FBA more expensive than Etsy?',
        answer: 'Yes, Amazon FBA total fee burden typically ranges between 30% to 45% due to fulfillment and referral costs, compared to 11% to 15% on Etsy.',
      },
    ],
  },
  'how-to-price-print-on-demand-tshirts': {
    slug: 'how-to-price-print-on-demand-tshirts',
    title: 'How to Price Print-on-Demand T-Shirts for Maximum Net Profit',
    subtitle: 'Pricing strategy formula for Printify, Gelato, and Etsy print-on-demand sellers.',
    excerpt: 'Step-by-step POD t-shirt pricing blueprint to maintain 30%+ net profit margins after blank garment costs, shipping, and Etsy fees.',
    readTime: '7 min read',
    publishedDate: '2026-08-14',
    category: 'POD',
    calculatorCta: { text: 'Use POD Profit Calculator', href: '/pod-profit-calculator' },
    content: `
### The Print-on-Demand Pricing Formula

To avoid selling POD t-shirts at a loss, use the **Target Margin Formula**:

$$\\text{Retail Price} = \\frac{\\text{Base Cost} + \\text{Shipping Cost} + \\text{Target Dollar Profit}}{1 - \\text{Total Fee \\%}}$$

#### Practical Example: Bella+Canvas 3001 T-Shirt
- **Printify Base Cost**: $9.50 USD
- **US Shipping Cost**: $4.75 USD
- **Total Printify Cost**: $14.25 USD
- **Target Retail Price**: $28.00 USD (+ $4.50 shipping = $32.50 revenue)
- **Etsy Fees (11%)**: $3.58 USD
- **Net Profit**: $14.67 USD (**45.1% Net Margin**)
    `,
    faqs: [
      {
        question: 'What is a good profit margin for print-on-demand t-shirts?',
        answer: 'Target a minimum net profit margin of 25% to 35% after accounting for production costs, shipping, and store fees.',
      },
    ],
  },
  'margin-vs-markup-formula': {
    slug: 'margin-vs-markup-formula',
    title: 'Margin vs Markup Formula: The Financial Difference Every Seller Must Know',
    subtitle: 'Learn why confusing margin % with markup % causes underpricing and lost income.',
    excerpt: 'Clear explanation of profit margin vs markup formulas with real-world ecommerce calculation examples.',
    readTime: '5 min read',
    publishedDate: '2026-08-15',
    category: 'Pricing',
    calculatorCta: { text: 'Use Profit Margin & Markup Calculator', href: '/profit-margin-calculator' },
    content: `
### Profit Margin vs Markup Defined

- **Profit Margin**: Net profit expressed as a percentage of **Total Revenue**.
  $$\\text{Margin \\%} = \\left( \\frac{\\text{Net Profit}}{\\text{Revenue}} \\right) \\times 100$$
- **Markup**: Net profit expressed as a percentage of **Cost of Goods Sold**.
  $$\\text{Markup \\%} = \\left( \\frac{\\text{Net Profit}}{\\text{Cost}} \\right) \\times 100$$

### Why Confusing Them Kills Profit
If your product costs **$10** and you add a **50% markup**, your selling price is **$15** (Profit = $5).
However, your **Profit Margin** is only **33.3%** ($5 / $15), NOT 50%! If platform fees devour 20%, your actual take-home pay is significantly lower than anticipated.
    `,
    faqs: [
      {
        question: 'Is 50% markup the same as 50% margin?',
        answer: 'No. A 50% markup equals a 33.3% profit margin. To achieve a 50% profit margin, you must apply a 100% markup (double the cost).',
      },
    ],
  },
};
