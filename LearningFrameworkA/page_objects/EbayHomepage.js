const BasePage = require('../commons/BasePage');
const EBayHomepageUI = require('../Interfaces_Pages/specific/EbayHomepageUI');
const EBayHomepagedata = require('../test_data/EBayHomePagedata');




class EbayHomepage extends BasePage {
    constructor(page) {
        super(page);
    }

async SearchProduct(ProductName) {
       await this.fill(EBayHomepageUI.SEARCH_Field, ProductName);
       await this.click(EBayHomepageUI.SEARCH_Button);
}
    

   async Hoverproduct(ProductName) {
       await this.HoverProduct(EBayHomepageUI.Hover_Text );

       // Click the specific Electronics product link after hover
       await this.click(EBayHomepageUI.Electronics_ProductName);
    
    } 
async SelectCategory(CategoryName) {
    await this.SelectDropdown(EBayHomepageUI.All_Categories, CategoryName);
}

async ClickSearchButton() {
    await this.click(EBayHomepageUI.SEARCH_Button);

}
async ValidateSearchPageTitle(ExpectedTitle) {
    const ActualTitle = await this.getText(EBayHomepageUI.Music_SearchPagetitle);
    //await expect(ActualTitle).toBe(ExpectedTitle);
}
async ValidateSearchPageTitle(ExpectedTitle) {
    const ActualTitle = await this.getText(EBayHomepageUI.Cellphones_SearchPagetitle);
    //await expect(ActualTitle).toBe(ExpectedTitle);
}

async ValidateDropdowText(locator) {
    const ActualValue = await this.getTextDropDown(locator);
    //await expect(ActualValue).toBe(ExpectedValue);
    console.log(ActualValue);
}
 
async ValidateSearchPageTitle1(ExpectedTitle) {
    const ActualTitle = await this.getText(EBayHomepageUI.Smartphones_SearchPagetitle);
    //await expect(ActualTitle).toBe(ExpectedTitle);
}}

module.exports = EbayHomepage;