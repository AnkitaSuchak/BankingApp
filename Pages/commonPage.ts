
import {browser} from 'protractor'

    export class commonPage{

        static openBrowser(url){
            browser.get(url);
        }
    }