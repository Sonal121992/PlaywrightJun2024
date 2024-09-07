const { test, expect } = require('@playwright/test')

// 1st way

test('Handling IFrameBy .framelocator in playwright',async({page})=>{
    await page.goto('https://letcode.in/frame')
    //await page.locator('[placeholder="Enter name"]').fill('Sonal') // Error: locator.fill: Test timeout of 30000ms exceeded.
    // Since the above code is hidden inside the iframe we can't find it directly
    // Therefore we need to use iframe first before giving the actual code

    let frame1 = await page.frameLocator('#firstFr') // ===> here framelocator therefore used # sign
    await frame1.locator('[placeholder="Enter name"]').fill('Sonal')
    expect(frame1.locator('[placeholder="Enter name"]')).toBeVisible()
    await page.waitForTimeout(3000)
})

//2nd Way

test('Handling iframe by using .frame method',async({page})=>{
    await page.goto('https://letcode.in/frame')
    let frame2 = await page.frame('firstFr') // ==> here directly use frame therefore didn't use the sign
    await frame2.locator('[name="fname"]').fill('Sonal')
    await frame2.locator('[name="lname"]').fill('Khante')
    await expect(frame2.locator('[name="fname"]')).toBeVisible()
    await expect(frame2.locator('[name="lname"]')).toBeVisible()
    await expect(frame2.locator('[class="title has-text-info"]')).toHaveText('You have entered Sonal Khante')
    await page.waitForTimeout(3000)
})

// 3rd way ==> by passing the url to .frame method

test.only('Verify Iframe by url to .frame method',async({page})=>{
    await page.goto('https://letcode.in/frame')
    let frame3 = await page.frame({url:'https://letcode.in/frameUI'})
    await frame3.locator('[name="fname"]').fill('Sonal')
    await frame3.locator('[name="lname"]').fill('Khante')
    await expect(frame3.locator('[name="fname"]')).toBeVisible()
    await expect(frame3.locator('[name="lname"]')).toBeVisible()
    await expect(frame3.locator('[class="title has-text-info"]')).toHaveText('You have entered Sonal Khante')
})
// npx playwright test TC12-IFrame.spec.js --headed