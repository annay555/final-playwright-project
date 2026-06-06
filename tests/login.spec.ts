import test, { chromium, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('Verify login as a user with a valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  //  1. Open Login page
  await page.goto('/auth/login');

  await page.locator('[data-test="nav-sign-in"]').click();

  await loginPage.performLogin('customer@practicesoftwaretesting.com', 'welcome01');
  //  2. Fill in login form
  //await page.getByTestId('email').fill('customer@practicesoftwaretesting.com'); 
  //await page.getByTestId('password').fill('welcome01');
  //await page.getByTestId('login-submit').click();

  //  3. Verify successful login
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
  await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
  await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');
});

