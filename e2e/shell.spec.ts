import { expect, test } from '@playwright/test';

test.describe('Shell et navigation', () => {
  test('affiche la marque MAIDEN/LAB et la navigation desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    await expect(page.getByRole('link', { name: 'MAIDEN/LAB — Accueil' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Navigation principale' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projets' })).toBeVisible();
  });

  test('marque le lien actif avec aria-current', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/projets');

    await expect(page.getByRole('link', { name: 'Projets' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  test('maintient Projets actif sur une case study', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/projets/mcprevention');

    await expect(page.getByRole('link', { name: 'Projets' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  test('permet le skip link et le focus sur le contenu principal', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Aller au contenu principal' })).toBeFocused();

    await page.keyboard.press('Enter');
    await expect(page.locator('#main-content')).toBeFocused();
  });

  test('focus le contenu principal après navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    await page.getByRole('link', { name: 'Projets' }).click();
    await expect(page).toHaveURL('/projets');
    await expect(page.locator('#main-content')).toBeFocused();
  });

  test('persiste le thème choisi', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    await page.evaluate(() => localStorage.removeItem('maidenlab-theme'));
    await page.reload();

    await page.getByRole('button', { name: 'Activer le thème sombre' }).click();
    await expect(page.locator('html[data-theme="dark"]')).toBeVisible();

    await page.reload();
    await expect(page.locator('html[data-theme="dark"]')).toBeVisible();
  });
});

test.describe('Navigation mobile', () => {
  test('ouvre et ferme le menu mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const menuButton = page.locator('.header__menu-button');
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    await expect(
      page.getByRole('navigation', { name: 'Navigation principale mobile' }),
    ).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('.header__nav--mobile')).toHaveCount(0);
  });

  test('ferme le menu après navigation', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
    await page
      .getByRole('navigation', { name: 'Navigation principale mobile' })
      .getByRole('link', { name: 'Lab' })
      .click();

    await expect(page).toHaveURL('/lab');
    await expect(page.getByRole('button', { name: 'Ouvrir le menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });
});
