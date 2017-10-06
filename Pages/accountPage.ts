import { element,by } from 'protractor'

export class accountPage {
    
    static login_url="http://www.way2automation.com/angularjs-protractor/banking/#/login/";
    static logout_url="http://www.way2automation.com/angularjs-protractor/banking/#/login/";
    static name_cust="Harry Potter";
    static def_currency="Dollar";
    static currency_1="Pound";
    static currency_2="Rupee";
    static deposit_string="Deposit Successful";   
    static withdrawal_string="Transaction successful"; 

    static home = element(by.cssContainingText('button','Home'))
    static logout=element(by.cssContainingText('button','Logout'));
    static name_customer=element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/strong/span'));
    static acc_no= element(by.id("accountSelect"));
    static acc_no_verify=element(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/strong[1]"));
    static currency=element(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/strong[1]"));
    static currency_pound=element(by.cssContainingText('option','1005'));
    static currency_rupee=element(by.cssContainingText('option','1006'));
    static deposit=element(by.xpath("html/body/div[3]/div/div[2]/div/div[3]/button[2]"));
    static amount= element(by.model("amount"));
    static deposit_submit=element(by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/form/button"));
    static withdrawal=element(by.xpath("html/body/div[3]/div/div[2]/div/div[3]/button[3]"));
    static withdraw_submit=element(by.cssContainingText('button','Withdraw'))
    static deposit_success= element(by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/span"));
    static withdrawal_success= element(by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/span"));        
        
}