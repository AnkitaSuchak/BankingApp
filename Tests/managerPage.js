"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var managerPage_1 = require("../Pages/managerPage");
var protractor_1 = require("protractor");
var loginPage_1 = require("../Pages/loginPage");
describe("Manager Page Functionality", function () {
    var beforeColor = 'rgba(221, 221, 221, 1)';
    var afterColor = 'rgba(40, 96, 144, 1)';
    var url = 'http://www.way2automation.com/angularjs-protractor/banking/#/login';
    it("Verifies if css of the add customer button changes on mouse click", function () {
        protractor_1.browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/manager');
        managerPage_1.managerPage.addCustomer.getCssValue('background-color').then(function (value) {
            expect(value).toBe(beforeColor);
        });
        managerPage_1.managerPage.addCustomer.click();
        managerPage_1.managerPage.addCustomer.getCssValue('background-color').then(function (value) {
            expect(value).toBe(afterColor);
        });
    });
    it("Home button should take the user back to the login page", function () {
        loginPage_1.loginPage.homeButton.click();
        protractor_1.browser.getCurrentUrl().then(function (value) {
            expect(value).toBe(url);
        });
    });
});
//# sourceMappingURL=managerPage.js.map