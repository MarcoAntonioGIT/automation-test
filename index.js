import puppeteer from "puppeteer-extra";

import StealthPlugin from 'puppeteer-extra-plugin-stealth';
puppeteer.use(StealthPlugin());


async function run(){
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({width: 1080, height: 1024});
  await page.goto('https://fill.dev/form/credit-card-simple');

  let selector = "input[id='cc-name']";
  await page.waitForSelector(selector);
  await page.type(selector, "Marco Antônio")

  selector = "select[id='cc-type']";
  await page.select(selector, "mc")

  selector = "input[id='cc-number']";
  await page.type(selector, "1234 5412 3123 4566");

  selector = "input[id='cc-csc']";
  await page.type(selector, "123");

  selector = "select[id='cc-exp-month']";
  await page.select(selector, "10")

  selector = "select[id='cc-exp-year']";
  await page.select(selector, "2026")

  selector = "button[type='submit']"
  await page.click(selector)
}
run();