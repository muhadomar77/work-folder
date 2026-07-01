# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: employerLogin.spec.js >> camerin testing >> student management 
- Location: tests\employerLogin.spec.js:20:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at http://cameringroup.com/camerin_jobportal/
Call log:
  - navigating to "http://cameringroup.com/camerin_jobportal/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: cameringroup.com
      - text: ’s DNS address could not be found. Diagnosing the problem.
    - generic [ref=e10]:
      - paragraph
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Try running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e14]: DNS_PROBE_STARTED
  - button "Reload" [ref=e17] [cursor=pointer]
```

# Test source

```ts
  1  | class employer {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.employerLogin = page.locator("//a[text()=' Employer Login']");
  5  |         this.email = page.locator("//input[@name='email']");
  6  |         this.password = page.locator("//input[@id='password']");
  7  |         this.loginButton = page.locator("//button[@name='login']");
  8  |         this.openViewCompany = page.locator("//a[@href='/camerin_jobportal/company_list']");
  9  |         this.search = page.locator("//input[@placeholder='Search by name, email, contact, or person...']");
  10 |         this.click = page.locator("//button[text()='Search']");
  11 |         this.addJobPost = page.locator("//a[@class='action-btn action-job']");
  12 | 
  13 |         this.jobTitle = page.locator("//input[@id='post_name']");
  14 |         this.vacancies = page.locator("//input[@id='vacancies']");
  15 |         this.qualification = page.locator("//select[@id='qualification']");
  16 |         this.experience = page.locator("//input[@id='experience']");
  17 |         this.salary = page.locator("//input[@id='salary']");
  18 |         this.status = page.locator("//select[@id='status']");
  19 |         this.url = page.locator("//input[@id='apply_link']");
  20 |         this.jobDescription = page.locator("//textarea[@id='job_description']");
  21 |         this.saveJobPost = page.locator("//button[text()='Save Job Post']");
  22 |         this.viewUpdate = page.locator("//a[@href='/camerin_jobportal/view-students']");
  23 |         this.updateStatus = page.locator("//td[text()='muhad']/following::select[@name='verification_status'][1]");
  24 |         this.logout = page.locator("//a[@class='logout-btn']");
  25 | 
  26 | 
  27 | 
  28 | 
  29 | 
  30 |     }
  31 | 
  32 |     async goto() {
> 33 |         await this.page.goto('http://cameringroup.com/camerin_jobportal/');
     |                         ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at http://cameringroup.com/camerin_jobportal/
  34 |     }
  35 |     async openEmployerLogin() {
  36 |         await this.employerLogin.click();
  37 |         await this.email.fill("muhad1234@gmail.com");
  38 |         await this.password.fill("Muhad123");
  39 |         await this.loginButton.click();
  40 | 
  41 |     }
  42 |     async viewCompany() {
  43 |         await this.openViewCompany.click();
  44 |         await this.search.fill("demo13@gmail.com");
  45 |         await this.click.click();
  46 |         await this.addJobPost.click();
  47 |         await this.jobTitle.fill("Software Engineer QA");
  48 |         await this.vacancies.fill("2");
  49 |         await this.qualification.selectOption("MCA");
  50 |         await this.experience.fill("2 Years");
  51 |         await this.salary.fill("4 LPA");
  52 |         await this.status.selectOption("Shortlisted");
  53 |         await this.url.fill("https://openjob.com");
  54 |         await this.jobDescription.fill("Automation testing,Manaul Testing");
  55 |         await this.saveJobPost.click();
  56 | 
  57 |     }
  58 |     async viewAndUpdate() {
  59 |         await this.viewUpdate.click();
  60 |         await this.updateStatus.selectOption("Verified");
  61 |     }
  62 |     async logOut() {
  63 |         await this.logout.click();
  64 |     }
  65 | 
  66 | }
  67 | module.exports = { employer };
```