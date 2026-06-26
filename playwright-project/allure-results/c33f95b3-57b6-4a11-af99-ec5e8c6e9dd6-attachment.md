# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: irctc_booking.spec.js >> irctc testing >> Book ticket
- Location: tests\irctc_booking.spec.js:19:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('//input[@aria-label=\'Enter From station. Input is Mandatory.\']')

```

# Test source

```ts
  1  | class Irctc{
  2  | constructor(page){
  3  |     this.page = page;
  4  |     this.frm=page.locator("//input[@aria-label='Enter From station. Input is Mandatory.']");
  5  | }
  6  |  async goto() {
  7  |     await this.page.goto('https://www.irctc.co.in/nget/train-search');
  8  |   }
  9  |    async from() {
> 10 |     await this.frm.fill("PGT");
     |                    ^ Error: locator.fill: Test ended.
  11 |     await this.locator('ul[role="listbox"]').waitFor();
  12 |     await this.getByText('THRISSUR - TCR').click();
  13 |    
  14 |   }
  15 | }
  16 | module.exports={Irctc}
```