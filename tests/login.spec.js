const { test, expect } = require('@playwright/test');


test('Login form validation', async ({ page }) => {
  await page.goto('/login.html');
  await page.fill('#username', 'admin');
  await page.fill('#password', '1234');
  //await page.click('text=Login');
  await page.evaluate(() => {
    login(); // directly call the login function from within the page
  });
  // await page.waitForTimeout(2000);
  await expect(page.locator('#message')).toHaveText('Login successful');
});
