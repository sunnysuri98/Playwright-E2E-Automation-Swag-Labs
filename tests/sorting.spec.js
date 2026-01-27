import { HomePage } from "../page-objects/home-page";

import { test, expect } from "../utils/global-setup";


import { sortNumbersArrayInAscendingOrder, sortNumbersArrayInDescendingOrder } from "../utils/test-helper";




test.describe.serial('Checking sorting functionality of price', () => {

    test('Checking price sorting functionality in ascending order', async ({ page }) => {

        const homepage = new HomePage(page);
        await homepage.goTo();

        const pricesArr = await homepage.getPrices();
        const expectedPricesLowToHigh = sortNumbersArrayInAscendingOrder(pricesArr);

        console.log(expectedPricesLowToHigh);


        await homepage.priceLowToHighFilter();

        const actualPricesAfterLowToHigh = await homepage.getPrices();

        console.log(actualPricesAfterLowToHigh);


        expect(actualPricesAfterLowToHigh).toEqual(expectedPricesLowToHigh);

    })


    test('Checking price sorting functionality in descending order', async ({ page }) => {

        const homepage = new HomePage(page);
        await homepage.goTo();


        const pricesArr = await homepage.getPrices();
        const expectedPricesHighToLow = sortNumbersArrayInDescendingOrder(pricesArr);

        console.log(expectedPricesHighToLow);


        await homepage.priceHighToLowFilter();

        const actualPricesHighToLow = await homepage.getPrices();

        console.log(actualPricesHighToLow);


        expect(actualPricesHighToLow).toEqual(expectedPricesHighToLow);

    })



})