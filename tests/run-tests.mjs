import assert from 'assert';
import { calculateEtsyProfit } from '../lib/calculators/etsy.ts';
import { calculateAmazonFbaProfit } from '../lib/calculators/amazon.ts';
import { calculatePodProfit } from '../lib/calculators/pod.ts';
import { calculateBreakEven } from '../lib/calculators/breakeven.ts';
import { calculateRecommendedPricing } from '../lib/calculators/pricing.ts';
import { calculateGeneralMargin } from '../lib/calculators/margin.ts';

console.log('--- Running SellerMargin Financial Verification Suite ---');

// 1. Etsy Test
const etsy = calculateEtsyProfit({
  sellingPrice: 29.99,
  quantity: 1,
  shippingCharged: 4.50,
  productCost: 7.25,
  packagingCost: 1.00,
  shippingCost: 4.50,
  advertisingCost: 2.00,
  otherCosts: 0.50,
  listingFee: 0.20,
  transactionFeeRate: 6.5,
  paymentProcessingRate: 3.0,
  paymentProcessingFixed: 0.25,
  offsiteAdsEnabled: false,
  offsiteAdsRate: 15,
  currency: 'USD',
});

assert.strictEqual(etsy.grossRevenue, 34.49, 'Etsy Gross Revenue mismatch');
assert.strictEqual(etsy.listingFeeTotal, 0.20, 'Etsy Listing Fee mismatch');
assert.strictEqual(etsy.totalEtsyFees, 3.72, 'Etsy Total Fees mismatch');
assert.strictEqual(etsy.netProfit, 15.52, 'Etsy Net Profit mismatch');
assert.strictEqual(etsy.isLoss, false, 'Etsy Loss flag mismatch');
console.log('✓ Etsy Profit Formula PASSED (Net Profit: $' + etsy.netProfit + ', Margin: ' + etsy.profitMargin + '%)');

// 2. Amazon FBA Test
const fba = calculateAmazonFbaProfit({
  sellingPrice: 34.99,
  productCost: 8.50,
  shippingCharged: 0,
  shippingCost: 0,
  inboundShipping: 1.25,
  advertisingCost: 3.50,
  otherCosts: 0.50,
  referralFeeRate: 15,
  fbaFulfillmentFee: 4.75,
  monthlyStorageFee: 0.45,
  returnsAllowanceRate: 2,
  marketplace: 'US',
  currency: 'USD',
});

assert.strictEqual(fba.referralFeeTotal, 5.25, 'Amazon Referral Fee mismatch');
assert.strictEqual(fba.fulfillmentFeeTotal, 4.75, 'Amazon Fulfillment Fee mismatch');
assert.strictEqual(fba.netProfit, 10.09, 'Amazon Net Profit mismatch');
console.log('✓ Amazon FBA Formula PASSED (Net Profit: $' + fba.netProfit + ', Margin: ' + fba.profitMargin + '%)');

// 3. Print-on-Demand Test
const pod = calculatePodProfit({
  sellingPrice: 28.00,
  shippingCharged: 4.99,
  podBaseCost: 11.50,
  podShippingCost: 4.99,
  marketplaceFeeRate: 6.5,
  paymentProcessingRate: 2.9,
  paymentProcessingFixed: 0.30,
  advertisingCost: 3.00,
  otherCosts: 0.50,
  productCost: 0,
  shippingCost: 0,
  currency: 'USD',
});

assert.strictEqual(pod.grossRevenue, 32.99, 'POD Gross Revenue mismatch');
assert.strictEqual(pod.podTotalCost, 16.49, 'POD Total Cost mismatch');
assert.strictEqual(pod.netProfit, 9.60, 'POD Net Profit mismatch');
console.log('✓ Print-on-Demand Formula PASSED (Net Profit: $' + pod.netProfit + ', Margin: ' + pod.profitMargin + '%)');

// 4. Break-Even Test
const be = calculateBreakEven({
  fixedCosts: 500,
  variableCostPerUnit: 10.00,
  platformFeeRate: 10.0,
  paymentProcessingRate: 0.0,
  desiredProfitPerUnit: 5.00,
  currency: 'USD',
});

assert.strictEqual(be.breakEvenPrice, 11.11, 'Break-Even Price mismatch');
assert.strictEqual(be.priceForTargetProfit, 16.67, 'Target Profit Price mismatch');
console.log('✓ Break-Even Formula PASSED (Break-Even Price: $' + be.breakEvenPrice + ')');

// 5. Margin vs Markup Test
const margin = calculateGeneralMargin({
  sellingPrice: 100,
  costOfGoods: 50,
  shipping: 0,
  fees: 0,
  advertising: 0,
  other: 0,
  currency: 'USD',
});

assert.strictEqual(margin.grossProfit, 50, 'Gross Profit mismatch');
assert.strictEqual(margin.profitMargin, 50, 'Profit Margin % mismatch');
assert.strictEqual(margin.markup, 100, 'Markup % mismatch');
console.log('✓ Margin vs Markup Formula PASSED (Margin: 50%, Markup: 100%)');

console.log('=== ALL 5 FINANCIAL FORMULA SUITES PASSED PERFECTLY ===');
