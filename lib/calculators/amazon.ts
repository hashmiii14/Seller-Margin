import { AmazonFbaInputs, AmazonFbaOutputs } from './types';
import { computeSharedMetrics, roundCurrency } from './core';

export function calculateAmazonFbaProfit(inputs: AmazonFbaInputs): AmazonFbaOutputs {
  const price = Math.max(0, inputs.sellingPrice || 0);
  const shipCharged = Math.max(0, inputs.shippingCharged || 0);
  const prodCost = Math.max(0, inputs.productCost || 0);
  const shipCost = Math.max(0, inputs.shippingCost || 0); // Seller-fulfilled or inbound
  const inbound = Math.max(0, inputs.inboundShipping || 0);
  const adCost = Math.max(0, inputs.advertisingCost || 0);
  const misc = Math.max(0, inputs.otherCosts || 0);

  const grossSales = price + shipCharged;

  // Referral Fee (typically 15%, min $0.30)
  const refRate = (inputs.referralFeeRate ?? 15) / 100;
  const rawReferral = grossSales * refRate;
  const referralFeeTotal = roundCurrency(grossSales > 0 ? Math.max(0.30, rawReferral) : 0);

  // FBA Fulfillment Fee
  const fulfillmentFeeTotal = roundCurrency(Math.max(0, inputs.fbaFulfillmentFee || 3.50));

  // Monthly Storage Fee
  const storageFeeTotal = roundCurrency(Math.max(0, inputs.monthlyStorageFee || 0.45));

  // Returns Allowance Total
  const returnsRate = (inputs.returnsAllowanceRate ?? 2) / 100;
  const returnsAllowanceTotal = roundCurrency(grossSales * returnsRate);

  // Total Amazon Platform Fees
  const totalAmazonFees = roundCurrency(
    referralFeeTotal + fulfillmentFeeTotal + storageFeeTotal + returnsAllowanceTotal
  );

  const totalProductCosts = prodCost;
  const totalShippingCosts = shipCost + inbound;

  const combinedFeeRate = refRate + returnsRate;

  const metrics = computeSharedMetrics(
    price,
    shipCharged,
    totalProductCosts,
    totalShippingCosts,
    totalAmazonFees,
    adCost,
    misc,
    combinedFeeRate
  );

  return {
    ...metrics,
    referralFeeTotal,
    fulfillmentFeeTotal,
    storageFeeTotal,
    returnsAllowanceTotal,
    totalAmazonFees,
  };
}
