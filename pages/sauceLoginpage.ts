import { Page } from "@playwright/test";

export default class SauceLogin {
  loginUrl = "https://www.saucedemo.com/";
  usernameField = '[data-test="username"]';
  passwordField = '[data-test="password"]';
  loginbutton = '[data-test="login-button"]';

  constructor(public page: Page) {}

  async navigate() {
    await this.page.goto(this.loginUrl);
  }

  async login(username: string, password: string) {
    await this.page.locator(this.usernameField).fill(username);
    await this.page.locator(this.passwordField).fill(password);
    await this.page.locator(this.loginbutton).click();
  }
}
