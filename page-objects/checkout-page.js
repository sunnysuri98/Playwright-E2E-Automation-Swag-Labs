import { BasePage } from "./base-page";
import { FinalPage } from "./final-page";


export class CheckoutPage extends BasePage {

    pricesOfAllProducts = '//div[@data-test="inventory-item-price"]';
    subTotal = '//div[@data-test="subtotal-label"]';
    finishButton = '//button[@id="finish"]';



    async goTo() {

        await super.navigate("/checkout-step-two.html");
        await this.page.waitForSelector(this.finishButton);
    }


  

    async getCartTotal() {

        const prices = await this.getAllTextContent(this.pricesOfAllProducts);

        const floatPrices = prices.map(p => parseFloat(p.replace(/[$]/g, "")));

        const total = floatPrices.reduce((acc, curr) => acc + curr, 0);

        return total;
    }

    async getSubTotal() {
        return await this.getTextContent(this.subTotal);
    }


    async clickOnFinishAndNavigateToCheckoutCompletePage() {

        await this.locator(this.finishButton).click();
        await this.waitForNavigation();
        return new FinalPage(this.page);

    }




}