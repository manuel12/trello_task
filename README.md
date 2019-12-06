# The Trello Task
A web automation task over the Trello website

**TO RUN THE TESTS:**

INSTALLATION: - Type the following commands on console:

  npm install nightwatch
  
  npm install chromedriver --save-dev
  
  npm install selenium-server --save-dev
  
  or
  
  npm install ;)

RUNNING TESTS:

npm test


**TEST CASE DOCUMENTATION:**

The tests cases are located under *tests/testCases.js*.

In this case there are 2 examples 'Open card menu' & 'Close card menu'.
Both of this functionalities are requried from from the *utils/testUtils.js* were they declared.

The *testUtils.js* in turn grabs all the necesary functionality from all different Page Objects and an assertion at the end of each test.

Under *page_objects/* we have login, attlasianLogin, main & board, which provide the interactive functionality we need for our tests.

*Nightwatch.js* provides some simple configuration: test should run on chromedriver, some  and ports to use.
*Nighwatch.conf.js* patches an issue related to chromedriver not being found under it's current location.

*The globalsModule.js* takes care of maximising the browser window before each run, adding for better visibility of the test runs. Also has added *abortOnAssertionFailure* as false, which will not kill the browser if an assertion fails, instead it will keep going, testing all subsequent assertions.
