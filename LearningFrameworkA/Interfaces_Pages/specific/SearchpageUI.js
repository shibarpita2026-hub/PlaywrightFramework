class SearchpageUI {
    static Music_SearchPagetitle = "(//h2[text()='Shop by category'])[1]";
    static Cellphones_SearchPagetitle = "//h1[contains(normalize-space(.), 'Cell Phones, Smart Watches & Accessories')]";
    static Cellphones_TopCategoriestab = "(//section[h2[text()='Top categories']]//a)[1]";
    static Smartphones_SearchPagetitle = "//h2[normalize-space()='Shop by Brand']";
    static Smartphones_BrandCard = "//h2[normalize-space()='Shop by Brand']/following::a[.//img][1]";
    static Smartphones_BrandSearchPagetitle = "//h2[@class='section-title__title']";
    static Smartphones_BrandSearchPageProduct = "(//img[contains(@class, 'seo-card--image') and contains(@class, 'image-center')])[1]";
}

module.exports = SearchpageUI;