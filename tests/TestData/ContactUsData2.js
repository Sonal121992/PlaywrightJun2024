const mydata = require('@playwright/test')

exports.customTest = mydata.test.extend({
    testDataforContactUs: {
        fstName: "Novika",
        lstName: "Khante",
        email: "novikak@gmail.com",
        msg: "I like Karate",
        sucessMsg: "Thank You for your Message!"
    }
})