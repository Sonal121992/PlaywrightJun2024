const {test,expect} =require('@playwright/test')

test('Drag and Drop using inbuild command',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    let Washing = page.locator('#box3')
    let US = page.locator('#box103')
    await Washing.dragTo(US)
    expect(Washing).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(4000)
})

test('Drag and drop using mouse action',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box5').hover()
    await page.mouse.down()
    await page.locator('#box105').hover()
    await page.mouse.up()
    await page.waitForTimeout(4000)
    await expect(await page.locator('#box5')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
})

// npx playwright test TC07-DragDrop.spec.js --headed