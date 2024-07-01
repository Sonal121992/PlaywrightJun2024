// 25th Jun 2024

const {test, expect} = require('@playwright/test')

test('Handling Radio buttons in playwright', async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    await page.locator('[id="vfb-7-1"]').check()
    await expect(page.locator('[value="Option 2"]')).not.toBeChecked()
    await expect(page.locator('[id="vfb-7-1"]')).toBeChecked()
    await page.locator('#vfb-7-2').check()
    await expect(page.locator('#vfb-7-1')).not.toBeChecked()
})

// npx playwright test TC03-DemoGuruCheckbox.spec.js --headed