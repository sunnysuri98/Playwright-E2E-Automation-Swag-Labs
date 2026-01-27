import { BasePage } from "./base-page";

export class FinalPage extends BasePage {

    orderSuccessMessage = '//h2[@data-test="complete-header"]';
    orderDispatchMessage = '//div[@data-test="complete-text"]'

    async goTo() {

        await super.navigate("/checkout-complete.html");
        await this.page.waitForSelector(this.orderSuccessMessage);
    }


    async navigate() {
        await this.goTo();
    }


    async getOrderSuccessMessage() {

        return await this.getTextContent(this.orderSuccessMessage);

    }

    async getOrderDispatchMessage() {

        return await this.getTextContent(this.orderDispatchMessage);

    }
}