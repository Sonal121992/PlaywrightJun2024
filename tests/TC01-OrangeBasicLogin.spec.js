// 18th June 2024

const {test,expect} = require('@playwright/test')
const { lutimesSync } = require('fs')

test('Verify login with valid username and password for Orange HRM', async({page})=>{
    // define the expect locator here so access it aftwards
    let dashboardEle = await page.locator('.oxd-topbar-header-breadcrumb-module')

    //Arrangement
    // Step 1 ==> Visit url
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // step 2 ==> Enter username and password ==> 
        // since we are entering or doing process on that element we use locator
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()
    // step 3 ===> Assertion ==> check the credentials are proper or not
    // assertion me hamesha expect aayega
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard')
    // so instead of writing this page locator here we can define with let variable so that we can access it afterwards
    // same we are doing with define method
    await expect(dashboardEle).toHaveText('Dashboard')
    await expect(dashboardEle).toBeVisible()
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

test('Verify login with invalid username and password for orange HRM', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('ABC')
    await page.locator('input[name="password"]').fill('abc123')
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials')
    await expect(page.locator('.oxd-text--p')).toHaveText('Invalid credentials')
    await expect(page.locator('div[role="alert"]')).toBeVisible()
})

//  npx playwright test TC01BasicLogin.spec.js --headed

//<input data-v-1f99f73c="" class="oxd-input oxd-input--active oxd-input--error" name="username" placeholder="Username" autofocus="">
//TagName[attr = "Value"]
//input[name ="username"]

//goto ===> url ke liye
// locator =====> html element ke liye

// --headed likhne se hume execution terminal me dikhata hai
// nai likha to sara execution backend me hoga and humme srf result terminal me milega