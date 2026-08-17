import { EtsyInputs, EtsyOutputs } from './types';
import { computeSharedMetrics, roundCurrency } from './core';

export { generatePriceSensitivityCurve } from './core';

export function calculateEtsyProfit(inputs: EtsyInputs): EtsyOutputs {
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

  // Listing Fee ($0.20 fixed per quantity listed/sold)
  const listingFeeTotal = roundCurrency((inputs.listingFee ?? 0.20) * qty);

  // Transaction Fee (6.5% of item price + shipping charged)
  const txRate = (inputs.transactionFeeRate ?? 6.5) / 100;
  const transactionFeeTotal = roundCurrency(totalGrossSales * txRate);

  // Payment Processing Fee (Rate% * gross sales + fixed per order)
  const procRate = (inputs.paymentProcessingRate ?? 3.0) / 100;
  const procFixed = inputs.paymentProcessingFixed ?? 0.25;
  const paymentFeeTotal = roundCurrency((totalGrossSales * procRate) + (procFixed * qty));

  // Offsite Ads Fee (if enabled, 12% or 15%)
  const offsiteRate = inputs.offsiteAdsEnabled ? (inputs.offsiteAdsRate ?? 15) / 100 : 0;
  const offsiteAdsFeeTotal = roundCurrency(totalGrossSales * offsiteRate);

  // Total Etsy & Payment Platform Fees
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

  const profitPerOrder = roundCurrency(metrics.netProfit / qty);

  return {
    ...metrics,
    listingFeeTotal,
    transactionFeeTotal,
    paymentFeeTotal,
    offsiteAdsFeeTotal,
    totalEtsyFees,
    profitPerOrder,
  };
}
