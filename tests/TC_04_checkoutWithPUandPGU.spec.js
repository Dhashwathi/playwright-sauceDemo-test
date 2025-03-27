import {test,expect} from '@playwright/test'

test("checkout with problem_user and performance_glitch_user", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("problem_user");
    await page.locator("#password").fill("secret_sauce");
    await page.click("#login-button");
    await page.click("#add-to-cart-sauce-labs-backpack");
    await page.click("#add-to-cart-sauce-labs-bolt-t-shirt");
    await page.click("#shopping_cart_container");
    await page.click("#checkout");
    await page.locator("#first-name").fill("problem");
    await page.locator("#last-name").fill("user");
    await page.locator("#postal-code").fill("637205");
    await page.click("#continue");
    //asert
    expect(page.locator("[data-test='error']")).toHaveText("Error: Last Name is required");
    await page.click("#react-burger-menu-btn");
    await page.click("#logout_sidebar_link");

    //login with performance_glitch_user
    await page.locator("#user-name").fill("performance_glitch_user");
    await page.locator("#password").fill("secret_sauce");
    await page.click("#login-button");
    await page.click("#shopping_cart_container");
    await page.click("#checkout");
    await page.locator("#first-name").fill("problem");
    await page.locator("#last-name").fill("user");
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