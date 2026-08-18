/**
 * Google Search Console Indexing API Script for Sellrivo.site
 * Automatically notifies Google to crawl all sitemap URLs.
 * 
 * Usage:
 * 1. Place your Google Service Account key file at `service-account.json` in the root folder.
 * 2. Ensure the Service Account email is added as an Owner in Google Search Console for `https://www.sellrivo.site`.
 * 3. Run: `node scripts/google-indexing-api.js`
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.sellrivo.site';
const KEY_FILE = path.join(__dirname, '..', 'service-account.json');

const URLS_TO_INDEX = [
  '/',
  '/etsy-profit-calculator',
  '/etsy-fee-calculator',
  '/etsy-digital-downloads-calculator',
  '/etsy-fee-calculator-uk',
  '/etsy-fee-calculator-canada',
  '/etsy-fee-calculator-australia',
  '/printify-profit-calculator',
  '/gelato-profit-calculator',
  '/amazon-fba-calculator',
  '/pod-profit-calculator',
  '/profit-margin-calculator',
  '/break-even-calculator',
  '/compare/etsy-vs-amazon-fba',
  '/guides/how-to-calculate-etsy-profit',
  '/guides/etsy-fees-explained-2026',
  '/guides/etsy-vs-amazon-fba-fee-comparison',
  '/guides/how-to-price-print-on-demand-tshirts',
  '/guides/margin-vs-markup-formula',
].map((path) => `${SITE_URL}${path}`);

async function notifyGoogleIndexing() {
  if (!fs.existsSync(KEY_FILE)) {
    console.log('\n⚠️  Service Account key missing: `service-account.json` was not found.');
    console.log('To activate automatic Google Indexing:');
    console.log('1. Create a Service Account in Google Cloud Console with Indexing API access.');
    console.log('2. Download the JSON key file to `service-account.json` in the root directory.');
    console.log('3. Add your Service Account email as Owner in Google Search Console.\n');
    console.log('URLs queued for submission:');
    URLS_TO_INDEX.forEach((u) => console.log(` - ${u}`));
    return;
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const authClient = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  console.log(`🚀 Submitting ${URLS_TO_INDEX.length} URLs to Google Search Console Indexing API...`);

  for (const url of URLS_TO_INDEX) {
    try {
      const res = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`✅ Indexing request sent for: ${url} (Status: ${res.status})`);
    } catch (err) {
      console.error(`❌ Failed to submit ${url}:`, err.message);
    }
  }

  console.log('\n🎉 Finished submitting site URLs to Google Indexing API!');
}

notifyGoogleIndexing();
