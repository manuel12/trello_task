module.exports = {
	abortOnAssertionFailure: false,

	beforeEach: function(browser, cb) {
		browser
			.maximizeWindow();
		cb();
	}
}

function login() {

}
