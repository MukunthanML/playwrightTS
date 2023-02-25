//run with salt===> SECRET_KEY="3uku7" npx playwright test  ./tests/sauceE2ETest.spec.ts

import test, { expect, Page } from "@playwright/test";

import SauceCheckout from "../pages/sauceCheckoutPage";
import SauceCustomerDetail from "../pages/sauceCustomerDetailPage";
import SauceFinal from "../pages/sauceFinalPage";
import SauceLogin from "../pages/sauceLoginpage";
import SauceProducts from "../pages/sauceProductsPage";

import decryptor from "../utils/decryptor";
import credentials from "../fixtures/credentials.json";

test.describe.configure({ mode: "serial" });

test.describe("test", async () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  // test.afterAll(async () => {
  //   await page.close();
  // });

  test("Login", async () => {
    const login = new SauceLogin(page);
    await login.navigate();
    await login.login(
      decryptor(credentials.username),
      decryptor(credentials.password)
    );
  });

  test("Add Products", async () => {
    const products = new SauceProducts(page);
    await products.addBackbag();
    await products.addBikelight();
    await products.gotokart();
  });

  test("Checkout items", async () => {
    const checkout = new SauceCheckout(page);
    await checkout.checkout();
  });
  test("Enter Customer info", async () => {
    const customerInfo = new SauceCustomerDetail(page);
    await customerInfo.enterCustomerData(
      "Mukunthan",
      "Ragavan",
      "345345345335"
    );
  });

  test("Success Page", async () => {
    const finalsuccess = new SauceFinal(page);
    const isMessageShown = await finalsuccess.isSuccess();
    expect(isMessageShown).toBe(true);
  });
});
