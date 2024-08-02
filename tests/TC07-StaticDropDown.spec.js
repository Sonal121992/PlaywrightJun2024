const {test,expect} = require('@playwright/test')

// Types of dropdown
// Static Dropdown
// Dynamic Dropdown

// Here we are doing same static dropdown on same element with different methods and techniques

// selectOption(index)
test('Handling static dropdown in playwright for fruits',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('3')
    let result =  page.locator('[class="subtitle"]')
    await expect(result).toBeVisible()
    await expect(result).toHaveText('You have selected Banana')
})

// test.only('Handling static dropdown in playwright for superheros',async({page})=>{
//     await page.goto('https://letcode.in/dropdowns')
//     await page.locator('#superheros').selectOption('2') // It will not work here since it don't have selectOtopn value as 1, 2,etc
//     let result2 = page.locator('[class="subtitle"]')
//     await expect(result2).toBeVisible()
//     await expect(result2).toHaveText('You have selected The Avengers')
// })

// test.only('Handling static dropdown in playwright for language',async({page})=>{
//     await page.goto('https://letcode.in/dropdowns')
//     await page.locator('#lang').selectOption('1') // This will not work with Language since it don't have seletion as 1 2
//     // it have codes like ca, py, etc
//     let LangResult = page.locator('[class="subtitle"]')
//     await expect(LangResult).toBeVisible()
//     await expect(LangResult).toHaveText('You have selected Java')
// })


// selectOption({label: ' '})
test('Handling static dropdown using label parameter for fruits',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption({label: 'Banana'})
    let result2 = page.locator('[class="subtitle"]')
    await expect(result2).toBeVisible()
    await expect(result2).toHaveText('You have selected Banana')
})

test('Handling static dropdown using label parameter for SuperHero',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#superheros').selectOption({label: 'Batman'})
    let result2 = page.locator('[class="subtitle"]')
    await expect(result2).toBeVisible()
    await expect(result2).toHaveText('You have selected Batman')
})

test('Handling static dropdown using label parameter for Language',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#lang').selectOption({label: 'Java'})
    let result3 = page.locator('[class="subtitle"]')
    await expect(result3).toBeVisible()
    await expect(result3).toHaveText('You have selected Java')
})


// selectOption('varaible)
test('Handling static dropdown using varaible from code for fruits',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('1')
    let result1 = page.locator('[class="subtitle"]')
    expect(result1).toBeVisible()
    expect(result1).toHaveText('You have selected Mango') 
})

test('Handling static dropdown using varaible from code for Superheros',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#superheros').selectOption('ta')
    let result2 = page.locator('[class="subtitle"]')
    expect(result2).toBeVisible()
    expect(result2).toHaveText('You have selected The Avengers') 
})


test.only('Handling static dropdown using varaible from code for Language',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#lang').selectOption('swift')
    let result3 = page.locator('[class="subtitle"]')
    expect(result3).toBeVisible()
    expect(result3).toHaveText('You have selected Swift') 
})

// npx playwright test TC07-StaticDropDown.spec.js --headed