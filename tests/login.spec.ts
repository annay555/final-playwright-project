import test, { expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { AccountPage } from '../pages/account.page';

test('Verify login as a user with a valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  await loginPage.open();
  await loginPage.clickNavSignIn();

  await loginPage.performLogin('customer@practicesoftwaretesting.com', 'welcome01');

  await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
  await expect(accountPage.pageTitle).toContainText('My account');
  await expect(accountPage.navMenu).toContainText('Jane Doe');
});

