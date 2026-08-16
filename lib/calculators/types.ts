export type CurrencyCode = 'USD' | 'GBP' | 'EUR' | 'CAD' | 'AUD';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  locale: string;
}

export interface FeeRule {
  id: string;
  name: string;
  rate?: number; // percentage (e.g. 6.5 for 6.5%)
  fixed?: number; // fixed dollar/pound amount (e.g. 0.20)
  enabled: boolean;
  description: string;
  isOptional?: boolean;
}

export interface SharedCalculationInput {
  sellingPrice: number;
  productCost: number;
  shippingCharged: number; // shipping collected from buyer
  shippingCost: number; // shipping paid by seller
  advertisingCost: number;
  otherCosts: number;
  currency: CurrencyCode;
}

export interface SharedCalculationResult {
  grossRevenue: number;
  totalFees: number;
  totalCosts: number;
  netProfit: number;
  profitMargin: number; // %
  markup: number; // %
  roi: number; // %
  breakEvenPrice: number;
  targetMarginPrice: number; // Recommended price for e.g. 20% margin
  profitabilityScore: 'low' | 'moderate' | 'strong';
  isLoss: boolean;
}

export interface EtsyInputs extends SharedCalculationInput {
  quantity: number;
  packagingCost: number;
  listingFee: number; // Default $0.20
  transactionFeeRate: number; // Default 6.5%
  paymentProcessingRate: number; // Default 3.0% (US)
  paymentProcessingFixed: number; // Default $0.25 (US)
  offsiteAdsEnabled: boolean;
  offsiteAdsRate: number; // 12% or 15%
}

export interface EtsyOutputs extends SharedCalculationResult {
  listingFeeTotal: number;
  transactionFeeTotal: number;
  paymentFeeTotal: number;
  offsiteAdsFeeTotal: number;
  totalEtsyFees: number;
  profitPerOrder: number;
}

export interface AmazonFbaInputs extends SharedCalculationInput {
  referralFeeRate: number; // e.g., 15%
  fbaFulfillmentFee: number; // e.g., $3.50 per unit
  monthlyStorageFee: number; // e.g., $0.45 per unit
  inboundShipping: number;
  returnsAllowanceRate: number; // e.g., 2%
  marketplace: 'US' | 'UK' | 'CA' | 'AU';
}

export interface AmazonFbaOutputs extends SharedCalculationResult {
  referralFeeTotal: number;
  fulfillmentFeeTotal: number;
  storageFeeTotal: number;
  returnsAllowanceTotal: number;
  totalAmazonFees: number;
}

export interface PodInputs extends SharedCalculationInput {
  podBaseCost: number; // Price charged by Printify/Gelato
  podShippingCost: number; // POD shipping cost
  marketplaceFeeRate: number; // Etsy / Shopify / Amazon fee rate (e.g. 6.5%)
  paymentProcessingRate: number; // 2.9%
  paymentProcessingFixed: number; // $0.30
}

export interface PodOutputs extends SharedCalculationResult {
  podTotalCost: number; // base cost + pod shipping
  platformFeeTotal: number;
  paymentFeeTotal: number;
}

export interface BreakEvenInputs {
  fixedCosts: number;
  variableCostPerUnit: number;
  platformFeeRate: number; // e.g. 6.5%
  paymentProcessingRate: number; // e.g. 3.0%
  desiredProfitPerUnit: number;
  currency: CurrencyCode;
}

export interface BreakEvenOutputs {
  breakEvenPrice: number;
  priceForTargetProfit: number;
  unitsToCoverFixedCostsAtPrice: (price: number) => number;
}

export interface MarginInputs {
  sellingPrice: number;
  costOfGoods: number;
  shipping: number;
  fees: number;
  advertising: number;
  other: number;
  currency: CurrencyCode;
}

export interface MarginOutputs {
  grossProfit: number;
  netProfit: number;
  profitMargin: number;
  markup: number;
  roi: number;
}

export interface PricingAssistantInputs {
  productCost: number;
  shippingCost: number;
  platformFeeRate: number;
  paymentFeeRate: number;
  paymentFeeFixed: number;
  advertisingCost: number;
  targetMarginRate: number; // e.g., 25%
  targetProfitDollar: number; // e.g., $10
  currency: CurrencyCode;
}

export interface PricingAssistantOutputs {
  breakEvenPrice: number;
  priceForTargetMargin: number;
  priceForTargetProfitDollar: number;
  minimumRecommendedPrice: number;
}

export interface PriceSensitivityPoint {
  price: number;
  revenue: number;
  totalFees: number;
  totalCosts: number;
  netProfit: number;
  margin: number;
}
