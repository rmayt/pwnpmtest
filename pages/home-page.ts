import { expect, Locator, Page } from '@playwright/test';


export class HomePage {
    readonly page: Page;
    readonly widgetsLink: Locator;
    readonly tabLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.widgetsLink = page.locator('div:nth-child(4) > div > .avatar > svg');
  }


  async goto() {
    await this.page.goto('https://demoqa.com/');
    await this.page.reload();
  }

  async gotoWidgetsSection() {
    await this.widgetsLink.click();
    await expect(this.page).toHaveURL('https://demoqa.com/widgets');
  }
}