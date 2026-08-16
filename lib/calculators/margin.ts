import { MarginInputs, MarginOutputs } from './types';
import { roundCurrency, roundPercentage } from './core';

export function calculateGeneralMargin(inputs: MarginInputs): MarginOutputs {
  const price = Math.max(0, inputs.sellingPrice || 0);
  const cost = Math.max(0, inputs.costOfGoods || 0);
  const ship = Math.max(0, inputs.shipping || 0);
  const fees = Math.max(0, inputs.fees || 0);
  const ad = Math.max(0, inputs.advertising || 0);
  const misc = Math.max(0, inputs.other || 0);

  const grossProfit = roundCurrency(price - cost);
  const totalCosts = roundCurrency(cost + ship + fees + ad + misc);
  const netProfit = roundCurrency(price - totalCosts);

  const profitMargin = price > 0 ? roundPercentage((netProfit / price) * 100) : 0;
  const directCosts = cost + ship + ad + misc;
  const markup = directCosts > 0 ? roundPercentage((netProfit / directCosts) * 100) : 0;
  const roi = cost > 0 ? roundPercentage((netProfit / cost) * 100) : 0;

  return {
    grossProfit,
    netProfit,
    profitMargin,
    markup,
    roi,
  };
}
