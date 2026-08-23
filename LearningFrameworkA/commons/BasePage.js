
 class BasePage{                    

constructor(page)
{
    this.page = page;
}

async click(locator)
{

    await this.page.locator(locator).click();
}

async fill(locator, text)

{
    await this.page.locator(locator).fill(text);

}

async wait(ms)

{
    await this.page.waitForTimeout(ms);
}


async visible(locator){
    await this.page.locator(locator).isVisible();
    return await this.page.locator(locator).isVisible();
}
async getText(locator){
    return await this.page.locator(locator).first().textContent();
}

async open(url) {
    await this.page.goto(url);
}

async HoverProduct(locator){
    const el = this.page.locator(locator).first();
    await el.waitFor({ state: 'visible', timeout: 5000 });
    await el.hover();
}



async SelectDropdown(locator, value) {
    await this.page.locator(locator).selectOption({label: value});
    
}

async getTextDropDown(locator) {
    return await this.page.locator(locator).textContent();

}}

module.exports = BasePage;