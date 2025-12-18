import {test,expect,Locator} from '@playwright/test'

test("Verify css locators",async ({page})=>
{

    await page.goto("https://demowebshop.tricentis.com/")

    //Xpath with contains
    const products:Locator=page.locator("//h2/a[contains(@href,'computer')]");
    const countprod:number= await products.count();
    console.log("No of Computer product :"  ,countprod);
    expect(countprod).toBeGreaterThan(0);
    //console.log(await products.textContent());//strict mode violation
    console.log("First computer related product:",await products.first().textContent());
    console.log("Last computer related product:",await products.last().textContent());
    console.log("Third computer related product:",await products.nth(2).textContent());
    let productTitles:string[]= await products.allTextContents();
    console.log("All Computer titles are :",productTitles);
    for(let pt of productTitles)
    {
        console.log(pt);
    }


    //Xpath with starts with

    let buildproducts:Locator=page.locator("//h2/a[starts-with(@href,('/build'))]");
    const buildprodcount:number=await buildproducts.count();
    console.log("Number of buildproducts",buildprodcount);

    let printallbuild:string[]=await buildproducts.allTextContents();
    console.log("All names build products",printallbuild);
    for(let pab of printallbuild)
    {
        console.log(pab);
    }

    //Xpath with text()

    const reglink:Locator=page.locator("//a[text()='Register']");
    await expect(reglink).toBeVisible();

    //Xpath with last()---to identify last item in group

     const lastitem:Locator =page.locator("//div[@class='column follow-us']//li[last()]")
     expect(lastitem).toBeVisible();
     console.log(await lastitem.textContent());

      //Xpath with position()---to identify last item in group

     const positem:Locator =page.locator("//div[@class='column follow-us']//li[position()=3]")
     expect(positem).toBeVisible();
     console.log(await positem.textContent());








})