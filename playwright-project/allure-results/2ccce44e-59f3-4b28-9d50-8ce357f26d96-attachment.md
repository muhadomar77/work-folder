# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: irctc_booking.spec.js >> irctc testing >> Book ticket
- Location: tests\irctc_booking.spec.js:17:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.irctc.co.in/nget/train-search", waiting until "load"

```

# Test source

```ts
  1  | class Irctc{
  2  | constructor(page){
  3  |     this.page = page;
  4  |     this.frm=page.locator("//input[@aria-label='Enter From station. Input is Mandatory.']")
  5  | }
  6  |  async goto() {
> 7  |     await this.page.goto('https://www.irctc.co.in/nget/train-search');
     |                     ^ Error: page.goto: Target page, context or browser has been closed
  8  |   }
  9  |    async from() {
  10 |     await this.from.fill("PALAKKAD JN - PGT").click();
  11 |    
  12 |   }
  13 | }
  14 | module.exports={Irctc}
```