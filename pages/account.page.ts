import { HeaderFragment } from './header.fragment';
import { Locator, Page } from '@playwright/test';

export class AccountPage {
  readonly page: Page;
  readonly header: HeaderFragment;
  readonly pageTitle: Locator;
  readonly navMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page);
    this.pageTitle = this.page.getByTestId('page-title');
    this.navMenu = this.page.getByTestId('nav-menu');
  }

  async open(): Promise<void> {
    await this.page.goto('/account');
  }

  async getTitleText(): Promise<string | null> {
    return await this.pageTitle.textContent();
  }
}
