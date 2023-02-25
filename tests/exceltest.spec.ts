import test, { Page } from "@playwright/test";
import SauceLogin from "../pages/sauceLoginpage";

import excelreader from "../utils/excelReader";

let exceldata = excelreader("./fixtures/testdata.xlsx");

test.describe("Excel test", async () => {
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

  exceldata.forEach((row:any) => {
    test(`Login with excel data for ${row.username}`, async () => {
      const login = new SauceLogin(page);
      await login.navigate();
      await login.login(row.username, row.password);
    });
  });
});
