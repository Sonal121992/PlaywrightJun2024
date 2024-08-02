const {test, expect} = require('@playwright/test')

test('Verify the dynamic dropdown for From place', async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Nagpur')
    await page.waitForSelector('.placeHolderMainText')
    let StopCount = page.locator('.placeHolderMainText').count()
    console.log(StopCount)
    // let StopText = page.locator('[class="placeHolderMainText"]').last().textContent()
    // console.log(StopText)
    for(let i=0; i<StopCount; i++){
        let Text1 = page.locator('[class="placeHolderMainText"]').nth(i).textContent()
        console.log(Text1)
        if(Text1 === 'Ravi Nagar'){
            await page.locator('[class="placeHolderMainText"]').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(4000)
})

test('Verify the dynamic dropdown for To place', async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#dest').fill('Pune')
    await page.waitForSelector('.placeHolderMainText')
    let BusStop = page.locator('.placeHolderMainText').count()
    console.log(BusStop)
    // let StopText = page.locator('[class="placeHolderMainText"]').last().textContent()
    // console.log(StopText)
    for(let i=0; i<BusStop; i++){
        let Text2 = page.locator('[class="placeHolderMainText"]').nth(i).textContent()
        console.log(Text2)
        if(Text2 === 'Hinje Wadi'){
            await page.locator('[class="placeHolderMainText"]').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(4000)
})

// npx playwright test TC07-DynamicDropDown.spec.js --headed