class employer {
    constructor(page) {
        this.page = page;
        this.employerLogin = page.locator("//a[text()=' Employer Login']");
        this.email = page.locator("//input[@name='email']");
        this.password = page.locator("//input[@id='password']");
        this.loginButton = page.locator("//button[@name='login']");
        this.openViewCompany = page.locator("//a[@href='/camerin_jobportal/company_list']");
        this.search = page.locator("//input[@placeholder='Search by name, email, contact, or person...']");
        this.click = page.locator("//button[text()='Search']");
        this.addJobPost = page.locator("//a[@class='action-btn action-job']");

        this.jobTitle = page.locator("//input[@id='post_name']");
        this.vacancies = page.locator("//input[@id='vacancies']");
        this.qualification = page.locator("//select[@id='qualification']");
        this.experience = page.locator("//input[@id='experience']");
        this.salary = page.locator("//input[@id='salary']");
        this.status = page.locator("//select[@id='status']");
        this.url = page.locator("//input[@id='apply_link']");
        this.jobDescription = page.locator("//textarea[@id='job_description']");
        this.saveJobPost = page.locator("//button[text()='Save Job Post']");
        this.viewUpdate = page.locator("//a[@href='/camerin_jobportal/view-students']");
        this.updateStatus = page.locator("//td[text()='muhad']/following::select[@name='verification_status'][1]");
        this.updateButton = page.locator("//td[text()='muhad']/following::button[@name='update_verification'][1]");
        this.InterviewStatistics = page.locator("//td[text()='muhad']/following::a[text()='Interview Statistics'][1]");
        this.logout = page.locator("//a[@class='logout-btn']");





    }

    async goto() {
        await this.page.goto('http://cameringroup.com/camerin_jobportal/');
    }
    async openEmployerLogin() {
        await this.employerLogin.click();
        await this.email.fill("muhad1234@gmail.com");
        await this.password.fill("Muhad123");
        await this.loginButton.click();

    }
    async viewCompany() {
        await this.openViewCompany.click();
        await this.search.fill("demo13@gmail.com");
        await this.click.click();
        await this.addJobPost.click();
        await this.jobTitle.fill("Software Engineer QA");
        await this.vacancies.fill("2");
        await this.qualification.selectOption("MCA");
        await this.experience.fill("2 Years");
        await this.salary.fill("4 LPA");
        await this.status.selectOption("Shortlisted");
        await this.url.fill("https://openjob.com");
        await this.jobDescription.fill("Automation testing,Manaul Testing");
        await this.saveJobPost.click();

    }
    async viewAndUpdate() {
        await this.viewUpdate.click();
        await this.updateStatus.selectOption("Verified");
        await this.updateButton.click();
        await this.InterviewStatistics.click();
    }
    async logOut() {
        await this.logout.click();
    }

}
module.exports = { employer };