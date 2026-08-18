import { MetadataRoute } from 'next';
import { SEO_PAGES } from '@/lib/config/seo-pages';
import { GUIDES } from '@/lib/config/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sellrivo.site';

  const staticRoutes = [
    '',
    '/profit-goal-calculator',
    '/etsy-fee-calculator-uk',
    '/etsy-fee-calculator-canada',
    '/etsy-fee-calculator-australia',
    '/etsy-fee-calculator-india',
    '/etsy-fee-calculator-germany',
    '/printify-profit-calculator',
    '/gelato-profit-calculator',
    '/etsy-digital-downloads-calculator',
    '/etsy-offsite-ads-calculator',
    '/etsy-profit-calculator-us',
    '/etsy-profit-calculator-uk',
    '/etsy-profit-calculator-canada',
    '/etsy-profit-calculator-australia',
    '/etsy-profit-calculator-india',
    '/calculators/etsy',
    '/calculators/amazon-fba',
    '/calculators/print-on-demand',
    '/calculators/break-even',
    '/calculators/profit-margin',
    '/calculators/pricing',
    '/compare/etsy-vs-amazon',
    '/compare/etsy-vs-amazon-fba',
    '/guides',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const seoLandingRoutes = Object.keys(SEO_PAGES).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const guideRoutes = Object.keys(GUIDES).map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...seoLandingRoutes, ...guideRoutes];
}
