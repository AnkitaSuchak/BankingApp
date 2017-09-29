"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var customerPage = /** @class */ (function () {
    function customerPage() {
    }
    customerPage.yourName = protractor_1.element(protractor_1.by.cssContainingText('label', 'Your Name :'));
    return customerPage;
}());
exports.customerPage = customerPage;
//# sourceMappingURL=customerPage.js.map