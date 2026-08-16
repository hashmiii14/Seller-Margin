export interface AffiliatePartner {
  id: string;
  name: string;
  url: string;
  tagline: string;
  badgeText: string;
  description: string;
  ctaText: string;
  category: 'pod' | 'store' | 'keywords' | 'shipping';
}

export function getAffiliatePartners(): Record<string, AffiliatePartner> {
  const printifyUrl = process.env.NEXT_PUBLIC_PRINTIFY_AFFILIATE_URL || 'https://try.printify.com/jh54f3cybr6g';
  const gelatoUrl = process.env.NEXT_PUBLIC_GELATO_AFFILIATE_URL || 'https://gelato.com';
  const everbeeUrl = process.env.NEXT_PUBLIC_EVERBEE_AFFILIATE_URL || 'https://everbee.io';
  const shopifyUrl = process.env.NEXT_PUBLIC_SHOPIFY_AFFILIATE_URL || 'https://www.shopify.com';
  const pirateShipUrl = process.env.NEXT_PUBLIC_PIRATESHIP_AFFILIATE_URL || 'https://www.pirateship.com';

  return {
    printify: {
      id: 'printify',
      name: 'Printify',
      url: printifyUrl,
      tagline: 'Connect 900+ POD items to your Etsy or Shopify store',
      badgeText: 'Top Choice for POD',
      description: 'Fulfill t-shirts, mugs, hoodies, and posters with global print providers.',
      ctaText: 'Explore Printify Free',
      category: 'pod',
    },
    gelato: {
      id: 'gelato',
      name: 'Gelato',
      url: gelatoUrl,
      tagline: 'Local print-on-demand production in 32 countries',
      badgeText: 'Fast Global Delivery',
      description: 'Deliver custom apparel, wall art, and stationery with local printing.',
      ctaText: 'Explore Gelato Free',
      category: 'pod',
    },
    everbee: {
      id: 'everbee',
      name: 'EverBee',
      url: everbeeUrl,
      tagline: 'Spot high-demand, low-competition Etsy keywords',
      badgeText: 'Etsy Keyword Intelligence',
      description: 'Analyze estimated listing sales, search volume, and tags for top sellers.',
      ctaText: 'Try EverBee Free',
      category: 'keywords',
    },
    shopify: {
      id: 'shopify',
      name: 'Shopify',
      url: shopifyUrl,
      tagline: 'Build your own zero-fee storefront outside Etsy',
      badgeText: 'Keep 100% Profits',
      description: 'Avoid marketplace transaction fees by building your own ecommerce website.',
      ctaText: 'Start Shopify Trial',
      category: 'store',
    },
    pirateship: {
      id: 'pirateship',
      name: 'Pirate Ship',
      url: pirateShipUrl,
      tagline: 'Get up to 89% off USPS and UPS shipping rates',
      badgeText: 'Free Discounted Shipping',
      description: 'Pay zero monthly fees and print shipping labels at Commercial Rates.',
      ctaText: 'Get Free Shipping Labels',
      category: 'shipping',
    },
  };
}

export const AFFILIATE_DISCLAIMER_TEXT =
  'Disclosure: Sellrivo may receive partner compensation if you sign up through our referral links. This helps keep our calculator 100% free with zero registration required.';
