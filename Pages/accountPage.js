"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var accountPage = /** @class */ (function () {
    function accountPage() {
    }
    accountPage.login_url = "http://www.way2automation.com/angularjs-protractor/banking/#/login/";
    accountPage.logout_url = "http://www.way2automation.com/angularjs-protractor/banking/#/login/";
    accountPage.name_cust = "Harry Potter";
    accountPage.def_currency = "Dollar";
    accountPage.currency_1 = "Pound";
    accountPage.currency_2 = "Rupee";
    accountPage.deposit_string = "Deposit Successful";
    accountPage.withdrawal_string = "Transaction successful";
    accountPage.home = protractor_1.element(protractor_1.by.cssContainingText('button', 'Home'));
    accountPage.logout = protractor_1.element(protractor_1.by.cssContainingText('button', 'Logout'));
    accountPage.name_customer = protractor_1.element(protractor_1.by.xpath('html/body/div[3]/div/div[2]/div/div[1]/strong/span'));
    accountPage.acc_no = protractor_1.element(protractor_1.by.id("accountSelect"));
    accountPage.acc_no_verify = protractor_1.element(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[2]/strong[1]"));
    accountPage.currency = protractor_1.element(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[2]/strong[1]"));
    accountPage.currency_pound = protractor_1.element(protractor_1.by.cssContainingText('option', '1005'));
    accountPage.currency_rupee = protractor_1.element(protractor_1.by.cssContainingText('option', '1006'));
    accountPage.deposit = protractor_1.element(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[3]/button[2]"));
    accountPage.amount = protractor_1.element(protractor_1.by.model("amount"));
    accountPage.deposit_submit = protractor_1.element(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/form/button"));
    accountPage.withdrawal = protractor_1.element(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[3]/button[3]"));
    accountPage.withdraw_submit = protractor_1.element(protractor_1.by.cssContainingText('button', 'Withdraw'));
    accountPage.deposit_success = protractor_1.element(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/span"));
    accountPage.withdrawal_success = protractor_1.element(protractor_1.by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/span"));
    return accountPage;
}());
exports.accountPage = accountPage;
//# sourceMappingURL=accountPage.js.map