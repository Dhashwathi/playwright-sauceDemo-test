import {test,expect} from '@playwright/test'

test("verify products page and logout", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.click("#login-button");
    expect(page.locator(".title")).toHaveText("Products");
    const product=page.locator(".inventory_item_name");
    expect(product).toHaveCount(6);
    expect(page.locator("#add-to-cart-sauce-labs-backpack")).toBeVisible();
    //expect(page.locator(".pricebar")).toBeVisible();

    await page.click("#react-burger-menu-btn");
    await page.click("#logout_sidebar_link");

    expect(page.locator("#login-button")).toBeVisible();

})