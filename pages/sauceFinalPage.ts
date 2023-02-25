import { Page } from "@playwright/test";

export default class SauceFinal {
  successmsg = "text=THANK YOU FOR YOUR ORDER";
  constructor(public page: Page) {}

  async isSuccess() {
    await this.page.locator(this.successmsg).scrollIntoViewIfNeeded();
    return await this.page.locator(this.successmsg).isVisible();
  }
}
