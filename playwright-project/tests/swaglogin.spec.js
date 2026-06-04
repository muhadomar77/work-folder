const {test,expect}=require('@playwright/test')
const {Loginpage}=require('../pages/loginpage');
const { error } = require('node:console');


test.describe('swaglab testing',()=>{
//login test
test('valid login',async ({page})=>{
 // await page.goto("https://www.saucedemo.com/");
  
    const login=new Loginpage(page); 
    await login.goto();
  await login.login('standard_user','secret_sauce')
});

//invalid test 
test('invalid test',async({page})=>{
   // await page.goto("https://www.saucedemo.com/");
    const lg=new Loginpage(page);
    await lg.goto();
   await lg.login('usertest','13425');
   const err=await lg.getErrorMessage();
   //console.log("error",err);
   await expect(err).toContainText('Epic sadface: Username and password do not match any user in this service');
   //expect(err).toContain('Username and password do not match');
  //await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
 })
});