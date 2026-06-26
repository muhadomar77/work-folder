const { test, expect } = require('@playwright/test');
const { Irctc } = require('../pages/irctspage');
const { error } = require('node:console');

test.describe('irctc testing', () => {

    // test('login', async ({ page }) => {
    //     const login = new Irctc(page);
    //     await login.goto();

    //     const languagePopup = page.locator("//button[text()='English']");
    //     if (await languagePopup.isVisible()) {
    //         await page.getByText('English').click();
    //     }
    //     await page.waitForTimeout(2000);


    // })
    test('Book ticket', async ({ page }) => {
        const login = new Irctc(page);
        await login.goto();
        
        const languagePopup = page.locator("//button[text()='English']");
        if (await languagePopup.isVisible()) {
            await page.getByText('English').click();
        }
        //await page.locator('//a[contains(@class,"loginCloseBtn")]').click();



        const fromStation = new Irctc(page);
        await fromStation.selectFromStation('TCR');
        await page.waitForTimeout(2000);

        const toStation = new Irctc(page);
        await toStation.selectToStation('PGT');
        await page.waitForTimeout(2000);

        const date = new Irctc(page);
        await date.selectDate();
        await page.waitForTimeout(1000);

    })
})