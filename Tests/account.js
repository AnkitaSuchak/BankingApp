"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var accountPage_1 = require("../Pages/accountPage");
var protractor_1 = require("protractor");
describe("Accounts page functionality", function () {
    // it("Opens website",()=>{
    //     browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    //     element(by.cssContainingText('button','Customer Login')).click();
    //     element(by.id("userSelect")).element(by.css('value=[2]')).click();
    // })
    it("Navigates to the login page", function () {
        accountPage_1.accountPage.home.click();
        protractor_1.browser.getCurrentUrl().then(function (value) {
            expect(value).toBe(accountPage_1.accountPage.login_url);
        });
    });
    it("Navigates to the customer page", function () {
        accountPage_1.accountPage.logout.click();
        protractor_1.browser.getCurrentUrl().then(function (value) {
            expect(value).toBe(accountPage_1.accountPage.logout_url);
        });
    });
    it("Verifies the name of the account holder", function () {
        accountPage_1.accountPage.name_customer.getText().then(function (value) {
            expect(value).toBe(accountPage_1.accountPage.name_cust);
        });
    });
    it("Verifies the account number", function () {
        accountPage_1.accountPage.acc_no.getText().then(function (value) {
            //var abc=value;
            accountPage_1.accountPage.acc_no_verify.getText().then(function (value1) {
                expect(value1).toBe(value);
            });
        });
    });
    it("Changing the currency", function () {
        accountPage_1.accountPage.currency.getText().then(function (value) {
            expect(value).toBe(accountPage_1.accountPage.def_currency);
        });
        accountPage_1.accountPage.acc_no.accountPage.currency_pound.click();
        accountPage_1.accountPage.currency.getText().then(function (value) {
            expect(value).toBe(accountPage_1.accountPage.currency_1);
        });
        accountPage_1.accountPage.acc_no.accountPage.currency_rupee.click();
        accountPage_1.accountPage.currency.getText().then(function (value) {
            expect(value).toBe(accountPage_1.accountPage.currency_2);
        });
    });
    it("Verifies the css of deposit button", function () {
        var color_current, color_after;
        accountPage_1.accountPage.deposit.getCssValue('background-color').then(function (value) {
            color_current = value;
        });
        accountPage_1.accountPage.deposit.click();
        accountPage_1.accountPage.deposit.getCssValue('background-color').then(function (value1) {
            color_after = value1;
        });
        expect(color_current).not.toBe(color_after);
    });
    it("Verifies the css of withdrawl button", function () {
        var color_current, color_after;
        accountPage_1.accountPage.withdrawal.getCssValue('background-color').then(function (value) {
            color_current = value;
        });
        accountPage_1.accountPage.withdrawal.click();
        accountPage_1.accountPage.withdrawal.getCssValue('background-color').then(function (value1) {
            color_after = value1;
        });
        expect(color_current).not.toBe(color_after);
    });
    it("Deposits amount", function () {
        accountPage_1.accountPage.deposit.click();
        accountPage_1.accountPage.amount.sendKeys("500");
        accountPage_1.accountPage.deposit_submit.click();
        accountPage_1.accountPage.deposit_success.getText().then(function (value) {
            expect(value).toBe(accountPage_1.accountPage.deposit_string);
        });
    });
    it("Withdraws amount", function () {
        accountPage_1.accountPage.withdrawal.click();
        accountPage_1.accountPage.amount.sendKeys("100");
        accountPage_1.accountPage.withdraw_submit.click();
        accountPage_1.accountPage.withdrawal_success.getText().then(function (value) {
            expect(value).toBe(accountPage_1.accountPage.withdrawal_string);
        });
    });
});
//# sourceMappingURL=account.js.map