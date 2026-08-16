# SellerMargin — Etsy & Amazon FBA Seller Profit Calculator

**SellerMargin** is a fast, trustworthy, mobile-first calculator site for Etsy sellers, Amazon FBA sellers, print-on-demand creators, handmade artisans, and small ecommerce businesses. Know your real selling fees, profit margins, break-even prices, and take-home earnings before you list or sell a product.

## Key Features

- **Etsy Profit & Fee Calculator**: Computes $0.20 listing fees, 6.5% transaction fees, Etsy Payments processing rates (US, UK, CA, AU), and optional offsite ads (12%–15%).
- **Amazon FBA Calculator**: Calculates referral commissions (15%), FBA weight fulfillment charges, monthly storage fees, and PPC advertising spend.
- **Print-on-Demand (POD) Calculator**: Estimates Printify and Gelato supplier blank costs, shipping, store commissions, and net profit margins.
- **Smart Pricing Assistant ("What Should I Charge?")**: Calculates the exact retail price required to achieve your target profit margin or dollar goal.
- **Break-Even Calculator**: Solves for minimum break-even retail prices and required sales volumes to cover fixed overhead.
- **Profit Margin & Markup Calculator**: Clear visual breakdown comparing Net Margin % vs Price Markup %.
- **Multi-Currency Support**: Instant switching between USD ($), GBP (£), EUR (€), CAD (CA$), and AUD (A$).
- **Interactive Visualizers**: Stacked bar cost distribution chart and price-sensitivity matrix.
- **Zero Server Infrastructure**: 100% client-side calculations in the browser. High performance and static export friendly.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS & CSS Variables (Dark / Light mode support)
- **Icons**: Lucide React
- **Testing**: Vitest unit test suite

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm package manager

### Local Development

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Testing

Run unit tests for financial calculation formulas:

```bash
npm test
```

---

## Production Build

To verify compilation and static generation:

```bash
npm run build
```

---

## License

Independent software tool. Not affiliated with Etsy, Inc. or Amazon.com, Inc.
