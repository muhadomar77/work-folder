# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: irctc_booking.spec.js >> irctc testing >> Book ticket
- Location: tests\irctc_booking.spec.js:19:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//a[text()="25"]')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - banner "Header" [ref=e4]:
      - generic [ref=e5]:
        - banner [ref=e6]:
          - generic [ref=e7]:
            - img "Indian railway logo" [ref=e9]
            - img "IRCTC Logo" [ref=e11]
          - generic [ref=e14] [cursor=pointer]: 
          - text:   
        - text:             
    - generic [ref=e20]:
      - generic [ref=e23]:
        - generic:
          - generic [ref=e24]:
            - img "Pnr Icon" [ref=e26]
            - link "PNR Status opens a new window" [ref=e27] [cursor=pointer]:
              - /url: http://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en
              - generic [ref=e28]: PNR STATUS
          - generic [ref=e29]:
            - img "Pnr Icon" [ref=e31]
            - link "Reservation Chart. Website will be opened in new tab" [ref=e32] [cursor=pointer]:
              - /url: https://www.irctc.co.in/online-charts/
              - generic [ref=e33]: CHARTS / VACANCY
        - generic [ref=e34]:
          - generic [ref=e37]: BOOK TICKET
          - generic [ref=e38]:
            - generic [ref=e39]:
              - generic [ref=e41]:
                - generic [ref=e43]: 
                - searchbox "Enter From station. Input is Mandatory." [ref=e46]: THRISUR - TCR
                - generic "Enter From station. Input is Mandatory.": From
                - generic:
                  - generic [ref=e48] [cursor=pointer]: 
                  - text: 
              - generic [ref=e50]:
                - generic [ref=e52]: 
                - searchbox "Enter To station. Input is Mandatory." [ref=e55]: PALAKKAD JN - PGT (PALAKKAD)
                - generic: To
            - generic [ref=e56]:
              - generic [ref=e58]:
                - generic [ref=e60]: 
                - generic "Enter Journey Date. Formate D.D./.M.M./.Y.Y.Y.Y. Input is Mandatory." [ref=e61]:
                  - generic [ref=e62]:
                    - textbox [active] [ref=e63]: 29/06/2026
                    - generic [ref=e65]:
                      - generic [ref=e66]:
                        - generic [ref=e68] [cursor=pointer]: 
                        - generic [ref=e69]: June2026
                        - generic [ref=e71] [cursor=pointer]: 
                      - table [ref=e73]:
                        - rowgroup [ref=e74]:
                          - row "Su Mo Tu We Th Fr Sa" [ref=e75]:
                            - columnheader "Su" [ref=e76]
                            - columnheader "Mo" [ref=e77]
                            - columnheader "Tu" [ref=e78]
                            - columnheader "We" [ref=e79]
                            - columnheader "Th" [ref=e80]
                            - columnheader "Fr" [ref=e81]
                            - columnheader "Sa" [ref=e82]
                        - rowgroup [ref=e83]:
                          - row "31 1 2 3 4 5 6" [ref=e84]:
                            - cell "31" [ref=e85]:
                              - generic [ref=e86]: "31"
                            - cell "1" [ref=e87]:
                              - generic [ref=e88]: "1"
                            - cell "2" [ref=e89]:
                              - generic [ref=e90]: "2"
                            - cell "3" [ref=e91]:
                              - generic [ref=e92]: "3"
                            - cell "4" [ref=e93]:
                              - generic [ref=e94]: "4"
                            - cell "5" [ref=e95]:
                              - generic [ref=e96]: "5"
                            - cell "6" [ref=e97]:
                              - generic [ref=e98]: "6"
                          - row "7 8 9 10 11 12 13" [ref=e99]:
                            - cell "7" [ref=e100]:
                              - generic [ref=e101]: "7"
                            - cell "8" [ref=e102]:
                              - generic [ref=e103]: "8"
                            - cell "9" [ref=e104]:
                              - generic [ref=e105]: "9"
                            - cell "10" [ref=e106]:
                              - generic [ref=e107]: "10"
                            - cell "11" [ref=e108]:
                              - generic [ref=e109]: "11"
                            - cell "12" [ref=e110]:
                              - generic [ref=e111]: "12"
                            - cell "13" [ref=e112]:
                              - generic [ref=e113]: "13"
                          - row "14 15 16 17 18 19 20" [ref=e114]:
                            - cell "14" [ref=e115]:
                              - generic [ref=e116]: "14"
                            - cell "15" [ref=e117]:
                              - generic [ref=e118]: "15"
                            - cell "16" [ref=e119]:
                              - generic [ref=e120]: "16"
                            - cell "17" [ref=e121]:
                              - generic [ref=e122]: "17"
                            - cell "18" [ref=e123]:
                              - generic [ref=e124]: "18"
                            - cell "19" [ref=e125]:
                              - generic [ref=e126]: "19"
                            - cell "20" [ref=e127]:
                              - generic [ref=e128]: "20"
                          - row "21 22 23 24 25 26 27" [ref=e129]:
                            - cell "21" [ref=e130]:
                              - generic [ref=e131]: "21"
                            - cell "22" [ref=e132]:
                              - generic [ref=e133]: "22"
                            - cell "23" [ref=e134]:
                              - generic [ref=e135]: "23"
                            - cell "24" [ref=e136]:
                              - generic [ref=e137]: "24"
                            - cell "25" [ref=e138]:
                              - generic [ref=e139]: "25"
                            - cell "26" [ref=e140]:
                              - generic [ref=e141] [cursor=pointer]: "26"
                            - cell "27" [ref=e142]:
                              - generic [ref=e143] [cursor=pointer]: "27"
                          - row "28 29 30 1 2 3 4" [ref=e144]:
                            - cell "28" [ref=e145]:
                              - generic [ref=e146] [cursor=pointer]: "28"
                            - cell "29" [ref=e147]:
                              - generic [ref=e148] [cursor=pointer]: "29"
                            - cell "30" [ref=e149]:
                              - generic [ref=e150] [cursor=pointer]: "30"
                            - cell "1" [ref=e151]:
                              - generic [ref=e152]: "1"
                            - cell "2" [ref=e153]:
                              - generic [ref=e154]: "2"
                            - cell "3" [ref=e155]:
                              - generic [ref=e156]: "3"
                            - cell "4" [ref=e157]:
                              - generic [ref=e158]: "4"
                - generic: DD/MM/YYYY *
              - generic [ref=e160]:
                - generic [ref=e162]: 
                - generic [ref=e164] [cursor=pointer]:
                  - generic [ref=e165]:
                    - listbox "All Classes"
                  - generic [ref=e167]: All Classes
                  - button "" [ref=e168]:
                    - generic [ref=e169]: 
            - generic [ref=e171]:
              - generic [ref=e173]: 
              - generic [ref=e176] [cursor=pointer]:
                - generic [ref=e177]:
                  - listbox "GENERAL"
                - generic [ref=e179]: GENERAL
                - button "" [ref=e180]:
                  - generic [ref=e181]: 
            - generic [ref=e183]:
              - generic [ref=e184]:
                - checkbox "Check for DIVYAANG Concession Booking." [ref=e185]
                - generic [ref=e186] [cursor=pointer]: Person With Disability Concession
              - generic [ref=e187]:
                - checkbox "Check to fetch trains runs on other days than you are searching for." [ref=e188]
                - generic [ref=e189] [cursor=pointer]: Flexible With Date
              - generic [ref=e190]:
                - checkbox "Check for pass Booking" [disabled] [ref=e191]
                - generic [ref=e192] [cursor=pointer]: Railway Pass Concession
            - button "Search Trains" [ref=e195] [cursor=pointer]
        - region [ref=e196]
      - generic [ref=e198]:
        - generic [ref=e199]: INDIAN RAILWAYS
        - text: SafetySecurityPunctuality
      - generic [ref=e205]:
        - heading "Have you not found the right one? Find a service suitable for you here." [level=2] [ref=e206]:
          - text: Have you not found the right one?
          - text: Find a service suitable for you here.
        - list [ref=e207]:
          - listitem [ref=e208]:
            - link "Flight opens a new window" [ref=e209] [cursor=pointer]:
              - /url: https://www.air.irctc.co.in/
              - generic [ref=e211]: FLIGHTS
          - listitem [ref=e212]:
            - link "HOTELS" [ref=e213] [cursor=pointer]:
              - /url: https://www.hotels.irctc.co.in
              - generic [ref=e215]: HOTELS
          - listitem [ref=e216]:
            - link " RAIL DRISHTI" [ref=e217] [cursor=pointer]:
              - /url: https://raildrishti.indianrailways.gov.in/
              - generic [ref=e218]: 
              - generic [ref=e219]: RAIL DRISHTI
          - listitem [ref=e220]:
            - link "E-CATERING" [ref=e221] [cursor=pointer]:
              - /url: https://www.ecatering.irctc.co.in/
              - generic [ref=e223]: E-CATERING
          - listitem [ref=e224]:
            - link " BUS" [ref=e225] [cursor=pointer]:
              - /url: https://www.bus.irctc.co.in/home
              - generic [ref=e226]: 
              - generic [ref=e227]: BUS
        - list [ref=e228]:
          - listitem [ref=e229]:
            - link "HOLIDAY PACKAGES" [ref=e230] [cursor=pointer]:
              - /url: https://www.irctctourism.com/tourpacakage_search?searchKey=&tagType=&travelType=&category=
              - generic [ref=e232]: HOLIDAY PACKAGES
          - listitem [ref=e233]:
            - link "TOURIST TRAIN" [ref=e234] [cursor=pointer]:
              - /url: https://www.irctctourism.com/bharatgaurav
              - generic [ref=e236]: TOURIST TRAIN
          - listitem [ref=e237]:
            - link "HILL RAILWAYS" [ref=e238] [cursor=pointer]:
              - /url: https://www.irctctourism.com/gallery/
              - generic [ref=e240]: HILL RAILWAYS
          - listitem [ref=e241]:
            - link "CHARTER TRAIN" [ref=e242] [cursor=pointer]:
              - /url: https://www.ftr.irctc.co.in/ftr/
              - generic [ref=e244]: CHARTER TRAIN
          - listitem [ref=e245]:
            - link "GALLERY" [ref=e246] [cursor=pointer]:
              - /url: https://www.irctctourism.com/gallery/
              - generic [ref=e248]: GALLERY
      - generic [ref=e251]:
        - heading "HOLIDAYS" [level=2] [ref=e252]
        - generic [ref=e253]:
          - generic [ref=e255]:
            - img "Maharajas Express" [ref=e257]
            - generic [ref=e258]:
              - heading "Maharajas' Express" [level=3] [ref=e259]
              - paragraph [ref=e260]: Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years.
              - link "More info about Maharaja's Express" [ref=e261] [cursor=pointer]:
                - /url: http://www.the-maharajas.com/
                - strong [ref=e262]: Read More
                - generic [ref=e263]: 
          - generic [ref=e265]:
            - img "International Packages" [ref=e267]
            - generic [ref=e268]:
              - heading "International Packages" [level=3] [ref=e269]
              - paragraph [ref=e270]: Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.
              - link "Read More " [ref=e271] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=International&sector=All
                - strong [ref=e272]: Read More
                - generic [ref=e273]: 
          - generic [ref=e275]:
            - img "Domestic Air Packages" [ref=e277]
            - generic [ref=e278]:
              - heading "Domestic Air Packages" [level=3] [ref=e279]
              - paragraph [ref=e280]: Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!
              - link "Read More " [ref=e281] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=Domestic&sector=All
                - strong [ref=e282]: Read More
                - generic [ref=e283]: 
          - generic [ref=e285]:
            - img "Tourist Trains" [ref=e287]
            - generic [ref=e288]:
              - heading "Bharat Gaurav Tourist Train" [level=3] [ref=e289]
              - paragraph [ref=e290]: IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage.
              - link "Read More " [ref=e291] [cursor=pointer]:
                - /url: https://www.irctctourism.com/bharatgaurav
                - strong [ref=e292]: Read More
                - generic [ref=e293]: 
          - generic [ref=e295]:
            - img "Rail/ Land Tour Packages" [ref=e297]
            - generic [ref=e298]:
              - heading "Rail Tour Packages" [level=3] [ref=e299]
              - paragraph [ref=e300]: IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.
              - link "Read More " [ref=e301] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpkgs
                - strong [ref=e302]: Read More
                - generic [ref=e303]: 
    - generic [ref=e308]:
      - contentinfo [ref=e310]:
        - text: Get Connected with us on social networks
        - generic [ref=e311]:
          - link "I.R.C.T.C. Official instagram page. opens a new windows" [ref=e312] [cursor=pointer]:
            - /url: https://www.facebook.com/IRCTCofficial/
            - generic [ref=e313]: 
          - link "I.R.C.T.C. Official whatsapp page. opens a new windows" [ref=e314] [cursor=pointer]:
            - /url: https://whatsapp.com/channel/0029Va4wpCW84OmKdPNQi41P
            - img [ref=e316]
          - link "I.R.C.T.C. Official youtube page. opens a new windows" [ref=e317] [cursor=pointer]:
            - /url: https://youtube.com/c/IRCTCOFFICIAL
            - generic [ref=e318]: 
          - link "I.R.C.T.C. Official facebook page. opens a new windows" [ref=e319] [cursor=pointer]:
            - /url: https://instagram.com/irctc.official?igshid=yyg5byow704l
            - generic [ref=e320]: 
          - link "I.R.C.T.C. Official linkedin page. opens a new windows" [ref=e321] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/irctcofficial
            - generic [ref=e322]: 
          - link "I.R.C.T.C. Official telegram page. opens a new windows" [ref=e323] [cursor=pointer]:
            - /url: https://t.me/IRCTC_Official
            - generic [ref=e324]: 
          - link "I.R.C.T.C. Official pinterest page. opens a new windows" [ref=e325] [cursor=pointer]:
            - /url: https://in.pinterest.com/irctcofficial/
            - generic [ref=e326]: 
          - link "I.R.C.T.C. Official tumblr page. opens a new windows" [ref=e327] [cursor=pointer]:
            - /url: https://irctcofficial.tumblr.com/
            - generic [ref=e328]: 
          - link "I.R.C.T.C. Official Koo page. opens a new windows" [ref=e329] [cursor=pointer]:
            - /url: https://www.kooapp.com/profile/irctcofficial
            - img [ref=e331]
          - link "I.R.C.T.C. Official twitter page. opens a new windows" [ref=e332] [cursor=pointer]:
            - /url: https://twitter.com/IRCTCofficial
            - generic [ref=e333]: 
      - generic [ref=e337]:
        - generic [ref=e339]:
          - button "IRCTC Trains " [ref=e340] [cursor=pointer]:
            - generic [ref=e341]:
              - text: IRCTC Trains
              - generic [ref=e342]: 
          - button "General Information " [ref=e343] [cursor=pointer]:
            - generic [ref=e344]:
              - text: General Information
              - generic [ref=e345]: 
          - button "Important Information " [ref=e346] [cursor=pointer]:
            - generic [ref=e347]:
              - text: Important Information
              - generic [ref=e348]: 
          - button "Agents " [ref=e349] [cursor=pointer]:
            - generic [ref=e350]:
              - text: Agents
              - generic [ref=e351]: 
          - button "Enquiries " [ref=e352] [cursor=pointer]:
            - generic [ref=e353]:
              - text: Enquiries
              - generic [ref=e354]: 
        - generic [ref=e356]:
          - button "How To " [ref=e357] [cursor=pointer]:
            - generic [ref=e358]:
              - text: How To
              - generic [ref=e359]: 
          - button "IRCTC Official App " [ref=e360] [cursor=pointer]:
            - generic [ref=e361]:
              - text: IRCTC Official App
              - generic [ref=e362]: 
          - button "Advertise with us " [ref=e363] [cursor=pointer]:
            - generic [ref=e364]:
              - text: Advertise with us
              - generic [ref=e365]: 
          - button "Refund Rules " [ref=e366] [cursor=pointer]:
            - generic [ref=e367]:
              - text: Refund Rules
              - generic [ref=e368]: 
          - button "Person With Disability Facilities " [ref=e369] [cursor=pointer]:
            - generic [ref=e370]:
              - text: Person With Disability Facilities
              - generic [ref=e371]: 
        - generic [ref=e373]:
          - button "E-Wallet " [ref=e374] [cursor=pointer]:
            - generic [ref=e375]:
              - text: E-Wallet
              - generic [ref=e376]: 
          - button "IRCTC Co-branded Card Benefits " [ref=e377] [cursor=pointer]:
            - generic [ref=e378]:
              - text: IRCTC Co-branded Card Benefits
              - generic [ref=e379]: 
          - button "IRCTC-iPAY Payment Gateway " [ref=e380] [cursor=pointer]:
            - generic [ref=e381]:
              - text: IRCTC-iPAY Payment Gateway
              - generic [ref=e382]: 
          - button "IRCTC Zone " [ref=e383] [cursor=pointer]:
            - generic [ref=e384]:
              - text: IRCTC Zone
              - generic [ref=e385]: 
          - button "DMRC Ticket Booking at IRCTC " [ref=e386] [cursor=pointer]:
            - generic [ref=e387]:
              - text: DMRC Ticket Booking at IRCTC
              - generic [ref=e388]: 
        - generic [ref=e390]:
          - button "For Newly Migrated Agents " [ref=e392] [cursor=pointer]:
            - generic [ref=e393]:
              - text: For Newly Migrated Agents
              - generic [ref=e394]: 
          - button "Mobile Zone " [ref=e395] [cursor=pointer]:
            - generic [ref=e396]:
              - text: Mobile Zone
              - generic [ref=e397]: 
          - button "Policies " [ref=e398] [cursor=pointer]:
            - generic [ref=e399]:
              - text: Policies
              - generic [ref=e400]: 
          - button "Ask Disha ChatBot " [ref=e401] [cursor=pointer]:
            - generic [ref=e402]:
              - text: Ask Disha ChatBot
              - generic [ref=e403]: 
          - button "About us " [ref=e404] [cursor=pointer]:
            - generic [ref=e405]:
              - text: About us
              - generic [ref=e406]: 
        - generic [ref=e409]:
          - button "Help & Support" [ref=e410] [cursor=pointer]
          - button "E-Pantry " [ref=e411] [cursor=pointer]:
            - generic [ref=e412]:
              - text: E-Pantry
              - generic [ref=e413]: 
      - generic [ref=e416]:
        - img "Secured Payment Partner" [ref=e419]
        - generic [ref=e421]:
          - paragraph [ref=e422]: Copyright Â© 2026 - www.irctc.co.in. All Rights Reserved
          - paragraph [ref=e423]:
            - text: Designed and Hosted by
            - strong [ref=e424]:
              - link "CRIS" [ref=e425] [cursor=pointer]:
                - /url: http://cris.org.in
          - paragraph [ref=e426]:
            - strong [ref=e427]:
              - link "Compatible Browsers link opens a new windows" [ref=e428] [cursor=pointer]:
                - /url: http://contents.irctc.co.in/en/BetaSiteCompatibleBrowser.html
                - text: Compatible Browsers
          - paragraph [ref=e429]: DM3MS12
  - generic [ref=e433] [cursor=pointer]: Easy Booking on AskDisha
  - complementary "AskDisha Chat Assistant" [ref=e434]:
    - generic [ref=e435] [cursor=pointer]:
      - img "Open Disha chat" [ref=e436]
      - img "Minimize chat" [ref=e437]
```

# Test source

```ts
  1  | class Irctc {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.fromStationInput = page.locator('input[aria-label="Enter From station. Input is Mandatory."]');
  5  |     this.stationOption = page.locator('li[role="option"]');
  6  | 
  7  |     this.toStationInput = page.locator('input[aria-label="Enter To station. Input is Mandatory."]');
  8  |     this.stationOptionTo = page.locator('li[role="option"]');
  9  | 
  10 |     this.dateOption = page.locator("//input[@class='ng-tns-c69-9 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted']");
  11 |     this.slctDate = page.locator('//a[text()="25"]');
  12 | 
  13 |     this.button = page.locator("//button[@class='search_btn train_Search']");
  14 |   }
  15 |   async goto() {
  16 |     await this.page.goto('https://www.irctc.co.in/nget/train-search');
  17 |   }
  18 |   async selectFromStation() {
  19 |     await this.fromStationInput.click();
  20 |     await this.fromStationInput.fill("TCR");
  21 | 
  22 |     await this.stationOption.first().waitFor();
  23 |     await this.stationOption.first().click();
  24 |   }
  25 | 
  26 |   async selectToStation() {
  27 |     await this.toStationInput.click();
  28 |     await this.toStationInput.fill("PGT");
  29 | 
  30 |     await this.stationOptionTo.first().waitFor();
  31 |     await this.stationOptionTo.first().click();
  32 |   }
  33 | 
  34 |   async selectDate() {
  35 |     await this.dateOption.click();
  36 |     await this.dateOption.fill("29/06/2026");
  37 | 
> 38 |     await this.slctDate.click();
     |                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  39 |     await this.button.click();
  40 |     
  41 |   }
  42 | }
  43 | module.exports = { Irctc }
```