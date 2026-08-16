import { MetadataRoute } from 'next';
import { SEO_PAGES, LOCALIZED_PAGES } from '@/lib/config/seo-pages';
import { GUIDES } from '@/lib/config/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sellermargin.com';

  const staticRoutes = [
    '',
    '/calculators/etsy',
    '/calculators/amazon-fba',
    '/calculators/print-on-demand',
    '/calculators/break-even',
    '/calculators/profit-margin',
    '/calculators/pricing',
    '/compare/etsy-vs-amazon',
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

  const localizedRoutes = Object.values(LOCALIZED_PAGES).map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const guideRoutes = Object.keys(GUIDES).map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...seoLandingRoutes, ...localizedRoutes, ...guideRoutes];
}
