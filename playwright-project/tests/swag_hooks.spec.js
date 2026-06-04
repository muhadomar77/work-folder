import {test} from '@playwright/test';
import { Loginpage } from '../pages/loginpage';
import path from 'node:path';

test.describe('user mangement',()=>{
    let i=0;

    test.beforeAll(async ()=> {
        console.log('beforeAll');
    })
    test.beforeEach(async ({ page }) => {

        console.log('before each');

        const lg = new Loginpage(page);

        await lg.goto();
    });

    test('testlogin2',async ({page})=> {
        const lg=new Loginpage(page);
        await lg.goto();
        await lg.login('standard_user','secret_sauce')
    });

    test('testlogin_invalid',async ({page})=> {
        const lg=new Loginpage(page);
        await lg.goto();
        await lg.login('usertest','123456')
    });

    test.afterEach(async({page},testInfo)=> {
        i++;
        await page.screenshot({path:`sreenshot/swag${testInfo.title}.png`});
        console.log('after each');
    })
    test.afterAll(async()=> {
        console.log('after all');
    })
})

// import { test } from '@playwright/test';

// test.describe('Feature suite', () => {
//   test.beforeAll(async () => {
//     // This runs ONCE before all tests in this describe block
//     console.log('Setting up test suite...');
//   });

//   test('Test 1', async ({ page }) => {
//     // ...
//   });
// });