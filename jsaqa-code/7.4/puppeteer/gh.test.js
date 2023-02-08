let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
}, 6000);

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  }, 10000);
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 10000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 20000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 25000);
});

describe("Github start page tests", () => {

  beforeEach(async () => {
    await page.goto("https://github.com/");
  }, 15000);

  test("Email address input message", async () => {
    const button = "body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.application-main > main > div:nth-child(1) > div.px-3.home-campaign-hero > div > div > div.col-11.text-left.pt-12.mt-12.pl-2.pl-sm-0 > div.d-flex.flex-column.flex-md-row > form > div > button";
    await page.click(button);
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("Join GitHub · GitHub");
  }, 15000);

  test("Start a free enterprise trial", async () => {
    const button = "body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.application-main > main > div:nth-child(1) > div.px-3.home-campaign-hero > div > div > div.col-11.text-left.pt-12.mt-12.pl-2.pl-sm-0 > div.d-flex.flex-column.flex-md-row > a";
    await page.click(button);
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Let’s build from here · GitHub");

  }, 15000);

  test("Description of github tasks", async () => {
    const atrtribute = "body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.application-main > main > div:nth-child(1) > div.px-3.home-campaign-hero > div > div > div.col-11.text-left.pt-12.mt-12.pl-2.pl-sm-0 > p";
    const actual = await page.$eval(atrtribute, link => link.textContent);
    expect(actual).toContain(`Harnessed for productivity. Designed for collaboration.`);
  }, 20000);
  
});