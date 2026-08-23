const { test, expect } = require('@playwright/test');
const EbayHomePage = require('../page_objects/EbayHomepage');
const EbayHomePageData = require('../test_data/EBayHomePagedata');
const EBayHomePageUI = require("../Interfaces_Pages/specific/EbayHomepageUI");

test.beforeEach(async ({ page }) => {
    await page.goto(EbayHomePageData.URL);
});

//test('Search product on eBay', async ({ page }) => {
    //const ebayHomePage = new EbayHomePage(page);
    //await ebayHomePage.SearchProduct(EbayHomePageData.SEARCHData);
    //await expect(page).toHaveTitle(/eBay/i);
    //await ebayHomePage.click(EBayHomePageUI.Electronics_ProductName);
//});

//test('Hover product on eBay', async ({ page }) => {
    //const ebayHomePage = new EbayHomePage(page);
    //await ebayHomePage.Hoverproduct(EbayHomePageData.HoverData);
    //await expect(page).toHaveTitle(/eBay/i);
    //await page.pause()
//});

//test('Select category on eBay', async ({ page }) => {
    //const ebayHomePage = new EbayHomePage(page);
    //await ebayHomePage.SelectCategory(EbayHomePageData.CategoryData1);
    //await expect(page).toHaveTitle(/eBay/i);

    //await ebayHomePage.ValidateDropdowText(EBayHomePageUI.All_Categories);

    //await page.pause() // Stop Execution    
   /// var DropDownValue = await page.locator ("#gh-cat"). textContent()

//console.log (DropDownValue)

//})

test.only('Select a new category on eBay', async ({ page }) => {
    const ebayHomePage = new EbayHomePage(page);
    await ebayHomePage.SelectCategory(EbayHomePageData.CategoryData3);
    await ebayHomePage.ClickSearchButton();
    await ebayHomePage.ValidateSearchPageTitle();
    await page.pause()
    

})

