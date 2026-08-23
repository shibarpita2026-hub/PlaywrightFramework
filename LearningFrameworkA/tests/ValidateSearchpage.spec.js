const { test, expect } = require('@playwright/test');
const Searchpage = require('../page_objects/Searchpage');
const SearchpageUI = require("../Interfaces_Pages/specific/SearchpageUI");
const EbayHomePage = require('../page_objects/EbayHomepage');
const EbayHomePageData = require('../test_data/EBayHomePagedata');
const EBayHomePageUI = require("../Interfaces_Pages/specific/EbayHomepageUI");

test.beforeEach(async ({ page }) => {
    await page.goto(EbayHomePageData.URL);
});

test('Click the title on Cellphones Search Page on eBay', async ({ page }) => {
    const ebayHomePage = new EbayHomePage(page);
    const searchpage = new Searchpage(page);

    await page.pause();
    await ebayHomePage.SelectCategory(EbayHomePageData.CategoryData3);

    await ebayHomePage.ClickSearchButton();
    await searchpage.ValidateSearchPageTitle1();
    await searchpage.clickValidateSearchPageTitle1();
    await searchpage.ValidateSearchPageTitle2();
    await searchpage.clickValidateSearchPageTitle2();
    
});