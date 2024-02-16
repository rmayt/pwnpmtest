import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { TabsPage } from '../pages/tabs-page';
import { WidgetsPage } from '../pages/widgets-page';

test('Validate more tab is disabled', async ({ page }) => {
  const homePage = new HomePage(page);
  const widgetsPage = new WidgetsPage(page);
  const tabsPage = new TabsPage(page);

  await test.step('Given I navigate to Widgets page', async() =>{
    await homePage.goto();
    await homePage.gotoWidgetsSection();
  });
  await test.step('When I select Tabs sub-section', async() =>{
    await widgetsPage.selectTabsSubsection();
  });
  await test.step('Then I validate that More tab is disabled', async() =>{    
    expect(await tabsPage.isMoreTabDisabled()).toBeTruthy();
  });
});
