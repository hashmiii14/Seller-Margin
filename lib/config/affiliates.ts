export interface AffiliatePartner {
  id: string;
  name: string;
  url: string;
  tagline: string;
  badgeText: string;
  description: string;
  ctaText: string;
}

export function getAffiliatePartners(): Record<string, AffiliatePartner> {
  const printifyUrl =
    process.env.NEXT_PUBLIC_PRINTIFY_AFFILIATE_URL || 'https://try.printify.com/jh54f3cybr6g';
  const gelatoUrl = process.env.NEXT_PUBLIC_GELATO_AFFILIATE_URL || 'https://gelato.com';

  return {
    printify: {
      id: 'printify',
      name: 'Printify',
      url: printifyUrl,
      tagline: 'Connect 900+ POD items to your Etsy or Shopify store',
      badgeText: 'Top Choice for POD',
      description: 'Fulfill t-shirts, mugs, hoodies, and posters with global print providers.',
      ctaText: 'Explore Printify Free',
    },
    gelato: {
      id: 'gelato',
      name: 'Gelato',
      url: gelatoUrl,
      tagline: 'Local print-on-demand production in 32 countries',
      badgeText: 'Fast Global Delivery',
      description: 'Deliver custom apparel, wall art, and stationery with local printing.',
      ctaText: 'Explore Gelato Free',
    },
  };
}

export const AFFILIATE_DISCLAIMER_TEXT =
  'Disclosure: SellerMargin may receive partner compensation if you sign up through our referral links. This helps keep our calculator 100% free with zero registration required.';
