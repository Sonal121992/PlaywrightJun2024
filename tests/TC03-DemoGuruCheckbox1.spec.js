// 27th Jul 2024

const {test, expect} = require('@playwright/test')

test('Handling Radio buttons in playwright', async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    let radio1 = page.locator('[id="vfb-7-1"]') // here checked the 2nd radio button
    let radio2 = page.locator('#vfb-7-2')
    let radio3 = page.locator('#vfb-7-3')
    await page.locator('#vfb-7-2').check()
    await expect(page.locator('[value="Option 1"]')).not.toBeChecked()
    await expect(page.locator('#vfb-7-1')).not.toBeChecked()
    await expect(radio1).not.toBeChecked() // here we have used varaible instead of page.locator
    await expect(page.locator('#vfb-7-3')).not.toBeChecked()
    await expect(radio2).toBeChecked()
    await expect(radio3).not.toBeChecked()
    await radio1.check() // here we checked the 1st radio button with use of varaible
    await expect(radio1).toBeChecked()
    await expect(radio2).not.toBeChecked()
    await expect(radio3).not.toBeChecked()
    await expect(page.locator('#vfb-7-2')).not.toBeChecked()
})

// only is use to solve only that testcase
test('Handling checkboxes in playwright with check method',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-0')).not.toBeChecked()
    let checkbox1 = await page.locator('#vfb-6-0')
    let checkbox2 = await page.locator('#vfb-6-1')
    let checkbox3 = await page.locator('#vfb-6-2')
    checkbox1.check()
    await expect(checkbox1).toBeChecked()
    checkbox2.check()
    await expect(checkbox2).toBeChecked()
    checkbox3.check()
    await expect(checkbox3).toBeChecked()
})

test.only('Handling checkboxes in playwright with click method',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    let checkbox1 = await page.locator('#vfb-6-0')
    let checkbox2 = await page.locator('#vfb-6-1')
    let checkbox3 = await page.locator('#vfb-6-2')
    checkbox1.check()
    await expect(checkbox2).toBeChecked()
    await checkbox2.click()
    await expect(checkbox2).toBeChecked()
    await checkbox3.click()
    await expect(checkbox3).toBeChecked()
})

// npx playwright test TC03-DemoGuruCheckbox.spec.js --headed

// playwright.dev/docs/locators