const { expect } = require("@playwright/test");
import HomePageLocaters from "../Locaters/HomepageLocaters";
class HomePage {
    constructor(page) {
        this.page = page
    }
    async verifyHomePage() {
        await expect(this.page.locator(HomePageLocaters.userIcon)).toBeVisible()
    }

    async logoutFromApp() {
        await this.page.click(HomePageLocaters.userIcon)
        await this.page.click(HomePageLocaters.logoutButton)
    }
}

module.exports = HomePage;