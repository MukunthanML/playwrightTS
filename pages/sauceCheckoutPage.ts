import { Page } from "@playwright/test";

export default class SauceCheckout {
  checkoutbutton = '[data-test="checkout"]';
  constructor(public page: Page) {}

  async checkout() {
    await this.page.locator(this.checkoutbutton).click();
  }
}
