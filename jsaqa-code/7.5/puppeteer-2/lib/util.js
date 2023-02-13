module.exports = {
  getText: async function (page, selector) {
    await page.waitForSelector(selector);
    return await page.$eval(selector, (el) => el.textContent);
  },

  click: async function (page) {
    await page.waitForSelector();
    return page.click();
  },
};