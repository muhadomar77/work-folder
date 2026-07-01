const { test, expect } = require('@playwright/test');
const { JobSeeker } = require('../pages/jobSeeker');
const { error } = require('node:console');


test.describe('camerin testing', () => {
    //login test
    test('job seeker ', async ({ page }) => {
        // await page.goto("https://www.saucedemo.com/");

        const jobSeeker = new JobSeeker(page);
        await jobSeeker.goto();
        await jobSeeker.openJobSeeker();
        await jobSeeker.registration();
        await page.waitForTimeout(2000);
    });
});