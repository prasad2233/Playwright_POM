const { expect, test } = require("@playwright/test");
import LoginPage from "../Pages/loginpage"
const HomePage = require("../Pages/HomePage")

test("Login to the application with valid crediatils", async ({ page }) => {
    await page.goto("https://bookcart.azurewebsites.net/login")

    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    await loginPage.loginToApplication()
    await homePage.verifyHomePage()
    await homePage.logoutFromApp()
    await loginPage.verifyLoginPage()
})