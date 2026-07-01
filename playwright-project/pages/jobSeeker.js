class JobSeeker {
  constructor(page) {
    this.page = page;
    
    this.jobSeekerLogin=page.locator("//a[text()='  Job Seeker']");
    this.createOne=page.locator("//a[text()='Create one']");

    this.name=page.locator("//input[@id='name']");
    this.email=page.locator("//input[@id='email']");
    this.pswd=page.locator("//input[@id='password']");
    this.dept=page.locator("//select[@id='department']");
    this.phone=page.locator("//input[@id='phone']");
    this.qlf=page.locator("//input[@id='qualification']");
    this.course=page.locator("//input[@id='course']");
    this.regSave=page.locator("//button[@type='submit']");


   
    
  }

  async goto() {
    await this.page.goto('http://cameringroup.com/camerin_jobportal/');
  }
  async openJobSeeker() {
    await this.jobSeekerLogin.click();
    await this.createOne.click();
  }
  async registration() {
    await this.name.fill("muhad");
    await this.email.fill("muhad124@gmail.com");
    await this.pswd.fill("muhad124@gmail");
    await this.dept.selectOption("1");
    await this.phone.fill("8907600943");
    await this.qlf.fill("MCA");
    await this.course.fill("Computer Application");
    await this.regSave.click();
    

  }
}
module.exports = { JobSeeker };