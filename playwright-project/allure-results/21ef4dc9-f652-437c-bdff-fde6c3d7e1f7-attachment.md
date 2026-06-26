# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: irctc_booking.spec.js >> irctc testing >> Book ticket
- Location: tests\irctc_booking.spec.js:19:5

# Error details

```
ReferenceError: context is not defined
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { Irctc } = require('../pages/irctspage');
  3  | const { error } = require('node:console');
  4  | 
  5  | test.describe('irctc testing', () => {
  6  | 
  7  |     // test('login', async ({ page }) => {
  8  |     //     const login = new Irctc(page);
  9  |     //     await login.goto();
  10 | 
  11 |     //     const languagePopup = page.locator("//button[text()='English']");
  12 |     //     if (await languagePopup.isVisible()) {
  13 |     //         await page.getByText('English').click();
  14 |     //     }
  15 |     //     await page.waitForTimeout(2000);
  16 | 
  17 | 
  18 |     // })
  19 |     test('Book ticket', async ({ page }) => {
  20 |         const login = new Irctc(page);
> 21 |         await context.clearCookies();
     |         ^ ReferenceError: context is not defined
  22 |         await login.goto();
  23 |         const languagePopup = page.locator("//button[text()='English']");
  24 |         if (await languagePopup.isVisible()) {
  25 |             await page.getByText('English').click();
  26 |         }
  27 |         //await page.locator('//a[contains(@class,"loginCloseBtn")]').click();
  28 | 
  29 |        
  30 | 
  31 |         const fromStation = new Irctc(page);
  32 |         await fromStation.selectFromStation('TCR');
  33 |         await page.waitForTimeout(2000);
  34 | 
  35 |         const toStation = new Irctc(page);
  36 |         await toStation.selectToStation('PGT');
  37 |         await page.waitForTimeout(2000);
  38 | 
  39 |         const date = new Irctc(page);
  40 |         await date.selectDate();
  41 |         await page.waitForTimeout(2000);
  42 | 
  43 |     })
  44 | })
```