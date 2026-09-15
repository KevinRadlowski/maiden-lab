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
