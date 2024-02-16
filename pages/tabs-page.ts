import { expect, Locator, Page } from '@playwright/test';

export class TabsPage {
  readonly page: Page;
  readonly whatTab: Locator;
  readonly originTab: Locator;
  readonly moreTab: Locator;


  constructor(page: Page) {
    this.page = page;
    this.whatTab = page.locator('a#demo-tab-what');
    this.originTab = page.locator('a[role="tab"]:has-text("Origin")');
    this.moreTab = page.locator('a#demo-tab-more');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/tabs');
  }

  async navigateToOriginTab() {
    await this.originTab.click();
    await expect(this.page).toHaveURL('https://demoqa.com/tabs');
  }
  async navigateToWhatTab() {
    await this.whatTab.click();
    await expect(this.page).toHaveURL('https://demoqa.com/tabs');
  }
  async isMoreTabDisabled() {

    var text = await this.moreTab.getAttribute('class');
    return text?.includes('disabled');
  }
}