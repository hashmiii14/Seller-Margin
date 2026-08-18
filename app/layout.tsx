import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { CookieConsent } from '@/components/ui/CookieConsent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sellrivo.site';
const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-2781286202640992';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  title: 'Sellrivo — Know Your Profit Before You Sell | Fee & Margin Calculator',
  description:
    'Free ecommerce profit calculator for Etsy sellers, Amazon FBA merchants, Print-on-Demand creators & online shops. Calculate exact listing fees, payment processing, shipping postage, break-even price & net take-home profit instantly.',
  authors: [{ name: 'Sellrivo' }],
  other: {
    'google-adsense-account': adsenseClientId,
  },
  openGraph: {
    title: 'Sellrivo — Know Your Profit Before You Sell',
    description:
      'Free seller fee & profit calculator suite for Etsy, Amazon FBA & POD. Calculate true listing fees, processing costs, break-even prices & net take-home earnings in seconds.',
    url: siteUrl,
    siteName: 'Sellrivo',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Sellrivo — Ecommerce Profit & Fee Calculator Suite',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sellrivo — Know Your Profit Before You Sell',
    description:
      'Calculate Etsy fees, Amazon FBA costs, POD margins & net take-home earnings instantly before listing your next product.',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Performance & Speed Optimization Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />

        <JsonLd
          type="WebSite"
          data={{
            name: 'Sellrivo',
            url: siteUrl,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${siteUrl}/etsy-profit-calculator?price={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          }}
        />

        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-brand-500 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:p-3 focus:bg-brand-600 focus:text-white focus:rounded-lg focus:shadow-lg font-bold text-xs"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 site-grid-lines">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
