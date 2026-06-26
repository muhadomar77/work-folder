class Company {
  constructor(page) {
    this.page = page;
    
    this.employerLogin=page.locator("//a[text()=' Employer Login']")
    this.selectEmail=page.locator("//input[@name='email']");
    this.selectPassword=page.locator("//input[@name='password']");
    this.loginButton=page.locator("//button[@name='login']");
    this.addCmp=page.locator("//a[@href='/camerin_jobportal/add_company']");

    this.cmpName=page.locator("//input[@name='company_name']");
    this.cmpContact=page.locator("//input[@name='contact_number']");
    this.contactPrsn=page.locator("//input[@name='contact_person']");
    this.desgntn=page.locator("//input[@name='designation']");
    this.prsnCntct=page.locator("//input[@name='person_contact_no']");
    this.eml=page.locator("//input[@name='email']");
    this.loc=page.locator("//input[@name='location']");
    this.save=page.locator("//button[text()='Save']");
    
  }

  async goto() {
    await this.page.goto('http://cameringroup.com/camerin_jobportal/');
  }
  async openEmployerLogin() {
    await this.employerLogin.click();
  }
  async emailAddress(){
    await this.selectEmail.fill("muhad1234@gmail.com");
  }
  async password(){
    await this.selectPassword.fill("Muhad123");
  }
  async lgnButton(){
    await this.loginButton.click();
  }
  async addCompany(){
    await this.addCmp.click();
  }
//
  async companyName(){
    await this.cmpName.fill("virtusa");
  }
  async companyContact(){
    await this.cmpContact.fill("0123456789");
  }
  async contactPerson(){
    await this.contactPrsn.fill("muhad");
  }
  async desgination(){
    await this.desgntn.fill("qa");
  }
  async personContact(){
    await this.prsnCntct.fill("8907600943");
  }
  async email(){
    await this.eml.fill("demo2@gmail.com");
  }
  async location(){
    await this.loc.fill("kochi");
  }
  async saveButton(){
    await this.save.click();
  }
  
}

module.exports = { Company };