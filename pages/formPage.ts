import { Page } from "@playwright/test";

export default class FormPage {
  formurl = "https://demoqa.com/automation-practice-form";
  firstNameInputbox = "#firstName";
  lastNameInputbox = "#lastName";
  userMailInputbox = "#userEmail";
  genderMaleCheckbox =
    "#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label";
  genderMalePostchecked = "#gender-radio-1";
  genderFemalePostChecked = "#gender-radio-2";
  genderotherPostchecked = "#gender-radio-13";
  genderFemaleCheckbox = "#genterwrapper > .col-md-9> :nth-child(2)";
  genderotherCheckbox = "#genterWrapper > .col-md-9> :nth-child(3)";
  mobileNumberInputbox = "#userNumber";
  dob = "#dateOfBirthInput";
  dobMonth = ".react-datepicker__month-select";
  dobYear = ".react-datepicker__year-select";
  dobDate = ".react-datepicker__day--0";
  dobDisplay = "#dateofBirthInput";
  subjectInputbox = ".subjects-auto-complete__value-container";

  hobbySportsCheckbox = "Sports";
  hobbyReadingCheckbox = "Reading";
  hobbyMusicCheckbox = "Music";
  hobbySportsChecked = "#hobbies-checkbox-1";
  hobbyReadingChecked = "#hobbies-checkbox-2";
  hobbyMusicChecked = "#hobbies-checkbox-3";
  currentAddressTextarea = "#currentAddress";
  stateDropdown = "#react-select-3-input";
  stateInputbox = "#state";
  cityDropdown =
    "#city> .css-yk16xz-control > .css-1wyeon6> .css-tlfecz-indicatorContainer > .css-19bqhar";
  cityDropdownstatus = "#react-select-4-input";
  cityInputbox = "#city";
  uploadLabel = "Select picture";
  uploadElement = 'input[type="file"]';
  uploadButton = "#uploadPicture";
  submitButton = "#submit";
  successMessage = "#example-modal-sizes-title-lg";
  successMessageCloseBtn = "#closeLargeModal";
  postSubmitStudentName = '//td[text()="Student Name"]/following::td[1]';
  postSubmitstudentEmail = '//td[text()="Student Email"]/following::td[1]';
  postSubmitGender = '//td[text()="Gender"]/following::td[1]';
  postSubmitMobile = '//td[text()="Mobile"]/following::td [1]';
  postSubmitDOB = '//td[text()="Date of Birth"]/following:: td[1]';
  postSubmitSubjects = '//td[text()="Subjects"]/following::td[1]';
  postSubmitHobbies = '//td[text()="Hobbies"]/following::td[1]';
  postSubmitPicture = '//td[text()="Picture"]/following::td[1]';
  postSubmitAddress = '//td[text()="Address"]/following::td[1]';
  postSubmitStateCity = '//td[text()="State and City"]/following::td[1]';

  constructor(public page: Page) {}
  async navigate() {
    await this.page.goto(this.formurl);
  }

  async enterstudentName(firstName: string, lastName: string) {
    await this.page.locator(this.firstNameInputbox).fill(firstName);
    await this.page.locator(this.lastNameInputbox).fill(lastName);
  }
  async enterstudentMailId(mailId: string) {
    await this.page.locator(this.userMailInputbox).type(mailId);
  }

  async selectGender(gender: string) {
    if (gender.toLowerCase() === "male") {
      await this.page.locator(this.genderMaleCheckbox).click();
    } else if (gender.toLowerCase() === "female") {
      await this.page.locator(this.genderFemaleCheckbox).click();
    } else {
      await this.page.locator(this.genderotherCheckbox).click();
    }
  }

  async enterMobileNumber(mobileNumber: string) {
    await this.page.locator(this.mobileNumberInputbox).type(mobileNumber);
  }

  async enterDateofBirth(month: string, year: string, date: string) {
    // month starts from 0. Ex Jan 10 and Dec 11
    //data should be 2 digit always Ex. 10, 08, 01, 31
    await this.page.locator(this.dob).click();
    await this.page.locator(this.dobMonth).selectOption(month);
    await this.page.locator(this.dobYear).selectOption(year);
    await this.page.locator(this.dobDate + date).click();
  }
  async enterSubject(subject: string) {
    await this.page.locator(this.subjectInputbox).scrollIntoViewIfNeeded();
    await this.page.locator(this.subjectInputbox).click();
    await this.page.locator(this.subjectInputbox).type(subject);
    await this.page.locator(this.subjectInputbox).press("ArrowDown");
    await this.page.locator(this.subjectInputbox).press("Enter");
  }

  async enterHobby(hobby: string) {
    if (hobby.toLowerCase() === "sports")
      await this.page.getByText(this.hobbySportsCheckbox).click();

    if (hobby.toLowerCase() === "reading")
      await this.page.getByText(this.hobbyReadingCheckbox).click();

    if (hobby.toLowerCase() === "music")
      await this.page.getByText(this.hobbyMusicCheckbox).click();
  }
  async enterCurrentAddress(caddress: string) {
    await this.page.locator(this.currentAddressTextarea).type(caddress);
  }

  async selectState(state: string) {
    await this.page.locator(this.stateDropdown).click({ force: true });
    await this.page.locator(this.stateInputbox).click({ force: true });
    await this.page.locator(this.stateInputbox).type(state);
    await this.page.locator(this.stateInputbox).press("Enter");
  }
  async selectCity(city: string) {
    await this.page.locator(this.cityInputbox).scrollIntoViewIfNeeded();
    await this.page.locator(this.cityInputbox).click({ force: true });
    await this.page.locator(this.stateInputbox).type(city);
    await this.page.locator(this.stateInputbox).press("Enter");
  }

  async uploadFile(uploadFilePath: string) {
    await this.page.getByLabel(this.uploadLabel).setInputFiles(uploadFilePath);
  }

  async submit() {
    await this.page.locator(this.submitButton).click({ force: true });
  }
  async closePopup() {
    await this.page.locator(this.successMessageCloseBtn).click({ force: true });
  }
}
