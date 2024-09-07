const {test, expect} = require('@playwright/test')
const data = require('../tests/TestData/ContactUs.json') // for 2nd and 3rd test case
const { DEFAULT_MAX_VERSION } = require('tls')
const { customTest } = require('./TestData/ContactUsData2')


// test('Verify test Data in playwright',async({page})=>{
//     await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
//     await page.locator('[name="first_name"]').fill('Sonal')
//     await page.locator('[name="last_name"]').fill('Khante')
//     await page.locator('[name="email"]').fill('sonalk@gmail.com')
//     await page.locator('[name="message"]').fill('I am playwright with Test Data')
//     await page.locator('[value="SUBMIT"]').click()
//     await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
// })

// test.only('Verify test using JSON file in playwright',async({page})=>{
//     await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
//     await page.locator('[name="first_name"]').fill(data.fstN)
//     await page.locator('[name="last_name"]').fill(data.LstN)
//     await page.locator('[name="email"]').fill(data.email)
//     await page.locator('[name="message"]').fill(data.msg)
//     await page.locator('[value="SUBMIT"]').click()
//     await expect(page.locator('h1')).toHaveText(data.SuccessMsg)
// })

data.forEach(ele => {
    test(`Verify contactus form using multiple dataset ${ele.fstN}`,async({page})=>{
        await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
        await page.locator('[name="first_name"]').fill(ele.fstN)
        await page.locator('[name="last_name"]').fill(ele.LstN)
        await page.locator('[name="email"]').fill(ele.email)
        await page.locator('[name="message"]').fill(ele.msg)
        await page.locator('[value="SUBMIT"]').click()
        await expect(page.locator('h1')).toHaveText(ele.SuccessMsg)
    }) // to more parallel test case change true to false
})

customTest.only('Verify contactUs form using JS file Data',async({page, testDataforContactUs})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('[name="first_name"]').fill(testDataforContactUs.fstName)
    await page.locator('[name="last_name"]').fill(testDataforContactUs.lstName)
    await page.locator('[name="email"]').fill(testDataforContactUs.email)
    await page.locator('[name="message"]').fill(testDataforContactUs.msg)
    await page.locator('[value="SUBMIT"]').click()
    await expect(page.locator('h1')).toHaveText(testDataforContactUs.sucessMsg)
})
    
// npx playwright test TC15-TestData.spec.js --headed