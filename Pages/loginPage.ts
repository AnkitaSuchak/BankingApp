
import { element,by } from 'protractor'

export class loginPage {

    static bankName = element(by.className('mainHeading'))
    static customerLoginButton = element(by.cssContainingText('button','Customer Login'))
    static managerLoginButton = element(by.cssContainingText('button','Bank Manager Login'))
    
}