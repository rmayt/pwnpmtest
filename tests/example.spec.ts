import { test, expect } from '@playwright/test';


test.describe("Navigation validation", () => {
  test('has title', async ({ page },testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'AUTO-3' });
    testInfo.annotations.push({ type: 'test_summary', description: 'has title' });

    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page},testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'AUTO-5' });
    testInfo.annotations.push({ type: 'test_summary', description: 'get started link' });

    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intjro/);

    //const path = testInfo.outputPath('tmp_screenshot.png');
    //testInfo.attachments.push({ name: 'failscreenshot.png', path, contentType: 'image/png' });
  })
});
