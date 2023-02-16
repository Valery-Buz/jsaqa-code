const { Given, When, Then, Before, After, And } = require("@cucumber/cucumber");
const puppeteer = require("puppeteer");
const { clickElement } = require("../../lib/commands.js");
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
Given("I go to the {string} page a ticket booking site", { timeout: 80000 }, async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/${string}/index.php`);
});
When("I choose the {int} of the current month", { timeout: 80000 }, async function (int) {
  return await clickElement(this.page, `.page-nav > a:nth-child(${int}) > span`);
});
When("I choose a session at {int} am", { timeout: 80000 }, async function (int) {
  return await clickElement(this.page, `.movie div:nth-child(${int}) > ul > li`);
});
When("I choose on the chair at {int} row and {int} seat", { timeout: 80000 }, async function (int1, int2) {
  await clickElement(this.page, `div:nth-child(${row}) > span:nth-child(${chair})`);
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

Given("I go to the {string} page booking site", { timeout: 80000 }, async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/${string}/index.php`);
});
When("I click the {int} of the current month", { timeout: 80000 }, async function (int) {
  return await clickElement(this.page, `.page-nav > a:nth-child(${int}) > span`);
});
When("I click a new session at {int} am", { timeout: 80000 }, async function (int) {
  return await clickElement(this.page, `.movie div:nth-child(${int}) > ul > li`);
});
When("I click on the first chair at {int} row and {int} seat", { timeout: 80000 }, async function (int1, int2) {
  await clickElement(this.page, `div:nth-child(${row}) > span:nth-child(${chair})`);
});
When("I click on the second chair at {int} row and {int} seat", { timeout: 80000 }, async function (int1, int2) {
  await clickElement(this.page, 'div:nth-child(${row}) > span:nth-child(${chair})');
});
When("I click on the booking button", { timeout: 80000 }, async function () {
  return await clickElement(this.page, "button.acceptin-button");
});
When("I click on the confirmation code", { timeout: 80000 }, async function () {
  return await clickElement(this.page, "button.acceptin-button");
});
Then("I should two ticket received", async function () {
  const actual = await getText(this.page, `h2.ticket__check-title`, "Электронный билет");
  expect(actual).contain(string);
});

Given("I go to the {string} booking site", { timeout: 80000 }, async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/${string}/index.php`);
});
When("I choose the date of the movie on the {int} of the current month", async function (int) {
  return await clickElement(this.page, `.page-nav > a:nth-child(${int}) > span`);
});
When("I choose movies time at {int} am", async function (int) {
  return await clickElement(this.page, `.movie div:nth-child(2) > ul > li`);
});
When("I choose on the taken chair at {int} row", async function (int1) {
  await clickElement(this.page, `.buying-scheme__wrapper > div:nth-child(1)`);
});
Then("I should see button booking disabled", async function () {
  await this.page.waitForSelector(string);
  const result = await this.page.$eval(string, (el) =>
    el.getAttribute(".acceptin-button")
  );
  console.log(result);
  expect(result).to.equal("true");
});
