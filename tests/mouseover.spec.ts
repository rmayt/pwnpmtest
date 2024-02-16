import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.programsbuzz.com/data-science-tutorial');
    await page.locator('#block-mainnavigation').getByRole('link', { name: 'Tutorials' }).hover();
    await page.getByRole('link', { name: 'click here to clear' }).click();
  });