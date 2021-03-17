//const chai = require('chai');
//const assert = require('chai').assert;
//const expect = require('chai').expect;
//const webDriver = require('selenium-webdriver');

//const uri = 'localhost:8080';
/*
describe('local input test', function() {
    let driver;
    before(() => {
        driver = new webDriver.Builder().forBrowser('chrome').build();
        console.log("Selenium Webdriver Chrome Started");
    });
    after(() => {
        driver.quit();
    });
    it('should be after input local', () => {
        this.timeout(1000);
        driver.get(uri);
        assert.assertTrue(driver.getPageSource().contains('Введите локаль (RU, EN, DE)'));
        console.log('Selenium Webdriver Chrome Shutdown');
    });
});
*/
const {Builder, By, Key, util } = require('selenium-webdriver');

async function checkInputLocal() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:8080');
 
    if (driver.getWindowHandles().size() > 1) {
        driver.close();
    }
    else {
            driver.quit();
    }
}

checkInputLocal();