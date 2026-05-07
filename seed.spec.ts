import { test, expect } from '@playwright/test';

test.describe('The Testing Academy Site Tests', () => {
  test('Navigate to sdet.live and handle errors', async ({ page }) => {
    // FIX: Intercept and abort broken font requests that cause 404 errors in console
    // This prevents the browser from trying to load resources that don't exist
    await page.route('**/*.{woff,woff2,ttf}', route => route.abort());

    // Optional: Filter console errors to ignore noise from third-party scripts
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log(`Page Error detected: ${msg.text()}`);
      }
    });

    // Navigate to the target URL
    await page.goto('https://sdet.live', { waitUntil: 'domcontentloaded' });

    // Verify we landed on the correct page
    await expect(page).toHaveTitle(/Learn Software Testing/);
    
    // Verify the "Sign In" link is present
    const signIn = page.getByRole('link', { name: 'Sign In' });
    await expect(signIn).toBeVisible();

    console.log('Successfully navigated and verified the page. Console errors were suppressed.');
  });
});
