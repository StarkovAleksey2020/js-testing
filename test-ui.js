const {Builder, By, Key, until } = require('selenium-webdriver');

async function checkInputLocal() {
    let driver = await new Builder().forBrowser('chrome').build();

    before(() => {
        console.log("Selenium Webdriver Chrome Started");
    });

    try {
        await driver.get('http://localhost:8080');
        await driver.switchTo().alert().sendKeys("RU");
        await driver.switchTo().alert().accept();
        await driver.wait(until.elementTextIs(driver.findElement(By.className('lang')), 'RU'), 2000);
        console.log('Test OK');
    } catch (error) {
        console.log(error);
    } finally {
        await driver.quit();
    }

}

checkInputLocal();

/*
async function checkCookie() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:8080');
        await driver.switchTo().alert().sendKeys("RU");
        await driver.switchTo().alert().accept();
        await driver.wait(until.elementTextIs(driver.findElement(By.className('lang')), 'RU'), 2000);
        console.log('Test OK');
    } catch (error) {
        console.log(error);
    } finally {
        await driver.quit();
    }

}

checkCookie();

*/