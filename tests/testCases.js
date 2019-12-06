const testRunner = require('./../utils/testUtils')

module.exports = {
  'Open card menu' : (browser) => {
    testRunner(browser).setup();
    testRunner(browser).openCardMenu();
  },

  'Close card menu' : (browser) => {
    testRunner(browser).closeCardMenu();
  }
};