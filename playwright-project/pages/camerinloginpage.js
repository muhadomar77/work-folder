class Camerin {
  constructor(page) {
    this.page = page;
    
    this.employerLogin=page.locator("//a[text()=' Employer Login']")
    this.createnewaccount=page.locator("//a[contains(text(),'Create New Account')]")
    this.roleDropdown=page.locator("//select[@id='role']")
    this.deptDropdown=page.locator("//select[@id='department']")
    this.selectName=page.locator("//input[@id='name']");
    this.selectEmail=page.locator("//input[@id='email']");
    this.phoneNumber=page.locator("//input[@placeholder='10-digit Phone Number']");
    this.selectPassword=page.locator("//input[@placeholder='Password']");
    this.selectConfirmPassword=page.locator("//input[@placeholder='Confirm Password']");
    this.selectButton=page.locator("//button[@id='submitBtn']");
  }

  async goto() {
    await this.page.goto('http://cameringroup.com/camerin_jobportal/');
  }
  async openEmployerLogin() {
    await this.employerLogin.click();
  }
  async openCreateAccount(){
    await this.createnewaccount.click();
  }
  async selectRole(){
    await this.roleDropdown.selectOption('Camerin Employee');
  }
  async selectDepartment(){
    await this.deptDropdown.selectOption('IT');
  }
  async fullName(){
    await this.selectName.fill("Muhad Omar");
  }
  async emailAddress(){
    await this.selectEmail.fill("muhad1234@gmail.com");
  }
  async number(){
    await this.phoneNumber.fill("8907600943");
  }
  async password(){
    await this.selectPassword.fill("Muhad123");
  }
  async confirmPassword(){
    await this.selectConfirmPassword.fill("Muhad123");
  }
  async register(){
    await this.selectButton.click();
  }
}

module.exports = { Camerin };