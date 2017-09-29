"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var managerPage_1 = require("../Pages/managerPage");
var protractor_1 = require("protractor");
var loginPage_1 = require("../Pages/loginPage");
var protractor_2 = require("protractor");
describe("Manager Page Functionality", function () {
    var beforeColor = 'rgba(221, 221, 221, 1)';
    var afterColor = 'rgba(40, 96, 144, 1)';
    var url = 'http://www.way2automation.com/angularjs-protractor/banking/#/login';
    //Test case #1
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
    //Test case #2
    it("Home button should take the user back to the login page", function () {
        loginPage_1.loginPage.homeButton.click();
        protractor_1.browser.getCurrentUrl().then(function (value) {
            expect(value).toBe(url);
        });
    });
    //Test case #3
    it("A pop up should be displayed when we add customer without entering any detail", function () {
        loginPage_1.loginPage.managerLoginButton.click();
        managerPage_1.managerPage.addCustomer.click();
        managerPage_1.managerPage.addCustomer_info.click();
        managerPage_1.managerPage.firstName.getAttribute('class').then(function (value) {
            expect(value).toContain('ng-invalid');
        });
    });
    //Test case #4
    it("Validations of last name and post code", function () {
        // managerPage.lastName.sendKeys("kfgjkf");
        managerPage_1.managerPage.addCustomer_info.click();
        managerPage_1.managerPage.lastName.getAttribute('class').then(function (value) {
            expect(value).toContain('ng-invalid');
        });
        managerPage_1.managerPage.postCode.getAttribute('class').then(function (value) {
            expect(value).toContain('ng-invalid');
        });
    });
    //Test case #5
    it("Enter all details and add customer", function () {
        managerPage_1.managerPage.firstName.sendKeys("Henry");
        managerPage_1.managerPage.lastName.sendKeys("Ford");
        managerPage_1.managerPage.postCode.sendKeys("0123");
        managerPage_1.managerPage.addCustomer_info.click();
        protractor_1.browser.sleep(3000);
        expect(protractor_1.browser.switchTo().alert().getText()).toContain('Customer added successfully');
        protractor_1.browser.switchTo().alert().accept();
    });
    //Test case #6
    it("Enter duplicate details of customer", function () {
        managerPage_1.managerPage.firstName.sendKeys("Henry");
        managerPage_1.managerPage.lastName.sendKeys("Ford");
        managerPage_1.managerPage.postCode.sendKeys("0123");
        managerPage_1.managerPage.addCustomer_info.click();
        protractor_1.browser.sleep(3000);
        expect(protractor_1.browser.switchTo().alert().getText()).toContain('Please check the details. Customer may be duplicate.');
        protractor_1.browser.switchTo().alert().accept();
    });
    //Test case #7
    it("Check the newly created customer page in the customer dropdown", function () {
        managerPage_1.managerPage.openAccount.click();
        managerPage_1.managerPage.customer_account.click();
        protractor_2.element(protractor_2.by.id('userSelect')).findElement(protractor_2.by.tagName('option')).findElement(protractor_2.by.value('Henry Ford')).then(function (item) {
            expect(item).toContain('Henry Ford');
        });
        // element.all(by.id('userSelect')).then(function (itemList) {
        //     for ( var i = 0; i < itemList.length; i++) {
        //         itemList[i].getText().then(function (text) {  
        //             if(text
        //             {
        //                 expect(text).toBe('Henry Ford');
        //             }
        //          });
        //     };
        // });
        // expect(managerPage.customer_account.all(by.tagName('option'))).toContain('Henry Ford');
    });
});
//# sourceMappingURL=managerPage.js.map