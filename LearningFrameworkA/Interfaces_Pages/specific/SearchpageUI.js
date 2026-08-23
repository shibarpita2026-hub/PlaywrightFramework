class SearchpageUI {
    static Music_SearchPagetitle = "(//h2[text()='Shop by category'])[1]";
    static Cellphones_SearchPagetitle = "//h1[contains(normalize-space(.), 'Cell Phones, Smart Watches & Accessories')]";
    static Cellphones_TopCategoriestab = "(//section[h2[text()='Top categories']]//a)[1]";
    static Smartphones_SearchPagetitle = "//img[contains(@class, 'block h-auto max-h-[330px] w-full')]";
    static Smartphones_BrandSearchPagetitle = "//h2[@class='section-title__title']";
}

module.exports = SearchpageUI;