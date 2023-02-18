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
    await clickElement(page, ".page-nav > a:nth-child(4) > span"); 
    await clickElement(page, ".movie div:nth-child(2) > ul > li"); 
    await clickElement(page, ".buying-scheme__wrapper > div:nth-child(3) > span:nth-child(5)");
    await clickElement(page, "button.acceptin-button");
    await clickElement(page, "button.acceptin-button");
    await assretElementValue(
      page,
      "h2.ticket__check-title",
      "Электронный билет"
    );
  });

  test("booking another time two tickets", async () => {
    await clickElement(page, "nav>a:nth-child(4)"); 
    await clickElement(page, "section > div:nth-child(2) > ul > li");
    await clickElement(page, ".buying-scheme__wrapper > div:nth-child(2) > span:nth-child(1)");
    await clickElement(page, ".buying-scheme__wrapper > div:nth-child(2) > span:nth-child(2)");
    await clickElement(page, "button.acceptin-button");
    await clickElement(page, "button.acceptin-button");
    await assretElementValue(page, "h2.ticket__check-title","Электронный билет");
  });

  test("booking occupied place", async () => {
    await clickElement(page, ".page-nav > a:nth-child(2) > span");
    await clickElement(page, "section > div:nth-child(2) > ul > li");
    await clickElement(page, ".buying-scheme__wrapper > div:nth-child(1)"
    );
    await assretNoElementValue(page, "button.acceptin-button", "true");
  });
});