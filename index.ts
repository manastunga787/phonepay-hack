import { chromium } from "playwright";

const browser = await chromium.launch({
  headless: false, // You can run headless, but 'false' is even safer
  args: [
    "--disable-blink-features=AutomationControlled", // Removes the "Chrome is being controlled..." bar
    "--start-maximized",
    "--no-sandbox",
  ],
});

const context = await browser.newContext({
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  viewport: { width: 1470, height: 836 },
  deviceScaleFactor: 1,
  hasTouch: false,
  locale: "en-US",
  timezoneId: "Asia/Kolkata", // Matches your local time
});

const page = await context.newPage();
await page.goto("https://econnect.bpcl.in/selfservice-ext/pub/login.html");
