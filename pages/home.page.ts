import { HeaderFragment } from './header.fragment';
import { Page, Locator } from '@playwright/test';
import { ProductDetailsPage } from './product-details.page';

export class HomePage {
  readonly page: Page;
  readonly header: HeaderFragment;
  readonly productNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page);
    this.productNames = this.page.getByTestId('product-name');
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  productByName(productName: string): Locator {
    return this.productNames.filter({ hasText: productName }).first();
  }

  async openProduct(productName: string): Promise<ProductDetailsPage> {
    await this.productByName(productName).click();
    return new ProductDetailsPage(this.page);
  }
}
