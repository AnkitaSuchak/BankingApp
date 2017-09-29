"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var managerPage = /** @class */ (function () {
    function managerPage() {
    }
    managerPage.addCustomer = protractor_1.element(protractor_1.by.cssContainingText('button', 'Add Customer'));
    managerPage.addCustomer_info = protractor_1.element(protractor_1.by.className('btn btn-default'));
    managerPage.firstName = protractor_1.element(protractor_1.by.model('fName'));
    managerPage.lastName = protractor_1.element(protractor_1.by.model('lName'));
    managerPage.postCode = protractor_1.element(protractor_1.by.model('postCd'));
    managerPage.openAccount = protractor_1.element(protractor_1.by.cssContainingText('button', 'Open Account'));
    managerPage.customer_account = protractor_1.element(protractor_1.by.id('userSelect'));
    return managerPage;
}());
exports.managerPage = managerPage;
//# sourceMappingURL=managerPage.js.map