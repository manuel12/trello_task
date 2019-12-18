require('dotenv').config();
const chromedriver = require("chromedriver");

module.exports = {
  "src_folders" :         ["tests"],
  "page_objects_path" :   ["page_objects"],
  "globals_path"  :       "globalsModule.js",

  "webdriver" : {
    "start_process": true,
    "server_path": chromedriver.path,
    "cli_args": [
      "--log", "debug"
    ],
    "port": 9515
  },

  "test_settings" : {
    "default" : {
      "screenshots" : {
        "enabled": true,
        "on_failure": true,
        "on_error": true,
        "path": "tests_output/screenshots"
        },
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },
    "chrome": {
        "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}
