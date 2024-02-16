import { expect, Locator, Page } from '@playwright/test';

export class WidgetsPage {
  readonly page: Page;
  readonly widgetsSection: Locator;
  readonly tabsSubsection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tabsSubsection = page.locator('li:has-text("Tabs")');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/');
  }

  async selectTabsSubsection() {
    await this.tabsSubsection.click();
    await this.page.waitForLoadState();
    await expect(this.page).toHaveURL('https://demoqa.com/tabs');
  }
}