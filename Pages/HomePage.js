const { expect } = require('@playwright/test');

/**
 * @typedef {import('@playwright/test').Page} Page
 */
import HomePageLocaters from "../Locaters/HomepageLocaters";
class HomePage {
    /**
    * @param {Page} page
    */
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