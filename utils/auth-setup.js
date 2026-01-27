import { chromium } from '@playwright/test';
import fs from 'fs';
export default async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill(process.env.LOGIN_USER);
    await page.getByPlaceholder("Password").fill(process.env.LOGIN_PASS);
    await page.locator("//input[@data-test='login-button']").click();
    await page.waitForSelector('//span[@data-test="title"]');
    if (!fs.existsSync('auth')) {
        fs.mkdirSync('auth');
    }
    await context.storageState({
        path: 'auth/auth.json'
    });
    await browser.close();
};