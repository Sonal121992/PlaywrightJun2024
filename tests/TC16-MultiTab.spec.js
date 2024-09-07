const { test,expect } = require('@playwright/test')

test('Validate multitab in playwright', async({browser})=>{
    const context = await browser.newContext() // launches new fresh browser
    const page =  await context.newPage() //Launches new fresh tab in browser
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('[href="https://www.qaclickacademy.com"]').click()
    ])
    await newPage.waitForTimeout(4000)
    await expect(newPage.locator('[alt="Logo"]').first()).toBeVisible()
})

test('Verify multiTab with removing target_blank attribute',async({browser})=>{
    const context = await browser.newContext() //launches new fresh browser
    const page = await context.newPage() // Launches new fresh Tab in browser
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.evaluate(()=>{
        const selector = document.querySelector('[id="opentab"]')
        selector.removeAttribute('target','_blank')
    })
    await page.locator('[href="https://www.qaclickacademy.com"]').click()
    await page.waitForTimeout(5000)
})


test('Verify multiTab with remove and add attribute',async({browser})=>{
    const context = await browser.newContext() //launches New Fresh browser
    const page = await context.newPage() //launches New Fresh tab in broswer
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.evaluate(()=>{
        const selector = document.querySelector('[id="opentab"]')
        selector.removeAttribute('target','_blank')
        selector.setAttribute('target','_Self')
    })
    await page.locator('[href="https://www.qaclickacademy.com"]').click()
    await page.waitForTimeout(5000)
})

test.only('Add disabled attribute to input element',async({browser})=>{
    const context = await browser.newContext()//launches New fresh browser
    const page = await context.newPage()//launches New fresh tab in broswer
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.evaluate(()=>{
        const selector = document.querySelector('input[value="radio1"]')
        selector.setAttribute('action','disabled')
    })
    await page.waitForTimeout(5000)
})

// npx playwright test TC16-MultiTab.spec.js --headed

//information from TC08 to TC16 is not written in txt file also testData folder