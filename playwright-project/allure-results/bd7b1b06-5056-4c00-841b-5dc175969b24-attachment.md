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
  - waiting for locator('li[role="option"]').filter({ hasText: 'THRISSUR - TCR' })

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
                - generic [ref=e45] [cursor=pointer]:
                  - searchbox "Enter From station. Input is Mandatory." [active] [ref=e46]: TCR
                  - listbox [ref=e48]:
                    - option "THRISUR - TCR KERALA" [ref=e49]:
                      - generic [ref=e50]:
                        - text: THRISUR - TCR
                        - strong
                        - strong [ref=e52]: KERALA
                    - option "----- Stations -----" [ref=e53]:
                      - generic [ref=e54]: "----- Stations -----"
                - generic "Enter From station. Input is Mandatory.": From
                - generic:
                  - generic [ref=e56] [cursor=pointer]: 
                  - text: 
              - generic [ref=e58]:
                - generic [ref=e60]: 
                - searchbox "Enter To station. Input is Mandatory." [ref=e63]
                - generic: To
            - generic [ref=e64]:
              - generic [ref=e66]:
                - generic [ref=e68]: 
                - generic "Enter Journey Date. Formate D.D./.M.M./.Y.Y.Y.Y. Input is Mandatory." [ref=e69]:
                  - textbox [ref=e71]: 18/06/2026
                - generic: DD/MM/YYYY *
              - generic [ref=e73]:
                - generic [ref=e75]: 
                - generic [ref=e77] [cursor=pointer]:
                  - generic [ref=e78]:
                    - listbox "All Classes"
                  - generic [ref=e80]: All Classes
                  - button "" [ref=e81]:
                    - generic [ref=e82]: 
            - generic [ref=e84]:
              - generic [ref=e86]: 
              - generic [ref=e89] [cursor=pointer]:
                - generic [ref=e90]:
                  - listbox "GENERAL"
                - generic [ref=e92]: GENERAL
                - button "" [ref=e93]:
                  - generic [ref=e94]: 
            - generic [ref=e96]:
              - generic [ref=e97]:
                - checkbox "Check for DIVYAANG Concession Booking." [ref=e98]
                - generic [ref=e99] [cursor=pointer]: Person With Disability Concession
              - generic [ref=e100]:
                - checkbox "Check to fetch trains runs on other days than you are searching for." [ref=e101]
                - generic [ref=e102] [cursor=pointer]: Flexible With Date
              - generic [ref=e103]:
                - checkbox "Check for pass Booking" [disabled] [ref=e104]
                - generic [ref=e105] [cursor=pointer]: Railway Pass Concession
            - button "Search Trains" [ref=e108] [cursor=pointer]
        - region [ref=e109]
      - generic [ref=e111]:
        - generic [ref=e112]: INDIAN RAILWAYS
        - text: SafetySecurityPunctuality
      - generic [ref=e118]:
        - heading "Have you not found the right one? Find a service suitable for you here." [level=2] [ref=e119]:
          - text: Have you not found the right one?
          - text: Find a service suitable for you here.
        - list [ref=e120]:
          - listitem [ref=e121]:
            - link "Flight opens a new window" [ref=e122] [cursor=pointer]:
              - /url: https://www.air.irctc.co.in/
              - generic [ref=e124]: FLIGHTS
          - listitem [ref=e125]:
            - link "HOTELS" [ref=e126] [cursor=pointer]:
              - /url: https://www.hotels.irctc.co.in
              - generic [ref=e128]: HOTELS
          - listitem [ref=e129]:
            - link " RAIL DRISHTI" [ref=e130] [cursor=pointer]:
              - /url: https://raildrishti.indianrailways.gov.in/
              - generic [ref=e131]: 
              - generic [ref=e132]: RAIL DRISHTI
          - listitem [ref=e133]:
            - link "E-CATERING" [ref=e134] [cursor=pointer]:
              - /url: https://www.ecatering.irctc.co.in/
              - generic [ref=e136]: E-CATERING
          - listitem [ref=e137]:
            - link " BUS" [ref=e138] [cursor=pointer]:
              - /url: https://www.bus.irctc.co.in/home
              - generic [ref=e139]: 
              - generic [ref=e140]: BUS
        - list [ref=e141]:
          - listitem [ref=e142]:
            - link "HOLIDAY PACKAGES" [ref=e143] [cursor=pointer]:
              - /url: https://www.irctctourism.com/tourpacakage_search?searchKey=&tagType=&travelType=&category=
              - generic [ref=e145]: HOLIDAY PACKAGES
          - listitem [ref=e146]:
            - link "TOURIST TRAIN" [ref=e147] [cursor=pointer]:
              - /url: https://www.irctctourism.com/bharatgaurav
              - generic [ref=e149]: TOURIST TRAIN
          - listitem [ref=e150]:
            - link "HILL RAILWAYS" [ref=e151] [cursor=pointer]:
              - /url: https://www.irctctourism.com/gallery/
              - generic [ref=e153]: HILL RAILWAYS
          - listitem [ref=e154]:
            - link "CHARTER TRAIN" [ref=e155] [cursor=pointer]:
              - /url: https://www.ftr.irctc.co.in/ftr/
              - generic [ref=e157]: CHARTER TRAIN
          - listitem [ref=e158]:
            - link "GALLERY" [ref=e159] [cursor=pointer]:
              - /url: https://www.irctctourism.com/gallery/
              - generic [ref=e161]: GALLERY
      - generic [ref=e164]:
        - heading "HOLIDAYS" [level=2] [ref=e165]
        - generic [ref=e166]:
          - generic [ref=e168]:
            - img "Maharajas Express" [ref=e170]
            - generic [ref=e171]:
              - heading "Maharajas' Express" [level=3] [ref=e172]
              - paragraph [ref=e173]: Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years.
              - link "More info about Maharaja's Express" [ref=e174] [cursor=pointer]:
                - /url: http://www.the-maharajas.com/
                - strong [ref=e175]: Read More
                - generic [ref=e176]: 
          - generic [ref=e178]:
            - img "International Packages" [ref=e180]
            - generic [ref=e181]:
              - heading "International Packages" [level=3] [ref=e182]
              - paragraph [ref=e183]: Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.
              - link "Read More " [ref=e184] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=International&sector=All
                - strong [ref=e185]: Read More
                - generic [ref=e186]: 
          - generic [ref=e188]:
            - img "Domestic Air Packages" [ref=e190]
            - generic [ref=e191]:
              - heading "Domestic Air Packages" [level=3] [ref=e192]
              - paragraph [ref=e193]: Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!
              - link "Read More " [ref=e194] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=Domestic&sector=All
                - strong [ref=e195]: Read More
                - generic [ref=e196]: 
          - generic [ref=e198]:
            - img "Tourist Trains" [ref=e200]
            - generic [ref=e201]:
              - heading "Bharat Gaurav Tourist Train" [level=3] [ref=e202]
              - paragraph [ref=e203]: IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage.
              - link "Read More " [ref=e204] [cursor=pointer]:
                - /url: https://www.irctctourism.com/bharatgaurav
                - strong [ref=e205]: Read More
                - generic [ref=e206]: 
          - generic [ref=e208]:
            - img "Rail/ Land Tour Packages" [ref=e210]
            - generic [ref=e211]:
              - heading "Rail Tour Packages" [level=3] [ref=e212]
              - paragraph [ref=e213]: IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.
              - link "Read More " [ref=e214] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpkgs
                - strong [ref=e215]: Read More
                - generic [ref=e216]: 
    - generic [ref=e221]:
      - contentinfo [ref=e223]:
        - text: Get Connected with us on social networks
        - generic [ref=e224]:
          - link "I.R.C.T.C. Official instagram page. opens a new windows" [ref=e225] [cursor=pointer]:
            - /url: https://www.facebook.com/IRCTCofficial/
            - generic [ref=e226]: 
          - link "I.R.C.T.C. Official whatsapp page. opens a new windows" [ref=e227] [cursor=pointer]:
            - /url: https://whatsapp.com/channel/0029Va4wpCW84OmKdPNQi41P
            - img [ref=e229]
          - link "I.R.C.T.C. Official youtube page. opens a new windows" [ref=e230] [cursor=pointer]:
            - /url: https://youtube.com/c/IRCTCOFFICIAL
            - generic [ref=e231]: 
          - link "I.R.C.T.C. Official facebook page. opens a new windows" [ref=e232] [cursor=pointer]:
            - /url: https://instagram.com/irctc.official?igshid=yyg5byow704l
            - generic [ref=e233]: 
          - link "I.R.C.T.C. Official linkedin page. opens a new windows" [ref=e234] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/irctcofficial
            - generic [ref=e235]: 
          - link "I.R.C.T.C. Official telegram page. opens a new windows" [ref=e236] [cursor=pointer]:
            - /url: https://t.me/IRCTC_Official
            - generic [ref=e237]: 
          - link "I.R.C.T.C. Official pinterest page. opens a new windows" [ref=e238] [cursor=pointer]:
            - /url: https://in.pinterest.com/irctcofficial/
            - generic [ref=e239]: 
          - link "I.R.C.T.C. Official tumblr page. opens a new windows" [ref=e240] [cursor=pointer]:
            - /url: https://irctcofficial.tumblr.com/
            - generic [ref=e241]: 
          - link "I.R.C.T.C. Official Koo page. opens a new windows" [ref=e242] [cursor=pointer]:
            - /url: https://www.kooapp.com/profile/irctcofficial
            - img [ref=e244]
          - link "I.R.C.T.C. Official twitter page. opens a new windows" [ref=e245] [cursor=pointer]:
            - /url: https://twitter.com/IRCTCofficial
            - generic [ref=e246]: 
      - generic [ref=e250]:
        - generic [ref=e252]:
          - button "IRCTC Trains " [ref=e253] [cursor=pointer]:
            - generic [ref=e254]:
              - text: IRCTC Trains
              - generic [ref=e255]: 
          - button "General Information " [ref=e256] [cursor=pointer]:
            - generic [ref=e257]:
              - text: General Information
              - generic [ref=e258]: 
          - button "Important Information " [ref=e259] [cursor=pointer]:
            - generic [ref=e260]:
              - text: Important Information
              - generic [ref=e261]: 
          - button "Agents " [ref=e262] [cursor=pointer]:
            - generic [ref=e263]:
              - text: Agents
              - generic [ref=e264]: 
          - button "Enquiries " [ref=e265] [cursor=pointer]:
            - generic [ref=e266]:
              - text: Enquiries
              - generic [ref=e267]: 
        - generic [ref=e269]:
          - button "How To " [ref=e270] [cursor=pointer]:
            - generic [ref=e271]:
              - text: How To
              - generic [ref=e272]: 
          - button "IRCTC Official App " [ref=e273] [cursor=pointer]:
            - generic [ref=e274]:
              - text: IRCTC Official App
              - generic [ref=e275]: 
          - button "Advertise with us " [ref=e276] [cursor=pointer]:
            - generic [ref=e277]:
              - text: Advertise with us
              - generic [ref=e278]: 
          - button "Refund Rules " [ref=e279] [cursor=pointer]:
            - generic [ref=e280]:
              - text: Refund Rules
              - generic [ref=e281]: 
          - button "Person With Disability Facilities " [ref=e282] [cursor=pointer]:
            - generic [ref=e283]:
              - text: Person With Disability Facilities
              - generic [ref=e284]: 
        - generic [ref=e286]:
          - button "E-Wallet " [ref=e287] [cursor=pointer]:
            - generic [ref=e288]:
              - text: E-Wallet
              - generic [ref=e289]: 
          - button "IRCTC Co-branded Card Benefits " [ref=e290] [cursor=pointer]:
            - generic [ref=e291]:
              - text: IRCTC Co-branded Card Benefits
              - generic [ref=e292]: 
          - button "IRCTC-iPAY Payment Gateway " [ref=e293] [cursor=pointer]:
            - generic [ref=e294]:
              - text: IRCTC-iPAY Payment Gateway
              - generic [ref=e295]: 
          - button "IRCTC Zone " [ref=e296] [cursor=pointer]:
            - generic [ref=e297]:
              - text: IRCTC Zone
              - generic [ref=e298]: 
          - button "DMRC Ticket Booking at IRCTC " [ref=e299] [cursor=pointer]:
            - generic [ref=e300]:
              - text: DMRC Ticket Booking at IRCTC
              - generic [ref=e301]: 
        - generic [ref=e303]:
          - button "For Newly Migrated Agents " [ref=e305] [cursor=pointer]:
            - generic [ref=e306]:
              - text: For Newly Migrated Agents
              - generic [ref=e307]: 
          - button "Mobile Zone " [ref=e308] [cursor=pointer]:
            - generic [ref=e309]:
              - text: Mobile Zone
              - generic [ref=e310]: 
          - button "Policies " [ref=e311] [cursor=pointer]:
            - generic [ref=e312]:
              - text: Policies
              - generic [ref=e313]: 
          - button "Ask Disha ChatBot " [ref=e314] [cursor=pointer]:
            - generic [ref=e315]:
              - text: Ask Disha ChatBot
              - generic [ref=e316]: 
          - button "About us " [ref=e317] [cursor=pointer]:
            - generic [ref=e318]:
              - text: About us
              - generic [ref=e319]: 
        - generic [ref=e322]:
          - button "Help & Support" [ref=e323] [cursor=pointer]
          - button "E-Pantry " [ref=e324] [cursor=pointer]:
            - generic [ref=e325]:
              - text: E-Pantry
              - generic [ref=e326]: 
      - generic [ref=e329]:
        - img "Secured Payment Partner" [ref=e332]
        - generic [ref=e334]:
          - paragraph [ref=e335]: Copyright Â© 2026 - www.irctc.co.in. All Rights Reserved
          - paragraph [ref=e336]:
            - text: Designed and Hosted by
            - strong [ref=e337]:
              - link "CRIS" [ref=e338] [cursor=pointer]:
                - /url: http://cris.org.in
          - paragraph [ref=e339]:
            - strong [ref=e340]:
              - link "Compatible Browsers link opens a new windows" [ref=e341] [cursor=pointer]:
                - /url: http://contents.irctc.co.in/en/BetaSiteCompatibleBrowser.html
                - text: Compatible Browsers
          - paragraph [ref=e342]: DM6MS11
  - generic [ref=e346] [cursor=pointer]: Easy Booking on AskDisha
  - complementary "AskDisha Chat Assistant" [ref=e348]:
    - generic [ref=e349] [cursor=pointer]:
      - img "Open Disha chat" [ref=e350]
      - img "Minimize chat" [ref=e351]
```

# Test source

```ts
  1  | class Irctc{
  2  | constructor(page){
  3  |     this.page = page;
  4  |     this.frm=page.locator("//input[@aria-label='Enter From station. Input is Mandatory.']");
  5  |     this.tcr=page.locator('li[role="option"]');
  6  | }
  7  |  async goto() {
  8  |     await this.page.goto('https://www.irctc.co.in/nget/train-search');
  9  |   }
  10 |    async from() {
  11 |     await this.frm.fill("TCR");
  12 |     // await this.locator('ul[role="listbox"]').waitFor();
  13 |     // await this.getByText('THRISSUR - TCR').click();
  14 |     await this.tcr.filter({
  15 |   hasText: 'THRISSUR - TCR'
> 16 | }).click();
     |    ^ Error: locator.click: Test timeout of 30000ms exceeded.
  17 |    
  18 |   }
  19 | }
  20 | module.exports={Irctc}
```