"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var commonPage = /** @class */ (function () {
    function commonPage() {
    }
    commonPage.openBrowser = function (url) {
        protractor_1.browser.get(url);
    };
    return commonPage;
}());
exports.commonPage = commonPage;
//# sourceMappingURL=commonPage.js.map