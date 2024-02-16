import { expect, Locator, Page } from '@playwright/test';


export class HomePageRahul {
    readonly page: Page;
    readonly widgetsLink: Locator;
    readonly tabLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.widgetsLink = page.locator('div:nth-child(4) > div > .avatar > svg');
  }


  async goto() {
    await this.page.goto('https://rahulshettyacademy.com/client/');
  }

  async getExpectedMessage(isGreaterThan18) {
    let message;
    if (isGreaterThan18)
    {
      message= await this.page.locator("section h1.headcolor").textContent();
    }
    else
    {
      message= await this.page.locator('form > div:nth-child(5) > div:nth-child(3) > div').textContent();

    }
    return message;
  }

  async SubmitFormulary(user){
    
      await this.page.getByRole('link', { name: 'Register' }).click();
      await this.page.getByPlaceholder('First Name').fill(user.firstName);
      await this.page.getByPlaceholder('Last Name').fill(user.lastName);
      await this.page.getByPlaceholder('email@example.com').fill(user.email);
      await this.page.getByPlaceholder('enter your number').fill(user.phone);
      await this.page.getByRole('combobox').selectOption(user.occupation);
      await this.page.locator(`label > input[value="${user.gender}"]`).check();
      await this.page.getByPlaceholder('Passsword', { exact: true }).fill(user.password);
      await this.page.getByPlaceholder('Confirm Passsword').fill(user.password);
      if (user.eyolder)
        await this.page.getByRole('checkbox').check();
      await this.page.getByRole('button', { name: 'Register' }).click();
      }
}