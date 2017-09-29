
import { element,by } from 'protractor'

export class customerPage {

    static yourName = element(by.cssContainingText('label','Your Name :'))
    
}