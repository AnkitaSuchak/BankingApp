
import { Config } from 'protractor'

export let config:Config={
    specs: ['../Tests/loginPage.js'],
    framework: 'jasmine',
    directConnect:true
    
}