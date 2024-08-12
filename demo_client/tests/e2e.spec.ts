import { test, expect } from '@playwright/test';

test('renders application title', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await expect(page.getByRole('navigation').getByRole("link", { name: 'Demo app' })).toBeVisible();
});

test('shows message after signing in', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.getByRole('heading', { level: 1})).toHaveText('Test message');
});
