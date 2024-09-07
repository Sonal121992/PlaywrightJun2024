const{test,expect} = require('@playwright/test')

test('Verify calender with JS values in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Datepicker/index.html')
    const date = new Date()
    date.setDate(date.getDate())
    //date.setDate(date.getDate()+200) // date after 200 days
    console.log(date.getDate())//Current Date
    console.log(date.getMonth()+1)//Index of current month ==> plus 1 because to get current month index, as index starts from 0
    // 0     1        2       3      4       5       6       7       8       9      10      11       
    //Jan   Feb     March   April   May     June    July    Aug     Sept    Oct     Nov     Dec
    console.log(date.getFullYear())//Current Year
})

test.only('Verify Calender in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Datepicker/index.html')
    const date = new Date()
    date.setDate(date.getDate())
    let d = date.getDate()
    let m = date.getMonth()+1
    let y = date.getFullYear()
    console.log(m)
    let smnt = date.toLocaleString('default',{month:'short'})//current month in short string
    console.log(smnt) // 8
    let lmnt = date.toLocaleString('default',{month:'long'})// Current month in long string
    console.log(lmnt) //August
    let mm = `${0} ${m}`
    console.log(mm)//0 8 
    
    // DD/MM/YY
    let DD = `${d}/${m}/${y}`
    console.log(DD) // 30/8/2024

    let futureMnthYear = `${lmnt} ${y}` // August 2024  
    console.log(futureMnthYear)
    await page.locator('#datepicker').click()
    while(true){
        let monthYear = await page.locator('[class="datepicker-switch"]').first().textContent()
        console.log(monthYear)
        if(monthYear === futureMnthYear){
            break
        }
        await page.locator('[class="next"]').first().click()
    }
    let dayCount = await page.locator('[class="day"]').count()
    console.log(dayCount)
    for(let i=0; i<dayCount; i++){
        let text = await page.locator('[class="day"]').nth(i).textContent()
        console.log(text)
        if(text == d){
            await page.locator('[class="day"]').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(3000)
})

// npx playwright test TC14-Calender.spec.js --headed