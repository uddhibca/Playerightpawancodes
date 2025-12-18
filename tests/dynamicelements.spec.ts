import{test,expect,Locator} from '@playwright/test';

test("Verify the dynamic behavior using xpath",async({page})=>
{

    page.goto("https://testautomationpractice.blogspot.com/");

    for(let i=0;i<=5;i++)

        {

            let button:Locator=page.locator("//button[text()='START' or text()='STOP']")
            await button.click();
            await page.waitForTimeout(2000);

        }
})


test("Verify the dynamic behavior using css",async({page})=>
{

    page.goto("https://testautomationpractice.blogspot.com/");

    for(let i=0;i<=5;i++)

        {

            let button:Locator=page.locator('button[name="start"],button[name="stop"]');
            await button.click();
            await page.waitForTimeout(2000);

        }
})


test("Verify the dynamic behavior using pw special locators",async({page})=>
{

    page.goto("https://testautomationpractice.blogspot.com/");

    for(let i=0;i<=5;i++)

        {

            let button:Locator=page.getByRole('button',{name:/START|STOP/});
            await button.click();
            await page.waitForTimeout(2000);

        }
})