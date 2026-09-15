import { expect, test } from '@playwright/test';

test.describe('Navigation publique', () => {
  test('affiche le titre sur la page d’accueil', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1, name: 'Maiden Lab' })).toBeVisible();
  });

  test('permet d’accéder à la page projets', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Projets' }).click();
    await expect(page).toHaveURL('/projets');
    await expect(page.getByRole('heading', { level: 1, name: 'Projets' })).toBeVisible();
  });

  test('permet d’accéder à une étude de cas placeholder', async ({ page }) => {
    await page.goto('/projets');
    await page.getByRole('link', { name: 'MCPrévention' }).click();
    await expect(page).toHaveURL('/projets/mcprevention');
    await expect(page.getByRole('heading', { level: 1, name: 'MCPrévention' })).toBeVisible();
  });

  test('affiche une page 404 compréhensible pour une URL inconnue', async ({ page }) => {
    await page.goto('/url-inexistante');
    await expect(page.getByRole('heading', { level: 1, name: 'Page introuvable' })).toBeVisible();
  });
});

test.describe('Laboratoire design system (/lab)', () => {
  test('affiche le spécimen principal et les sections clés', async ({ page }) => {
    await page.goto('/lab');

    await expect(page.getByRole('heading', { level: 1, name: 'MAIDEN/LAB' })).toBeVisible();
    await expect(page.locator('.lab-swatches')).toBeVisible();
    await expect(page.locator('.lab-type-stack')).toBeVisible();
    await expect(page.locator('app-button').first()).toBeVisible();
    await expect(page.locator('app-text-link').first()).toBeVisible();
    await expect(page.locator('app-tag').first()).toBeVisible();
  });

  test('permet de basculer le thème sombre via le header global', async ({ page }) => {
    await page.goto('/lab');

    await page.getByRole('button', { name: 'Activer le thème sombre' }).click();
    await expect(page.locator('html[data-theme="dark"]')).toBeVisible();

    await page.getByRole('button', { name: 'Activer le thème clair' }).click();
    await expect(page.locator('html[data-theme="dark"]')).toHaveCount(0);
  });

  test('conserve une navigation clavier élémentaire', async ({ page }) => {
    await page.goto('/lab');

    await page.keyboard.press('Tab');
    const focusedTag = await page.evaluate(() => document.activeElement?.tagName);
    expect(['A', 'BUTTON', 'INPUT', 'MAIN']).toContain(focusedTag);
  });
});
