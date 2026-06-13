const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto('http://localhost:3000/en', { waitUntil: 'networkidle', timeout: 15000 });
  await page.screenshot({ path: 'hero-new.png', fullPage: false });
  console.log('Done');
  await browser.close();
})();
