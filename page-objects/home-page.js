import { BasePage } from './base-page';
import { CartPage } from './cart-page';


export class HomePage extends BasePage {

   static hamburger = '//button[normalize-space()="Open Menu"]';
   static logoutLink = '//a[@data-test="logout-sidebar-link"]';

    allProductsLink = '//a[@data-test="inventory-sidebar-link"]';
    aboutLink = '//a[@data-test="about-sidebar-link"]';
    resetAppLink = '//a[@data-test="reset-sidebar-link"]';

    pricesOfAllProducts = '//div[@data-test="inventory-item-price"]';
    products = '//span[@data-test="title"]';
    filterDropdown = '//select[@data-test="product-sort-container"]';
    priceLowToHigh = 'lohi';
    priceHighToLow = 'hilo';
    cartPageLink = '//a[@data-test="shopping-cart-link"]';



    async goTo() {

        await super.navigate("/inventory.html");
        await this.page.waitForSelector(this.products);
    }


  


    async priceLowToHighFilter() {
        await this.locator(this.filterDropdown).selectOption(this.priceLowToHigh);
    }


    async priceHighToLowFilter() {
        await this.locator(this.filterDropdown).selectOption(this.priceHighToLow);
    }

    async getPrices() {

        const prices = await this.getAllTextContent(this.pricesOfAllProducts);


        const floatPrices = prices.map(p => parseFloat(p.replace(/[$]/g, "")));

        return floatPrices;
    }

    async addItemsToCartAndNavigateToCartPage() {

        await this.clickOnAddToCartButton(2);
        await this.clickOnAddToCartButton(5);

        await this.locator(this.cartPageLink).click();
        await this.waitForNavigation();
        return new CartPage(this.page);


    }

    async clickOnAddToCartButton(index) {
        await this.locator(`(//button[normalize-space()="Add to cart"])[${index}]`).click();
    }
}