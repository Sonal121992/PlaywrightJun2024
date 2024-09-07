const { test, expect } = require('@playwright/test')

test('Verify Single FileUpload in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('tests/UploadData/FileUplode Demo File 1.pdf')
    await page.locator('#submit-button').click()
    page.on('dialog',async alert =>{
        await expect(alert.message()).toContain('Your file has now been uploaded!')
        await expect(alert.type()).toContain('alert')
        alert.accept()
    })
    await expect(page.url()).toContain('https://webdriveruniversity.com/File-Upload/index.html?filename=FileUplode+Demo+File+1.pdf')
})


test.only('Verify Multiple FileUpload in playwright',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    let file1 = 'tests/UploadData/FileUplode Demo File 1.pdf'
    let file2 = 'tests/UploadData/Community Helpers.pdf'
    let file3 = 'tests/UploadData/Healthy and Junk.pdf'
    await page.locator('#filesToUpload').setInputFiles([file1,file2,file3])
    let fileCount = await page.locator('#fileList>li').count()
    expect(fileCount).toBe(3)
    expect(await page.locator('#fileList>li').first()).toHaveText('FileUplode Demo File 1.pdf')
    expect(await page.locator('#fileList>li').last()).toHaveText('Healthy and Junk.pdf')
    console.log(fileCount)
    await page.waitForTimeout(3000)
})

// npx playwright test TC11-MultipleFileUpload.spec.js --headed