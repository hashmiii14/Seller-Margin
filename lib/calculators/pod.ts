import { PodInputs, PodOutputs } from './types';
import { computeSharedMetrics, roundCurrency } from './core';

export function calculatePodProfit(inputs: PodInputs): PodOutputs {
  const price = Math.max(0, inputs.sellingPrice || 0);
  const shipCharged = Math.max(0, inputs.shippingCharged || 0);
  const podBaseCost = Math.max(0, inputs.podBaseCost || 0);
  const podShipCost = Math.max(0, inputs.podShippingCost || 0);
  const adCost = Math.max(0, inputs.advertisingCost || 0);
  const misc = Math.max(0, inputs.otherCosts || 0);

  const grossRevenue = price + shipCharged;

  // Platform Fee (e.g., Etsy 6.5% or Shopify/Amazon fee)
  const mktRate = (inputs.marketplaceFeeRate ?? 6.5) / 100;
  const platformFeeTotal = roundCurrency(grossRevenue * mktRate);

  // Payment Processing Fee (e.g. 2.9% + $0.30)
  const procRate = (inputs.paymentProcessingRate ?? 2.9) / 100;
  const procFixed = inputs.paymentProcessingFixed ?? 0.30;
  const paymentFeeTotal = roundCurrency((grossRevenue * procRate) + procFixed);

  const totalFees = roundCurrency(platformFeeTotal + paymentFeeTotal);
  const podTotalCost = roundCurrency(podBaseCost + podShipCost);

  const combinedFeeRate = mktRate + procRate;

  const metrics = computeSharedMetrics(
    price,
    shipCharged,
    podBaseCost,
    podShipCost,
    totalFees,
    adCost,
    misc,
    combinedFeeRate
  );

  return {
    ...metrics,
    podTotalCost,
    platformFeeTotal,
    paymentFeeTotal,
  };
}
