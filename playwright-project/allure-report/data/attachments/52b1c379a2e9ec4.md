# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: employerLogin.spec.js >> camerin testing >> employer 
- Location: tests\employerLogin.spec.js:8:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'fill')
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "JobFinder" [ref=e4] [cursor=pointer]:
        - /url: index.php
      - navigation [ref=e5]:
        - link "Home" [ref=e6] [cursor=pointer]:
          - /url: /camerin_jobportal/employee-dashboard
        - link "Work For You" [ref=e7] [cursor=pointer]:
          - /url: /camerin_jobportal/workforyou
        - link "Followups" [ref=e8] [cursor=pointer]:
          - /url: /camerin_jobportal/followup
      - link "Logout" [ref=e10] [cursor=pointer]:
        - /url: /camerin_jobportal/account/logout.php
  - generic [ref=e12]:
    - generic [ref=e13]:
      - generic [ref=e14]:
        - heading "My Companies" [level=2] [ref=e15]
        - paragraph [ref=e16]: "Total: 11 companies"
      - link "➕ Add New Company" [ref=e17] [cursor=pointer]:
        - /url: /camerin_jobportal/add_company
    - generic [ref=e19]:
      - generic [ref=e20]:
        - generic: 🔍
        - textbox "Search by name, email, contact, or person..." [ref=e21]
      - button "Search" [ref=e22] [cursor=pointer]
    - generic [ref=e23]:
      - generic [ref=e24]:
        - generic [ref=e25]:
          - heading "virtusa" [level=3] [ref=e26]
          - generic [ref=e27]: Connected
        - generic [ref=e28]:
          - generic [ref=e29]:
            - generic [ref=e30]:
              - generic [ref=e31]: 📞
              - text: "0123456789"
            - generic [ref=e32]:
              - generic [ref=e33]: 👤
              - text: muhad
            - generic [ref=e34]:
              - generic [ref=e35]: ✉️
              - text: demo13@gmail.com
            - generic [ref=e36]:
              - generic [ref=e37]: 📱
              - text: "8907600943"
          - generic [ref=e38]:
            - link "➕ Add Followup" [ref=e39] [cursor=pointer]:
              - /url: /camerin_jobportal/followup?company_id=95&company_name=virtusa
            - link "➕ Add Job Post" [ref=e40] [cursor=pointer]:
              - /url: /camerin_jobportal/add-job?company_id=95
            - link "📋 View Job Posts" [ref=e41] [cursor=pointer]:
              - /url: /camerin_jobportal/view-jobs?company_id=95
      - generic [ref=e42]:
        - generic [ref=e43]:
          - heading "virtusa" [level=3] [ref=e44]
          - generic [ref=e45]: Connected
        - generic [ref=e46]:
          - generic [ref=e47]:
            - generic [ref=e48]:
              - generic [ref=e49]: 📞
              - text: "0123456789"
            - generic [ref=e50]:
              - generic [ref=e51]: 👤
              - text: muhad
            - generic [ref=e52]:
              - generic [ref=e53]: ✉️
              - text: demo12@gmail.com
            - generic [ref=e54]:
              - generic [ref=e55]: 📱
              - text: "8907600943"
          - generic [ref=e56]:
            - link "➕ Add Followup" [ref=e57] [cursor=pointer]:
              - /url: /camerin_jobportal/followup?company_id=93&company_name=virtusa
            - link "➕ Add Job Post" [ref=e58] [cursor=pointer]:
              - /url: /camerin_jobportal/add-job?company_id=93
            - link "📋 View Job Posts" [ref=e59] [cursor=pointer]:
              - /url: /camerin_jobportal/view-jobs?company_id=93
      - generic [ref=e60]:
        - generic [ref=e61]:
          - heading "virtusa" [level=3] [ref=e62]
          - generic [ref=e63]: Connected
        - generic [ref=e64]:
          - generic [ref=e65]:
            - generic [ref=e66]:
              - generic [ref=e67]: 📞
              - text: "0123456789"
            - generic [ref=e68]:
              - generic [ref=e69]: 👤
              - text: muhad
            - generic [ref=e70]:
              - generic [ref=e71]: ✉️
              - text: demo11@gmail.com
            - generic [ref=e72]:
              - generic [ref=e73]: 📱
              - text: "8907600943"
          - generic [ref=e74]:
            - link "➕ Add Followup" [ref=e75] [cursor=pointer]:
              - /url: /camerin_jobportal/followup?company_id=92&company_name=virtusa
            - link "➕ Add Job Post" [ref=e76] [cursor=pointer]:
              - /url: /camerin_jobportal/add-job?company_id=92
            - link "📋 View Job Posts" [ref=e77] [cursor=pointer]:
              - /url: /camerin_jobportal/view-jobs?company_id=92
      - generic [ref=e78]:
        - generic [ref=e79]:
          - heading "virtusa" [level=3] [ref=e80]
          - generic [ref=e81]: Connected
        - generic [ref=e82]:
          - generic [ref=e83]:
            - generic [ref=e84]:
              - generic [ref=e85]: 📞
              - text: "0123456789"
            - generic [ref=e86]:
              - generic [ref=e87]: 👤
              - text: muhad
            - generic [ref=e88]:
              - generic [ref=e89]: ✉️
              - text: demo10@gmail.com
            - generic [ref=e90]:
              - generic [ref=e91]: 📱
              - text: "8907600943"
          - generic [ref=e92]:
            - link "➕ Add Followup" [ref=e93] [cursor=pointer]:
              - /url: /camerin_jobportal/followup?company_id=91&company_name=virtusa
            - link "➕ Add Job Post" [ref=e94] [cursor=pointer]:
              - /url: /camerin_jobportal/add-job?company_id=91
            - link "📋 View Job Posts" [ref=e95] [cursor=pointer]:
              - /url: /camerin_jobportal/view-jobs?company_id=91
      - generic [ref=e96]:
        - generic [ref=e97]:
          - heading "virtusa" [level=3] [ref=e98]
          - generic [ref=e99]: Connected
        - generic [ref=e100]:
          - generic [ref=e101]:
            - generic [ref=e102]:
              - generic [ref=e103]: 📞
              - text: "0123456789"
            - generic [ref=e104]:
              - generic [ref=e105]: 👤
              - text: muhad
            - generic [ref=e106]:
              - generic [ref=e107]: ✉️
              - text: demo9@gmail.com
            - generic [ref=e108]:
              - generic [ref=e109]: 📱
              - text: "8907600943"
          - generic [ref=e110]:
            - link "➕ Add Followup" [ref=e111] [cursor=pointer]:
              - /url: /camerin_jobportal/followup?company_id=90&company_name=virtusa
            - link "➕ Add Job Post" [ref=e112] [cursor=pointer]:
              - /url: /camerin_jobportal/add-job?company_id=90
            - link "📋 View Job Posts" [ref=e113] [cursor=pointer]:
              - /url: /camerin_jobportal/view-jobs?company_id=90
      - generic [ref=e114]:
        - generic [ref=e115]:
          - heading "virtusa" [level=3] [ref=e116]
          - generic [ref=e117]: Connected
        - generic [ref=e118]:
          - generic [ref=e119]:
            - generic [ref=e120]:
              - generic [ref=e121]: 📞
              - text: "0123456789"
            - generic [ref=e122]:
              - generic [ref=e123]: 👤
              - text: muhad
            - generic [ref=e124]:
              - generic [ref=e125]: ✉️
              - text: demo8@gmail.com
            - generic [ref=e126]:
              - generic [ref=e127]: 📱
              - text: "8907600943"
          - generic [ref=e128]:
            - link "➕ Add Followup" [ref=e129] [cursor=pointer]:
              - /url: /camerin_jobportal/followup?company_id=89&company_name=virtusa
            - link "➕ Add Job Post" [ref=e130] [cursor=pointer]:
              - /url: /camerin_jobportal/add-job?company_id=89
            - link "📋 View Job Posts" [ref=e131] [cursor=pointer]:
              - /url: /camerin_jobportal/view-jobs?company_id=89
    - navigation [ref=e133]:
      - link "1" [ref=e134] [cursor=pointer]:
        - /url: "?page=1"
      - link "2" [ref=e135] [cursor=pointer]:
        - /url: "?page=2"
      - link "Next →" [ref=e136] [cursor=pointer]:
        - /url: "?page=2"
  - contentinfo [ref=e137]:
    - generic [ref=e138]:
      - generic [ref=e139]:
        - generic [ref=e140]:
          - heading "CareerConnect" [level=3] [ref=e141]
          - paragraph [ref=e142]: Connecting talent with opportunity.
        - generic [ref=e143]:
          - heading "Quick Links" [level=4] [ref=e144]
          - list [ref=e145]:
            - listitem [ref=e146]:
              - link "Jobs" [ref=e147] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e148]:
              - link "Companies" [ref=e149] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e150]:
              - link "Contact" [ref=e151] [cursor=pointer]:
                - /url: "#"
        - heading "Follow Us" [level=4] [ref=e153]
      - generic [ref=e154]: © 2026 CareerConnect. All Rights Reserved.
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
  9  |         this.click = page.locator("//button[text()='Search']");
  10 | 
  11 | 
  12 | 
  13 | 
  14 |     }
  15 | 
  16 |     async goto() {
  17 |         await this.page.goto('http://cameringroup.com/camerin_jobportal/');
  18 |     }
  19 |     async openEmployerLogin() {
  20 |         await this.employerLogin.click();
  21 |         await this.email.fill("muhad1234@gmail.com");
  22 |         await this.password.fill("Muhad123");
  23 |         await this.loginButton.click();
  24 |         
  25 |     }
  26 |     async viewCompany() {
  27 |         await this.openViewCompany.click();
> 28 |         await this.search.fill("demo13@gmail.com");
     |                           ^ TypeError: Cannot read properties of undefined (reading 'fill')
  29 |         await this.click.click();
  30 |     }
  31 | 
  32 | }
  33 | module.exports = { employer };
```