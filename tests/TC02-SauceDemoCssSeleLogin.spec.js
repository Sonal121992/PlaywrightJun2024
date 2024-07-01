// 21st Jun 2024

const {test, expect} = require('@playwright/test')

test('Verify Login with valid credentials', async({page})=>{
    //CSS Selectors 
    //tagname[attr='Value'] ==> input[id="user-name"]
    //by id ==> # before id attr value ==> #user-name
    //by class ==> . before class attr value  ==> .btn_action
    //by id/Class aatr nd value ==> [attr ='Value'] ==> [name="user-name"]

    // Step 1 ===> Navigate to url
    await page.goto('https://www.saucedemo.com/v1/')

    // Step 2 ===> Enter username and password
    await page.locator('#user-name').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')

    // Step 3 ===> Click on login button
    await page.locator('input[id="login-button"]').click()


    // STep 4 ===> Validation
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
    await expect(page).toHaveTitle('Swag Labs')
})