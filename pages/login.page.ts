import { Locator, Page } from '@playwright/test';

export class LoginPage {
  page: Page;
  emailField: Locator;
  passwordField: Locator;
  submitButton: Locator;
  navSignInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailField = this.page.getByTestId('email');
    this.passwordField = this.page.getByTestId('password');
    this.submitButton = this.page.getByTestId('login-submit');
    this.navSignInButton = this.page.getByTestId('nav-sign-in');
  }

  async open(): Promise<void> {
    await this.page.goto('/auth/login');
  }

  async clickNavSignIn(): Promise<void> {
    await this.navSignInButton.click();
  }

  async performLogin(email: string, password: string): Promise<void> {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.submitButton.click();
  }
}