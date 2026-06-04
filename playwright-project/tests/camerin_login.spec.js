const {test,expect}=require('@playwright/test')
const {Camerin}=require('../pages/camerinloginpage');
const { error } = require('node:console');


test.describe('camerin testing',()=>{
//login test
test('valid login',async ({page})=>{
 // await page.goto("https://www.saucedemo.com/");
  
    const login=new Camerin(page); 
    await login.goto();
    await login.openEmployerLogin();
    await login.openCreateAccount();
    await login.selectRole();
    await login.selectDepartment();
    await login.fullName();
    await login.emailAddress();
    await login.number();
    await login.password();
    await login.confirmPassword();
    await login.register();
    await page.waitForTimeout(2000);
   await expect(page).toHaveURL('http://cameringroup.com/camerin_jobportal/register');
  
});
});