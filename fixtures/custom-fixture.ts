// extend the existing test method
// return our require formPage
// page
//export

import { test as base } from "@playwright/test";
import Form from "../pages/formpage";

type UIPages = {
  formPage: Form;
};

export const test = base.extend<UIPages>({
  formPage: async ({ page }, use) => {
    const form = new Form(page);
    await use(form);
  },
});
