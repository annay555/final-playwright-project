import { test, expect } from '@playwright/test';

test('Verify login as a user with a valid credentials', async ({ page }) => {
  //  1. Open Login page
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  //  2. Fill in login form
  await page.getByTestId('email').fill('customer@practicesoftwaretesting.com'); 
  await page.getByTestId('password').fill('welcome01');
  await page.getByTestId('login-submit').click();

  //  3. Verify successful login
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
  await expect(page.getByTestId('page-title')).toHaveText('My account');
  await expect(page.getByTestId('nav-menu')).toHaveText('Jane Doe');
});

