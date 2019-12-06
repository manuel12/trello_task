module.exports = (browser) => {
	const self = browser;
	const atlLoginPage = browser.page.attlasianLogin();
	const loginPage = browser.page.login();
	const mainPage = browser.page.main();
	const boardPage = browser.page.board();


	self.setup = () => {
		loginPage.login()
		atlLoginPage.login()
		mainPage.waitForElementVisible('@mainContent', 20000)
		boardPage.navigate();
	},
	
	self.openCardMenu = () => {
		boardPage
			.openCardMenu()
			.expect.element('@cardMenu').to.be.visible;
	},

	self.closeCardMenu = () => {
		boardPage
			.closeCardMenu()
			.expect.element('@cardMenu').to.not.be.visible;
	}
	return self;
}