import { Page } from "@playwright/test";

export default class SauceCustomerDetail {
  cfirstname = '[data-test="firstName"]';
  clastname = '[data-test="lastName"]';
  cpostcode = '[data-test="postalCode"]';
  continuebtn = '[data-test="continue"]';
  finishbtn = '[data-test="finish"]';

  constructor(public page: Page) {}

  async enterCustomerData(fname: string, lname: string, pc: string) {
    await this.page.locator(this.cfirstname).click();
    await this.page.locator(this.cfirstname).fill(fname);
    await this.page.locator(this.clastname).click();
    await this.page.locator(this.clastname).fill(lname);
    await this.page.locator(this.cpostcode).click();
    await this.page.locator(this.cpostcode).fill(pc);
    await this.page.locator(this.continuebtn).click();
    await this.page.locator(this.finishbtn).click();
  }
}
