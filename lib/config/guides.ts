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
    title: 'How to Calculate Etsy Profit: The Complete 2026 Seller Guide',
    subtitle: 'Stop losing money to hidden platform fees. Master the exact step-by-step formula to calculate true take-home earnings on Etsy.',
    excerpt: 'Comprehensive 2026 guide to calculating real Etsy listing fees, 6.5% transaction costs, payment processing, packaging, shipping, and net profit margins.',
    readTime: '12 min read',
    publishedDate: '2026-08-01',
    category: 'Etsy',
    calculatorCta: { text: 'Use Interactive Etsy Profit Calculator', href: '/etsy-profit-calculator' },
    content: `
### Why Most Etsy Sellers Underestimate Their True Costs

Running a successful Etsy store requires much more than crafting beautiful products. Thousands of store owners launch on Etsy only to discover at tax time that their actual take-home profit is a fraction of what they expected.

The most common trap is calculating profit simply as:
$$\\text{Incorrect Profit} = \\text{Selling Price} - \\text{Material Cost}$$

This oversimplified formula ignores Etsy's multi-layered fee structure, payment processing cut, shipping label costs, packaging supplies, refund reserves, and mandatory advertising fees. In reality, platform charges and overhead can consume **15% to 35%** of your total gross revenue.

---

### The Official 2026 Etsy Fee Rules Breakdown

To accurately predict your profit margin, you must account for every line item charged by Etsy:

1. **Listing Fee ($0.20 USD)**: Charged per item listed. Auto-renews every 4 months or immediately upon sale when multiple quantities are purchased.
2. **Transaction Fee (6.5%)**: Etsy charges 6.5% on the **total amount paid by the buyer**, which includes both the item retail price AND the shipping fee collected.
3. **Etsy Payments Processing Fee (3.0% + $0.25 USD)**: In the United States, processing fees are 3.0% + $0.25 per transaction. (International rates range from 4.0% + £0.20 in the UK to 3.0% + CA$0.25 in Canada).
4. **Offsite Ads Fee (12% to 15%)**: If a buyer clicks an Etsy advertisement on Google, Facebook, or Pinterest and purchases within 30 days:
   - **15% Fee**: For shops making under $10,000 USD in annual sales (opt-out available).
   - **12% Fee**: Mandatory for shops that reach $10,000 USD in 12 consecutive months.
5. **Currency Conversion Fee (2.5%)**: Applied if your shop listing currency differs from your bank account payout currency.
6. **Regulatory Operating Fees (0.32% to 1.1%)**: Charged in specific countries (UK 0.32%, France 0.40%, Italy 0.25%, Spain 0.40%, Turkey 1.1%).

---

### Real Product Pricing Fee Tables ($10, $25, $50, $100)

Here is a side-by-side fee breakdown for items sold to US buyers with $4.50 shipping charged to the customer:

| Product Price | Shipping Charged | Total Buyer Payment | Listing Fee | Transaction Fee (6.5%) | Processing Fee (3%+$0.25) | Total Etsy Fees | Fee % of Revenue |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **$10.00** | $4.50 | $14.50 | $0.20 | $0.94 | $0.69 | **$1.83** | **12.6%** |
| **$25.00** | $4.50 | $29.50 | $0.20 | $1.92 | $1.14 | **$3.26** | **11.1%** |
| **$50.00** | $4.50 | $54.50 | $0.20 | $3.54 | $1.89 | **$5.63** | **10.3%** |
| **$100.00** | $4.50 | $104.50 | $0.20 | $6.79 | $3.39 | **$10.38** | **9.9%** |

*Note: Notice how lower-priced items suffer higher percentage fee burdens due to fixed per-transaction fees ($0.20 listing + $0.25 processing).*

---

### Hidden Costs Sellers Frequently Overlook

1. **Packaging Supplies & Boxes**: Poly mailers ($0.30), bubble wrap ($0.25), custom thank-you cards ($0.15), and tissue paper ($0.10) add $0.80+ per package.
2. **Postage Rate Discrepancies**: Underestimating shipping weight by even 2 ounces can cause USPS or Royal Mail to charge your account post-delivery adjustments.
3. **VAT / Sales Tax on Fees**: In many jurisdictions (UK, EU, Australia, Canada), seller fees are subject to local VAT or GST rates (e.g., 20% UK VAT added onto seller transaction fees).
4. **Damage & Lost Package Reserves**: Top sellers set aside **2% to 3%** of gross revenue to cover unexpected customer refunds, returns, or reshipments.

---

### The Master Net Profit Formula

Use this exact mathematical formula to establish pricing that guarantees your target margin:

$$\\text{Net Profit} = \\text{Gross Revenue} - \\text{Product Cost} - \\text{Packaging} - \\text{Shipping Paid} - \\text{Etsy Fees} - \\text{Ad Spend}$$

$$\\text{Profit Margin \\%} = \\left( \\frac{\\text{Net Profit}}{\\text{Gross Revenue}} \\right) \\times 100$$

---

### Step-by-Step Profit Calculation Example

Suppose you sell a custom handmade mug:
- **Retail Price**: $28.00
- **Shipping Charged to Buyer**: $5.00
- **Total Revenue collected**: $33.00
- **Blank Mug & Printing Cost**: $6.50
- **Packaging & Shipping Label Cost**: $5.50
- **Etsy Listing Fee**: $0.20
- **Etsy Transaction Fee (6.5% of $33.00)**: $2.15
- **Etsy Processing Fee (3.0% + $0.25 on $33.00)**: $1.24
- **Total Platform Fees**: $3.59
- **Total Expenses**: $6.50 + $5.50 + $3.59 = $15.59
- **Net Take-Home Profit**: $33.00 - $15.59 = **$17.41**
- **Net Profit Margin**: ($17.41 / $33.00) = **52.8%**

By factoring in all expenses upfront, this shop secures an outstanding **52.8% net profit margin**.
    `,
    faqs: [
      {
        question: 'Does Etsy charge transaction fees on shipping costs?',
        answer: 'Yes. Etsy charges its 6.5% transaction fee on the full payment collected from the buyer, including both the item retail price and any shipping fee charged.',
      },
      {
        question: 'How often are listing fees charged on Etsy?',
        answer: 'Etsy listing fees ($0.20 USD) are charged when a new listing is created, auto-renewed every 4 months if unsold, or auto-renewed immediately upon each sale of multi-quantity inventory.',
      },
      {
        question: 'What is a healthy net profit margin for Etsy sellers?',
        answer: 'For handmade physical products, target a net margin of 40%–60%. For Print-on-Demand goods, target 25%–40%. For digital downloads with zero COGS, target 80%–95%.',
      },
      {
        question: 'Can I opt out of Etsy Offsite Ads?',
        answer: 'Yes, if your shop has earned less than $10,000 USD in the past 12 months, you can opt out in your shop settings. Once you cross $10,000 USD, participation is mandatory for life at a 12% discounted rate.',
      },
    ],
  },
  'etsy-fees-explained-2026': {
    slug: 'etsy-fees-explained-2026',
    title: 'Etsy Fees Explained (2026 Complete Matrix): Listing, Transaction & Processing',
    subtitle: 'Comprehensive international breakdown of every fee charged by Etsy in the US, UK, Canada, Australia, and India.',
    excerpt: 'Detailed transparency guide explaining listing fees, transaction percentages, credit card processing rates, regulatory operating charges, and offsite ad costs.',
    readTime: '10 min read',
    publishedDate: '2026-08-10',
    category: 'Etsy',
    calculatorCta: { text: 'Calculate Your Global Etsy Fees', href: '/etsy-fee-calculator' },
    content: `
### International Etsy Fee Matrix (2026 Rules)

Whether you sell domestically or internationally, understanding your country's specific fee matrix is essential to avoid unexpected deductions.

| Country | Listing Fee | Transaction Fee | Payment Processing Rate | Currency Conversion Fee |
| :--- | :--- | :--- | :--- | :--- |
| **United States** | $0.20 USD | 6.5% | 3.0% + $0.25 USD | 2.5% (if multi-currency) |
| **United Kingdom** | £0.16 GBP | 6.5% | 4.0% + £0.20 GBP (+ 20% VAT) | 2.5% |
| **Canada** | CA$0.25 CAD | 6.5% | 3.0% + CA$0.25 CAD | 2.5% |
| **Australia** | A$0.30 AUD | 6.5% | 3.0% + A$0.25 AUD | 2.5% |
| **India** | ₹15 INR | 6.5% | 4.0% + ₹15 INR | 2.5% |

---

### Comprehensive Breakdown of Every Etsy Fee Category

#### 1. Listing Fees
- **Amount**: $0.20 USD (or local currency equivalent).
- **Trigger**: Charged when creating a listing, renewing after 4 months, or upon sale of each quantity unit.

#### 2. Transaction Fees
- **Amount**: 6.5% of total order value (Price + Shipping + Gift Wrap).
- **Trigger**: Charged automatically upon payment completion.

#### 3. Etsy Payments Processing Fees
- **Amount**: Country-dependent percentage + fixed per-order fee.
- **Note**: Handled directly through Etsy Payments. Seller funds are deposited directly into your linked bank account net of these fees.

#### 4. Regulatory Operating Fees
In response to local digital service taxes, Etsy charges localized regulatory operating fees in select countries:
- **United Kingdom**: 0.32%
- **France**: 0.40%
- **Italy**: 0.25%
- **Spain**: 0.40%
- **Turkey**: 1.1%

---

### Fee Comparison Table for $10, $25, $50, and $100 Orders

| Country | $10 Sale Fee Total | $25 Sale Fee Total | $50 Sale Fee Total | $100 Sale Fee Total |
| :--- | :--- | :--- | :--- | :--- |
| **US (USD)** | $1.40 (14.0%) | $2.83 (11.3%) | $5.20 (10.4%) | $9.95 (10.0%) |
| **UK (GBP)** | £1.41 (14.1%) | £2.89 (11.6%) | £5.35 (10.7%) | £10.27 (10.3%) |
| **Canada (CAD)** | CA$1.45 (14.5%) | CA$2.88 (11.5%) | CA$5.25 (10.5%) | CA$10.00 (10.0%) |
| **Australia (AUD)**| A$1.50 (15.0%) | A$2.93 (11.7%) | A$5.30 (10.6%) | A$10.05 (10.1%) |

---

### How to Prevent Currency Conversion Fees

Etsy charges a **2.5% currency conversion fee** whenever a shop's listing currency does not match the domestic currency of the bank account linked to Etsy Payments. 

To eliminate this hidden fee:
1. Go to **Shop Manager > Finances > Payment Settings**.
2. Set your **Listing Currency** to match your native bank account payout currency (e.g. USD for US banks, GBP for UK banks).
    `,
    faqs: [
      {
        question: 'How do I check how much Etsy fees I have paid this month?',
        answer: 'Navigate to Shop Manager > Finances > Payment Account in your Etsy dashboard to view line-by-line statement breakdowns.',
      },
      {
        question: 'Are Etsy fees refundable if a customer cancels an order?',
        answer: 'Yes. If an order is canceled and refunded in full through Etsy, Etsy refunds the 6.5% transaction fee and processing fee. Listing fees are generally non-refundable.',
      },
      {
        question: 'Does Etsy charge VAT or Sales Tax on listing and transaction fees?',
        answer: 'Depending on your tax jurisdiction (e.g. UK, EU, Norway, Australia), Etsy is legally required to collect local sales tax or VAT on the seller fees charged.',
      },
    ],
  },
  'etsy-vs-amazon-fba-fee-comparison': {
    slug: 'etsy-vs-amazon-fba-fee-comparison',
    title: 'Etsy vs Amazon FBA Fee Comparison 2026: Which Platform is More Profitable?',
    subtitle: 'Side-by-side analysis of marketplace commissions, fulfillment fees, storage costs, and profit margins.',
    excerpt: 'Detailed financial head-to-head comparison between Etsy and Amazon FBA to help ecommerce sellers pick the most profitable platform for their products.',
    readTime: '11 min read',
    publishedDate: '2026-08-12',
    category: 'Finance',
    calculatorCta: { text: 'Compare FBA vs Etsy Margins', href: '/compare/etsy-vs-amazon-fba' },
    content: `
### Etsy vs Amazon FBA: Head-to-Head Fee Structure

Choosing between Etsy and Amazon FBA is one of the most critical decisions for an ecommerce business. While Etsy focuses on handmade, unique, and customizable products with self-fulfillment, Amazon FBA provides massive global scale with automated prime warehouse logistics.

| Fee Type | Etsy | Amazon FBA |
| :--- | :--- | :--- |
| **Monthly Subscription** | $0 (Free standard shop) | $39.99/mo (Professional Seller Account) |
| **Listing / Insertion Fee** | $0.20 per listing / 4 mo | $0 (Unlimited listings with Professional plan) |
| **Base Commission / Referral Fee**| 6.5% transaction fee | 8% to 15% referral fee (15% avg apparel/home) |
| **Payment Processing Fee** | 3.0% + $0.25 | Included in Amazon referral fee |
| **Fulfillment / Delivery Cost** | Self-ship ($4.00–$6.00 merchant cost) | FBA Pick & Pack Fee ($3.50–$6.50 small/large standard) |
| **Storage & Inventory Fees** | $0 | $0.87 / cu.ft (Jan–Sep) or $2.40 / cu.ft (Q4 Peak) |
| **Total Average Fee Burden** | **11% – 15%** of sale price | **30% – 45%** of sale price |

---

### Profitability Comparison Table: $25 Product

Let's compare a standard 1 lb consumer product sold for **$25.00** with a **$6.00 product cost (COGS)**:

#### Etsy Scenario (Merchant Fulfilled with $4.50 shipping charged):
- **Gross Revenue Collected**: $29.50
- **Product Cost**: $6.00
- **Postage Label Cost**: $4.50
- **Etsy Listing Fee**: $0.20
- **Etsy Transaction Fee (6.5%)**: $1.92
- **Processing Fee (3%+$0.25)**: $1.14
- **Net Take-Home Profit**: **$15.74** (**53.4% Profit Margin**)

#### Amazon FBA Scenario (Fulfillment by Amazon):
- **Gross Revenue**: $25.00 (Free Prime Shipping)
- **Product Cost**: $6.00
- **Amazon Referral Fee (15%)**: $3.75
- **FBA Fulfillment Fee (Large Standard 1 lb)**: $4.15
- **Monthly Storage Allowance**: $0.15
- **Net Take-Home Profit**: **$11.00** (**44.0% Profit Margin**)

*Result: Etsy delivers +$4.74 higher profit per unit because fulfillment is handled in-house rather than paying Amazon's warehouse labor fees.*

---

### When to Choose Etsy vs Amazon FBA

#### Choose Etsy If:
- You create handmade, vintage, or personalized items.
- You operate a Print-on-Demand business (Printify, Gelato).
- You sell digital downloads, templates, or SVG printables.
- You prefer lower fixed overhead and self-fulfillment flexibility.

#### Choose Amazon FBA If:
- You sell standardized manufactured goods in high volumes.
- You require automated Prime 1-day or 2-day delivery capabilities.
- You are leveraging private label manufacturing or wholesale arbitrage.
    `,
    faqs: [
      {
        question: 'Can I sell the same products on both Etsy and Amazon FBA?',
        answer: 'Yes! Multi-channel selling is a popular strategy. You can fulfill Etsy orders manually or use Amazon Multi-Channel Fulfillment (MCF) to ship Etsy orders from your FBA inventory.',
      },
      {
        question: 'Is Amazon FBA referral fee higher than Etsy transaction fee?',
        answer: 'Yes. Amazon charges an average referral fee of 15% across most categories, compared to Etsy’s 6.5% transaction fee.',
      },
    ],
  },
  'how-to-price-print-on-demand-tshirts': {
    slug: 'how-to-price-print-on-demand-tshirts',
    title: 'How to Price Print-on-Demand T-Shirts in 2026 for Maximum Net Profit',
    subtitle: 'Step-by-step pricing strategy for Printify, Gelato, Etsy, and Shopify POD sellers.',
    excerpt: 'Complete print-on-demand pricing blueprint. Learn how to calculate garment base costs, shipping, platform fees, and target a 30%+ net profit margin.',
    readTime: '10 min read',
    publishedDate: '2026-08-14',
    category: 'POD',
    calculatorCta: { text: 'Use POD Profit Calculator', href: '/pod-profit-calculator' },
    content: `
### The Print-on-Demand Profitability Challenge

Print-on-demand (POD) enables entrepreneurs to launch clothing lines, mug stores, and home decor brands with zero upfront inventory investment. However, because POD providers like Printify and Gelato charge a premium per item for on-demand manufacturing, margin management is vital.

If you underprice your items by even $2.00, platform fees and shipping costs will leave you selling at a loss.

---

### Target Profit Margin Formula for POD

To establish a profitable retail price, use the **Target Margin Formula**:

$$\\text{Required Retail Price} = \\frac{\\text{Supplier Base Cost} + \\text{Shipping Cost} + \\text{Target Profit}}{1 - \\text{Total Platform Fee \\%}}$$

---

### Real Pricing Matrix for Bella+Canvas 3001 Unisex T-Shirt

Here is a realistic pricing model for a custom printed Bella+Canvas 3001 t-shirt fulfilled via Printify on Etsy:

- **Printify Blank T-Shirt Cost**: $9.25 USD
- **US Domestic Shipping Cost**: $4.75 USD
- **Total Production Expense**: **$14.00 USD**

| Retail Selling Price | Buyer Shipping Charged | Total Revenue | Etsy Fees (11%) | Total Costs | Net Profit | Net Margin % |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **$22.00** | $4.50 | $26.50 | $2.93 | $16.93 | **$9.57** | **36.1%** |
| **$26.00** | $4.50 | $30.50 | $3.37 | $17.37 | **$13.13** | **43.0%** |
| **$29.99** | $4.50 | $34.49 | $3.81 | $17.81 | **$16.68** | **48.4%** |

---

### 4 Proven Strategies to Boost POD Margins

1. **Upgrade to Printify Premium / Gelato+**: Paying $29/mo for Printify Premium unlocks up to 20% discount on garment base costs, immediately saving $2.00 to $3.50 per t-shirt.
2. **Offer Bundles & Multi-Packs**: Selling 2-packs or 3-packs amortizes fixed per-order shipping and listing fees across multiple items.
3. **Cross-Sell Higher-Margin Items**: Sweatshirts, hoodies, and canvas prints offer much higher absolute dollar profit ($18–$30 per sale) compared to standard t-shirts.
4. **Build a Standalone Store on Shopify**: Moving repeat customers from Etsy to your own Shopify website eliminates Etsy's 6.5% transaction fee.
    `,
    faqs: [
      {
        question: 'What is a good profit margin for Print-on-Demand t-shirts?',
        answer: 'Aim for a minimum net profit margin of 30%–40% (or $10.00–$15.00 net profit per t-shirt) after subtracting supplier base cost, shipping, and store fees.',
      },
      {
        question: 'Should I offer free shipping on POD items?',
        answer: 'If you offer free shipping, be sure to bake the shipping cost ($4.75+) directly into your retail item price to maintain your margin.',
      },
    ],
  },
  'margin-vs-markup-formula': {
    slug: 'margin-vs-markup-formula',
    title: 'Margin vs Markup Formula: The Financial Difference Every Seller Must Master',
    subtitle: 'Avoid underpricing inventory. Learn why confusing profit margin % with markup % ruins profitability.',
    excerpt: 'Detailed financial guide with clear mathematical formulas, conversion tables, and real-world ecommerce pricing examples.',
    readTime: '9 min read',
    publishedDate: '2026-08-15',
    category: 'Pricing',
    calculatorCta: { text: 'Use Profit Margin & Markup Calculator', href: '/profit-margin-calculator' },
    content: `
### The Million-Dollar Distinction

One of the most frequent financial mistakes made by new e-commerce sellers is confusing **Profit Margin** with **Markup**. While both terms express profitability as a percentage, they use completely different denominators:

- **Profit Margin**: Profit calculated as a percentage of **Total Selling Price (Revenue)**.
- **Markup**: Profit calculated as a percentage of **Cost of Goods Sold (COGS)**.

$$\\text{Profit Margin \\%} = \\left( \\frac{\\text{Net Profit}}{\\text{Revenue}} \\right) \\times 100$$

$$\\text{Markup \\%} = \\left( \\frac{\\text{Net Profit}}{\\text{Cost}} \\right) \\times 100$$

---

### Quick Conversion Matrix: Margin vs Markup

| Product Cost (COGS) | Desired Markup % | Retail Selling Price | Net Profit | Actual Profit Margin % |
| :--- | :--- | :--- | :--- | :--- |
| **$10.00** | 25% | $12.50 | $2.50 | **20.0%** |
| **$10.00** | 50% | $15.00 | $5.00 | **33.3%** |
| **$10.00** | 75% | $17.50 | $7.50 | **42.9%** |
| **$10.00** | 100% (Keystone) | $20.00 | $10.00 | **50.0%** |
| **$10.00** | 200% | $30.00 | $20.00 | **66.7%** |

---

### The Danger of Underpricing

Imagine your wholesale item costs **$20.00**. You want a 50% profit return, so you add a **50% markup**, pricing the item at **$30.00** (Profit = $10.00).

Now, suppose you sell this item on Etsy:
- **Revenue**: $30.00
- **Cost**: $20.00
- **Platform & Processing Fees (15%)**: $4.50
- **Packaging & Shipping**: $3.50
- **Actual Net Take-Home**: $30.00 - $20.00 - $4.50 - $3.50 = **$2.00**
- **Realized Margin**: **6.6%**

Because you applied a 50% markup (which is only a 33.3% margin before fees), platform fees and shipping devoured almost your entire profit margin! To achieve a true 50% net margin after fees, you needed a **150%+ markup**.
    `,
    faqs: [
      {
        question: 'Is 50% markup equal to 50% margin?',
        answer: 'No. A 50% markup equals a 33.3% profit margin. To achieve a 50% profit margin, you must double your cost (100% markup).',
      },
      {
        question: 'How do I convert markup percentage to profit margin percentage?',
        answer: 'Use the formula: Margin % = Markup % / (1 + Markup %). For example, a 50% markup yields 0.50 / (1 + 0.50) = 33.3% margin.',
      },
    ],
  },
};
