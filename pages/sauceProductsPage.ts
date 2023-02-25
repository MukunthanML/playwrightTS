import { Page } from "@playwright/test";

export default class SauceProducts {
  backbag = '[data-test="add-to-cart-sauce-labs-backpack"]';
  bikelight = '[data-test="add-to-cart-sauce-labs-bike-light"]';
  cartlogo = "#shopping_cart_container a";
  checkoutbutton = '[data-test="checkout"]';

  constructor(public page: Page) {}

  async addBackbag() {
    await this.page.locator(this.backbag).click();
  }
  async addBikelight() {
    await this.page.locator(this.bikelight).click();
  }
  async gotokart() {
    await this.page.locator(this.cartlogo).click();
  }
}
