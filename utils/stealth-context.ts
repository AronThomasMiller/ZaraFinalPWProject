import { chromium, Browser, Page, BrowserContext } from "@playwright/test";

interface StealthContextResult {
  browser: Browser;
  context: BrowserContext;
  page: Page;
}

export async function getStealthContext(headless = true): Promise<StealthContextResult> {
  const browser = await chromium.launch({ headless });

  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.90 Safari/537.36",
    locale: "en-US",
    timezoneId: "Europe/Kyiv",
    viewport: { width: 1280, height: 720 },
    permissions: ["geolocation"],
  });

  const page = await context.newPage();

  return { browser, context, page };
}
