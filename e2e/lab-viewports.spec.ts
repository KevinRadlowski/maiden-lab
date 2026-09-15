import { expect, test } from '@playwright/test';

const viewports = [
  { name: '320x568', width: 320, height: 568 },
  { name: '375x667', width: 375, height: 667 },
  { name: '390x844', width: 390, height: 844 },
  { name: '768x1024', width: 768, height: 1024 },
  { name: '1024x768', width: 1024, height: 768 },
  { name: '1440x900', width: 1440, height: 900 },
  { name: '1920x1080', width: 1920, height: 1080 },
] as const;

test.describe('Calibration visuelle /lab', () => {
  for (const viewport of viewports) {
    test(`rend sans overflow horizontal en ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/lab');

      const overflow = await page.evaluate(() => {
        const doc = document.documentElement;
        return doc.scrollWidth - doc.clientWidth;
      });

      expect(overflow).toBeLessThanOrEqual(1);
      await expect(page.getByRole('heading', { level: 1, name: 'MAIDEN/LAB' })).toBeVisible();
    });
  }

  test('dark mode — spécimens visibles à 1440px', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/lab');
    await page.getByRole('button', { name: /Thème sombre/i }).click();

    await expect(page.locator('html[data-theme="dark"]')).toBeVisible();
    await expect(page.locator('.lab-swatches')).toBeVisible();
    await expect(page.locator('.lab-surfaces')).toBeVisible();
    await expect(page.locator('.lab-borders')).toBeVisible();
  });
});
