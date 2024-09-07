const {test, expect} = require('@playwright/test')

const exp = require('constants')

test('Drag and Drop using inbuild command',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    let seoul = await page.locator('#box5')
    let SK = await page.locator('#box105')
    await seoul.dragTo(SK)
    expect(seoul).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(4000)
})

test.only('Verify Drag and Drop using mouse Actions',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box3').hover()
    await page.mouse.down()
    await page.locator('#box103').hover()
    await page.mouse.up()
    await page.waitForTimeout(4000)
    await expect(await page.locator('#box3')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
})

// npx playwright test TC08-DragDropCapitalCountry.spec.js --headed