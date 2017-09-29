"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var loginPage = /** @class */ (function () {
    function loginPage() {
    }
    loginPage.bankName = protractor_1.element(protractor_1.by.className('mainHeading'));
    loginPage.customerLoginButton = protractor_1.element(protractor_1.by.cssContainingText('button', 'Customer Login'));
    loginPage.managerLoginButton = protractor_1.element(protractor_1.by.cssContainingText('button', 'Bank Manager Login'));
    return loginPage;
}());
exports.loginPage = loginPage;
//# sourceMappingURL=loginPage.js.map