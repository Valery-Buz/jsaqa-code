const { Given, When, Then, Before, After, And } = require("@cucumber/cucumber");
const puppeteer = require("puppeteer");
const expect = require("chai").expect;
const { getText, click } = require("../../lib/response.js");

Before(async function () {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300,
  });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(80000);
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given(
  "go to the page test one {string}",
  { timeout: 80000 },
  async function (string) {
    return await this.page.goto(string);
  }
);
When(
  "choose date by selector {string}",
  { timeout: 80000 },
  async function (string) {
    await this.page.click(string);
  }
);
When(
  "choose time by selector {string}",
  { timeout: 80000 },
  async function (string) {
    await this.page.click(string);
  }
);
When(
  "choose chair by selector {string}",
  { timeout: 80000 },
  async function (string) {
    await this.page.click(string);
  }
);
When("confirm booking {string}", { timeout: 80000 }, async function (string) {
  await this.page.click(string);
});
When(
  "getting booking code {string}",
  { timeout: 80000 },
  async function (string) {
    await this.page.click(string);
  }
);
Then("ticket received {string}", async function (string) {
  const actual = await getText(this.page, "h2");
  expect(actual).contain(string);
});

Given("go to the page {string}", { timeout: 80000 }, async function (string) {
  return await this.page.goto(string);
});
When("click date {string}", { timeout: 80000 }, async function (string) {
  await this.page.click(string);
});
When("click time {string}", { timeout: 80000 }, async function (string) {
  await this.page.click(string);
});
When("click first chair {string}", { timeout: 80000 }, async function (string) {
  await this.page.click(string);
});
When(
  "click second chair {string}",
  { timeout: 80000 },
  async function (string) {
    await this.page.click(string);
  }
);
When("click booking {string}", { timeout: 80000 }, async function (string) {
  await this.page.click(string);
});
When(
  "click confirmation code {string}",
  { timeout: 80000 },
  async function (string) {
    await this.page.click(string);
  }
);
Then("two ticket received {string}", async function (string) {
  const actual = await getText(this.page, "h2");
  expect(actual).contain(string);
});

Given("go to {string}", async function (string) {
  return await this.page.goto(string);
});
When("choose date {string}", async function (string) {
  await this.page.click(string);
});
When("choose time {string}", async function (string) {
  await this.page.click(string);
});
When("choose chair {string}", async function (string) {
  await this.page.click(string);
});
Then("button booking disabled {string}", async function (string) {
  await this.page.waitForSelector(string);
  const result = await this.page.$eval(string, (el) =>
    el.getAttribute("disabled")
  );
  console.log(result);
  expect(result).to.equal("true");
});
