class Irctc {
  constructor(page) {
    this.page = page;
    this.fromStationInput = page.locator('input[aria-label="Enter From station. Input is Mandatory."]');
    this.stationOption = page.locator('li[role="option"]');

    this.toStationInput = page.locator('input[aria-label="Enter To station. Input is Mandatory."]');
    this.stationOptionTo = page.locator('li[role="option"]');

    this.dateOption = page.locator("//input[@class='ng-tns-c69-9 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted']");
    this.slctDate = page.locator('//a[text()="29"]');

    this.button = page.locator("//button[@class='search_btn train_Search']");

    this.sleeperslt = page.locator('(//div[contains(@class,"pre-avl")][.//strong[normalize-space()="Sleeper (SL)"]])[1]');
    this.available = page.locator("//strong[text()='Tue, 30 Jun']");
    this.book = page.locator('(//button[contains(@class,"train_Search")])[1]');
  }
  async goto() {
    await this.page.goto('https://www.irctc.co.in/nget/train-search');
  }
  async selectFromStation() {
    await this.fromStationInput.click();
    await this.fromStationInput.fill("CLT");

    await this.stationOption.first().waitFor();
    await this.stationOption.first().click();
  }

  async selectToStation() {
    await this.toStationInput.click();
    await this.toStationInput.fill("ERS");

    await this.stationOptionTo.first().waitFor();
    await this.stationOptionTo.first().click();
  }

  async selectDate() {
    await this.dateOption.click();
    await this.dateOption.fill("29/06/2026");

    await this.slctDate.click();
    await this.button.click();
    await this.sleeperslt.click();
    await this.available.click();
    await this.book.click();


  }
}
module.exports = { Irctc }