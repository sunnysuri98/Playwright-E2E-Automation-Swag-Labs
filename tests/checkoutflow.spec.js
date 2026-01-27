import { CartPage, CheckoutPage, FinalPage, HomePage, InformationPage } from '../page-objects';
import { generateUserData } from '../utils/data-generator';
import { test, expect } from '../utils/global-setup';
import { parsePrice } from '../utils/test-helper';



test('User is able to complete the checkout successfully', async ({ page }) => {

    const user = generateUserData();

    // ----------------------------------------------------------------// 

    const homepage = new HomePage(page);

    await homepage.goTo();

    await homepage.addItemsToCartAndNavigateToCartPage();

    //-------------------------------------------------------------//

    const cartpage = new CartPage(page);

    await cartpage.goTo();

    await cartpage.clickOnCheckoutButtonAndNavigateToInformationPage();

    // -------------------------------------------------------------------//



    const informationPage = new InformationPage(page);

    await informationPage.goTo();

    await informationPage.fillDetails(user.firstName, user.lastName, user.postalCode);

    await informationPage.clickOnContinueAndNavigateToCheckoutPage();


    //-----------------------------------------------------------------------------//


    const checkoutpage = new CheckoutPage(page);

    await checkoutpage.goTo();

    const expectedSubTotalPrice = await checkoutpage.getCartTotal();

    console.log(expectedSubTotalPrice);

    const p = await checkoutpage.getSubTotal()

    const actualSubTotalPrice = parsePrice(p);

    console.log(actualSubTotalPrice);

    expect(actualSubTotalPrice).toEqual(expectedSubTotalPrice);

    await checkoutpage.clickOnFinishAndNavigateToCheckoutCompletePage();

    // ------------------------------------------------------------------------------------//



    const finalpage = new FinalPage(page);

    await finalpage.goTo();

    const actualOrderSuccessMessage = await finalpage.getOrderSuccessMessage();

    const actualOrderDispatchMessage = await finalpage.getOrderDispatchMessage();

    expect(actualOrderSuccessMessage).toEqual("Thank you for your order!");
    expect(actualOrderDispatchMessage).toEqual("Your order has been dispatched, and will arrive just as fast as the pony can get there!");















})