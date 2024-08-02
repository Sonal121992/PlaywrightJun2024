// 17 July 2024

// click
// rightclick
// dblclick
// hover

const {test, expect} = require('@playwright/test')


// dblclick
test('Verify double click on the website',async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#doubleClickBtn').dblclick()
    await expect(page.locator('#doubleClickMessage')).toBeVisible()
    await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click')
})

// rightClick
test('Verify Right Click button on the website',async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#rightClickBtn').click({button: 'right'})
    await expect(page.locator('#rightClickMessage')).toBeVisible()
    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click')
})

// mousehover
test('Verify Mover hover action on the website',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Actions/index.html')
    await page.locator('.dropbtn').first().hover()
    await expect(page.locator('[class="dropdown-content"] > a').first()).toBeVisible()
    await expect(page.locator('[class="dropdown-content"] > a').first()).toHaveText('Link 1')
    await page.locator('[class="dropdown-content"] > a').first().click()
    page.on('dialog',async simpleAlert =>{
        await expect(simpleAlert.message()).toContain('Well done you clicked on the link!')
        await simpleAlert.accept()
    })
})

test.only('Verify mouse over action by sir method for 3rd hover',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Actions/index.html')
    await page.getByText('Hover Over Me Third!').hover()
    await expect(page.locator('[style="float:right;"]> div > a').first()).toBeVisible()
    await expect(page.locator('[style="float:right;"]> div > a').last()).toBeVisible()
    await page.locator('[style="float:right;"]> div > a').first().click()
    page.on('dialog',async simpleAlert =>{
        await expect(simpleAlert.message()).toContain('Well done you clicked on the link!')
        await simpleAlert.accept()
    })
})



// npx playwright test TC04-MouseAction.spec.js --headed