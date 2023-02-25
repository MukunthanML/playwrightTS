import { test, expect } from "@playwright/test";

import student from "../fixtures/Student.json";
import FormPage from "../pages/formpage";

test.use({ viewport: { width: 550, height: 750 } });
test.use(student);

test("Form filling test", async ({ page }, testInfo) => {
  const form = new FormPage(page);

  await form.navigate();
  await form.enterstudentName(student.firstName, student.lastName);
  await form.enterstudentMailId(student.mail);
  await form.selectGender(student.gender);
  await form.enterMobileNumber(student.mobile);
  await form.enterDateofBirth(
    student.birthMonth,
    student.birthYear,
    student.birthDate
  );
  await form.enterSubject(student.subject[0]);
  await form.selectState(student.state);
  await form.selectCity(student.city);
  await form.enterHobby(student.hobby[0]);
  await form.enterCurrentAddress(student.address);
  await form.uploadFile(student.filePath);

  testInfo.attach("Sample screenshot", {
    body: await page.screenshot(),
    contentType: "image/png",
  });

  await form.submit();

  await expect(page.locator(form.postSubmitStudentName)).toHaveText(
    student.firstName + " " + student.lastName
  );
  await expect(page.locator(form.postSubmitstudentEmail)).toHaveText(
    student.mail
  );
  await expect(page.locator(form.postSubmitGender)).toHaveText(student.gender);
  await expect(page.locator(form.postSubmitMobile)).toHaveText(student.mobile);
  await expect(page.locator(form.postSubmitDOB)).toHaveText(
    student.birthDate +
      " " +
      student.birthMonthinWords +
      "," +
      student.birthYear
  );
  await expect(page.locator(form.postSubmitHobbies)).toHaveText(
    student.hobby[0]
  );
  await expect(page.locator(form.postSubmitSubjects)).toHaveText(
    student.subject[0]
  );
  await expect(page.locator(form.postSubmitAddress)).toHaveText(
    student.address
  );
  await expect(page.locator(form.postSubmitStateCity)).toHaveText(
    student.state + " " + student.city
  );
  await expect(page.locator(form.postSubmitPicture)).toHaveText(
    student.fileNameDisplay
  );
});
