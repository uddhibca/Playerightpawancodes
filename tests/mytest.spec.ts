import {test,expect} from '@playwright/test';

test("Verify page title",async({page})=>{

await page.goto("http://www.automationpractice.pl/index.php");
let title1:string=await page.title();
console.log("Title is :",title1 )
await expect(page).toHaveTitle("My Shop");

})