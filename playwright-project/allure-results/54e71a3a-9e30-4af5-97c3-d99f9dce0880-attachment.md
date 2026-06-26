# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: irctc_booking.spec.js >> irctc testing >> login
- Location: tests\irctc_booking.spec.js:7:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { Irctc } = require('../pages/irctspage');
  3  | const { error } = require('node:console');
  4  | 
  5  | test.describe('irctc testing', () => {
  6  | 
  7  |     test('login', async ({ page }) => {
  8  |         const login = new Irctc(page);
  9  |         await login.goto();
  10 | 
  11 |         const languagePopup = page.locator("//button[text()='English']");
  12 |         if (await languagePopup.isVisible()) {
  13 |             await page.getByText('English').click();
  14 |         }
> 15 |         await page.waitForTimeout(2000);
     |                    ^ Error: page.waitForTimeout: Test ended.
  16 |      
  17 | 
  18 |     })
  19 |     test('Book ticket', async ({ page }) => {
  20 |         const login = new Irctc(page);
  21 |         await login.goto();
  22 |         const languagePopup = page.locator("//button[text()='English']");
  23 |         if (await languagePopup.isVisible()) {
  24 |             await page.getByText('English').click();
  25 |         }
  26 |         const booking = new Irctc(page);
  27 |         await booking.from();
  28 |         await page.waitForTimeout(2000);
  29 |     })
  30 | })
```