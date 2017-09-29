"use strict";
/* Author: Anuj Gupta
----------------TEST CASES:--------------
#1 Page title should be "Protractor Practice website - Banking App"
#2 Login Page should have bank name: "XYZ Bank"
#3 Customer login button should be present on the screen
#4 Mouse over customer login and bank manager login buttons should change the css of the buttons
#5 Clicking on Customer Login button should land the user on customer page
#6 Clicking on Bank Manager Login button should land the user on manager page
*/
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var commonPage_1 = require("../Pages/commonPage");
var loginPage_1 = require("../Pages/loginPage");
var customerPage_1 = require("../Pages/customerPage");
var managerPage_1 = require("../Pages/managerPage");
//Test Starts here...
describe('Login Page functionality', function () {
    protractor_1.browser.manage().window().maximize();
    // Variable to provide reference to the json file to fetch data
    var data = require('../Utilities/data.json');
    // Variables to store expected title & bank name
    var pageTitle = 'Protractor practice website - Banking App';
    var bankName = 'XYZ Bank';
    var beforeColor = 'rgba(51, 122, 183, 1)';
    var afterColor = 'rgba(40, 96, 144, 1)';
    beforeEach(function () {
        commonPage_1.commonPage.openBrowser(data.url);
    });
    //Test case #1
    it('Verifies page title', function () {
        protractor_1.browser.getTitle().then(function (value) {
            expect(value).toEqual(pageTitle);
        });
    });
    //Test case #2
    it('Verifies bank name', function () {
        loginPage_1.loginPage.bankName.getText().then(function (value) {
            expect(value).toEqual(bankName);
        });
    });
    //Test case #3
    it('Verifies if customer button is present on the page', function () {
        loginPage_1.loginPage.customerLoginButton.isDisplayed().then(function (value) {
            expect(value).toEqual(true);
        });
    });
    //Test case #4
    it('Verifies if css of the button changes on mouse over', function () {
        loginPage_1.loginPage.customerLoginButton.getCssValue('background-color').then(function (value) {
            expect(value).toEqual(beforeColor);
        });
        protractor_1.browser.actions().mouseMove(loginPage_1.loginPage.customerLoginButton).perform();
        loginPage_1.loginPage.customerLoginButton.getCssValue('background-color').then(function (value) {
            expect(value).toEqual(afterColor);
        });
    });
    //Test case #5
    it('Verifies if customer login button navigates to the right page', function () {
        loginPage_1.loginPage.customerLoginButton.click();
        customerPage_1.customerPage.yourName.isDisplayed().then(function (value) {
            expect(value).toEqual(true);
            //            browser.navigate().back()
        });
    });
    //Test case #6
    it('Verifies if manager login button navigates to the right page', function () {
        loginPage_1.loginPage.managerLoginButton.click();
        managerPage_1.managerPage.addCustomer.isDisplayed().then(function (value) {
            expect(value).toEqual(true);
            //                    browser.navigate().back()
        });
    });
});
//# sourceMappingURL=loginPage.js.map