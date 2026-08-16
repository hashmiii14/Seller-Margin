import { PricingAssistantInputs, PricingAssistantOutputs } from './types';
import { roundCurrency } from './core';

export function calculateRecommendedPricing(inputs: PricingAssistantInputs): PricingAssistantOutputs {
  const prodCost = Math.max(0, inputs.productCost || 0);
  const shipCost = Math.max(0, inputs.shippingCost || 0);
  const adCost = Math.max(0, inputs.advertisingCost || 0);

  const totalDirectCosts = prodCost + shipCost + adCost;

  const platformRate = (inputs.platformFeeRate || 0) / 100;
  const paymentRate = (inputs.paymentFeeRate || 0) / 100;
  const fixedFee = Math.max(0, inputs.paymentFeeFixed || 0);

  const combinedFeeRate = platformRate + paymentRate;

  // 1. Break-even Price:
  // Price * (1 - combinedFeeRate) = totalDirectCosts + fixedFee
  const breakEvenDenominator = 1 - Math.min(0.99, combinedFeeRate);
  const breakEvenPrice = breakEvenDenominator > 0
    ? roundCurrency((totalDirectCosts + fixedFee) / breakEvenDenominator)
    : 0;

  // 2. Price for Target Margin (e.g. 25%):
  // Price * (1 - combinedFeeRate - marginRate) = totalDirectCosts + fixedFee
  const targetMarginRate = (inputs.targetMarginRate || 25) / 100;
  const marginDenominator = 1 - Math.min(0.99, combinedFeeRate + targetMarginRate);
  const priceForTargetMargin = marginDenominator > 0
    ? roundCurrency((totalDirectCosts + fixedFee) / marginDenominator)
    : roundCurrency(breakEvenPrice * 1.35);

  // 3. Price for Target Dollar Profit (e.g. $10):
  // Price * (1 - combinedFeeRate) = totalDirectCosts + fixedFee + targetProfitDollar
  const targetDollar = Math.max(0, inputs.targetProfitDollar || 10);
  const priceForTargetProfitDollar = breakEvenDenominator > 0
    ? roundCurrency((totalDirectCosts + fixedFee + targetDollar) / breakEvenDenominator)
    : 0;

  const minimumRecommendedPrice = Math.max(breakEvenPrice, priceForTargetMargin);

  return {
    breakEvenPrice,
    priceForTargetMargin,
    priceForTargetProfitDollar,
    minimumRecommendedPrice,
  };
}
