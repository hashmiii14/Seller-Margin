import { BreakEvenInputs, BreakEvenOutputs } from './types';
import { roundCurrency } from './core';

export function calculateBreakEven(inputs: BreakEvenInputs): BreakEvenOutputs {
  const fixed = Math.max(0, inputs.fixedCosts || 0);
  const variable = Math.max(0, inputs.variableCostPerUnit || 0);
  const desiredProfit = Math.max(0, inputs.desiredProfitPerUnit || 0);

  const platformRate = (inputs.platformFeeRate || 0) / 100;
  const procRate = (inputs.paymentProcessingRate || 0) / 100;
  const totalFeeRate = platformRate + procRate;

  const netMultiplier = 1 - Math.min(0.99, totalFeeRate);

  // Price required to break even per unit (assuming zero fixed cost spread, variable cost break-even):
  // Price * (1 - feeRate) = variableCost
  const breakEvenPrice = netMultiplier > 0 ? roundCurrency(variable / netMultiplier) : 0;

  // Price required for target profit:
  // Price * (1 - feeRate) = variableCost + desiredProfit
  const priceForTargetProfit = netMultiplier > 0 ? roundCurrency((variable + desiredProfit) / netMultiplier) : 0;

  // Function to calculate how many units are needed at a given selling price to cover total fixed costs
  const unitsToCoverFixedCostsAtPrice = (price: number): number => {
    if (price <= 0 || fixed <= 0) return 0;
    const netRevenuePerUnit = price * netMultiplier - variable;
    if (netRevenuePerUnit <= 0) return Infinity;
    return Math.ceil(fixed / netRevenuePerUnit);
  };

  return {
    breakEvenPrice,
    priceForTargetProfit,
    unitsToCoverFixedCostsAtPrice,
  };
}
