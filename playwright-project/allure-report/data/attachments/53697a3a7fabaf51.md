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
  - waiting for locator('li[role="option"]').first()
    - locator resolved to <li role="option" id="p-highlighted-option" class="ng-tns-c68-7 ui-autocomplete-list-item ui-corner-all ui-state-highlight ng-star-inserted">…</li>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <button type="submit" _ngcontent-pac-c63="" class="search_btn train_Search train_Search_custom_hover">SIGN IN</button> from <app-login role="dialog" _nghost-pac-c63="" _ngcontent-pac-c64="" class="ng-star-inserted">…</app-login> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div _ngcontent-pac-c63="" class="form-group form-sd ui-inputgroup col-xs-12 zeroPadding">…</div> from <app-login role="dialog" _nghost-pac-c63="" _ngcontent-pac-c64="" class="ng-star-inserted">…</app-login> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="ng-tns-c25-12 ui-dialog-mask ui-widget-overlay ui-dialog-visible ui-dialog-mask-scrollblocker ng-star-inserted">…</div> from <app-login role="dialog" _nghost-pac-c63="" _ngcontent-pac-c64="" class="ng-star-inserted">…</app-login> subtree intercepts pointer events
  6 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <button type="submit" _ngcontent-pac-c63="" class="search_btn train_Search train_Search_custom_hover">SIGN IN</button> from <app-login role="dialog" _nghost-pac-c63="" _ngcontent-pac-c64="" class="ng-star-inserted">…</app-login> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-pac-c63="" class="form-group form-sd ui-inputgroup col-xs-12 zeroPadding">…</div> from <app-login role="dialog" _nghost-pac-c63="" _ngcontent-pac-c64="" class="ng-star-inserted">…</app-login> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="ng-tns-c25-12 ui-dialog-mask ui-widget-overlay ui-dialog-visible ui-dialog-mask-scrollblocker ng-star-inserted">…</div> from <app-login role="dialog" _nghost-pac-c63="" _ngcontent-pac-c64="" class="ng-star-inserted">…</app-login> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="ng-tns-c25-12 ui-dialog-mask ui-widget-overlay ui-dialog-visible ui-dialog-mask-scrollblocker ng-star-inserted">…</div> from <app-login role="dialog" _nghost-pac-c63="" _ngcontent-pac-c64="" class="ng-star-inserted">…</app-login> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed

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
    - generic [ref=e16]:
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
                    - searchbox "Enter From station. Input is Mandatory." [ref=e46]: TCR
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
                    - textbox [ref=e71]: 26/06/2026
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
                    - listbox "TATKAL"
                  - generic [ref=e92]: TATKAL
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
        - iframe [ref=e117]:
          - link [ref=f18e2] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjsvjGnF7ctj2wg-SSDRQkxse4FFqIGx-PGrd52Yo-QcTpPguYbNIrDI6NV-CbxIfrxsCW6T7ApdRZN73KG8uRe6_ftJRHCngroxVyxkIAyBlr8yvRWtO_aZblJE5TT8kqfgrvzhRQ6lmgsda17ud7c1UnbBAziR--Mc47-qINJJRwcnevF4Sag2wsi0BJsEs5PyQORoHOEyCGcq2Isvm-JlNUiR4pljvjD-2QqrKQbeTQxlILl1q162rIUfnu9a88RSatufVdGkeXYs6EFSvX9JH1Kn16ItbqIVirOWqmXBcjHpPEAERp8LFogmeuknjbtdd_cXPBZfTbhPeZn67VH9nSWZRpT66-_Hf7K2U7OnGYqYF-9yBxeNFniBfFLtTBEtTA6q6beelwg&sai=AMfl-YTZIBZwz8xNPrgWYPZMCnwWJKlbxAh7yXrFZ916q8P2d0OeUUP60TgJbuNprOH8mn1Eri_SEQN9iEfMlwLYaUT6CaRg2ii1XL5VLmrCqRnaSlihooMfRmJadY0aF-2IjV87LiE8-XDV-ytRjvku9iwn_PCj-dyhGC4dbTUlVfVfbRDGUMkmLXoCubM1-BDUnGbXX87acaFh-XJ6aehYrQ6ghie5y3aWWyG-UHW9f9kD21aHgywbORcIdaA6papv-IJ-bpnCJSEvWXz93qqZp7GcjVXzN83ht7YY8OxYalT75UXPVmhwyrqeNGysnjm8kWM1pY9CAeZ0jjxklg8Dp0vLjUFroyxm4X1Q26vlDNs2TD3jtKsogxJF3XHR2F0LAwphJWVxnSHeCI1YWg&sig=Cg0ArKJSzHkoIep1enbb&fbs_aeid=%5Bgw_fbsaeid%5D&adurl=https://consumeraffairs.gov.in/
        - generic [ref=e119]:
          - heading "Have you not found the right one? Find a service suitable for you here." [level=2] [ref=e120]:
            - text: Have you not found the right one?
            - text: Find a service suitable for you here.
          - list [ref=e121]:
            - listitem [ref=e122]:
              - link "Flight opens a new window" [ref=e123] [cursor=pointer]:
                - /url: https://www.air.irctc.co.in/
                - generic [ref=e125]: FLIGHTS
            - listitem [ref=e126]:
              - link "HOTELS" [ref=e127] [cursor=pointer]:
                - /url: https://www.hotels.irctc.co.in
                - generic [ref=e129]: HOTELS
            - listitem [ref=e130]:
              - link " RAIL DRISHTI" [ref=e131] [cursor=pointer]:
                - /url: https://raildrishti.indianrailways.gov.in/
                - generic [ref=e132]: 
                - generic [ref=e133]: RAIL DRISHTI
            - listitem [ref=e134]:
              - link "E-CATERING" [ref=e135] [cursor=pointer]:
                - /url: https://www.ecatering.irctc.co.in/
                - generic [ref=e137]: E-CATERING
            - listitem [ref=e138]:
              - link " BUS" [ref=e139] [cursor=pointer]:
                - /url: https://www.bus.irctc.co.in/home
                - generic [ref=e140]: 
                - generic [ref=e141]: BUS
          - list [ref=e142]:
            - listitem [ref=e143]:
              - link "HOLIDAY PACKAGES" [ref=e144] [cursor=pointer]:
                - /url: https://www.irctctourism.com/tourpacakage_search?searchKey=&tagType=&travelType=&category=
                - generic [ref=e146]: HOLIDAY PACKAGES
            - listitem [ref=e147]:
              - link "TOURIST TRAIN" [ref=e148] [cursor=pointer]:
                - /url: https://www.irctctourism.com/bharatgaurav
                - generic [ref=e150]: TOURIST TRAIN
            - listitem [ref=e151]:
              - link "HILL RAILWAYS" [ref=e152] [cursor=pointer]:
                - /url: https://www.irctctourism.com/gallery/
                - generic [ref=e154]: HILL RAILWAYS
            - listitem [ref=e155]:
              - link "CHARTER TRAIN" [ref=e156] [cursor=pointer]:
                - /url: https://www.ftr.irctc.co.in/ftr/
                - generic [ref=e158]: CHARTER TRAIN
            - listitem [ref=e159]:
              - link "GALLERY" [ref=e160] [cursor=pointer]:
                - /url: https://www.irctctourism.com/gallery/
                - generic [ref=e162]: GALLERY
        - generic [ref=e165]:
          - heading "HOLIDAYS" [level=2] [ref=e166]
          - generic [ref=e167]:
            - generic [ref=e169]:
              - img "Maharajas Express" [ref=e171]
              - generic [ref=e172]:
                - heading "Maharajas' Express" [level=3] [ref=e173]
                - paragraph [ref=e174]: Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years.
                - link "More info about Maharaja's Express" [ref=e175] [cursor=pointer]:
                  - /url: http://www.the-maharajas.com/
                  - strong [ref=e176]: Read More
                  - generic [ref=e177]: 
            - generic [ref=e179]:
              - img "International Packages" [ref=e181]
              - generic [ref=e182]:
                - heading "International Packages" [level=3] [ref=e183]
                - paragraph [ref=e184]: Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.
                - link "Read More " [ref=e185] [cursor=pointer]:
                  - /url: https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=International&sector=All
                  - strong [ref=e186]: Read More
                  - generic [ref=e187]: 
            - generic [ref=e189]:
              - img "Domestic Air Packages" [ref=e191]
              - generic [ref=e192]:
                - heading "Domestic Air Packages" [level=3] [ref=e193]
                - paragraph [ref=e194]: Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!
                - link "Read More " [ref=e195] [cursor=pointer]:
                  - /url: https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=Domestic&sector=All
                  - strong [ref=e196]: Read More
                  - generic [ref=e197]: 
            - generic [ref=e199]:
              - img "Tourist Trains" [ref=e201]
              - generic [ref=e202]:
                - heading "Bharat Gaurav Tourist Train" [level=3] [ref=e203]
                - paragraph [ref=e204]: IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage.
                - link "Read More " [ref=e205] [cursor=pointer]:
                  - /url: https://www.irctctourism.com/bharatgaurav
                  - strong [ref=e206]: Read More
                  - generic [ref=e207]: 
            - generic [ref=e209]:
              - img "Rail/ Land Tour Packages" [ref=e211]
              - generic [ref=e212]:
                - heading "Rail Tour Packages" [level=3] [ref=e213]
                - paragraph [ref=e214]: IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.
                - link "Read More " [ref=e215] [cursor=pointer]:
                  - /url: https://www.irctctourism.com/#/tourpkgs
                  - strong [ref=e216]: Read More
                  - generic [ref=e217]: 
      - dialog:
        - dialog:
          - dialog "LOGIN Dialog opened" [ref=e223]:
            - text: 
            - generic [ref=e224]:
              - generic [ref=e225] [cursor=pointer]: 
              - form:
                - generic:
                  - generic [ref=e227]:
                    - strong [ref=e230]: LOGIN
                    - generic [ref=e232]:
                      - textbox "User Name" [ref=e234]
                      - generic [ref=e235]:
                        - textbox "Password" [ref=e236]
                        - generic [ref=e237] [cursor=pointer]: 
                      - link "FORGOT ACCOUNT DETAILS?" [ref=e239] [cursor=pointer]:
                        - /url: "#"
                        - strong [ref=e241]: FORGOT ACCOUNT DETAILS?
                      - generic [ref=e243]:
                        - checkbox "Booking using OTP" [ref=e244]
                        - generic [ref=e245] [cursor=pointer]: Visually impaired users may select this option to receive OTP instead of CAPTCHA
                      - button "SIGN IN" [active] [ref=e247] [cursor=pointer]
                    - generic [ref=e248]:
                      - link "REGISTER" [ref=e249] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e250]: REGISTER
                      - link "AGENT LOGIN" [ref=e251] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e252]: AGENT LOGIN
                  - img "Advertisements" [ref=e257]
    - generic [ref=e258]:
      - contentinfo [ref=e260]:
        - text: Get Connected with us on social networks
        - generic [ref=e261]:
          - link "I.R.C.T.C. Official instagram page. opens a new windows" [ref=e262] [cursor=pointer]:
            - /url: https://www.facebook.com/IRCTCofficial/
            - generic [ref=e263]: 
          - link "I.R.C.T.C. Official whatsapp page. opens a new windows" [ref=e264] [cursor=pointer]:
            - /url: https://whatsapp.com/channel/0029Va4wpCW84OmKdPNQi41P
            - img [ref=e266]
          - link "I.R.C.T.C. Official youtube page. opens a new windows" [ref=e267] [cursor=pointer]:
            - /url: https://youtube.com/c/IRCTCOFFICIAL
            - generic [ref=e268]: 
          - link "I.R.C.T.C. Official facebook page. opens a new windows" [ref=e269] [cursor=pointer]:
            - /url: https://instagram.com/irctc.official?igshid=yyg5byow704l
            - generic [ref=e270]: 
          - link "I.R.C.T.C. Official linkedin page. opens a new windows" [ref=e271] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/irctcofficial
            - generic [ref=e272]: 
          - link "I.R.C.T.C. Official telegram page. opens a new windows" [ref=e273] [cursor=pointer]:
            - /url: https://t.me/IRCTC_Official
            - generic [ref=e274]: 
          - link "I.R.C.T.C. Official pinterest page. opens a new windows" [ref=e275] [cursor=pointer]:
            - /url: https://in.pinterest.com/irctcofficial/
            - generic [ref=e276]: 
          - link "I.R.C.T.C. Official tumblr page. opens a new windows" [ref=e277] [cursor=pointer]:
            - /url: https://irctcofficial.tumblr.com/
            - generic [ref=e278]: 
          - link "I.R.C.T.C. Official Koo page. opens a new windows" [ref=e279] [cursor=pointer]:
            - /url: https://www.kooapp.com/profile/irctcofficial
            - img [ref=e281]
          - link "I.R.C.T.C. Official twitter page. opens a new windows" [ref=e282] [cursor=pointer]:
            - /url: https://twitter.com/IRCTCofficial
            - generic [ref=e283]: 
      - generic [ref=e287]:
        - generic [ref=e289]:
          - button "IRCTC Trains " [ref=e290] [cursor=pointer]:
            - generic [ref=e291]:
              - text: IRCTC Trains
              - generic [ref=e292]: 
          - button "General Information " [ref=e293] [cursor=pointer]:
            - generic [ref=e294]:
              - text: General Information
              - generic [ref=e295]: 
          - button "Important Information " [ref=e296] [cursor=pointer]:
            - generic [ref=e297]:
              - text: Important Information
              - generic [ref=e298]: 
          - button "Agents " [ref=e299] [cursor=pointer]:
            - generic [ref=e300]:
              - text: Agents
              - generic [ref=e301]: 
          - button "Enquiries " [ref=e302] [cursor=pointer]:
            - generic [ref=e303]:
              - text: Enquiries
              - generic [ref=e304]: 
        - generic [ref=e306]:
          - button "How To " [ref=e307] [cursor=pointer]:
            - generic [ref=e308]:
              - text: How To
              - generic [ref=e309]: 
          - button "IRCTC Official App " [ref=e310] [cursor=pointer]:
            - generic [ref=e311]:
              - text: IRCTC Official App
              - generic [ref=e312]: 
          - button "Advertise with us " [ref=e313] [cursor=pointer]:
            - generic [ref=e314]:
              - text: Advertise with us
              - generic [ref=e315]: 
          - button "Refund Rules " [ref=e316] [cursor=pointer]:
            - generic [ref=e317]:
              - text: Refund Rules
              - generic [ref=e318]: 
          - button "Person With Disability Facilities " [ref=e319] [cursor=pointer]:
            - generic [ref=e320]:
              - text: Person With Disability Facilities
              - generic [ref=e321]: 
        - generic [ref=e323]:
          - button "E-Wallet " [ref=e324] [cursor=pointer]:
            - generic [ref=e325]:
              - text: E-Wallet
              - generic [ref=e326]: 
          - button "IRCTC Co-branded Card Benefits " [ref=e327] [cursor=pointer]:
            - generic [ref=e328]:
              - text: IRCTC Co-branded Card Benefits
              - generic [ref=e329]: 
          - button "IRCTC-iPAY Payment Gateway " [ref=e330] [cursor=pointer]:
            - generic [ref=e331]:
              - text: IRCTC-iPAY Payment Gateway
              - generic [ref=e332]: 
          - button "IRCTC Zone " [ref=e333] [cursor=pointer]:
            - generic [ref=e334]:
              - text: IRCTC Zone
              - generic [ref=e335]: 
          - button "DMRC Ticket Booking at IRCTC " [ref=e336] [cursor=pointer]:
            - generic [ref=e337]:
              - text: DMRC Ticket Booking at IRCTC
              - generic [ref=e338]: 
        - generic [ref=e340]:
          - button "For Newly Migrated Agents " [ref=e342] [cursor=pointer]:
            - generic [ref=e343]:
              - text: For Newly Migrated Agents
              - generic [ref=e344]: 
          - button "Mobile Zone " [ref=e345] [cursor=pointer]:
            - generic [ref=e346]:
              - text: Mobile Zone
              - generic [ref=e347]: 
          - button "Policies " [ref=e348] [cursor=pointer]:
            - generic [ref=e349]:
              - text: Policies
              - generic [ref=e350]: 
          - button "Ask Disha ChatBot " [ref=e351] [cursor=pointer]:
            - generic [ref=e352]:
              - text: Ask Disha ChatBot
              - generic [ref=e353]: 
          - button "About us " [ref=e354] [cursor=pointer]:
            - generic [ref=e355]:
              - text: About us
              - generic [ref=e356]: 
        - generic [ref=e359]:
          - button "Help & Support" [ref=e360] [cursor=pointer]
          - button "E-Pantry " [ref=e361] [cursor=pointer]:
            - generic [ref=e362]:
              - text: E-Pantry
              - generic [ref=e363]: 
      - generic [ref=e366]:
        - img "Secured Payment Partner" [ref=e369]
        - generic [ref=e371]:
          - paragraph [ref=e372]: Copyright Â© 2026 - www.irctc.co.in. All Rights Reserved
          - paragraph [ref=e373]:
            - text: Designed and Hosted by
            - strong [ref=e374]:
              - link "CRIS" [ref=e375] [cursor=pointer]:
                - /url: http://cris.org.in
          - paragraph [ref=e376]:
            - strong [ref=e377]:
              - link "Compatible Browsers link opens a new windows" [ref=e378] [cursor=pointer]:
                - /url: http://contents.irctc.co.in/en/BetaSiteCompatibleBrowser.html
                - text: Compatible Browsers
          - paragraph [ref=e379]: DM3MS9
  - generic [ref=e383] [cursor=pointer]: Easy Booking on AskDisha
  - complementary "AskDisha Chat Assistant" [ref=e385]:
    - generic [ref=e386] [cursor=pointer]:
      - img "Open Disha chat" [ref=e387]
      - img "Minimize chat" [ref=e388]
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
> 23 |     await this.stationOption.first().click();
     |                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  36 |     await this.dateOption.fill("19/06/2026");
  37 | 
  38 |     await this.slctDate.click();
  39 |     await this.button.click();
  40 |     
  41 |   }
  42 | }
  43 | module.exports = { Irctc }
```