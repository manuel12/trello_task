module.exports = {
	url: 'https://trello.com/b/MJDsXbMJ/next-vacation',
	elements: {
		listCard: '#board > div.js-list.list-wrapper > div > div.list-cards.u-fancy-scrollbar.u-clearfix.js-list-cards.js-sortable.ui-sortable > a:nth-child(1)',
		cardMenu: '#chrome-container > div.window-overlay > div > div',
		closeCardMenuBtn: '#chrome-container > div.window-overlay > div > div > a'

	},

	commands: [{
		openCardMenu() {
			return this
			.waitForElementVisible('@listCard', 5000)
			.click('@listCard')
		},

		closeCardMenu() {
			return this
			.waitForElementVisible('@closeCardMenuBtn', 2000)
			.click('@closeCardMenuBtn')
		}

	}]
}
