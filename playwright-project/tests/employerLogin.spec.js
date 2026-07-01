const { test, expect } = require('@playwright/test');
const { employer } = require('../pages/employer');
const { error } = require('node:console');


test.describe('camerin testing', () => {
    //login test
    test('employer ', async ({ page }) => {
        // await page.goto("https://www.saucedemo.com/");

        const emp = new employer(page);
        await emp.goto();
        await emp.openEmployerLogin();
        await page.waitForTimeout(2000);
        await emp.viewCompany();
        await page.waitForTimeout(4000);
        await emp.logOut();
        await page.waitForTimeout(2000);
    });
    test('student management ', async ({ page }) => {
        // await page.goto("https://www.saucedemo.com/");

        const emp = new employer(page);
        await emp.goto();
        await emp.openEmployerLogin();
        await emp.viewAndUpdate();
        await page.waitForTimeout(4000);
        await emp.logOut();
        await page.waitForTimeout(2000);

    });

});