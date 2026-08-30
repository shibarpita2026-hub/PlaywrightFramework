const BasePage = require('../commons/BasePage');
const ProductpageUI = require('../Interfaces_Pages/specific/ProductpageUI');


class Productpage extends BasePage {
    constructor(page) {
        super(page);
    }

    async ValidateProductPageTitle(ExpectedTitle) {
        const ActualTitle = await this.getText(ProductpageUI.ProductTitle);
        //await expect(ActualTitle).toBe(ExpectedTitle);
    }

    async clickValidateProductPageTitle() {
        await this.click(ProductpageUI.ProductTitle);
    }

    async ValidateProductBuy(ExpectedTitle) {
        const ActualTitle = await this.getText(ProductpageUI.ProductBuy);
        //await expect(ActualTitle).toBe(ExpectedTitle);
    }

    async clickProductBuy() {
        await this.click(ProductpageUI.ProductBuy);

    }}





module.exports = Productpage;

