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
  - waiting for getByText('THRISSUR - TCR')

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
                  - searchbox "Enter From station. Input is Mandatory." [active] [ref=e46]: THR
                  - listbox [ref=e48]:
                    - option "----- Stations -----" [ref=e49]:
                      - generic [ref=e50]: "----- Stations -----"
                    - option "THRISUR - TCR KERALA" [ref=e51]:
                      - generic [ref=e52]:
                        - text: THRISUR - TCR
                        - strong
                        - strong [ref=e54]: KERALA
                    - option "BANTHRA - BTRA UTTAR PRADESH" [ref=e55]:
                      - generic [ref=e56]:
                        - text: BANTHRA - BTRA
                        - strong
                        - strong [ref=e58]: UTTAR PRADESH
                    - option "GOLANTHRA - GTA ODISHA" [ref=e59]:
                      - generic [ref=e60]:
                        - text: GOLANTHRA - GTA
                        - strong
                        - strong [ref=e62]: ODISHA
                    - option "HATHRAS CITY - HTC UTTAR PRADESH" [ref=e63]:
                      - generic [ref=e64]:
                        - text: HATHRAS CITY - HTC
                        - strong
                        - strong [ref=e66]: UTTAR PRADESH
                    - option "HATHRAS JN - HRS UTTAR PRADESH" [ref=e67]:
                      - generic [ref=e68]:
                        - text: HATHRAS JN - HRS
                        - strong
                        - strong [ref=e70]: UTTAR PRADESH
                    - option "HATHRAS ROAD - HTJ UTTAR PRADESH" [ref=e71]:
                      - generic [ref=e72]:
                        - text: HATHRAS ROAD - HTJ
                        - strong
                        - strong [ref=e74]: UTTAR PRADESH
                    - option "MANTHRALAYAM RD - MALM ANDHRA PRADESH" [ref=e75]:
                      - generic [ref=e76]:
                        - text: MANTHRALAYAM RD - MALM
                        - strong
                        - strong [ref=e78]: ANDHRA PRADESH
                    - option "PATHRAD - PARD MAHARASHTRA" [ref=e79]:
                      - generic [ref=e80]:
                        - text: PATHRAD - PARD
                        - strong
                        - strong [ref=e82]: MAHARASHTRA
                    - option "PATHRALA - PTRL PUNJAB" [ref=e83]:
                      - generic [ref=e84]:
                        - text: PATHRALA - PTRL
                        - strong
                        - strong [ref=e86]: PUNJAB
                    - option "PATHRI - PRI UTTARAKHAND" [ref=e87]:
                      - generic [ref=e88]:
                        - text: PATHRI - PRI
                        - strong
                        - strong [ref=e90]: UTTARAKHAND
                    - option "PATHROT - PTRT MAHARASHTRA" [ref=e91]:
                      - generic [ref=e92]:
                        - text: PATHROT - PTRT
                        - strong
                        - strong [ref=e94]: MAHARASHTRA
                    - option "THATHANA MITHRI - THMR RAJASTHAN" [ref=e95]:
                      - generic [ref=e96]:
                        - text: THATHANA MITHRI - THMR
                        - strong
                        - strong [ref=e98]: RAJASTHAN
                - generic "Enter From station. Input is Mandatory.": From
                - generic:
                  - generic [ref=e100] [cursor=pointer]: 
                  - text: 
              - generic [ref=e102]:
                - generic [ref=e104]: 
                - searchbox "Enter To station. Input is Mandatory." [ref=e107]
                - generic: To
            - generic [ref=e108]:
              - generic [ref=e110]:
                - generic [ref=e112]: 
                - generic "Enter Journey Date. Formate D.D./.M.M./.Y.Y.Y.Y. Input is Mandatory." [ref=e113]:
                  - textbox [ref=e115]: 18/06/2026
                - generic: DD/MM/YYYY *
              - generic [ref=e117]:
                - generic [ref=e119]: 
                - generic [ref=e121] [cursor=pointer]:
                  - generic [ref=e122]:
                    - listbox "All Classes"
                  - generic [ref=e124]: All Classes
                  - button "" [ref=e125]:
                    - generic [ref=e126]: 
            - generic [ref=e128]:
              - generic [ref=e130]: 
              - generic [ref=e133] [cursor=pointer]:
                - generic [ref=e134]:
                  - listbox "GENERAL"
                - generic [ref=e136]: GENERAL
                - button "" [ref=e137]:
                  - generic [ref=e138]: 
            - generic [ref=e140]:
              - generic [ref=e141]:
                - checkbox "Check for DIVYAANG Concession Booking." [ref=e142]
                - generic [ref=e143] [cursor=pointer]: Person With Disability Concession
              - generic [ref=e144]:
                - checkbox "Check to fetch trains runs on other days than you are searching for." [ref=e145]
                - generic [ref=e146] [cursor=pointer]: Flexible With Date
              - generic [ref=e147]:
                - checkbox "Check for pass Booking" [disabled] [ref=e148]
                - generic [ref=e149] [cursor=pointer]: Railway Pass Concession
            - button "Search Trains" [ref=e152] [cursor=pointer]
        - region [ref=e153]
      - generic [ref=e155]:
        - generic [ref=e156]: INDIAN RAILWAYS
        - text: SafetySecurityPunctuality
      - iframe [ref=e161]:
        - link [ref=f18e2] [cursor=pointer]:
          - /url: https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjstc2ft_sX2JEQyGXJZUZWHJ5u7jNpXUXAMuw1hvV6S7yGI_N5Y8ve4oGLVHl2B_B3u00DlkWpBvc5yQ2IxN2Jii8Ld2ImCJzqJQac9Ly_eOm1cjHrrPvOmPol8129esY500ABg5_iOzfmqPZ587RE86Pl_aLlUnOZM2tpPE_ZXiUW1vs0LZFOvoEk32Z-2mIpxDRKAKyZ54HJqpVRe4dfpRYd8GGQg74L9_YPHpRQDg4kKqqHacryjsMiSDFCXePnv-ShRA07mXFZFl_HloBU1rKaknwo0FOA2JE9GJD4uppXqXomGAfCi7LWM3nvLQd0VJDUJVhAz-2NSYOKtwmDDgTHWRXDOMsx5j1eumEDUUSR7kdUqTIDEGM0pxv60_S-rVHxBu7A2pGxo3yJWcH09DQdjOYMr4JYNeiMkdt9U&sai=AMfl-YSt2UZWN0WhUG-BOhAnyxKm0S0WmT1e34mbnV3eIAg0hj_s-Qkxd-qLfbQOMJyA5KnTF6eJ8gcu9D4TqHfmisGEwbX_KK7jkHdoPmfVIAWVMc4JRQhTQcJLM9UqfDPrORljloQIrqV1prDqF5ftqqrVAWm_qCq0H2_2CNbkcn1IqRKSHL6wUyo7B-lH9maC7Et3WvKLIFTiQaG6rYGZ7HCs5E3OkTu3lL40NY8LWMFvEzhQ3J_fsRx8SKbkAikuRdiCppXuecWU5hDe4yBEP-kWmQzEwPHA351uum6C8OPR_fkpD1GAgdepb6QXqduR80BcXcRc0hWGqRzp3nZ-RIKQhDIuvLh3AKNJhXOEi0V7ZMHYwbyupO2xdOE-KwMpOK9fDo0qxEuRv3k_&sig=Cg0ArKJSzGpSSnFXJ6if&fbs_aeid=%5Bgw_fbsaeid%5D&adurl=https://consumeraffairs.gov.in/
      - generic [ref=e163]:
        - heading "Have you not found the right one? Find a service suitable for you here." [level=2] [ref=e164]:
          - text: Have you not found the right one?
          - text: Find a service suitable for you here.
        - list [ref=e165]:
          - listitem [ref=e166]:
            - link "Flight opens a new window" [ref=e167] [cursor=pointer]:
              - /url: https://www.air.irctc.co.in/
              - generic [ref=e169]: FLIGHTS
          - listitem [ref=e170]:
            - link "HOTELS" [ref=e171] [cursor=pointer]:
              - /url: https://www.hotels.irctc.co.in
              - generic [ref=e173]: HOTELS
          - listitem [ref=e174]:
            - link " RAIL DRISHTI" [ref=e175] [cursor=pointer]:
              - /url: https://raildrishti.indianrailways.gov.in/
              - generic [ref=e176]: 
              - generic [ref=e177]: RAIL DRISHTI
          - listitem [ref=e178]:
            - link "E-CATERING" [ref=e179] [cursor=pointer]:
              - /url: https://www.ecatering.irctc.co.in/
              - generic [ref=e181]: E-CATERING
          - listitem [ref=e182]:
            - link " BUS" [ref=e183] [cursor=pointer]:
              - /url: https://www.bus.irctc.co.in/home
              - generic [ref=e184]: 
              - generic [ref=e185]: BUS
        - list [ref=e186]:
          - listitem [ref=e187]:
            - link "HOLIDAY PACKAGES" [ref=e188] [cursor=pointer]:
              - /url: https://www.irctctourism.com/tourpacakage_search?searchKey=&tagType=&travelType=&category=
              - generic [ref=e190]: HOLIDAY PACKAGES
          - listitem [ref=e191]:
            - link "TOURIST TRAIN" [ref=e192] [cursor=pointer]:
              - /url: https://www.irctctourism.com/bharatgaurav
              - generic [ref=e194]: TOURIST TRAIN
          - listitem [ref=e195]:
            - link "HILL RAILWAYS" [ref=e196] [cursor=pointer]:
              - /url: https://www.irctctourism.com/gallery/
              - generic [ref=e198]: HILL RAILWAYS
          - listitem [ref=e199]:
            - link "CHARTER TRAIN" [ref=e200] [cursor=pointer]:
              - /url: https://www.ftr.irctc.co.in/ftr/
              - generic [ref=e202]: CHARTER TRAIN
          - listitem [ref=e203]:
            - link "GALLERY" [ref=e204] [cursor=pointer]:
              - /url: https://www.irctctourism.com/gallery/
              - generic [ref=e206]: GALLERY
      - generic [ref=e209]:
        - heading "HOLIDAYS" [level=2] [ref=e210]
        - generic [ref=e211]:
          - generic [ref=e213]:
            - img "Maharajas Express" [ref=e215]
            - generic [ref=e216]:
              - heading "Maharajas' Express" [level=3] [ref=e217]
              - paragraph [ref=e218]: Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years.
              - link "More info about Maharaja's Express" [ref=e219] [cursor=pointer]:
                - /url: http://www.the-maharajas.com/
                - strong [ref=e220]: Read More
                - generic [ref=e221]: 
          - generic [ref=e223]:
            - img "International Packages" [ref=e225]
            - generic [ref=e226]:
              - heading "International Packages" [level=3] [ref=e227]
              - paragraph [ref=e228]: Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.
              - link "Read More " [ref=e229] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=International&sector=All
                - strong [ref=e230]: Read More
                - generic [ref=e231]: 
          - generic [ref=e233]:
            - img "Domestic Air Packages" [ref=e235]
            - generic [ref=e236]:
              - heading "Domestic Air Packages" [level=3] [ref=e237]
              - paragraph [ref=e238]: Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!
              - link "Read More " [ref=e239] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=Domestic&sector=All
                - strong [ref=e240]: Read More
                - generic [ref=e241]: 
          - generic [ref=e243]:
            - img "Tourist Trains" [ref=e245]
            - generic [ref=e246]:
              - heading "Bharat Gaurav Tourist Train" [level=3] [ref=e247]
              - paragraph [ref=e248]: IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage.
              - link "Read More " [ref=e249] [cursor=pointer]:
                - /url: https://www.irctctourism.com/bharatgaurav
                - strong [ref=e250]: Read More
                - generic [ref=e251]: 
          - generic [ref=e253]:
            - img "Rail/ Land Tour Packages" [ref=e255]
            - generic [ref=e256]:
              - heading "Rail Tour Packages" [level=3] [ref=e257]
              - paragraph [ref=e258]: IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.
              - link "Read More " [ref=e259] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpkgs
                - strong [ref=e260]: Read More
                - generic [ref=e261]: 
    - generic [ref=e266]:
      - contentinfo [ref=e268]:
        - text: Get Connected with us on social networks
        - generic [ref=e269]:
          - link "I.R.C.T.C. Official instagram page. opens a new windows" [ref=e270] [cursor=pointer]:
            - /url: https://www.facebook.com/IRCTCofficial/
            - generic [ref=e271]: 
          - link "I.R.C.T.C. Official whatsapp page. opens a new windows" [ref=e272] [cursor=pointer]:
            - /url: https://whatsapp.com/channel/0029Va4wpCW84OmKdPNQi41P
            - img [ref=e274]
          - link "I.R.C.T.C. Official youtube page. opens a new windows" [ref=e275] [cursor=pointer]:
            - /url: https://youtube.com/c/IRCTCOFFICIAL
            - generic [ref=e276]: 
          - link "I.R.C.T.C. Official facebook page. opens a new windows" [ref=e277] [cursor=pointer]:
            - /url: https://instagram.com/irctc.official?igshid=yyg5byow704l
            - generic [ref=e278]: 
          - link "I.R.C.T.C. Official linkedin page. opens a new windows" [ref=e279] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/irctcofficial
            - generic [ref=e280]: 
          - link "I.R.C.T.C. Official telegram page. opens a new windows" [ref=e281] [cursor=pointer]:
            - /url: https://t.me/IRCTC_Official
            - generic [ref=e282]: 
          - link "I.R.C.T.C. Official pinterest page. opens a new windows" [ref=e283] [cursor=pointer]:
            - /url: https://in.pinterest.com/irctcofficial/
            - generic [ref=e284]: 
          - link "I.R.C.T.C. Official tumblr page. opens a new windows" [ref=e285] [cursor=pointer]:
            - /url: https://irctcofficial.tumblr.com/
            - generic [ref=e286]: 
          - link "I.R.C.T.C. Official Koo page. opens a new windows" [ref=e287] [cursor=pointer]:
            - /url: https://www.kooapp.com/profile/irctcofficial
            - img [ref=e289]
          - link "I.R.C.T.C. Official twitter page. opens a new windows" [ref=e290] [cursor=pointer]:
            - /url: https://twitter.com/IRCTCofficial
            - generic [ref=e291]: 
      - generic [ref=e295]:
        - generic [ref=e297]:
          - button "IRCTC Trains " [ref=e298] [cursor=pointer]:
            - generic [ref=e299]:
              - text: IRCTC Trains
              - generic [ref=e300]: 
          - button "General Information " [ref=e301] [cursor=pointer]:
            - generic [ref=e302]:
              - text: General Information
              - generic [ref=e303]: 
          - button "Important Information " [ref=e304] [cursor=pointer]:
            - generic [ref=e305]:
              - text: Important Information
              - generic [ref=e306]: 
          - button "Agents " [ref=e307] [cursor=pointer]:
            - generic [ref=e308]:
              - text: Agents
              - generic [ref=e309]: 
          - button "Enquiries " [ref=e310] [cursor=pointer]:
            - generic [ref=e311]:
              - text: Enquiries
              - generic [ref=e312]: 
        - generic [ref=e314]:
          - button "How To " [ref=e315] [cursor=pointer]:
            - generic [ref=e316]:
              - text: How To
              - generic [ref=e317]: 
          - button "IRCTC Official App " [ref=e318] [cursor=pointer]:
            - generic [ref=e319]:
              - text: IRCTC Official App
              - generic [ref=e320]: 
          - button "Advertise with us " [ref=e321] [cursor=pointer]:
            - generic [ref=e322]:
              - text: Advertise with us
              - generic [ref=e323]: 
          - button "Refund Rules " [ref=e324] [cursor=pointer]:
            - generic [ref=e325]:
              - text: Refund Rules
              - generic [ref=e326]: 
          - button "Person With Disability Facilities " [ref=e327] [cursor=pointer]:
            - generic [ref=e328]:
              - text: Person With Disability Facilities
              - generic [ref=e329]: 
        - generic [ref=e331]:
          - button "E-Wallet " [ref=e332] [cursor=pointer]:
            - generic [ref=e333]:
              - text: E-Wallet
              - generic [ref=e334]: 
          - button "IRCTC Co-branded Card Benefits " [ref=e335] [cursor=pointer]:
            - generic [ref=e336]:
              - text: IRCTC Co-branded Card Benefits
              - generic [ref=e337]: 
          - button "IRCTC-iPAY Payment Gateway " [ref=e338] [cursor=pointer]:
            - generic [ref=e339]:
              - text: IRCTC-iPAY Payment Gateway
              - generic [ref=e340]: 
          - button "IRCTC Zone " [ref=e341] [cursor=pointer]:
            - generic [ref=e342]:
              - text: IRCTC Zone
              - generic [ref=e343]: 
          - button "DMRC Ticket Booking at IRCTC " [ref=e344] [cursor=pointer]:
            - generic [ref=e345]:
              - text: DMRC Ticket Booking at IRCTC
              - generic [ref=e346]: 
        - generic [ref=e348]:
          - button "For Newly Migrated Agents " [ref=e350] [cursor=pointer]:
            - generic [ref=e351]:
              - text: For Newly Migrated Agents
              - generic [ref=e352]: 
          - button "Mobile Zone " [ref=e353] [cursor=pointer]:
            - generic [ref=e354]:
              - text: Mobile Zone
              - generic [ref=e355]: 
          - button "Policies " [ref=e356] [cursor=pointer]:
            - generic [ref=e357]:
              - text: Policies
              - generic [ref=e358]: 
          - button "Ask Disha ChatBot " [ref=e359] [cursor=pointer]:
            - generic [ref=e360]:
              - text: Ask Disha ChatBot
              - generic [ref=e361]: 
          - button "About us " [ref=e362] [cursor=pointer]:
            - generic [ref=e363]:
              - text: About us
              - generic [ref=e364]: 
        - generic [ref=e367]:
          - button "Help & Support" [ref=e368] [cursor=pointer]
          - button "E-Pantry " [ref=e369] [cursor=pointer]:
            - generic [ref=e370]:
              - text: E-Pantry
              - generic [ref=e371]: 
      - generic [ref=e374]:
        - img "Secured Payment Partner" [ref=e377]
        - generic [ref=e379]:
          - paragraph [ref=e380]: Copyright Â© 2026 - www.irctc.co.in. All Rights Reserved
          - paragraph [ref=e381]:
            - text: Designed and Hosted by
            - strong [ref=e382]:
              - link "CRIS" [ref=e383] [cursor=pointer]:
                - /url: http://cris.org.in
          - paragraph [ref=e384]:
            - strong [ref=e385]:
              - link "Compatible Browsers link opens a new windows" [ref=e386] [cursor=pointer]:
                - /url: http://contents.irctc.co.in/en/BetaSiteCompatibleBrowser.html
                - text: Compatible Browsers
          - paragraph [ref=e387]: DM9MS4
  - generic [ref=e391] [cursor=pointer]: Easy Booking on AskDisha
  - complementary "AskDisha Chat Assistant" [ref=e393]:
    - generic [ref=e394] [cursor=pointer]:
      - img "Open Disha chat" [ref=e395]
      - img "Minimize chat" [ref=e396]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { Irctc } = require('../pages/irctspage');
  3  | const { error } = require('node:console');
  4  | 
  5  | test.describe('irctc testing', () => {
  6  | 
  7  |     test('login', async ({ page }) => {
  8  |         const login = new Irctc(page);
  9  |         await login.goto();
  10 | 
  11 |         const languagePopup = page.locator("//button[text()='English']");
  12 |         if (await languagePopup.isVisible()) {
  13 |             await page.getByText('English').click();
  14 |         }
  15 |         await page.waitForTimeout(2000);
  16 | 
  17 | 
  18 |     })
  19 |     test('Book ticket', async ({ page }) => {
  20 |         const login = new Irctc(page);
  21 |         await login.goto();
  22 |         const languagePopup = page.locator("//button[text()='English']");
  23 |         if (await languagePopup.isVisible()) {
  24 |             await page.getByText('English').click();
  25 |         }
  26 |         const fromStation = page.locator(
  27 |             'input[aria-label="Enter From station. Input is Mandatory."]'
  28 |         );
  29 | 
  30 |         await fromStation.fill('THR');
  31 | 
  32 |         // Wait for suggestion list
  33 |         await page.locator('ul[role="listbox"]').waitFor();
  34 | 
> 35 |         await page.getByText('THRISSUR - TCR').click();
     |                                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  36 |         //const booking = new Irctc(page);
  37 |         //await booking.from();
  38 |         await page.waitForTimeout(2000);
  39 |     })
  40 | })
```