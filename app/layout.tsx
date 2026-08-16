import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://sellermargin.com'),
  title: 'SellerMargin — Know Your Profit Before You Sell',
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
  authors: [{ name: 'SellerMargin' }],
  openGraph: {
    title: 'SellerMargin — Know Your Profit Before You Sell',
    description: 'Calculate real seller fees, profit margins, and break-even prices before listing products.',
    url: 'https://sellermargin.com',
    siteName: 'SellerMargin',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SellerMargin — Know Your Profit Before You Sell',
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
            name: 'SellerMargin',
            url: 'https://sellermargin.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://sellermargin.com/etsy-profit-calculator?price={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-brand-500 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
