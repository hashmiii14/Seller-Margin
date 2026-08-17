import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { CookieConsent } from '@/components/ui/CookieConsent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sellrivo.site';
const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-2781286202640992';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sellrivo — Know Your Profit Before You Sell',
  description:
    'Calculate Etsy fees, Amazon FBA costs, print-on-demand margins, break-even prices, and take-home seller earnings in seconds.',
  keywords: [
    'Etsy profit calculator',
    'Etsy fee calculator',
    'Amazon FBA calculator',
    'Print on demand calculator',
    'Break even calculator',
    'Profit margin calculator',
  ],
  authors: [{ name: 'Sellrivo' }],
  other: {
    'google-adsense-account': adsenseClientId,
  },
  openGraph: {
    title: 'Sellrivo — Know Your Profit Before You Sell',
    description: 'Calculate real seller fees, profit margins, and break-even prices before listing products.',
    url: siteUrl,
    siteName: 'Sellrivo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sellrivo — Know Your Profit Before You Sell',
    description: 'Calculate Etsy fees, Amazon FBA costs, and take-home seller earnings instantly.',
  },
  robots: {
    index: true,
    follow: true,
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
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-brand-500 selection:text-white">
        <Header />
        <main className="flex-1 site-grid-lines">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
