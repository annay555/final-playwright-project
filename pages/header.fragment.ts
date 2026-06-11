import { Locator, Page } from '@playwright/test';

export class HeaderFragment {
  readonly page: Page;
  readonly root: Locator;
  readonly logoLink: Locator;
  readonly navigation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.root = page.locator('header');
    this.logoLink = this.root.locator('a').first();
    this.navigation = this.root.locator('nav');
  }

  async goHome(): Promise<void> {
    await this.logoLink.click();
  }

  async isVisible(): Promise<boolean> {
    return await this.root.isVisible();
  }
}
