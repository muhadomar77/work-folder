const {test,expect}=require('@playwright/test')
const { Company } = require('../pages/addcompanypage');
const { error } = require('node:console');


test.describe('company testing',()=>{
//login test
test('company login',async ({page})=>{
 // await page.goto("https://www.saucedemo.com/");
  
    const login=new Company(page); 
    await login.goto();
    await login.openEmployerLogin();
    await login.emailAddress();
    await login.password();
    await login.lgnButton();
    await login.addCompany();

    await login.companyName();
    await login.companyContact();
    await login.contactPerson();
    await login.desgination();
    await login.personContact();
    await login.email();
    await page.waitForTimeout(2000);
    await login.location();
    await page.waitForTimeout(2000);
    await login.saveButton();
    await page.waitForTimeout(2000);
   ///await expect(page).toHaveURL('http://cameringroup.com/camerin_jobportal/register');

});
// add company
// test('add company', async ({page})=>{
//     const add=new Company(page);
//     await add.addCompany();
// });
});