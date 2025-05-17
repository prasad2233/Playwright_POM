const { test, expect } = require('@playwright/test')

test("Valid Login test", async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle("OrangeHRM")
    await page.getByPlaceholder("Username").pressSequentially("Admin")
    await page.getByPlaceholder("password").fill("admin123")
    await Promise.all([
        page.getByRole('button').click(),
        page.waitForURL('**/dashboard/index')
    ]);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await expect(page.locator(".orangehrm-upgrade-link")).toBeVisible()
    await page.locator('.oxd-userdropdown-name').click();
    await page.locator(`//a[normalize-space()='Logout']`).click();
})

test("Login and Logout", async () => {
    //
    expect(23).toBe(23)
})

test("validation for fields login Login test", async () => {
    //
    expect(23).toBe(23)
})