module.exports = {
	url: 'https://trello.com/login',
	elements: {
		userInputField: '#user',
		passInputField: '#password',
		loginBtn: '#login'
	},

	commands: [{
		setCredentials(selector, value) {
			return this
				.setValue(selector, value)
		},

		login() {
			return this
			.navigate()
		 	.setCredentials('@userInputField', process.env.TRELLO_USER)
		 	.click('@loginBtn')
		 	.waitForElementVisible('@loginBtn', 2000)
			.click('@loginBtn');

		}
	}]
}
