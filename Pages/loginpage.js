const { expect } = require("@playwright/test");
import LoginPageLocaters from "../Locaters/LoginPageLocaters";
class LoginPage {
    constructor(page) {
        this.page = page;
    }
    async loginToApplication() {
        await this.verifyLoginPage()
        await this.page.fill(LoginPageLocaters.userName, "prasad")
        await this.page.fill(LoginPageLocaters.password, "Userme@11")
        await this.page.click(LoginPageLocaters.LoginButton)
    }

    async verifyLoginPage(){
        await expect(this.page.locator(LoginPageLocaters.userName)).toBeVisible()
    }

}
module.exports = LoginPage;