class Loginpage
{
  constructor(page){
   this.page=page;
   this.username=page.locator("#user-name");
   this.password=page.locator("#password");
   this.loginbtn=page.locator("#login-button");
   this.error=page.locator('[data-test="error"]');
  }  
  
  //goto method 
//   async goto(page) { 
//     await page.goto('https://www.saucedemo.com/'); 
// }
async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }
  //login method 
  async login(username,password)
  {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginbtn.click();
  }

  async getErrorMessage()
  {
   return this.error;
  }
}


module.exports={Loginpage}