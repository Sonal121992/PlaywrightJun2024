const {test,expect} = require('@playwright/test')

// getByAltText ===> ALt attribute value
// getByLabel ==> label tag name ==> text ==> arial-label attribute ==> atr value
// getByPlaceholder ==> placeholder attribute value
// getByRole ==> role as per element and text
// getByTestId
// getByText ==> Text Value
// getByTitle ==> Title attribute value
// .locator

// getByAltText
test('Verify getByAltText method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele = page.getByAltText('letcode')
    await expect(ele).toBeVisible()
    await expect(ele).toHaveAttribute('src','../../assets/logo.png')
    await expect(ele).toHaveAttribute('alt','letcode')
})

// getByLabel
test('Verify getByLabel method with playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele = page.getByLabel('main navigation')
    await expect(ele).toBeVisible()
    await expect(ele).toHaveAttribute('role','navigation')
})

// getByPlaceholder
test('Verify getByPlaceholder method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    let plcHold = page.getByPlaceholder('First Name')
    await expect(plcHold).toBeVisible()
    await expect(plcHold).toHaveClass('feedback-input')
    await expect(plcHold).toHaveAttribute('name','first_name')
    await plcHold.fill('Sonal')
})

// getByRole
test('Verify getByRole method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let role1 = page.getByRole('navigation')
    await expect(role1).toBeVisible()
    await expect(role1).toHaveClass('navbar navbar-inverse navbar-fixed-top')
})

// getByText
test('Verify getByText method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let txt = page.getByText('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')
    await expect(txt).toBeVisible()
    await expect(txt).toHaveId('nav-title')
})

// getByTitle
test('Verify getByTitle method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let title = page.getByTitle('Koushik Chatterjee')
    await expect(title).toBeVisible()
    await expect(title).toHaveText('Koushik Chatterjee')
    await expect(title).toHaveAttribute('target','_blank')
})

// getByTestID
test.only('Verify getByTestId method in playwright',async({page})=>{
    await page.goto('https://www.atlassian.com/')
    let Icon = page.getByTestId('global-nav-search-icon')
    await Icon.first().click()
    await expect(page.locator('#autocomplete-0-input')).toBeVisible()
    await page.waitForTimeout(3000)
})

// npx playwright test TC04-LocatorMetWithLet.spec.js --headed