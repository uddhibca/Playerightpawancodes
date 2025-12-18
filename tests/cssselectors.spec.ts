import{test,expect} from '@playwright/test';

test("Verify CSS Selectors",async({page})=>
{

await page.goto("https://demowebshop.tricentis.com/");
await expect(page.locator("input#small-searchterms")).toBeVisible();
await page.locator("input#small-searchterms").fill("T-shirts");
await expect(page.locator("input#small-searchterms")).toHaveValue("T-shirts");

})