import {test,expect} from '@playwright/test'

test("verify checkout workflow", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.click("#login-button");
    await page.click("#add-to-cart-sauce-labs-backpack");
    await page.click("#add-to-cart-sauce-labs-bolt-t-shirt");
    await page.click("#shopping_cart_container");
    await page.click("#checkout");
    await page.locator("#first-name").fill("Dhash");
    await page.locator("#last-name").fill("MB");
    await page.locator("#postal-code").fill("637205");
    await page.click("#continue");
    await page.click("#finish");
    //assert
    expect(page.locator("#back-to-products")).toContainText("Back Home");
    await page.click("#back-to-products");
    await page.click("#react-burger-menu-btn");
    await page.click("#logout_sidebar_link");
    //assert
    expect(page.locator("#login-button")).toBeVisible();

})