import { test, expect } from '@playwright/test';

test('drag and drop example', async ({ page }) => {

  await page.goto('https://vinothqaacademy.com/mouse-event/');

  const source = page.locator('#dragItem');
  const target = page.locator('#dropZone');

  await source.dragTo(target);

  await expect(target).toContainText('Dropped!');
});