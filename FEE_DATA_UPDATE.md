# Fee Data Maintenance & Update Guide

This document explains where marketplace fee assumptions and rules live in **SellerMargin** and how to update them when platforms change their fee schedules.

## Fee Data Files

Platform fee data is centralized in configuration modules under `lib/config/fees/`:

1. **Etsy Fees**: [`lib/config/fees/etsy.ts`](file:///c:/Users/mdhas/Desktop/sellermargin/lib/config/fees/etsy.ts)
   - Listing fee ($0.20 USD)
   - Transaction fee rate (6.5%)
   - Payment processing rates by country (US: 3% + $0.25, UK: 4% + £0.20, CA: 3% + CA$0.25, AU: 3% + A$0.25)
   - Offsite Ads rates (12% / 15%)

2. **Amazon FBA Fees**: [`lib/config/fees/amazon.ts`](file:///c:/Users/mdhas/Desktop/sellermargin/lib/config/fees/amazon.ts)
   - Referral fee rates by category (default 15%)
   - FBA size/weight fulfillment tiers
   - Monthly storage rates (Peak vs Non-Peak)

3. **Print-on-Demand (POD)**: [`lib/config/fees/pod.ts`](file:///c:/Users/mdhas/Desktop/sellermargin/lib/config/fees/pod.ts)
   - Printify & Gelato catalog base cost guidelines

## How to Update Fee Data

1. Open the target config file (e.g., `lib/config/fees/etsy.ts`).
2. Update the `lastReviewed` field to today's date (format: `YYYY-MM-DD`).
3. Update fee rates or fixed amounts in the `rules` array.
4. Run the automated test suite to ensure formula calculations remain valid:
   ```bash
   npm test
   ```
5. Build and verify the production export:
   ```bash
   npm run build
   ```
