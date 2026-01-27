import { BasePage } from "./base-page";
import { CheckoutPage } from "./checkout-page";

export class InformationPage extends BasePage {

    firstnameInput= '//input[@data-test="firstName"]';
    lastnameInput= '//input[@data-test="lastName"]';
    postalcodeInput= '//input[@data-test="postalCode"]';
    continueButton='//input[@data-test="continue"]';
    cancelButton='//button[@data-test"cancel"]'
     
     async goTo() {

        await super.navigate("/checkout-step-one.html");
        await this.page.waitForSelector(this.continueButton);
    }


 


    async fillDetails(firstName,lastName,postalCode){

        await this.locator(this.firstnameInput).fill(firstName);
        await this.locator(this.lastnameInput).fill(lastName);
        await this.locator(this.postalcodeInput).fill(postalCode);
    }

    async clickOnContinueAndNavigateToCheckoutPage(){

        await this.locator(this.continueButton).click();
        await this.waitForNavigation();
        return new CheckoutPage(this.page);


    }


  



}