# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: irctc_booking.spec.js >> irctc testing >> Book ticket
- Location: tests\irctc_booking.spec.js:19:5

# Error details

```
TypeError: login.clearCookies is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - banner "Header" [ref=e4]:
      - generic [ref=e5]:
        - dialog "Alert" [ref=e7]:
          - generic [ref=e8]: Alert
          - generic [ref=e10]:
            - img [ref=e13]
            - generic [ref=e14]:
              - generic [ref=e16]:
                - img "IRCTC Logo" [ref=e17]
                - generic [ref=e18]:
                  - heading "आईआरसीटीसी में आपका स्वागत है" [level=1] [ref=e19]
                  - heading "Welcome to IRCTC" [level=1] [ref=e20]
                  - paragraph [ref=e21]: कृपया अपनी पसंदीदा भाषा का चयन करें
                  - paragraph [ref=e22]: Please select your preferred language.
              - generic [ref=e23]:
                - 'button "Confirmation. SafeValue must use [property]=binding: <body><h1 style=\"font-size: 24px; font-weight: bold; margin-bottom: -8px;\">आईआरसीटीसी में आपका स्वागत है</h1><h1 style=\"font-size: 24px;font-weight: bold; margin-bottom: 40px;\">Welcome to IRCTC</h1><p style=\"font-size: 18px;\">कृपया अपनी पसंदीदा भाषा का चयन करें</p><p style=\"font-size: 18px;\">Please select your preferred language.</p></body> (see http://g.co/ng/security#xss). Only Aadhaar-verified users can book tatkal tickets; to skip this information and proceed, press the Enter key." [active] [ref=e24] [cursor=pointer]': हिंदी
                - 'button "Confirmation. SafeValue must use [property]=binding: <body><h1 style=\"font-size: 24px; font-weight: bold; margin-bottom: -8px;\">आईआरसीटीसी में आपका स्वागत है</h1><h1 style=\"font-size: 24px;font-weight: bold; margin-bottom: 40px;\">Welcome to IRCTC</h1><p style=\"font-size: 18px;\">कृपया अपनी पसंदीदा भाषा का चयन करें</p><p style=\"font-size: 18px;\">Please select your preferred language.</p></body> (see http://g.co/ng/security#xss). Only Aadhaar-verified users can book tatkal tickets; to skip this information and proceed, press the Enter key." [ref=e25] [cursor=pointer]': English
        - banner [ref=e27]:
          - generic [ref=e28]:
            - img "Indian railway logo" [ref=e30]
            - img "IRCTC Logo" [ref=e32]
          - generic [ref=e35] [cursor=pointer]: 
          - text:   
        - text:             
    - generic [ref=e41]:
      - generic [ref=e44]:
        - generic:
          - generic [ref=e45]:
            - img "Pnr Icon" [ref=e47]
            - link "PNR Status opens a new window" [ref=e48] [cursor=pointer]:
              - /url: http://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en
              - generic [ref=e49]: PNR STATUS
          - generic [ref=e50]:
            - img "Pnr Icon" [ref=e52]
            - link "Reservation Chart. Website will be opened in new tab" [ref=e53] [cursor=pointer]:
              - /url: https://www.irctc.co.in/online-charts/
              - generic [ref=e54]: CHARTS / VACANCY
        - generic [ref=e55]:
          - generic [ref=e58]: BOOK TICKET
          - generic [ref=e59]:
            - generic [ref=e60]:
              - generic [ref=e62]:
                - generic [ref=e64]: 
                - searchbox "Enter From station. Input is Mandatory." [ref=e67]
                - generic "Enter From station. Input is Mandatory.": From
                - generic:
                  - generic [ref=e69] [cursor=pointer]: 
                  - text: 
              - generic [ref=e71]:
                - generic [ref=e73]: 
                - searchbox "Enter To station. Input is Mandatory." [ref=e76]
                - generic: To
            - generic [ref=e77]:
              - generic [ref=e79]:
                - generic [ref=e81]: 
                - generic "Enter Journey Date. Formate D.D./.M.M./.Y.Y.Y.Y. Input is Mandatory." [ref=e82]:
                  - textbox [ref=e84]: 26/06/2026
                - generic: DD/MM/YYYY *
              - generic [ref=e86]:
                - generic [ref=e88]: 
                - generic [ref=e90] [cursor=pointer]:
                  - generic [ref=e91]:
                    - listbox "All Classes"
                  - generic [ref=e93]: All Classes
                  - button "" [ref=e94]:
                    - generic [ref=e95]: 
            - generic [ref=e97]:
              - generic [ref=e99]: 
              - generic [ref=e102] [cursor=pointer]:
                - generic [ref=e103]:
                  - listbox "GENERAL"
                - generic [ref=e105]: GENERAL
                - button "" [ref=e106]:
                  - generic [ref=e107]: 
            - generic [ref=e109]:
              - generic [ref=e110]:
                - checkbox "Check for DIVYAANG Concession Booking." [ref=e111]
                - generic [ref=e112] [cursor=pointer]: Person With Disability Concession
              - generic [ref=e113]:
                - checkbox "Check to fetch trains runs on other days than you are searching for." [ref=e114]
                - generic [ref=e115] [cursor=pointer]: Flexible With Date
              - generic [ref=e116]:
                - checkbox "Check for pass Booking" [disabled] [ref=e117]
                - generic [ref=e118] [cursor=pointer]: Railway Pass Concession
            - button "Search Trains" [ref=e121] [cursor=pointer]
        - region [ref=e122]
      - generic [ref=e124]:
        - generic [ref=e125]: INDIAN RAILWAYS
        - text: SafetySecurityPunctuality
      - iframe [ref=e130]:
        - link [ref=f18e2] [cursor=pointer]:
          - /url: https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjsuaPdm1PV8P0N6ny601dHuXhFPOOj05VWyogqhXtwWKf-tgXF8cEV8l8Bh8c5lZHjDyN-unDNbSlb0HHKfwsr_LfwSBwkPJ_dNOQdu2yFsDNYfABXmrdG1jcMZXA5Zur7akVesqnqRFxPfT-TC4kVGCW3Bo7kB2hcL7YcJWdpSpy8CBgNbGujbpT2mqJkgH27hFOSBh8dCdJPsiFdbKMiY3IFn9YGUwRNkwFgtMmCeL_Bkhecv4e42H8V7rCPToyRr9OWlWx0eEdGv4WCwZYoq1E4ZBYE2Tlzxecaf2jJrYvmOW854TgVD5o0veEZvl_5SGt9U2fp7E9XgdBPaowKl3-KEffHRaXpg1Y5m3IU1qHdiQyeXEauPeFhF4ENt3ADJmsRk5YH8YoA&sai=AMfl-YR6cErUKstb8KlYqqOxItq-2G8yFt1sFlPZKi6nETAYj-yaXzEXS9mQbIdgGl91K2vmtekB_p36rsPLd3nLMpG50g_LZY1WXu70orVjDR6ntkuNXgC8k4P7cLplKUmGW4z4zmOW3iEdTYoWrQnHd4phkVY8WyhNJOZDMPxB3EuYdjVc_1Dw2zoeGYfY-IUKCDz7JHnGDZ7f9fYKNzoqPOOoPrljbW4sS7DNvWK8WyMuTk-P-gcpndSZAMzPnDjfHRyw-SZyYcmVwKDHmb6Mx5P8SEM7dL9wp32AcZ2HgsgPn7O-UBmv41pNdJ3hi-OwYwE_TeebvQA0pA-PWjCgHgjqqsme9MyY6CKQubpw7_9CwvyADQNZHI4R-xJymaoujGvXpeQm7vADMZpa&sig=Cg0ArKJSzDCN71yKdPYR&fbs_aeid=%5Bgw_fbsaeid%5D&adurl=https://consumeraffairs.gov.in/
      - generic [ref=e132]:
        - heading "Have you not found the right one? Find a service suitable for you here." [level=2] [ref=e133]:
          - text: Have you not found the right one?
          - text: Find a service suitable for you here.
        - list [ref=e134]:
          - listitem [ref=e135]:
            - link "Flight opens a new window" [ref=e136] [cursor=pointer]:
              - /url: https://www.air.irctc.co.in/
              - generic [ref=e138]: FLIGHTS
          - listitem [ref=e139]:
            - link "HOTELS" [ref=e140] [cursor=pointer]:
              - /url: https://www.hotels.irctc.co.in
              - generic [ref=e142]: HOTELS
          - listitem [ref=e143]:
            - link " RAIL DRISHTI" [ref=e144] [cursor=pointer]:
              - /url: https://raildrishti.indianrailways.gov.in/
              - generic [ref=e145]: 
              - generic [ref=e146]: RAIL DRISHTI
          - listitem [ref=e147]:
            - link "E-CATERING" [ref=e148] [cursor=pointer]:
              - /url: https://www.ecatering.irctc.co.in/
              - generic [ref=e150]: E-CATERING
          - listitem [ref=e151]:
            - link " BUS" [ref=e152] [cursor=pointer]:
              - /url: https://www.bus.irctc.co.in/home
              - generic [ref=e153]: 
              - generic [ref=e154]: BUS
        - list [ref=e155]:
          - listitem [ref=e156]:
            - link "HOLIDAY PACKAGES" [ref=e157] [cursor=pointer]:
              - /url: https://www.irctctourism.com/tourpacakage_search?searchKey=&tagType=&travelType=&category=
              - generic [ref=e159]: HOLIDAY PACKAGES
          - listitem [ref=e160]:
            - link "TOURIST TRAIN" [ref=e161] [cursor=pointer]:
              - /url: https://www.irctctourism.com/bharatgaurav
              - generic [ref=e163]: TOURIST TRAIN
          - listitem [ref=e164]:
            - link "HILL RAILWAYS" [ref=e165] [cursor=pointer]:
              - /url: https://www.irctctourism.com/gallery/
              - generic [ref=e167]: HILL RAILWAYS
          - listitem [ref=e168]:
            - link "CHARTER TRAIN" [ref=e169] [cursor=pointer]:
              - /url: https://www.ftr.irctc.co.in/ftr/
              - generic [ref=e171]: CHARTER TRAIN
          - listitem [ref=e172]:
            - link "GALLERY" [ref=e173] [cursor=pointer]:
              - /url: https://www.irctctourism.com/gallery/
              - generic [ref=e175]: GALLERY
      - generic [ref=e178]:
        - heading "HOLIDAYS" [level=2] [ref=e179]
        - generic [ref=e180]:
          - generic [ref=e182]:
            - img "Maharajas Express" [ref=e184]
            - generic [ref=e185]:
              - heading "Maharajas' Express" [level=3] [ref=e186]
              - paragraph [ref=e187]: Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years.
              - link "More info about Maharaja's Express" [ref=e188] [cursor=pointer]:
                - /url: http://www.the-maharajas.com/
                - strong [ref=e189]: Read More
                - generic [ref=e190]: 
          - generic [ref=e192]:
            - img "International Packages" [ref=e194]
            - generic [ref=e195]:
              - heading "International Packages" [level=3] [ref=e196]
              - paragraph [ref=e197]: Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.
              - link "Read More " [ref=e198] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=International&sector=All
                - strong [ref=e199]: Read More
                - generic [ref=e200]: 
          - generic [ref=e202]:
            - img "Domestic Air Packages" [ref=e204]
            - generic [ref=e205]:
              - heading "Domestic Air Packages" [level=3] [ref=e206]
              - paragraph [ref=e207]: Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!
              - link "Read More " [ref=e208] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=Domestic&sector=All
                - strong [ref=e209]: Read More
                - generic [ref=e210]: 
          - generic [ref=e212]:
            - img "Tourist Trains" [ref=e214]
            - generic [ref=e215]:
              - heading "Bharat Gaurav Tourist Train" [level=3] [ref=e216]
              - paragraph [ref=e217]: IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage.
              - link "Read More " [ref=e218] [cursor=pointer]:
                - /url: https://www.irctctourism.com/bharatgaurav
                - strong [ref=e219]: Read More
                - generic [ref=e220]: 
          - generic [ref=e222]:
            - img "Rail/ Land Tour Packages" [ref=e224]
            - generic [ref=e225]:
              - heading "Rail Tour Packages" [level=3] [ref=e226]
              - paragraph [ref=e227]: IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.
              - link "Read More " [ref=e228] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpkgs
                - strong [ref=e229]: Read More
                - generic [ref=e230]: 
    - generic [ref=e235]:
      - contentinfo [ref=e237]:
        - text: Get Connected with us on social networks
        - generic [ref=e238]:
          - link "I.R.C.T.C. Official instagram page. opens a new windows" [ref=e239] [cursor=pointer]:
            - /url: https://www.facebook.com/IRCTCofficial/
            - generic [ref=e240]: 
          - link "I.R.C.T.C. Official whatsapp page. opens a new windows" [ref=e241] [cursor=pointer]:
            - /url: https://whatsapp.com/channel/0029Va4wpCW84OmKdPNQi41P
            - img [ref=e243]
          - link "I.R.C.T.C. Official youtube page. opens a new windows" [ref=e244] [cursor=pointer]:
            - /url: https://youtube.com/c/IRCTCOFFICIAL
            - generic [ref=e245]: 
          - link "I.R.C.T.C. Official facebook page. opens a new windows" [ref=e246] [cursor=pointer]:
            - /url: https://instagram.com/irctc.official?igshid=yyg5byow704l
            - generic [ref=e247]: 
          - link "I.R.C.T.C. Official linkedin page. opens a new windows" [ref=e248] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/irctcofficial
            - generic [ref=e249]: 
          - link "I.R.C.T.C. Official telegram page. opens a new windows" [ref=e250] [cursor=pointer]:
            - /url: https://t.me/IRCTC_Official
            - generic [ref=e251]: 
          - link "I.R.C.T.C. Official pinterest page. opens a new windows" [ref=e252] [cursor=pointer]:
            - /url: https://in.pinterest.com/irctcofficial/
            - generic [ref=e253]: 
          - link "I.R.C.T.C. Official tumblr page. opens a new windows" [ref=e254] [cursor=pointer]:
            - /url: https://irctcofficial.tumblr.com/
            - generic [ref=e255]: 
          - link "I.R.C.T.C. Official Koo page. opens a new windows" [ref=e256] [cursor=pointer]:
            - /url: https://www.kooapp.com/profile/irctcofficial
            - img [ref=e258]
          - link "I.R.C.T.C. Official twitter page. opens a new windows" [ref=e259] [cursor=pointer]:
            - /url: https://twitter.com/IRCTCofficial
            - generic [ref=e260]: 
      - generic [ref=e264]:
        - generic [ref=e266]:
          - button "IRCTC Trains " [ref=e267] [cursor=pointer]:
            - generic [ref=e268]:
              - text: IRCTC Trains
              - generic [ref=e269]: 
          - button "General Information " [ref=e270] [cursor=pointer]:
            - generic [ref=e271]:
              - text: General Information
              - generic [ref=e272]: 
          - button "Important Information " [ref=e273] [cursor=pointer]:
            - generic [ref=e274]:
              - text: Important Information
              - generic [ref=e275]: 
          - button "Agents " [ref=e276] [cursor=pointer]:
            - generic [ref=e277]:
              - text: Agents
              - generic [ref=e278]: 
          - button "Enquiries " [ref=e279] [cursor=pointer]:
            - generic [ref=e280]:
              - text: Enquiries
              - generic [ref=e281]: 
        - generic [ref=e283]:
          - button "How To " [ref=e284] [cursor=pointer]:
            - generic [ref=e285]:
              - text: How To
              - generic [ref=e286]: 
          - button "IRCTC Official App " [ref=e287] [cursor=pointer]:
            - generic [ref=e288]:
              - text: IRCTC Official App
              - generic [ref=e289]: 
          - button "Advertise with us " [ref=e290] [cursor=pointer]:
            - generic [ref=e291]:
              - text: Advertise with us
              - generic [ref=e292]: 
          - button "Refund Rules " [ref=e293] [cursor=pointer]:
            - generic [ref=e294]:
              - text: Refund Rules
              - generic [ref=e295]: 
          - button "Person With Disability Facilities " [ref=e296] [cursor=pointer]:
            - generic [ref=e297]:
              - text: Person With Disability Facilities
              - generic [ref=e298]: 
        - generic [ref=e300]:
          - button "E-Wallet " [ref=e301] [cursor=pointer]:
            - generic [ref=e302]:
              - text: E-Wallet
              - generic [ref=e303]: 
          - button "IRCTC Co-branded Card Benefits " [ref=e304] [cursor=pointer]:
            - generic [ref=e305]:
              - text: IRCTC Co-branded Card Benefits
              - generic [ref=e306]: 
          - button "IRCTC-iPAY Payment Gateway " [ref=e307] [cursor=pointer]:
            - generic [ref=e308]:
              - text: IRCTC-iPAY Payment Gateway
              - generic [ref=e309]: 
          - button "IRCTC Zone " [ref=e310] [cursor=pointer]:
            - generic [ref=e311]:
              - text: IRCTC Zone
              - generic [ref=e312]: 
          - button "DMRC Ticket Booking at IRCTC " [ref=e313] [cursor=pointer]:
            - generic [ref=e314]:
              - text: DMRC Ticket Booking at IRCTC
              - generic [ref=e315]: 
        - generic [ref=e317]:
          - button "For Newly Migrated Agents " [ref=e319] [cursor=pointer]:
            - generic [ref=e320]:
              - text: For Newly Migrated Agents
              - generic [ref=e321]: 
          - button "Mobile Zone " [ref=e322] [cursor=pointer]:
            - generic [ref=e323]:
              - text: Mobile Zone
              - generic [ref=e324]: 
          - button "Policies " [ref=e325] [cursor=pointer]:
            - generic [ref=e326]:
              - text: Policies
              - generic [ref=e327]: 
          - button "Ask Disha ChatBot " [ref=e328] [cursor=pointer]:
            - generic [ref=e329]:
              - text: Ask Disha ChatBot
              - generic [ref=e330]: 
          - button "About us " [ref=e331] [cursor=pointer]:
            - generic [ref=e332]:
              - text: About us
              - generic [ref=e333]: 
        - generic [ref=e336]:
          - button "Help & Support" [ref=e337] [cursor=pointer]
          - button "E-Pantry " [ref=e338] [cursor=pointer]:
            - generic [ref=e339]:
              - text: E-Pantry
              - generic [ref=e340]: 
      - generic [ref=e343]:
        - img "Secured Payment Partner" [ref=e346]
        - generic [ref=e348]:
          - paragraph [ref=e349]: Copyright Â© 2026 - www.irctc.co.in. All Rights Reserved
          - paragraph [ref=e350]:
            - text: Designed and Hosted by
            - strong [ref=e351]:
              - link "CRIS" [ref=e352] [cursor=pointer]:
                - /url: http://cris.org.in
          - paragraph [ref=e353]:
            - strong [ref=e354]:
              - link "Compatible Browsers link opens a new windows" [ref=e355] [cursor=pointer]:
                - /url: http://contents.irctc.co.in/en/BetaSiteCompatibleBrowser.html
                - text: Compatible Browsers
          - paragraph [ref=e356]: DM5MS13
  - generic [ref=e360] [cursor=pointer]: Easy Booking on AskDisha
  - complementary "AskDisha Chat Assistant" [ref=e361]:
    - generic [ref=e362] [cursor=pointer]:
      - img "Open Disha chat" [ref=e363]
      - img "Minimize chat" [ref=e364]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { Irctc } = require('../pages/irctspage');
  3  | const { error } = require('node:console');
  4  | 
  5  | test.describe('irctc testing', () => {
  6  | 
  7  |     // test('login', async ({ page }) => {
  8  |     //     const login = new Irctc(page);
  9  |     //     await login.goto();
  10 | 
  11 |     //     const languagePopup = page.locator("//button[text()='English']");
  12 |     //     if (await languagePopup.isVisible()) {
  13 |     //         await page.getByText('English').click();
  14 |     //     }
  15 |     //     await page.waitForTimeout(2000);
  16 | 
  17 | 
  18 |     // })
  19 |     test('Book ticket', async ({ page }) => {
  20 |         const login = new Irctc(page);
  21 |         await login.goto();
> 22 |         await login.clearCookies();
     |                     ^ TypeError: login.clearCookies is not a function
  23 |         const languagePopup = page.locator("//button[text()='English']");
  24 |         if (await languagePopup.isVisible()) {
  25 |             await page.getByText('English').click();
  26 |         }
  27 |         //await page.locator('//a[contains(@class,"loginCloseBtn")]').click();
  28 | 
  29 | 
  30 | 
  31 |         const fromStation = new Irctc(page);
  32 |         await fromStation.selectFromStation('TCR');
  33 |         await page.waitForTimeout(2000);
  34 | 
  35 |         const toStation = new Irctc(page);
  36 |         await toStation.selectToStation('PGT');
  37 |         await page.waitForTimeout(2000);
  38 | 
  39 |         const date = new Irctc(page);
  40 |         await date.selectDate();
  41 |         await page.waitForTimeout(2000);
  42 | 
  43 |     })
  44 | })
```