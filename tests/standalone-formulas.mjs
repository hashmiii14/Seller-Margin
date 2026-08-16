import assert from 'assert';

function roundCurrency(value) {
  if (isNaN(value) || !isFinite(value)) return 0;
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function roundPercentage(value) {
  if (isNaN(value) || !isFinite(value)) return 0;
  return Math.round((value + Number.EPSILON) * 10) / 10;
}

function computeSharedMetrics(
  sellingPrice,
  shippingCharged,
  productCost,
  shippingCost,
  totalFees,
  advertisingCost,
  otherCosts,
  percentageFeeRateTotal = 0
) {
  const price = Math.max(0, sellingPrice);
  const chargedShip = Math.max(0, shippingCharged);
  const prodCost = Math.max(0, productCost);
  const shipCost = Math.max(0, shippingCost);
  const adCost = Math.max(0, advertisingCost);
  const misc = Math.max(0, otherCosts);
  const fees = Math.max(0, totalFees);

  const grossRevenue = roundCurrency(price + chargedShip);
  const totalDirectCosts = roundCurrency(prodCost + shipCost + adCost + misc);
  const totalCosts = roundCurrency(totalDirectCosts + fees);
  const netProfit = roundCurrency(grossRevenue - totalCosts);

  const profitMargin = grossRevenue > 0 ? roundPercentage((netProfit / grossRevenue) * 100) : 0;
  const markup = totalDirectCosts > 0 ? roundPercentage((netProfit / totalDirectCosts) * 100) : 0;

  let breakEvenPrice = 0;
  const netRate = 1 - Math.min(0.99, percentageFeeRateTotal);
  if (netRate > 0) {
    const fixedFees = fees - (grossRevenue * percentageFeeRateTotal);
    const requiredRev = (totalDirectCosts + Math.max(0, fixedFees)) / netRate;
    breakEvenPrice = roundCurrency(Math.max(0, requiredRev - chargedShip));
  }

  return {
    grossRevenue,
    totalFees,
    totalCosts,
    netProfit,
    profitMargin,
    markup,
    breakEvenPrice,
    isLoss: netProfit < 0,
  };
}

function calculateEtsyProfit(inputs) {
  const price = Math.max(0, inputs.sellingPrice || 0);
  const qty = Math.max(1, inputs.quantity || 1);
  const shipCharged = Math.max(0, inputs.shippingCharged || 0);
  const prodCost = Math.max(0, inputs.productCost || 0);
  const packCost = Math.max(0, inputs.packagingCost || 0);
  const shipCost = Math.max(0, inputs.shippingCost || 0);
  const adCost = Math.max(0, inputs.advertisingCost || 0);
  const misc = Math.max(0, inputs.otherCosts || 0);

  const grossSalesPerOrder = price + shipCharged;
  const totalGrossSales = grossSalesPerOrder * qty;

  const listingFeeTotal = roundCurrency((inputs.listingFee ?? 0.20) * qty);
  const txRate = (inputs.transactionFeeRate ?? 6.5) / 100;
  const transactionFeeTotal = roundCurrency(totalGrossSales * txRate);
  const procRate = (inputs.paymentProcessingRate ?? 3.0) / 100;
  const procFixed = inputs.paymentProcessingFixed ?? 0.25;
  const paymentFeeTotal = roundCurrency((totalGrossSales * procRate) + (procFixed * qty));
  const offsiteRate = inputs.offsiteAdsEnabled ? (inputs.offsiteAdsRate ?? 15) / 100 : 0;
  const offsiteAdsFeeTotal = roundCurrency(totalGrossSales * offsiteRate);

  const totalEtsyFees = roundCurrency(
    listingFeeTotal + transactionFeeTotal + paymentFeeTotal + offsiteAdsFeeTotal
  );

  const totalProductCosts = (prodCost + packCost) * qty;
  const totalShippingCosts = shipCost * qty;
  const totalAdCosts = adCost * qty;
  const totalMiscCosts = misc * qty;

  const combinedPercentageFeeRate = txRate + procRate + offsiteRate;

  const metrics = computeSharedMetrics(
    price * qty,
    shipCharged * qty,
    totalProductCosts,
    totalShippingCosts,
    totalEtsyFees,
    totalAdCosts,
    totalMiscCosts,
    combinedPercentageFeeRate
  );

  return {
    ...metrics,
    listingFeeTotal,
    transactionFeeTotal,
    paymentFeeTotal,
    offsiteAdsFeeTotal,
    totalEtsyFees,
  };
}

console.log('--- Running SellerMargin Deterministic Formula Verification ---');

// Test 1: Etsy Standard
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
});

assert.strictEqual(etsy.grossRevenue, 34.49, 'Etsy Gross Revenue mismatch');
assert.strictEqual(etsy.listingFeeTotal, 0.20, 'Etsy Listing Fee mismatch');
assert.strictEqual(etsy.transactionFeeTotal, 2.24, 'Etsy Transaction Fee mismatch');
assert.strictEqual(etsy.paymentFeeTotal, 1.28, 'Etsy Payment Processing Fee mismatch');
assert.strictEqual(etsy.totalEtsyFees, 3.72, 'Etsy Total Fees mismatch');
assert.strictEqual(etsy.netProfit, 15.52, 'Etsy Net Profit mismatch');
assert.strictEqual(etsy.profitMargin, 45, 'Etsy Margin mismatch');
assert.strictEqual(etsy.isLoss, false, 'Etsy Loss flag mismatch');

console.log('✓ Etsy Standard Calculation: Revenue=$34.49, Total Fees=$3.72, Net Profit=$15.52, Margin=45% [PASSED]');

// Test 2: Etsy Loss Scenario
const etsyLoss = calculateEtsyProfit({
  sellingPrice: 5.00,
  quantity: 1,
  shippingCharged: 0,
  productCost: 10.00,
  packagingCost: 1.00,
  shippingCost: 4.00,
  advertisingCost: 0,
  otherCosts: 0,
  listingFee: 0.20,
  transactionFeeRate: 6.5,
  paymentProcessingRate: 3.0,
  paymentProcessingFixed: 0.25,
  offsiteAdsEnabled: false,
  offsiteAdsRate: 15,
});

assert.strictEqual(etsyLoss.isLoss, true, 'Etsy Loss flag should be true');
assert.strictEqual(etsyLoss.netProfit, -10.93, 'Etsy Loss amount mismatch');
assert.strictEqual(etsyLoss.breakEvenPrice, 17.08, 'Etsy Break Even price mismatch');

console.log('✓ Etsy Loss Detection: Net Loss=-$10.93, Break-Even Floor=$17.08 [PASSED]');

console.log('=== ALL FINANCIAL FORMULA AUDITS PASSED 100% PERFECTLY ===');
