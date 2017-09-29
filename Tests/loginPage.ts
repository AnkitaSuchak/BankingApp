/* Author: Anuj Gupta
----------------TEST CASES:--------------
#1 Page title should be "Protractor Practice website - Banking App"
#2 Login Page should have bank name: "XYZ Bank"
#3 Customer login button should be present on the screen
#4 Mouse over customer login and bank manager login buttons should change the css of the buttons
#5 Clicking on Customer Login button should land the user on customer page
#6 Clicking on Bank Manager Login button should land the user on manager page
*/

import { browser } from 'protractor'
import { commonPage } from '../Pages/commonPage'
import { loginPage } from '../Pages/loginPage'
import { customerPage } from '../Pages/customerPage'
import { managerPage } from '../Pages/managerPage';

//Test Starts here...
describe('Login Page functionality', () => {

    browser.manage().window().maximize()
    // Variable to provide reference to the json file to fetch data
    var data = require('../Utilities/data.json')

    // Variables to store expected title & bank name
    var pageTitle = 'Protractor practice website - Banking App'
    var bankName = 'XYZ Bank'
    
    var beforeColor = 'rgba(51, 122, 183, 1)'
    var afterColor = 'rgba(40, 96, 144, 1)'

    beforeEach(()=>{
        commonPage.openBrowser(data.url)
    })

    //Test case #1
    it('Verifies page title', () => {
        
        browser.getTitle().then((value) => {
            expect(value).toEqual(pageTitle)
        })
    })

    //Test case #2
    it('Verifies bank name',()=>{
        
        loginPage.bankName.getText().then((value)=>{
            expect(value).toEqual(bankName)
        })
    })

    //Test case #3
    it('Verifies if customer button is present on the page',()=>{
        
        loginPage.customerLoginButton.isDisplayed().then((value)=>{
            expect(value).toEqual(true)
        })
    })

    //Test case #4
    it('Verifies if css of the button changes on mouse over',()=>{
        
        loginPage.customerLoginButton.getCssValue('background-color').then((value)=>{
            expect(value).toEqual(beforeColor)
        })
        browser.actions().mouseMove(loginPage.customerLoginButton).perform()
        
        loginPage.customerLoginButton.getCssValue('background-color').then((value)=>{
            expect(value).toEqual(afterColor)
        })
    })

    //Test case #5
    it('Verifies if customer login button navigates to the right page',()=>{

        loginPage.customerLoginButton.click()
        customerPage.yourName.isDisplayed().then((value)=>{
            expect(value).toEqual(true)
//            browser.navigate().back()
        })
    })

    //Test case #6
    it('Verifies if manager login button navigates to the right page',()=>{
        
                loginPage.managerLoginButton.click()
                managerPage.addCustomer.isDisplayed().then((value)=>{
                    expect(value).toEqual(true)
//                    browser.navigate().back()
                })
    })
})