"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var managerPage = /** @class */ (function () {
    function managerPage() {
    }
    managerPage.addCustomer = protractor_1.element(protractor_1.by.cssContainingText('button', 'Add Customer'));
    return managerPage;
}());
exports.managerPage = managerPage;
//# sourceMappingURL=managerPage.js.map