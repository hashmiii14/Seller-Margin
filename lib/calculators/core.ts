import { SharedCalculationResult, PriceSensitivityPoint, CurrencyCode } from './types';

/**
 * Safely rounds a number to 2 decimal places to avoid IEEE 754 precision issues
 */
export function roundCurrency(value: number): number {
  if (isNaN(value) || !isFinite(value)) return 0;
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

/**
 * Safely rounds percentages to 1 decimal place
 */
export function roundPercentage(value: number): number {
  if (isNaN(value) || !isFinite(value)) return 0;
  return Math.round((value + Number.EPSILON) * 10) / 10;
}

/**
 * Computes core financial metrics: profit, margin, markup, ROI, break-even
 */
export function computeSharedMetrics(
  sellingPrice: number,
  shippingCharged: number,
  productCost: number,
  shippingCost: number,
  totalFees: number,
  advertisingCost: number,
  otherCosts: number,
  percentageFeeRateTotal: number = 0 // Sum of percentage fee rates (e.g. 0.095 for 9.5%)
): SharedCalculationResult {
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

  // Profit margin % = (Net Profit / Gross Revenue) * 100
  const profitMargin = grossRevenue > 0 ? roundPercentage((netProfit / grossRevenue) * 100) : 0;

  // Markup % = (Net Profit / Total Direct Costs) * 100
  const markup = totalDirectCosts > 0 ? roundPercentage((netProfit / totalDirectCosts) * 100) : 0;

  // ROI % = (Net Profit / (Product Cost + Direct Costs)) * 100
  const totalInvestment = prodCost + shipCost;
  const roi = totalInvestment > 0 ? roundPercentage((netProfit / totalInvestment) * 100) : 0;

  // Break-even price calculation
  // Gross Revenue - Total Costs = 0
  // (Price + ShippingCharged) - (DirectCosts + FixedFees + (Price + ShippingCharged)*FeeRate) = 0
  // Price * (1 - FeeRate) = DirectCosts + FixedFees - ShippingCharged * (1 - FeeRate)
  let breakEvenPrice = 0;
  const netRate = 1 - Math.min(0.99, percentageFeeRateTotal);
  if (netRate > 0) {
    const fixedFees = fees - (grossRevenue * percentageFeeRateTotal);
    const requiredRev = (totalDirectCosts + Math.max(0, fixedFees)) / netRate;
    breakEvenPrice = roundCurrency(Math.max(0, requiredRev - chargedShip));
  }

  // Recommended price for 20% margin
  let targetMarginPrice = 0;
  const targetRate = 1 - Math.min(0.99, percentageFeeRateTotal + 0.20);
  if (targetRate > 0) {
    const fixedFees = fees - (grossRevenue * percentageFeeRateTotal);
    const requiredRev = (totalDirectCosts + Math.max(0, fixedFees)) / targetRate;
    targetMarginPrice = roundCurrency(Math.max(0, requiredRev - chargedShip));
  }

  const isLoss = netProfit < 0;
  let profitabilityScore: 'low' | 'moderate' | 'strong' = 'moderate';
  if (isLoss || profitMargin < 10) {
    profitabilityScore = 'low';
  } else if (profitMargin >= 25) {
    profitabilityScore = 'strong';
  }

  return {
    grossRevenue,
    totalFees,
    totalCosts,
    netProfit,
    profitMargin,
    markup,
    roi,
    breakEvenPrice,
    targetMarginPrice,
    profitabilityScore,
    isLoss,
  };
}

/**
 * Generates price sensitivity points for interactive slider/charts
 */
export function generatePriceSensitivityCurve(
  basePrice: number,
  calculatorFn: (price: number) => { netProfit: number; profitMargin: number; totalFees: number; totalCosts: number; grossRevenue: number }
): PriceSensitivityPoint[] {
  const validBase = Math.max(1, basePrice || 20);
  // Generate 7 price steps: -30%, -20%, -10%, base, +10%, +25%, +50%
  const multipliers = [0.7, 0.8, 0.9, 1.0, 1.1, 1.25, 1.5];

  return multipliers.map((m) => {
    const price = roundCurrency(validBase * m);
    const res = calculatorFn(price);
    return {
      price,
      revenue: res.grossRevenue,
      totalFees: res.totalFees,
      totalCosts: res.totalCosts,
      netProfit: res.netProfit,
      margin: res.profitMargin,
    };
  });
}
