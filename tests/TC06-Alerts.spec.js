//23rd July 2024


const {test,expect} = require('@playwright/test')

// Types of alerts
    // JS simple alert
    // JS confirm alert
    // JS prompt alert

test('Verify Handle js simple in playwright',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.locator('[onclick="jsAlert()"]').click()
    page.on('dialog',async simpleAlert=>{
        //console.log(simpleAlert.message())
        await expect(simpleAlert.message()).toContain('I am a JS Alert')
        await simpleAlert.accept()
        console.log(simpleAlert.type())
    })
})

test('Verify simple alert in playwright',async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await page.waitForSelector('.card-title > a') // Since we can't locate it directly we have made sub finding with a tag
    let prodCount = await page.locator('.card-title > a').count() //In the varaible prodcount we have save the total product with count so that we can access it afterwards in code
    console.log(prodCount) // ===> 9
    for(let i=0; i<prodCount; i++){ // For loop because we want the name of each product.
        let text = await page.locator('.card-title > a').nth(i).textContent()// Saving the product name in text varaible to be use after in program. 
        //nth(i) ==> for each text 
        // Example: for 1st loop nth(0) ==> Samsung galaxy s6 ==> first product name in list
        //          for  2nd loop nth(1)==> Nokia lumia 1520 ==> for 2nd product
        // We generally use loop and not directly the name because on live website the names are change any time
        console.log(text) // This list will change any time
        // Samsung galaxy s6                                                                                                                                             
        // Nokia lumia 1520
        // Nexus 6                                                                                                                                                       
        // Samsung galaxy s7
        // Iphone 6 32gb
        // Sony xperia z5
        // HTC One M9
        // Sony vaio i5                                                                                                                                                  
        // Sony vaio i7
        if (text === 'Samsung galaxy s7'){ // If the text is equal to the product we want 
            await page.locator('.card-title > a').nth(i).click()//on matching the product name get the locator and nth position then click it and break the loop
            break
            // Here once we get the desired output it will break the loop
        }
    }
    await page.locator('[onclick="addToCart(4)"]').click() //once we have added the product in cart ==> locate the cart ===> click on cart ==> we will get the simpleAlert pop msg
    page.on('dialog',async simpleAlert => {
        await expect(simpleAlert.message()).toContain('Product added') // message on the pop up alert
        await simpleAlert.accept()// click on OK as accept
        await console.log(simpleAlert.type())
    })
    await page.waitForTimeout(3000)
})


test("Verify the Confirm in playwright",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.locator('[onclick="jsConfirm()"]').click()
    page.on('dialog',async confirm =>{
        console.log(confirm.type())
        await expect(confirm.message()).toContain('I am a JS Confirm')
        console.log(confirm.message())
        await expect(confirm.type()).toContain('confirm')
        //await confirm.accept()
        await confirm.dismiss()
    })
    
    //await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
})

test.only("Verify the prompt alert in playwright",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.locator('[onclick="jsPrompt()"]').click()
    page.on('dialog',async prompt=>{
        await expect(prompt.message()).toContain('I am a JS prompt')
        await expect(prompt.type()).toContain('prompt')
        //console.log(prompt.message())
        //console.log(prompt.type())
        //prompt.accept('Playwright')
        prompt.dismiss()
    })
    //await expect(page.locator('#result')).toHaveText('You entered: Playwright')
    await expect(page.locator('#result')).toHaveText('You entered: null')
})

//npx playwright test TC06-Alerts.spec.js --headed
