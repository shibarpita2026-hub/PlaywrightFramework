const BasePage = require('../commons/BasePage');
const SearchpageUI = require('../Interfaces_Pages/specific/SearchpageUI');


class Searchpage extends BasePage {
    constructor(page) {
        super(page);
    }

    async ValidateSearchPageTitle(ExpectedTitle) {
        const ActualTitle = await this.getText(SearchpageUI.Music_SearchPagetitle);
        //await expect(ActualTitle).toBe(ExpectedTitle);
    }

    async ValidateSearchPageTitle1(ExpectedTitle) {
        const ActualTitle = await this.getText(SearchpageUI.Cellphones_SearchPagetitle);
        //await expect(ActualTitle).toBe(ExpectedTitle);
    }

    async clickValidateSearchPageTitle1() {
        await this.click(SearchpageUI.Cellphones_TopCategoriestab);
    }

    async ValidateSearchPageTitle2(ExpectedTitle) {
        const ActualTitle = await this.getText(SearchpageUI.Smartphones_SearchPagetitle);
        //await expect(ActualTitle).toBe(ExpectedTitle);
    }

    async clickValidateSearchPageTitle2() {
        await this.click(SearchpageUI.Smartphones_SearchPagetitle);
    }



}

module.exports = Searchpage;
