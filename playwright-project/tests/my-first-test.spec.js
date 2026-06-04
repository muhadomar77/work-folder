import { test, expect } from '@playwright/test';



// test('has title', async ({ page }) => {
//   await page.goto('https://www.flipkart.com/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com/);
// });
 test('get started link works', async ({ page }) => {
 await page.goto('https://www.amazon.in/');
 await page.getByRole('link', { name: 'About Amazon' }).click(); 
await expect(page).toHaveURL('https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer');
});

