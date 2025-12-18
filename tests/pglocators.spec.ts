
import {test,expect,Locator} from '@playwright/test';

test("Verify Playwright locators",async ({page})=>
{
//1)getByAltText-->Images
await page.goto("https://demo.nopcommerce.com/");
const logo:Locator=page.getByAltText("nopCommerce demo store");
await expect(logo).toBeVisible();

// getByText-->Non interactive,text,p,div

await expect(page.getByText("Welcome to our store")).toBeVisible();

//getByRole

await page.getByRole("link",{name:'Register'}).click();
await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();
//getByLabel  --forms with visible labels

await page.getByLabel('First name:').fill('uday');
await page.getByLabel('Last name:').fill('kumar');
await page.getByLabel('Email:').fill('uday@gmail.com');

//getByPlaceholder--input/search boxes

//await page.getByPlaceholder("Search store").fill('Apple');



})