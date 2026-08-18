export interface AffiliatePartner {
  id: string;
  name: string;
  url: string;
  tagline: string;
  badgeText: string;
  description: string;
  ctaText: string;
  category: 'pod' | 'store' | 'keywords' | 'shipping' | 'amazon';
}

export function getAffiliatePartners(): Record<string, AffiliatePartner> {
  const printifyUrl = process.env.NEXT_PUBLIC_PRINTIFY_AFFILIATE_URL || 'https://try.printify.com/jh54f3cybr6g';
  const gelatoUrl = process.env.NEXT_PUBLIC_GELATO_AFFILIATE_URL || 'https://gelato.com';
  const everbeeUrl = process.env.NEXT_PUBLIC_EVERBEE_AFFILIATE_URL || 'https://everbee.io';
  const shopifyUrl = process.env.NEXT_PUBLIC_SHOPIFY_AFFILIATE_URL || 'https://www.shopify.com';
  const pirateShipUrl = process.env.NEXT_PUBLIC_PIRATESHIP_AFFILIATE_URL || 'https://www.pirateship.com';
  const jungleScoutUrl = process.env.NEXT_PUBLIC_JUNGLESCOUT_AFFILIATE_URL || 'https://www.junglescout.com';
  const helium10Url = process.env.NEXT_PUBLIC_HELIUM10_AFFILIATE_URL || 'https://www.helium10.com';
  const erankUrl = process.env.NEXT_PUBLIC_ERANK_AFFILIATE_URL || 'https://erank.com';

  return {
    printify: {
      id: 'printify',
      name: 'Printify',
      url: printifyUrl,
      tagline: 'Fulfill items globally with 0 upfront inventory cost',
      badgeText: 'Print-on-Demand Partner',
      description: 'Selling Print-on-Demand? Fulfill t-shirts, mugs, hoodies, and posters with 900+ global print providers.',
      ctaText: 'Try Printify Free',
      category: 'pod',
    },
    gelato: {
      id: 'gelato',
      name: 'Gelato',
      url: gelatoUrl,
      tagline: 'Local print-on-demand production in 32 countries',
      badgeText: 'Fast Global Delivery',
      description: 'Deliver custom apparel, wall art, and stationery with local printing and lower shipping costs.',
      ctaText: 'Explore Gelato Free',
      category: 'pod',
    },
    everbee: {
      id: 'everbee',
      name: 'EverBee',
      url: everbeeUrl,
      tagline: 'Spot high-demand, low-competition Etsy keywords',
      badgeText: 'Etsy Keyword Intelligence',
      description: 'Analyze estimated listing sales, search volume, and tags for top sellers to boost organic views.',
      ctaText: 'Try EverBee Free',
      category: 'keywords',
    },
    erank: {
      id: 'erank',
      name: 'eRank',
      url: erankUrl,
      tagline: '#1 Etsy SEO & keyword research tool',
      badgeText: 'Etsy Optimization',
      description: 'Track shop rankings, audit tags, and discover trending product categories to double your views.',
      ctaText: 'Try eRank Free',
      category: 'keywords',
    },
    shopify: {
      id: 'shopify',
      name: 'Shopify',
      url: shopifyUrl,
      tagline: 'Low Margin Alert! Open a standalone store to save on fees',
      badgeText: 'Keep 100% Profits',
      description: 'Low Margin Alert! Switch to digital downloads or open a standalone store on Shopify to eliminate marketplace fees.',
      ctaText: 'Start Shopify $1/mo Trial',
      category: 'store',
    },
    junglescout: {
      id: 'junglescout',
      name: 'Jungle Scout',
      url: jungleScoutUrl,
      tagline: '#1 Amazon FBA product research & keyword suite',
      badgeText: 'Amazon FBA Power Tool',
      description: 'Find profitable Amazon products, estimate sales velocity, and supplier costs with accuracy.',
      ctaText: 'Explore Jungle Scout',
      category: 'amazon',
    },
    helium10: {
      id: 'helium10',
      name: 'Helium 10',
      url: helium10Url,
      tagline: 'All-in-one software toolsuite for Amazon sellers',
      badgeText: 'Amazon Suite',
      description: 'Optimize product listings, audit Amazon PPC ad campaigns, and track keyword rank.',
      ctaText: 'Try Helium 10 Free',
      category: 'amazon',
    },
    pirateship: {
      id: 'pirateship',
      name: 'Pirate Ship',
      url: pirateShipUrl,
      tagline: 'Get up to 89% off USPS and UPS shipping rates',
      badgeText: 'Free Discounted Shipping',
      description: 'Pay zero monthly fees and print shipping labels at Commercial Rates to instantly save on shipping.',
      ctaText: 'Get Free Shipping Labels',
      category: 'shipping',
    },
  };
}

export const AFFILIATE_DISCLAIMER_TEXT =
  'Disclosure: Sellrivo may receive partner compensation if you sign up through our referral links. This helps keep our calculator 100% free with zero registration required.';
