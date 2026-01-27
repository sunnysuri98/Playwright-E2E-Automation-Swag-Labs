import { test as base, expect } from '@playwright/test';
export const test = base.extend({});


test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running Test: ${testInfo.title}`);
});

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== "passed") {
        console.log(`Test Failed: ${testInfo.title}`);

        try {
            const screenshotBuffer = await page.screenshot({ fullPage: true });
            await testInfo.attach('failure-screenshot', {
                body: screenshotBuffer,
                contentType: 'image/png'
            });

            const htmlContent = await page.content();
            await testInfo.attach('page-html', {
                body: htmlContent,
                contentType: 'text/html'
            });

            console.log(`Failed at URL: ${page.url()}`);
        } catch (error) {
            console.error('Error capturing failure diagnostics:', error);
        }
    }
    console.log(`Completed test: ${testInfo.title} - Status: ${testInfo.status}`);
});

export { expect };
