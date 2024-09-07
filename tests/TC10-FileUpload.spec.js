const { test, expect } = require('@playwright/test')

test('Verify FileUpload in playwright',async({page})=>{
    await page.goto('https://www.webdriveruniversity.com/File-Upload/index.html')
    //let FileUpload = await page.locator('#myFile')
    //FileUpload.setInputFiles('tests/UploadData/FileUplode Demo File 1.pdf') // reverse the slash sign 

    // Instead of writing above 2 line of code we can write.

    await page.locator('#myFile').setInputFiles('tests/UploadData/FileUplode Demo File 1.pdf')

    //await page.waitForTimeout(4000)
    await page.locator('#submit-button').click()
    page.on('dialog',async simpleAlert => {
        await expect(simpleAlert.message()).toContain('Your file has now been uploaded')
        console.log(simpleAlert.type())
        await expect(simpleAlert.type()).toContain('alert')
        await simpleAlert.accept()
    })
    await expect(page.url()).toContain('https://www.webdriveruniversity.com/File-Upload/index.html?filename=FileUplode+Demo+File+1.pdf')
})

// npx playwright test TC10-FileUpload.spec.js --headed
