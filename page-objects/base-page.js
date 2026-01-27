import { expect } from '@playwright/test';

export class BasePage {
    
    constructor(page) {
        this.page = page;
    }

   
    locator(selector) {
        return this.page.locator(selector);
    }

   
    async navigate(endpoint = '/') {
        await this.page.goto(endpoint);
        await expect(this.page).toHaveTitle(/Swag Labs/);
    }

  
    async waitForNavigation() {
        await this.page.waitForLoadState('networkidle');
    }

 
    async isVisible(selector) {

        if (typeof selector === 'string') {
            return await this.page.locator(selector).isVisible();
        }

        return await selectors.isVisible();
    }

 
    async getTextContent(selector) {

         if (typeof selector === 'string') {
           return (await this.page.locator(selector).textContent()) || '';
        }

        return (await selector.textContent()) || '';



    }
    async getAllTextContent(selector) {

         if (typeof selector === 'string') {
           return (await this.page.locator(selector).allTextContents());
        }

        return (await selector.allTextContents());



    }
}
