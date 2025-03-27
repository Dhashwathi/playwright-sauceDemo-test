import {test,expect} from '@playwright/test'

test("Checkout with Standard_user and performance_glitch_user", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauc");
    await page.click("#login-button");
    //assert for error occurence
    expect(page.locator("[class='error-message-container error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
    await page.click(".error-button");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.click("#login-button");
    await page.click("#add-to-cart-sauce-labs-bolt-t-shirt");
    await page.click("#add-to-cart-sauce-labs-backpack");
    //assert
    await page.click("#react-burger-menu-btn");
    await page.click("#inventory_sidebar_link");
    //assert
    expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    //await page.click("#react-burger-menu-btn");
    await page.click("#about_sidebar_link");
    //assert
    expect(page).toHaveURL("https://saucelabs.com/")
    await page.waitForTimeout(2000);
    await page.goto("https://www.saucedemo.com/inventory.html");
    
   //assert
    expect(page.locator("#remove-sauce-labs-backpack")).toHaveText("Remove");
    await page.click("#item_4_title_link");
    //assert
    expect(page.locator("#back-to-products")).toBeVisible();
    await page.click("#back-to-products");

    await page.click("#item_0_title_link");
    //assert
    expect(page.locator("#back-to-products")).toBeVisible();
    await page.click("#back-to-products");

    await page.click("#item_1_title_link");
    //assert
    expect(page.locator("#back-to-products")).toBeVisible();
    await page.click("#back-to-products");

    await page.click("#item_5_title_link");
    //assert
    expect(page.locator("#back-to-products")).toBeVisible();
    await page.click("#back-to-products");

    await page.click("#item_2_title_link");
    //assert
    expect(page.locator("#back-to-products")).toBeVisible();
    await page.click("#back-to-products");

    await page.click("#item_3_title_link");
    //assert
    expect(page.locator("#back-to-products")).toBeVisible();
    await page.click("#back-to-products");
    //logout std_user
    await page.click("#react-burger-menu-btn");
    await page.click("#logout_sidebar_link");

    //login as PGU
    await page.locator("#user-name").fill("performance_glitch_user");
    await page.locator("#password").fill("secret_sauce");
    await page.click("#login-button");
    await page.click("#shopping_cart_container");
    await page.locator("#continue-shopping").click();
    expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.click("#shopping_cart_container");
    await page.click("#checkout");
    await page.locator("#first-name").fill("Dhash");
    await page.locator("#last-name").fill("MB");
    await page.locator("#postal-code").fill("637205");
    await page.click("#continue");
    await page.click("#finish");
    //assert
    expect(page.locator("#back-to-products")).toContainText("Back Home");
    await page.waitForTimeout(5000);

})