const { expect } = require("chai");

module.exports = {
  clickElement: async function (page, selector) {
    await page.waitForSelector(selector);
    await page.click(selector);
  },

  assretNoElementValue: async function (page, selector, text) {
    await page.waitForSelector(selector);
    const result = await page.$eval(selector, (el) =>
      el.getAttribute("disabled")
    );
    //console.log(result);
    expect(result).to.equal(text);
  },
  assretElementValue: async function (page, selector, text) {
    const element = await page.waitForSelector(selector);
    const value = await element.evaluate((el) => el.textContent, element);
    expect(value).to.equal(text);
  },
};