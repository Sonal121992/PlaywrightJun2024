// 22nd Jul 2024

const {test,expect} = require('@playwright/test')

test('Verify keyboardAction in playwright',async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')
    await page.keyboard.down('PageDown')
    await page.locator('[name="text1"]').fill('I am learning playwright')
    await page.keyboard.press('Control+A')
    //F1 - F12, Digit0- Digit9, KeyA- KeyZ, Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete,
    //Enter, Home, Insert, PageDown, PageUp, ArrowRight, ArrowUp, Escape, ArrowDown, End,  etc.
    await page.keyboard.press('Control+C')
    await page.locator('[name="text2"]').click()
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')
    await page.locator('#recaptcha').click()
    await page.waitForTimeout(3000)
})


// npx playwright test TC05-KeyBoardAction.spec.js --headed