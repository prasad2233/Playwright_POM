const { expect } = require("@playwright/test");
import LoginPageLocaters from "../Locaters/LoginPageLocaters";
class LoginPage {
    constructor(page) {
        this.page = page;
    }
    async loginToApplication(userName, password) {
        await this.verifyLoginPage()
        await this.page.fill(LoginPageLocaters.userName, userName)
        await this.page.fill(LoginPageLocaters.password, password)
        await this.page.click(LoginPageLocaters.LoginButton)
    }

    async verifyLoginPage() {
        await expect(this.page.locator(LoginPageLocaters.userName)).toBeVisible()
    }

    async registerNewUser({ firstName, lastName, regUserName, password, confirmPassword, gender }) {
        await this.page.fill(LoginPageLocaters.firstName, firstName)
        await this.page.fill(LoginPageLocaters.lastName, lastName)
        await this.page.fill(LoginPageLocaters.regUserName, regUserName)
        await this.page.fill(LoginPageLocaters.password, password)
        await this.page.fill(LoginPageLocaters.confirmPassword, confirmPassword)
        await this.page.check(LoginPageLocaters.gender(gender))
    }

    async clickOnRegisterButton() {
        const registerButton = this.page.locator(LoginPageLocaters.registerButton);
        await registerButton.waitFor({ state: 'attached', timeout: 5000 });
        await registerButton.waitFor({ state: 'visible' });
        await registerButton.scrollIntoViewIfNeeded();
        await expect(registerButton).toBeEnabled();
        await registerButton.click();
    }
}
module.exports = LoginPage;