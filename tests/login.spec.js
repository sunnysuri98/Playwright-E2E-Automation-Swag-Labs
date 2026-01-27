
import { test, expect } from '../utils/global-setup';

import { LoginPage } from '../page-objects';



test.describe('Login page - Positive and Negative Tests', () => {

    test.use({ storageState: undefined })

    test('Login with valid credentials should succeed', async ({ page }) => {


        console.log('Starting valid login test');
        const loginpage = new LoginPage(page);

        await loginpage.goTo();

        await loginpage.login(process.env.LOGIN_USER, process.env.LOGIN_PASS);


        const isLoggedIn = await loginpage.isLoggedIn();

        expect(isLoggedIn, 'User should be logged in successfully').toBeTruthy();

        expect(page.url()).toContain('inventory.html');

    })


    test('Login with invalid credentials', async ({ page }) => {

        console.log('Starting login test with invalid credentials');

        const loginpage = new LoginPage(page);

        await loginpage.goTo();

        await loginpage.login('invalid', 'invalid');

        const hasError = await loginpage.hasLoginError();
        expect(hasError).toBeTruthy();

        const errorMessage = await loginpage.getErrorMessage();
        expect(errorMessage).toEqual('Epic sadface: Username and password do not match any user in this service');

    })
})



