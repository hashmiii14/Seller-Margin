import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Sellrivo — Full Technical & Financial Knowledge Base

> Comprehensive documentation of Sellrivo's financial models, marketplace fee rules, mathematical profit formulas, and API endpoints for AI Agents.

---

## Financial Formulas

### Net Profit Formula (Etsy):
Net Profit = (Selling Price + Shipping Charged) - (Listing Fee + Transaction Fee + Processing Fee + Offsite Ads) - (Product Cost + Packaging Cost + Seller Shipping Cost + Ad Spend)

### Profit Margin %:
Profit Margin % = (Net Profit / Gross Revenue) * 100

### Markup %:
Markup % = (Net Profit / Cost of Goods Sold) * 100

### Break-Even Price Formula:
Break-Even Price = (Fixed Overhead + Variable Unit Costs + Fixed Per-Transaction Fees) / (1 - Variable Fee Rate %)

---

## 2026 International Fee Rules Matrix

| Country | Listing Fee | Transaction Fee | Payment Processing Rate |
| :--- | :--- | :--- | :--- |
| **United States** | $0.20 USD | 6.5% | 3.0% + $0.25 USD |
| **United Kingdom** | £0.16 GBP | 6.5% | 4.0% + £0.20 GBP (+ 20% VAT) |
| **Canada** | CA$0.25 CAD | 6.5% | 3.0% + CA$0.25 CAD |
| **Australia** | A$0.30 AUD | 6.5% | 3.0% + A$0.25 AUD |
| **India** | ₹15 INR | 6.5% | 4.0% + ₹15 INR |

---

## Programmatic Endpoint Index

- https://www.sellrivo.site/etsy-profit-calculator
- https://www.sellrivo.site/etsy-fee-calculator
- https://www.sellrivo.site/etsy-digital-downloads-calculator
- https://www.sellrivo.site/etsy-fee-calculator-uk
- https://www.sellrivo.site/etsy-fee-calculator-canada
- https://www.sellrivo.site/etsy-fee-calculator-australia
- https://www.sellrivo.site/printify-profit-calculator
- https://www.sellrivo.site/gelato-profit-calculator
- https://www.sellrivo.site/amazon-fba-calculator
- https://www.sellrivo.site/compare/etsy-vs-amazon-fba
- https://www.sellrivo.site/sitemap.xml
- https://www.sellrivo.site/robots.txt
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
