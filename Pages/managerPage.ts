
import { element,by } from 'protractor'

export class managerPage {

    static addCustomer = element(by.cssContainingText('button','Add Customer'))
    static addCustomer_info=element(by.className('btn btn-default'));
    static firstName= element(by.model('fName'));
    static lastName=element(by.model('lName'));
    static postCode=element(by.model('postCd'));
    static openAccount = element(by.cssContainingText('button','Open Account'))
    static customer_account = element(by.id('userSelect'));
    

    
    
}