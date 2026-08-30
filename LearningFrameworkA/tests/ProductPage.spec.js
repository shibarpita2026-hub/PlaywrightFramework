const { test, expect } = require('@playwright/test');
const ProductpageUI = require("../Interfaces_Pages/specific/ProductpageUI");
const Productpage = require('../page_objects/Productpage');
const Searchpage = require('../page_objects/Searchpage');
const SearchpageUI = require("../Interfaces_Pages/specific/SearchpageUI");
const EbayHomePage = require('../page_objects/EbayHomepage');
const EbayHomePageData = require('../test_data/EBayHomePagedata');
const EBayHomePageUI = require("../Interfaces_Pages/specific/EbayHomepageUI");

//test.beforeEach(async ({ page }) => {
    //for (let attempt = 1; attempt <= 3; attempt++) {
        //await page.goto(EbayHomePageData.URL, { waitUntil: 'domcontentloaded' });

        //if (await page.locator(EBayHomePageUI.All_Categories).count() > 0) {
            //return;
       // }
    //}

    //throw new Error('eBay homepage did not load the category dropdown');
//});

test('Click the title on Cellphones Product Page on eBay', async ({ page }) => {
    const ebayHomePage = new EbayHomePage(page);
    const searchpage = new Searchpage(page);
    const productpage = new Productpage(page);

    await page.goto(EbayHomePageData.URL);
    await ebayHomePage.SelectCategory(EbayHomePageData.CategoryData3);

    await ebayHomePage.ClickSearchButton();
    await searchpage.ValidateSearchPageTitle1();
    await searchpage.clickValidateSearchPageTitle1();
    await searchpage.ValidateSearchPageTitle2();
    await searchpage.clickValidateSearchPageTitle2();
    await searchpage.ValidateSearchPageTitle3();
    await searchpage.clickValidateSearchPageTitle3();
   
    await productpage.ValidateProductPageTitle();
    await productpage.clickValidateProductPageTitle()
    await productpage.ValidateProductBuy();
    await productpage.clickProductBuy();
    await page.pause();

});