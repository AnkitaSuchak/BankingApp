"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("Accounts page functionality", function () {
    it("Opens website", function () {
        protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        protractor_1.element(protractor_1.by.cssContainingText('button', 'Customer Login')).click();
        protractor_1.element(protractor_1.by.id("userSelect")).element(protractor_1.by.css('value=[2]')).click();
    });
    // it("Navigates to the login page",()=>{
    //     accountPage.home.click();
    //     browser.getCurrentUrl().then((value)=>{
    //         expect(value).toEqual(accountPage.login_url);
    //     })
    // })
    // it("Navigates to the customer page",()=>{
    //     accountPage.logout.click();
    //     browser.getCurrentUrl().then((value)=>{
    //         expect(value).toBe(accountPage.logout_url);
    //     })
    // })
    // it("Verifies the name of the account holder",()=>{
    //     accountPage.name_customer.getText().then((value)=>{
    //         expect(value).toBe(accountPage.name_cust);
    //     })
    // })
    // it("Verifies the account number",()=>{
    //     accountPage.acc_no.getText().then((value)=>{
    //         //var abc=value;
    //         accountPage.acc_no_verify.getText().then((value1)=>{
    //             expect(value1).toBe(value);
    //         })
    //     })
    // })
    // it("Changing the currency",()=>{
    //     accountPage.currency.getText().then((value)=>{
    //         expect(value).toBe(accountPage.def_currency);
    //     })
    //     accountPage.acc_no.accountPage.currency_pound.click();
    //     accountPage.currency.getText().then((value)=>{
    //         expect(value).toBe(accountPage.currency_1);
    //     })
    //     accountPage.acc_no.accountPage.currency_rupee.click();
    //     accountPage.currency.getText().then((value)=>{
    //         expect(value).toBe(accountPage.currency_2);
    //     })
    // })
    // it("Verifies the css of deposit button",()=>{
    //     var color_current,color_after;
    //     accountPage.deposit.getCssValue('background-color').then((value)=>{
    //         color_current=value;
    //     })
    //     accountPage.deposit.click();
    //     accountPage.deposit.getCssValue('background-color').then((value1)=>{
    //         color_after=value1;
    //     })
    //     expect(color_current).toBe(color_after);
    // })
    // it("Verifies the css of withdrawl button",()=>{
    //     var color_current,color_after;
    //     accountPage.withdrawal.getCssValue('background-color').then((value)=>{
    //         color_current=value;
    //     })
    //     accountPage.withdrawal.click();
    //     accountPage.withdrawal.getCssValue('background-color').then((value1)=>{
    //         color_after=value1;
    //     })
    //     expect(color_current).toBe(color_after);
    // })
    // it("Deposits amount",()=>{
    //     accountPage.deposit.click();
    //     accountPage.amount.sendKeys("500");
    //     accountPage.deposit_submit.click();
    //     accountPage.deposit_success.getText().then((value)=>{
    //         expect(value).toBe(accountPage.deposit_string);
    //     })
    // })
    // it("Withdraws amount",()=>{
    //     accountPage.withdrawal.click();
    //     accountPage.amount.sendKeys("100");
    //     accountPage.withdraw_submit.click();
    //     accountPage.withdrawal_success.getText().then((value)=>{
    //         expect(value).toBe(accountPage.withdrawal_string);
    //     })
    // })
});
//# sourceMappingURL=account.js.map