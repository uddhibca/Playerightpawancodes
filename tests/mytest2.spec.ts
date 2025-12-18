import {test,expect} from '@playwright/test';

test("Verify url title",async({page})=>{

await page.goto("http://www.automationpractice.pl/index.php");
let url1:string=await page.url();
console.log("URL is :",url1 )
await expect(page).toHaveURL(/automation/);

})