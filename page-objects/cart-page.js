import { BasePage } from "./base-page";
import { InformationPage } from "./information-page";

export class CartPage extends BasePage {

    checkoutButton = '//button[@data-test="checkout"]';
    continueShoppingButton = '//button[@data-test="continue-shopping"]';

    async goTo() {

        await super.navigate("/cart.html");
        await this.page.waitForSelector(this.checkoutButton);
    }


  


    async clickOnCheckoutButtonAndNavigateToInformationPage() {
        await this.locator(this.checkoutButton).click();
        await this.waitForNavigation();
        return new InformationPage(this.page);
    }
}