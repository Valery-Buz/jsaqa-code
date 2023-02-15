const { Given, When, Then, Before, After, And } = require("@cucumber/cucumber");
const puppeteer = require("puppeteer");
const expect = require("chai").expect;
const { getText, click } = require("../../lib/util.js");

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
Given("I go to the page a ticket booking site {string}", { timeout: 80000 }, async function (string) {
  return await this.page.goto(string);
});
When("I choose the date of the movie", { timeout: 80000 }, async function () {
  return await clickElement(this.page, ".page-nav > a:nth-child(4) > span");
});
When("I choose on the movie time this day", { timeout: 80000 }, async function () {
  return await clickElement(this.page, ".movie div:nth-child(2) > ul > li");
});
When("I choose on the chair at {int} row and {int} seat", { timeout: 80000 }, async function (int1, int2) {
  await clickElement(this.page, "div:nth-child(${row}) > span:nth-child(${chair})");
});
When("I press on the booking button", { timeout: 80000 }, async function () {
  return await clickElement(this.page, "button.acceptin-button");
});
When("I press the booking code", { timeout: 80000 }, async function () {
  return await clickElement(this.page, "button.acceptin-button");
});
Then("I should see a ticket received", async function () {
  const actual = await getText(this.page, "h2", "Электронный билет");
  expect(actual).contain(string);
});

Given("I go to the page booking site {string}", { timeout: 80000 }, async function (string) {
  return await this.page.goto(string);
});
When("I click the date of the movie", { timeout: 80000 }, async function () {
  return await clickElement(this.page, ".page-nav > a:nth-child(3) > span");
});
When("I click on the movie time", { timeout: 80000 }, async function () {
  return await clickElement(this.page, ".movie div:nth-child(2) > ul > li");
});
When("I click on the first chair at {int} row and {int} seat", { timeout: 80000 }, async function (int1, int2) {
  await clickElement(this.page, "div:nth-child(${row}) > span:nth-child(${chair})");
});
When("I click on the second chair at {int} row and {int} seat", { timeout: 80000 }, async function (int1, int2) {
  await clickElement(this.page, "div:nth-child(${row}) > span:nth-child(${chair})");
});
When("I click on the booking button", { timeout: 80000 }, async function () {
  return await clickElement(this.page, "button.acceptin-button");
});
When("I click on the confirmation code", { timeout: 80000 }, async function () {
  return await clickElement(this.page, "button.acceptin-button");
});
Then("I should two ticket received", async function () {
  const actual = await getText(this.page, "h2.ticket__check-title", "Электронный билет");
  expect(actual).contain(string);
});

Given("I go to the booking site {string}", { timeout: 80000 }, async function (string) {
  return await this.page.goto(string);
});
When("I choose movies date", async function () {
  return await clickElement(this.page, ".page-nav > a:nth-child(2) > span");
});
When("I choose movies time", async function () {
  return await clickElement(this.page, ".movie div:nth-child(2) > ul > li");
});
When("I choose on the taken chair at {int} row", async function (int1) {
  await clickElement(this.page, ".buying-scheme__wrapper > div:nth-child(1)");
});
Then("I should see button booking disabled", async function () {
  await this.page.waitForSelector(string);
  const result = await this.page.$eval(string, (el) =>
    el.getAttribute(".acceptin-button")
  );
  console.log(result);
  expect(result).to.equal("true");
});
