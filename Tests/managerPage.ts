import { managerPage } from '../Pages/managerPage';
import { browser } from 'protractor'
import { loginPage } from '../Pages/loginPage';
import { element, by } from 'protractor'

describe("Manager Page Functionality", () => {

    var beforeColor: string = 'rgba(221, 221, 221, 1)'
    var afterColor = 'rgba(40, 96, 144, 1)'
    var url = 'http://www.way2automation.com/angularjs-protractor/banking/#/login'

    //Test case #1
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
    //Test case #2
    it("Home button should take the user back to the login page", () => {

        loginPage.homeButton.click();
        browser.getCurrentUrl().then((value) => {
            expect(value).toBe(url);
        });

    });

    //Test case #3
    it("A pop up should be displayed when we add customer without entering any detail", () => {

        loginPage.managerLoginButton.click();
        managerPage.addCustomer.click();
        managerPage.addCustomer_info.click();

        managerPage.firstName.getAttribute('class').then((value) => {
            expect(value).toContain('ng-invalid');
        });

    });

    //Test case #4
    it("Validations of last name and post code", () => {

        // managerPage.lastName.sendKeys("kfgjkf");
        managerPage.addCustomer_info.click();
        managerPage.lastName.getAttribute('class').then((value) => {
            expect(value).toContain('ng-invalid');
        });

        managerPage.postCode.getAttribute('class').then((value) => {
            expect(value).toContain('ng-invalid');
        });

    });

    //Test case #5
    it("Enter all details and add customer", () => {

        managerPage.firstName.sendKeys("Henry");
        managerPage.lastName.sendKeys("Ford");
        managerPage.postCode.sendKeys("0123");
        managerPage.addCustomer_info.click();
        browser.sleep(3000);
        expect(browser.switchTo().alert().getText()).toContain('Customer added successfully');

        browser.switchTo().alert().accept();
    });
    //Test case #6
    it("Enter duplicate details of customer", () => {

        managerPage.firstName.sendKeys("Henry");
        managerPage.lastName.sendKeys("Ford");
        managerPage.postCode.sendKeys("0123");
        managerPage.addCustomer_info.click();
        browser.sleep(3000);

        expect(browser.switchTo().alert().getText()).toContain('Please check the details. Customer may be duplicate.');

        browser.switchTo().alert().accept();
    });

    //Test case #7
    it("Check the newly created customer page in the customer dropdown", () => {

        managerPage.openAccount.click();
        managerPage.customer_account.click();
       
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

    //Test case #8
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
});