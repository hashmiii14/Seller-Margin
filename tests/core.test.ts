import { describe, it, expect } from 'vitest';
import { calculateEtsyProfit } from '../lib/calculators/etsy';
import { calculateAmazonFbaProfit } from '../lib/calculators/amazon';
import { calculatePodProfit } from '../lib/calculators/pod';
import { calculateBreakEven } from '../lib/calculators/breakeven';
import { calculateRecommendedPricing } from '../lib/calculators/pricing';

describe('Core Financial Formulas Test Suite', () => {
  it('correctly calculates Etsy profit for standard US listing', () => {
    const res = calculateEtsyProfit({
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

    expect(res.grossRevenue).toBe(34.49);
    expect(res.listingFeeTotal).toBe(0.20);
    expect(res.transactionFeeTotal).toBe(2.24); // 6.5% of 34.49
    expect(res.paymentFeeTotal).toBe(1.28); // 3.0% of 34.49 + 0.25
    expect(res.totalEtsyFees).toBe(3.72);
    expect(res.netProfit).toBe(15.52);
    expect(res.profitMargin).toBe(45);
    expect(res.isLoss).toBe(false);
  });

  it('detects loss when price is set below cost floor', () => {
    const res = calculateEtsyProfit({
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
      currency: 'USD',
    });

    expect(res.isLoss).toBe(true);
    expect(res.netProfit).toBe(-10.93);
    expect(res.breakEvenPrice).toBe(17.08);
  });

  it('calculates Amazon FBA referral and weight fulfillment fees correctly', () => {
    const res = calculateAmazonFbaProfit({
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

    expect(res.referralFeeTotal).toBe(5.25); // 15% of 34.99
    expect(res.fulfillmentFeeTotal).toBe(4.75);
    expect(res.totalAmazonFees).toBe(11.15); // 5.25 + 4.75 + 0.45 + 0.70
    expect(res.netProfit).toBe(10.09);
  });

  it('calculates Print-on-Demand supplier costs and margins', () => {
    const res = calculatePodProfit({
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

    expect(res.grossRevenue).toBe(32.99);
    expect(res.podTotalCost).toBe(16.49);
    expect(res.netProfit).toBe(9.60);
  });

  it('calculates break-even price and price for target profit', () => {
    const res = calculateBreakEven({
      fixedCosts: 500,
      variableCostPerUnit: 10.00,
      platformFeeRate: 10.0,
      paymentProcessingRate: 0.0,
      desiredProfitPerUnit: 5.00,
      currency: 'USD',
    });

    expect(res.breakEvenPrice).toBe(11.11);
    expect(res.priceForTargetProfit).toBe(16.67);
  });

  it('recommends retail prices for target margin percentage', () => {
    const res = calculateRecommendedPricing({
      productCost: 10.00,
      shippingCost: 2.00,
      platformFeeRate: 6.5,
      paymentFeeRate: 3.0,
      paymentFeeFixed: 0.25,
      advertisingCost: 1.00,
      targetMarginRate: 25,
      targetProfitDollar: 10,
      currency: 'USD',
    });

    expect(res.breakEvenPrice).toBe(14.64);
    expect(res.priceForTargetMargin).toBe(20.23);
  });
});
