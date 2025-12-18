import {test,expect,Locator} from '@playwright/test';

test("Xpath axes demo",async({page})=>
{

await page.goto("https://www.w3schools.com/html/html_tables.asp");

//self axis--select <td>elements that contains germany

const countname:Locator=page.locator("//td[text()='Germany']/self::td");
await expect(countname).toHaveText("Germany");
console.log(await countname.textContent());

//parent axis --get parent <tr> for germany cell

const parentrow:Locator =page.locator("//td[text()='Germany']/parent::tr");
await expect(parentrow).toContainText("Maria Anders");
console.log(await parentrow.textContent());

//child axes--get all the <td> children of 3rd tr in the table

const childele:Locator=page.locator("//table[@id='customers']//tr[3]/child::td");
expect(childele).toHaveCount(3);

//ancestor --get ancestor table of germany cell

const ancedata:Locator =page.locator("//td[text()='Germany']/ancestor::table");
expect(ancedata).toHaveAttribute('id','customers');

//descendents-->get all the td elements under the table

const descchild:Locator=page.locator("//table[@id='customers']/descendant::td");
await expect(descchild).toHaveCount(18);

//following and following sibling-->get the td after germany

const foolow:Locator=page.locator("//td[text()='Germany']/following::td[1]");
await expect(foolow).toHaveText("Centro comercial Moctezuma");


const foolowsib:Locator=page.locator("//td[text()='Germany']/following-sibling::td[1]");
await expect(foolowsib).toHaveCount(0);

//preceding and preceding sibling
const prelow:Locator=page.locator("//td[text()='Germany']/preceding::td[1]");
await expect(prelow).toHaveText("Maria Anders");


const preowsib:Locator=page.locator("//td[text()='Germany']/preceding-sibling::td");
await expect( preowsib).toHaveCount(2);
await expect(preowsib.nth(0)).toHaveText("Alfreds Futterkiste");
await expect(preowsib.nth(1)).toHaveText("Maria Anders");



})