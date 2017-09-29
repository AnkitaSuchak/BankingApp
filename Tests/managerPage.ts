import { managerPage } from '../Pages/managerPage';
import { browser } from 'protractor'
import {loginPage} from '../Pages/loginPage';

describe("Manager Page Functionality", () => {

    var beforeColor: string = 'rgba(221, 221, 221, 1)'
    var afterColor = 'rgba(40, 96, 144, 1)'
    var url= 'http://www.way2automation.com/angularjs-protractor/banking/#/login'

    it("Verifies if css of the add customer button changes on mouse click", () => {

        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/manager');
        managerPage.addCustomer.getCssValue('background-color').then((value) => {
            expect(value).toBe(beforeColor);
        });

        managerPage.addCustomer.click();

        managerPage.addCustomer.getCssValue('background-color').then((value) => {
            expect(value).toBe(afterColor);
        });

    });

    it("Home button should take the user back to the login page", ()=>{

        loginPage.homeButton.click();
        browser.getCurrentUrl().then((value)=>{
            expect(value).toBe(url);
        });

    });

});