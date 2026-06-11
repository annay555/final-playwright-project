import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('Verify user can view product details', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();
  const productDetailsPage = await homePage.openProduct('Combination Pliers');

  await expect(page).toHaveURL(/\/product\//);
  await expect(productDetailsPage.productName).toHaveText('Combination Pliers');
  await expect(productDetailsPage.productPrice).toHaveText('$14.15');
  await expect(productDetailsPage.addToCartButton).toBeVisible();
  await expect(productDetailsPage.addToFavoritesButton).toBeVisible();
});