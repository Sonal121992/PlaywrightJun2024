const {test,expect} = require('@playwright/test')

// getByAltText
// getByLabel
// getByPlaceholder
// getByRole
// getByTestId
// getByText
// getByTitle
// .locator


// getByAltText
test('Verify getByAltText method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    //let ele = await page.getByAltText('letcode')
    await expect(page.getByAltText('letcode')).toBeVisible()

})

// getByLabel
test('Verify getByLabel method in playwright', async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    await expect(page.getByLabel('main navigation')).toBeVisible()
})

//getByPlaceholder
test('Verify getByPlaceholder method in playwright', async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await expect(page.getByPlaceholder('First Name')).toBeVisible()
    await expect(page.getByPlaceholder('First Name')).toHaveClass('feedback-input')
    await expect(page.getByPlaceholder('First Name')).toHaveAttribute('name','first_name')
    await page.getByPlaceholder('First Name').fill('Sonal')
    await page.waitForTimeout(3000)
})

//getByRole
test('Verify getByRole method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await expect(page.getByRole('navigation')).toBeVisible()
    await expect(page.getByRole('navigation')).toHaveClass('navbar navbar-inverse navbar-fixed-top')
})


// getByText
test('Verify getByText method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await expect(page.getByText('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')).toBeVisible()
    await expect(page.getByText('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')).toHaveId('nav-title')
})

// getByTitle
test.only('Verify getByTitle method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    await expect(page.getByTitle('Koushik Chatterjee')).toBeVisible()
    await expect(page.getByTitle('Koushik Chatterjee')).toHaveText('Koushik Chatterjee')
    await expect(page.getByTitle('Koushik Chatterjee')).toHaveAttribute('target','_blank')
})

// npx playwright test TC04-LocatorMethod.spec.js --headed