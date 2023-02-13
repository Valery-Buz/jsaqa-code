const {
  clickElement,
  assretNoElementValue,
  assretElementValue,
} = require("./lib/commands.js");
let page;

describe("test", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await page.setDefaultNavigationTimeout(0);
  });
  afterEach(() => {
    page.close();
  });
  test("one ticket booking today", async () => {
    await clickElement(page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a"); 
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(4)"); 
    await clickElement(page, ".buying-scheme__wrapper > div:nth-child(1) > span:nth-child(1)");
    await clickElement(page, "button.acceptin-button");
    await clickElement(page, "button.acceptin-button");
    await assretElementValue(
      page,
      "h2.ticket__check-title",
      "Электронный билет"
    );
  });

  test("booking another time two tickets", async () => {
    await clickElement(page, "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li > a"); 
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(1)"); 
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(2)");
    await clickElement(page, "button.acceptin-button");
    await clickElement(page, "button.acceptin-button");
    await assretElementValue(page, "h2.ticket__check-title","Электронный билет");
  });

  test("booking occupied place", async () => {
    await clickElement(page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(5)");
    await assretNoElementValue(page, "button.acceptin-button", "true");
  });
});