module.exports = {
	url: 'https://trello.com/login',
	elements: {
		passInputField: '#password',
		loginBtn: '#login-submit'

	},

	commands: [{
		setCredentials(selector, value) {
			return this
				.setValue(selector, value)
		},

		login(user, pass, cb) {
			return	this
			.waitForElementVisible('@loginBtn', 2000)
			.click('@loginBtn')
			.waitForElementVisible('@passInputField', 2000)	
			.setCredentials('@passInputField', process.env.TRELLO_PASS)
			.waitForElementVisible('@loginBtn', 2000)
			.click('@loginBtn')
		}
	}]
}
