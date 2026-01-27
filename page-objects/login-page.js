
import { BasePage } from './base-page';
import { HomePage } from './home-page';

export class LoginPage extends BasePage {


    usernameInput = '//input[@data-test="username"]';
    passwordInput = '//input[@data-test="password"]';
    loginButton = '//input[@data-test="login-button"]';
    errorMessage = '//h3[@data-test="error"]';

    async goTo() {
        await super.navigate('/');
    }


    async login(username, password) {
        await this.locator(this.usernameInput).fill(username);
        await this.locator(this.passwordInput).fill(password);
        await this.locator(this.loginButton).click();
        await this.waitForNavigation();
        return new HomePage(this.page);
    }


    async isLoggedIn() {
        await this.locator(HomePage.hamburger).click();
        return await this.isVisible(HomePage.logoutLink);
    }


    async hasLoginError() {
        return await this.isVisible(this.errorMessage);
    }


    async getErrorMessage() {
        return await this.getTextContent(this.errorMessage);
    }
}
