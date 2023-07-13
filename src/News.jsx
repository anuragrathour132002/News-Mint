import React, { useState, useEffect } from "react";
import loading from "./loading.gif";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";
import "./News.css";


const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const updateComponent = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.newsCountry}&category=${props.newsGenre}&apiKey=${props.apiKey}&page=${pageNumber}&pagesize=${props.pageSize}`;
    // console.log(url);
    // let data = await fetch(url);
    // console.log(data)

    //Here for deployment purposes data is hard coded for once. To fetch real data. coment this data and uncomment the data above.
    // let parsedData = await data.json();
    let parsedData = {
      "status": "ok",
      "totalResults": 38,
      "articles": [
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": "NDTV News Desk",
      "title": "Covid Live Updates: India Reports Four Cases Of New Omicron Subvariant - NDTV",
      "description": "India today issued a fresh Covid advisory after alarming reprts from China prompted a high-level meeting to chalk out the strategy to prevent a surge here.",
      "url": "https://www.ndtv.com/india-news/covid-live-updates-coronavirus-cases-in-india-new-omicron-subvariant-3626538",
      "urlToImage": "https://c.ndtvimg.com/2022-01/fdhokfoo_-bengaluru-covid-testing-pti-650_650x400_03_January_22.jpg",
      "publishedAt": "2022-12-21T16:27:59Z",
      "content": "New Delhi: India today issued a fresh Covid advisory after alarming reprts from China prompted a high-level meeting to chalk out the strategy to prevent a surge here. India's COVID-19 tally today cli… [+5484 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Tribune India"
      },
      "author": "The Tribune India",
      "title": "[Dischem] Keto Gummies South Africa | Lets KETO Capsules ZA, AU, NZ | Pearl Thusi Keto | Weight Loss Gummies, Price & Fake Or Legitimate? - The Tribune India",
      "description": "Let&rsquo;s Keto BHB Apple Gummies: The Best Way to Lose Weight Naturally in just 30 Days!",
      "url": "https://www.tribuneindia.com/news/brand-connect/dischem-keto-gummies-south-africa-lets-keto-capsules-za-au-nz-pearl-thusi-keto-weight-loss-gummies-price-fake-or-legitimate-463231",
      "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/12/2022_12$largeimg_1449029541.jpg",
      "publishedAt": "2022-12-21T16:27:00Z",
      "content": "Let’s Keto BHB Apple Gummies: The Best Way to Lose Weight Naturally in just 30 Days!\r\nLet’s Keto BHB Apple Gummies more than two-thirds of the US population is either obese or has significant extra f… [+13378 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "As New Covid Variant Threatens China, Expert Cites India's Example - NDTV",
      "description": "The tsunami of Covid-19 that's taking hold across China is spurring concern that a dangerous new variant could emerge for the first time in more than a year, just as genetic sequencing to catch such a threat is dwindling.",
      "url": "https://www.ndtv.com/world-news/chinas-covid-wave-spurs-new-variant-worry-as-sequencing-falls-3627117",
      "urlToImage": "https://c.ndtvimg.com/2022-12/ch2ivsc_china-covid-airport-traveller-bloomberg-650_625x300_21_December_22.jpg",
      "publishedAt": "2022-12-21T15:29:00Z",
      "content": "The situation in China is unique because of the path it's followed throughout the pandemic.\r\nThe tsunami of Covid-19 that's taking hold across China is spurring concern that a dangerous new variant c… [+6719 chars]"
      },
      {
      "source": {
      "id": "google-news",
      "name": "Google News"
      },
      "author": null,
      "title": "Bird Flu Outbreak In Europe: 2500 Outbreaks In 37 Countries This Year | TheHealthSite.com - TheHealthSite",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMib2h0dHBzOi8vd3d3LnRoZWhlYWx0aHNpdGUuY29tL25ld3MvYmlyZC1mbHUtb3V0YnJlYWstaW4tZXVyb3BlLTI1MDAtb3V0YnJlYWtzLWluLTM3LWNvdW50cmllcy10aGlzLXllYXItOTM2ODU5L9IBc2h0dHBzOi8vd3d3LnRoZWhlYWx0aHNpdGUuY29tL25ld3MvYmlyZC1mbHUtb3V0YnJlYWstaW4tZXVyb3BlLTI1MDAtb3V0YnJlYWtzLWluLTM3LWNvdW50cmllcy10aGlzLXllYXItOTM2ODU5L2FtcC8?oc=5",
      "urlToImage": null,
      "publishedAt": "2022-12-21T14:58:00Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "\"Byju's Buying Phone Numbers, Threatening Kids, Parents\": Child Rights Body - NDTV",
      "description": "The National Commission for the Protection of Child Rights (NCPCR) has claimed that the edtech company Byju's is allegedly purchasing the phone numbers of kids and their parents and threatening them that their future will be ruined",
      "url": "https://www.ndtv.com/india-news/byjus-target-phone-numbers-of-kids-threatens-parents-child-rights-body-3624864",
      "urlToImage": "https://c.ndtvimg.com/2022-12/1539rdqo_byju-byjus-_625x300_21_December_22.jpg",
      "publishedAt": "2022-12-21T13:50:00Z",
      "content": "NCPCR claimed that Byju's is allegedly purchasing the phone numbers of kids.\r\nNew Delhi: The National Commission for the Protection of Child Rights (NCPCR) has claimed that the edtech company Byju's … [+3442 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Business Standard"
      },
      "author": "Dev Chatterjee",
      "title": "Torrent wins race to acquire RCap with Rs 8,640 crore offer to lenders - Business Standard",
      "description": "Forays into financial services sector with the acquisition",
      "url": "https://www.business-standard.com/article/companies/torrent-wins-race-to-acquire-reliance-capital-makes-offer-of-rs-8-640-cr-122122100936_1.html",
      "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-05/27/full/1653591395-2146.jpg",
      "publishedAt": "2022-12-21T13:47:00Z",
      "content": "Ahmedabad-based Torrent group has won the race to acquire Reliance Capital after making an offer of Rs 8,640 crore for the company in an auction held on Wednesday.\r\nThe offer was made by the promoter… [+2877 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Analytics India Magazine"
      },
      "author": "Shritama Saha",
      "title": "Amazon Launches Amazon Prime Gaming in India - Analytics India Magazine",
      "description": "Amazon Prime Gaming provides eight games for free at the launch and is packed with in-game trivia",
      "url": "https://analyticsindiamag.com/amazon-launches-amazon-prime-gaming-in-india/",
      "urlToImage": "https://149695847.v2.pressablecdn.com/wp-content/uploads/2022/12/prime_gaming_0-sixteen_nine.webp",
      "publishedAt": "2022-12-21T12:47:24Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "Aniruddha Dhar",
      "title": "Charles Sobhraj, French serial killer, to be released from Nepal jail - Hindustan Times",
      "description": "Charles has been in a Nepal jail since 2003 on charges of murdering two American tourists. | World News",
      "url": "https://www.hindustantimes.com/world-news/charles-sobhraj-french-serial-killer-to-be-released-after-19-years-in-nepal-jail-101671626327682.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/12/21/1600x900/charles-sobhraj_cd5ed976-7ebe-11e5-8319-3d66022f9dc4_1671626641309_1671626641309.jpg",
      "publishedAt": "2022-12-21T12:45:32Z",
      "content": "TheNepalSupreme Court has ordered the release of French serial killer Charles Sobhrajafter 19 years in jail on the ground of his age. Charles has been in a Nepal jail since 2003 on charges of murderi… [+978 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "\"Extremely Dirty, Extremely Dangerous\": Boris Becker's Jail Experience - NDTV",
      "description": "Former tennis superstar Boris Becker said he relied on \"blood brothers\" to protect him in a British prison and said his life was threatened twice in his first interview since being released.",
      "url": "https://www.ndtv.com/world-news/nights-were-atrocious-former-tennis-star-boris-becker-on-time-in-prison-3626491",
      "urlToImage": "https://c.ndtvimg.com/2022-04/c13f8jko_boris-becker-afp_625x300_29_April_22.jpg",
      "publishedAt": "2022-12-21T12:37:00Z",
      "content": "Boris Becker said he relied on \"blood brothers\" to protect him in British Prison. (File)\r\nBerlin: Former tennis superstar Boris Becker said he relied on \"blood brothers\" to protect him in a British p… [+4092 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "India Today"
      },
      "author": "Bhavna Agarwal",
      "title": "Rishab Shetty's Kantara sent for Oscars nomination, confirms Hombale Productions | Exclusive - India Today",
      "description": "Kantara featured Rishab Shetty in the lead role. It has been confirmed that the film has been sent for the Oscars nomination.",
      "url": "https://www.indiatoday.in/movies/regional-cinema/story/rishab-shettys-kantara-sent-for-oscars-nomination-confirms-hombale-productions-exclusive-2311928-2022-12-21",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/kantara_oscars_nomination-sixteen_nine.jpg?VersionId=iYsgOlm4vU.JtZYa2KOpb9IIsZK.gSP4",
      "publishedAt": "2022-12-21T12:33:03Z",
      "content": "By Bhavna Agarwal: Kantara has emerged as one of the most watched and talked about films of 2022. The film earned over Rs 400 crore worldwide and made Rishab Shetty, who has acted in Kantara and dire… [+1586 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "HT Tech",
      "title": "Grab Epic Games Store free game today! Wolfenstein: The New Order on offer - HT Tech",
      "description": "Epic Games Store has announced today’s free game and it is a major title! Grab Wolfenstein: The New Order for free this way.",
      "url": "https://tech.hindustantimes.com/gaming/news/grab-epic-games-store-free-game-today-wolfenstein-the-new-order-on-offer-71671625403562.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2022/12/21/1600x900/wolfenstein_1671625516809_1671625527531_1671625527531.png",
      "publishedAt": "2022-12-21T12:26:13Z",
      "content": "Christmas cheer arrives in the form of a free game with Epic Games Store! You can grab games with heavy discounts right now as part of the Holiday Sale on the Epic Games Store. And that's not all. Th… [+1376 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "MPC Minutes: Premature pause in rate hikes a costly error at this juncture, says RBI Governor - Moneycontrol",
      "description": "The MPC hiked the repo rate by 35 bps in the meeting taking the policy repo rate to 6.25 percent to fight persistently high inflation.",
      "url": "https://www.moneycontrol.com/news/business/mpc-minutes-premature-pause-in-rate-hikes-a-costly-error-at-this-juncture-says-rbi-governor-9742591.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2017/02/reserve_bank_of_india_rbi_720-630x354.jpg",
      "publishedAt": "2022-12-21T12:06:45Z",
      "content": "The Reserve Bank of India (RBI) Governor Shaktikanta Das is of the opinion that a premature pause in the monetary policy rate hike course would prove to be a costly policy error at this juncture, sho… [+2884 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "CNBCTV18"
      },
      "author": "CNBCTV18.com",
      "title": "Big bang space stories of 2022 — Artemis, thousands of Starlink satellites & beyond - CNBCTV18",
      "description": "The year 2022 saw humanity take another leap towards the Moon and get a better view of our universe through the James Webb telescope even as Elon Musk's SpaceX kept sending more and more Starlink satellites into the great void.",
      "url": "https://www.cnbctv18.com/science/amazing-space-stories-of-2022-artemis-thousands-of-starlink-satellites-and-beyond-15443091.htm",
      "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2022/07/james-webb-8-1-1019x573.jpg",
      "publishedAt": "2022-12-21T11:59:22Z",
      "content": "There will be a special place in history for the amazing space stories that unfolded in 2022. This year, both international and private space agencies pushed the limits to achieve unimaginable feats.… [+5655 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Devdiscourse"
      },
      "author": "Devdiscourse News Desk",
      "title": "(Update: Postponed) NASA astronauts prepare for spacewalk to install solar array - Devdiscourse",
      "description": "Read more about (Update: Postponed) NASA astronauts prepare for spacewalk to install solar array  on Devdiscourse",
      "url": "https://www.devdiscourse.com/article/science-environment/2293576-update-postponed-nasa-astronauts-prepare-for-spacewalk-to-install-solar-array",
      "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/25_06_2021_07_24_30_7458823.jpg?width=920&format=jpeg",
      "publishedAt": "2022-12-21T11:55:55Z",
      "content": "Two NASA astronauts are gearing up for a spacewalk on Wednesday, December 21, to install a rollout solar array which will augment power on the International Space Station (ISS).\r\nExpedition 68 Flight… [+1478 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "India Today"
      },
      "author": "India Today Web Desk",
      "title": "Trinamool MP interrupts Amit Shah in Lok Sabha. What happened next | Watch - India Today",
      "description": "The Home Minister was talking about the drug menace in the country.",
      "url": "https://www.indiatoday.in/india/story/trinamool-mp-saugata-roy-interrupts-amit-shah-in-lok-sabha-what-happened-next-2311909-2022-12-21",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/whatsapp_image_2022-12-21_at_5.12.50_pm-sixteen_nine.jpeg?VersionId=y9rr2tb9tykW8Xv8L9FrTFr5lYizZ0c6",
      "publishedAt": "2022-12-21T11:50:15Z",
      "content": "By India Today Web Desk: Amit Shah, speaking in the Lok Sabha on the issue of drug abuse in the country, shot down Trinamool Congress MP Saugata Roy, who tried to interrupt his speech.\r\nDada, if you … [+1031 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Oppo announces four major Android updates for 2023 flagship phones | Mint - Mint",
      "description": "Coming with a brand-new Aquamorphic Design, ColorOS 13 includes a series of impressive features such as Smart AOD, Multi-Screen Connect, and Home Screen Management that provide intelligent, and user-friendly experiences to global users.",
      "url": "https://www.livemint.com/technology/tech-news/oppo-announces-four-major-android-updates-for-2023-flagship-phones-11671622054402.html",
      "urlToImage": "https://images.livemint.com/img/2022/12/21/600x338/coloros_13_1671622418375_1671622428545_1671622428545.JPG",
      "publishedAt": "2022-12-21T11:34:45Z",
      "content": "Smartphone brand Oppo has announced that it will offer four years of major ColorOS updates to select models starting 2023. In a press release, the company also revealed it will provide five years of … [+2134 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Cricbuzz"
      },
      "author": null,
      "title": "IPL 2023 Auction, Watchlist: MI, CSK aim resurgence; RCB, RR target key pieces - Cricbuzz",
      "description": "Can MI & CSK rebuild and bounce back? How will GT & LSG fare in their second year?\nHere's our watchlist for the upcoming IPL auction.",
      "url": "https://www.cricbuzz.com/cricket-videos/58709/ipl-2023-auction-watchlist-mi-csk-aim-resurgence-rcb-rr-target-key-pieces",
      "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c251275/cms-img.jpg",
      "publishedAt": "2022-12-21T11:12:00Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Expatguideturkey.com"
      },
      "author": "Ece Nagihan",
      "title": "A Near-Earth Asteroid Discovered » Expat Guide Turkey - Expat Guide Turkey",
      "description": "A newly discovered asteroid has been imaged flying closer to Earth than telecom satellites. We will see the asteroid passing near Earth again. Experts warn of other large asteroids lurking in the dark",
      "url": "https://expatguideturkey.com/a-near-earth-asteroid-discovered/",
      "urlToImage": "https://expatguideturkey.com/wp-content/uploads/2022/12/a-near-earth-asteroid-discovered.jpg",
      "publishedAt": "2022-12-21T10:57:43Z",
      "content": "A newly discovered asteroid has been imaged flying closer to Earth than telecom satellites. We will see the asteroid passing near Earth again. Experts warn of other large asteroids lurking in the dar… [+1996 chars]"
      },
      {
      "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
      },
      "author": null,
      "title": "Anushka Sharma gets trolled for causing 'unnecessary traffic jam' in 'already messed up road' for her event: 'What nonsense is this?' - Times of India",
      "description": "Anushka Sharma was trolled by netizens for causing traffic jam due to her meet and greet event for a brand. Videos of the same also went viral and netizens slammed the brand as well as the actress for adding to traffic jam on roads that are already a mess. On…",
      "url": "https://timesofindia.indiatimes.com/videos/entertainment/hindi/anushka-sharma-gets-trolled-for-causing-unnecessary-traffic-jam-in-already-messed-up-road-for-her-event-what-nonsense-is-this/videoshow/96397546.cms",
      "urlToImage": "https://timesofindia.indiatimes.com/photo/96397546/size-107348/96397546.jpg",
      "publishedAt": "2022-12-21T10:37:17Z",
      "content": "Anushka Sharma\r\n was trolled by netizens for causing traffic jam due to her meet and greet event for a brand. Videos of the same also went viral and netizens slammed the brand as well as the actress … [+511 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "Jet CEO On IndiGo Fight: \"Crew Are Human Too\" - NDTV",
      "description": "The accompanying video showed a heated argument between the airhostess and a passenger (who is not visible). The crew member accused the passenger of talking to the staff harshly, which made one of them cry.",
      "url": "https://www.ndtv.com/feature/jet-ceo-on-indigo-fight-crew-are-human-too-3626265",
      "urlToImage": "https://c.ndtvimg.com/2022-03/99rtpnd8_indigo_625x300_31_March_22.jpg",
      "publishedAt": "2022-12-21T10:16:44Z",
      "content": "One of the travellers posted the argument's footage to Twitter.\r\nThe fight between an IndiGo crew member and a passenger onboard a flight has become one of the most talked-about topics online. Severa… [+3786 chars]"
      }
      ]
      }
    
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    updateComponent();
    setPageNumber(2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMoreData = async () => {
    setPageNumber(pageNumber + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.newsCountry}&category=${props.newsGenre}&apiKey=${props.apiKey}&page=${pageNumber}&pagesize=${props.pageSize}`;
    let data = await fetch(url);

    //Here for deployment purposes data is hard coded for once. To fetch real data. coment this data and uncomment the data above.
    // let parsedData = await data.json();
    let parsedData = {
      "status": "ok",
      "totalResults": 38,
      "articles": [
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": "NDTV News Desk",
      "title": "Covid Live Updates: India Reports Four Cases Of New Omicron Subvariant - NDTV",
      "description": "India today issued a fresh Covid advisory after alarming reprts from China prompted a high-level meeting to chalk out the strategy to prevent a surge here.",
      "url": "https://www.ndtv.com/india-news/covid-live-updates-coronavirus-cases-in-india-new-omicron-subvariant-3626538",
      "urlToImage": "https://c.ndtvimg.com/2022-01/fdhokfoo_-bengaluru-covid-testing-pti-650_650x400_03_January_22.jpg",
      "publishedAt": "2022-12-21T16:27:59Z",
      "content": "New Delhi: India today issued a fresh Covid advisory after alarming reprts from China prompted a high-level meeting to chalk out the strategy to prevent a surge here. India's COVID-19 tally today cli… [+5484 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Tribune India"
      },
      "author": "The Tribune India",
      "title": "[Dischem] Keto Gummies South Africa | Lets KETO Capsules ZA, AU, NZ | Pearl Thusi Keto | Weight Loss Gummies, Price & Fake Or Legitimate? - The Tribune India",
      "description": "Let&rsquo;s Keto BHB Apple Gummies: The Best Way to Lose Weight Naturally in just 30 Days!",
      "url": "https://www.tribuneindia.com/news/brand-connect/dischem-keto-gummies-south-africa-lets-keto-capsules-za-au-nz-pearl-thusi-keto-weight-loss-gummies-price-fake-or-legitimate-463231",
      "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/12/2022_12$largeimg_1449029541.jpg",
      "publishedAt": "2022-12-21T16:27:00Z",
      "content": "Let’s Keto BHB Apple Gummies: The Best Way to Lose Weight Naturally in just 30 Days!\r\nLet’s Keto BHB Apple Gummies more than two-thirds of the US population is either obese or has significant extra f… [+13378 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "As New Covid Variant Threatens China, Expert Cites India's Example - NDTV",
      "description": "The tsunami of Covid-19 that's taking hold across China is spurring concern that a dangerous new variant could emerge for the first time in more than a year, just as genetic sequencing to catch such a threat is dwindling.",
      "url": "https://www.ndtv.com/world-news/chinas-covid-wave-spurs-new-variant-worry-as-sequencing-falls-3627117",
      "urlToImage": "https://c.ndtvimg.com/2022-12/ch2ivsc_china-covid-airport-traveller-bloomberg-650_625x300_21_December_22.jpg",
      "publishedAt": "2022-12-21T15:29:00Z",
      "content": "The situation in China is unique because of the path it's followed throughout the pandemic.\r\nThe tsunami of Covid-19 that's taking hold across China is spurring concern that a dangerous new variant c… [+6719 chars]"
      },
      {
      "source": {
      "id": "google-news",
      "name": "Google News"
      },
      "author": null,
      "title": "Bird Flu Outbreak In Europe: 2500 Outbreaks In 37 Countries This Year | TheHealthSite.com - TheHealthSite",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMib2h0dHBzOi8vd3d3LnRoZWhlYWx0aHNpdGUuY29tL25ld3MvYmlyZC1mbHUtb3V0YnJlYWstaW4tZXVyb3BlLTI1MDAtb3V0YnJlYWtzLWluLTM3LWNvdW50cmllcy10aGlzLXllYXItOTM2ODU5L9IBc2h0dHBzOi8vd3d3LnRoZWhlYWx0aHNpdGUuY29tL25ld3MvYmlyZC1mbHUtb3V0YnJlYWstaW4tZXVyb3BlLTI1MDAtb3V0YnJlYWtzLWluLTM3LWNvdW50cmllcy10aGlzLXllYXItOTM2ODU5L2FtcC8?oc=5",
      "urlToImage": null,
      "publishedAt": "2022-12-21T14:58:00Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "\"Byju's Buying Phone Numbers, Threatening Kids, Parents\": Child Rights Body - NDTV",
      "description": "The National Commission for the Protection of Child Rights (NCPCR) has claimed that the edtech company Byju's is allegedly purchasing the phone numbers of kids and their parents and threatening them that their future will be ruined",
      "url": "https://www.ndtv.com/india-news/byjus-target-phone-numbers-of-kids-threatens-parents-child-rights-body-3624864",
      "urlToImage": "https://c.ndtvimg.com/2022-12/1539rdqo_byju-byjus-_625x300_21_December_22.jpg",
      "publishedAt": "2022-12-21T13:50:00Z",
      "content": "NCPCR claimed that Byju's is allegedly purchasing the phone numbers of kids.\r\nNew Delhi: The National Commission for the Protection of Child Rights (NCPCR) has claimed that the edtech company Byju's … [+3442 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Business Standard"
      },
      "author": "Dev Chatterjee",
      "title": "Torrent wins race to acquire RCap with Rs 8,640 crore offer to lenders - Business Standard",
      "description": "Forays into financial services sector with the acquisition",
      "url": "https://www.business-standard.com/article/companies/torrent-wins-race-to-acquire-reliance-capital-makes-offer-of-rs-8-640-cr-122122100936_1.html",
      "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-05/27/full/1653591395-2146.jpg",
      "publishedAt": "2022-12-21T13:47:00Z",
      "content": "Ahmedabad-based Torrent group has won the race to acquire Reliance Capital after making an offer of Rs 8,640 crore for the company in an auction held on Wednesday.\r\nThe offer was made by the promoter… [+2877 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Analytics India Magazine"
      },
      "author": "Shritama Saha",
      "title": "Amazon Launches Amazon Prime Gaming in India - Analytics India Magazine",
      "description": "Amazon Prime Gaming provides eight games for free at the launch and is packed with in-game trivia",
      "url": "https://analyticsindiamag.com/amazon-launches-amazon-prime-gaming-in-india/",
      "urlToImage": "https://149695847.v2.pressablecdn.com/wp-content/uploads/2022/12/prime_gaming_0-sixteen_nine.webp",
      "publishedAt": "2022-12-21T12:47:24Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "Aniruddha Dhar",
      "title": "Charles Sobhraj, French serial killer, to be released from Nepal jail - Hindustan Times",
      "description": "Charles has been in a Nepal jail since 2003 on charges of murdering two American tourists. | World News",
      "url": "https://www.hindustantimes.com/world-news/charles-sobhraj-french-serial-killer-to-be-released-after-19-years-in-nepal-jail-101671626327682.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/12/21/1600x900/charles-sobhraj_cd5ed976-7ebe-11e5-8319-3d66022f9dc4_1671626641309_1671626641309.jpg",
      "publishedAt": "2022-12-21T12:45:32Z",
      "content": "TheNepalSupreme Court has ordered the release of French serial killer Charles Sobhrajafter 19 years in jail on the ground of his age. Charles has been in a Nepal jail since 2003 on charges of murderi… [+978 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "\"Extremely Dirty, Extremely Dangerous\": Boris Becker's Jail Experience - NDTV",
      "description": "Former tennis superstar Boris Becker said he relied on \"blood brothers\" to protect him in a British prison and said his life was threatened twice in his first interview since being released.",
      "url": "https://www.ndtv.com/world-news/nights-were-atrocious-former-tennis-star-boris-becker-on-time-in-prison-3626491",
      "urlToImage": "https://c.ndtvimg.com/2022-04/c13f8jko_boris-becker-afp_625x300_29_April_22.jpg",
      "publishedAt": "2022-12-21T12:37:00Z",
      "content": "Boris Becker said he relied on \"blood brothers\" to protect him in British Prison. (File)\r\nBerlin: Former tennis superstar Boris Becker said he relied on \"blood brothers\" to protect him in a British p… [+4092 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "India Today"
      },
      "author": "Bhavna Agarwal",
      "title": "Rishab Shetty's Kantara sent for Oscars nomination, confirms Hombale Productions | Exclusive - India Today",
      "description": "Kantara featured Rishab Shetty in the lead role. It has been confirmed that the film has been sent for the Oscars nomination.",
      "url": "https://www.indiatoday.in/movies/regional-cinema/story/rishab-shettys-kantara-sent-for-oscars-nomination-confirms-hombale-productions-exclusive-2311928-2022-12-21",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/kantara_oscars_nomination-sixteen_nine.jpg?VersionId=iYsgOlm4vU.JtZYa2KOpb9IIsZK.gSP4",
      "publishedAt": "2022-12-21T12:33:03Z",
      "content": "By Bhavna Agarwal: Kantara has emerged as one of the most watched and talked about films of 2022. The film earned over Rs 400 crore worldwide and made Rishab Shetty, who has acted in Kantara and dire… [+1586 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "HT Tech",
      "title": "Grab Epic Games Store free game today! Wolfenstein: The New Order on offer - HT Tech",
      "description": "Epic Games Store has announced today’s free game and it is a major title! Grab Wolfenstein: The New Order for free this way.",
      "url": "https://tech.hindustantimes.com/gaming/news/grab-epic-games-store-free-game-today-wolfenstein-the-new-order-on-offer-71671625403562.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2022/12/21/1600x900/wolfenstein_1671625516809_1671625527531_1671625527531.png",
      "publishedAt": "2022-12-21T12:26:13Z",
      "content": "Christmas cheer arrives in the form of a free game with Epic Games Store! You can grab games with heavy discounts right now as part of the Holiday Sale on the Epic Games Store. And that's not all. Th… [+1376 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "MPC Minutes: Premature pause in rate hikes a costly error at this juncture, says RBI Governor - Moneycontrol",
      "description": "The MPC hiked the repo rate by 35 bps in the meeting taking the policy repo rate to 6.25 percent to fight persistently high inflation.",
      "url": "https://www.moneycontrol.com/news/business/mpc-minutes-premature-pause-in-rate-hikes-a-costly-error-at-this-juncture-says-rbi-governor-9742591.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2017/02/reserve_bank_of_india_rbi_720-630x354.jpg",
      "publishedAt": "2022-12-21T12:06:45Z",
      "content": "The Reserve Bank of India (RBI) Governor Shaktikanta Das is of the opinion that a premature pause in the monetary policy rate hike course would prove to be a costly policy error at this juncture, sho… [+2884 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "CNBCTV18"
      },
      "author": "CNBCTV18.com",
      "title": "Big bang space stories of 2022 — Artemis, thousands of Starlink satellites & beyond - CNBCTV18",
      "description": "The year 2022 saw humanity take another leap towards the Moon and get a better view of our universe through the James Webb telescope even as Elon Musk's SpaceX kept sending more and more Starlink satellites into the great void.",
      "url": "https://www.cnbctv18.com/science/amazing-space-stories-of-2022-artemis-thousands-of-starlink-satellites-and-beyond-15443091.htm",
      "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2022/07/james-webb-8-1-1019x573.jpg",
      "publishedAt": "2022-12-21T11:59:22Z",
      "content": "There will be a special place in history for the amazing space stories that unfolded in 2022. This year, both international and private space agencies pushed the limits to achieve unimaginable feats.… [+5655 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Devdiscourse"
      },
      "author": "Devdiscourse News Desk",
      "title": "(Update: Postponed) NASA astronauts prepare for spacewalk to install solar array - Devdiscourse",
      "description": "Read more about (Update: Postponed) NASA astronauts prepare for spacewalk to install solar array  on Devdiscourse",
      "url": "https://www.devdiscourse.com/article/science-environment/2293576-update-postponed-nasa-astronauts-prepare-for-spacewalk-to-install-solar-array",
      "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/25_06_2021_07_24_30_7458823.jpg?width=920&format=jpeg",
      "publishedAt": "2022-12-21T11:55:55Z",
      "content": "Two NASA astronauts are gearing up for a spacewalk on Wednesday, December 21, to install a rollout solar array which will augment power on the International Space Station (ISS).\r\nExpedition 68 Flight… [+1478 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "India Today"
      },
      "author": "India Today Web Desk",
      "title": "Trinamool MP interrupts Amit Shah in Lok Sabha. What happened next | Watch - India Today",
      "description": "The Home Minister was talking about the drug menace in the country.",
      "url": "https://www.indiatoday.in/india/story/trinamool-mp-saugata-roy-interrupts-amit-shah-in-lok-sabha-what-happened-next-2311909-2022-12-21",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/whatsapp_image_2022-12-21_at_5.12.50_pm-sixteen_nine.jpeg?VersionId=y9rr2tb9tykW8Xv8L9FrTFr5lYizZ0c6",
      "publishedAt": "2022-12-21T11:50:15Z",
      "content": "By India Today Web Desk: Amit Shah, speaking in the Lok Sabha on the issue of drug abuse in the country, shot down Trinamool Congress MP Saugata Roy, who tried to interrupt his speech.\r\nDada, if you … [+1031 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Oppo announces four major Android updates for 2023 flagship phones | Mint - Mint",
      "description": "Coming with a brand-new Aquamorphic Design, ColorOS 13 includes a series of impressive features such as Smart AOD, Multi-Screen Connect, and Home Screen Management that provide intelligent, and user-friendly experiences to global users.",
      "url": "https://www.livemint.com/technology/tech-news/oppo-announces-four-major-android-updates-for-2023-flagship-phones-11671622054402.html",
      "urlToImage": "https://images.livemint.com/img/2022/12/21/600x338/coloros_13_1671622418375_1671622428545_1671622428545.JPG",
      "publishedAt": "2022-12-21T11:34:45Z",
      "content": "Smartphone brand Oppo has announced that it will offer four years of major ColorOS updates to select models starting 2023. In a press release, the company also revealed it will provide five years of … [+2134 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Cricbuzz"
      },
      "author": null,
      "title": "IPL 2023 Auction, Watchlist: MI, CSK aim resurgence; RCB, RR target key pieces - Cricbuzz",
      "description": "Can MI & CSK rebuild and bounce back? How will GT & LSG fare in their second year?\nHere's our watchlist for the upcoming IPL auction.",
      "url": "https://www.cricbuzz.com/cricket-videos/58709/ipl-2023-auction-watchlist-mi-csk-aim-resurgence-rcb-rr-target-key-pieces",
      "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c251275/cms-img.jpg",
      "publishedAt": "2022-12-21T11:12:00Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Expatguideturkey.com"
      },
      "author": "Ece Nagihan",
      "title": "A Near-Earth Asteroid Discovered » Expat Guide Turkey - Expat Guide Turkey",
      "description": "A newly discovered asteroid has been imaged flying closer to Earth than telecom satellites. We will see the asteroid passing near Earth again. Experts warn of other large asteroids lurking in the dark",
      "url": "https://expatguideturkey.com/a-near-earth-asteroid-discovered/",
      "urlToImage": "https://expatguideturkey.com/wp-content/uploads/2022/12/a-near-earth-asteroid-discovered.jpg",
      "publishedAt": "2022-12-21T10:57:43Z",
      "content": "A newly discovered asteroid has been imaged flying closer to Earth than telecom satellites. We will see the asteroid passing near Earth again. Experts warn of other large asteroids lurking in the dar… [+1996 chars]"
      },
      {
      "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
      },
      "author": null,
      "title": "Anushka Sharma gets trolled for causing 'unnecessary traffic jam' in 'already messed up road' for her event: 'What nonsense is this?' - Times of India",
      "description": "Anushka Sharma was trolled by netizens for causing traffic jam due to her meet and greet event for a brand. Videos of the same also went viral and netizens slammed the brand as well as the actress for adding to traffic jam on roads that are already a mess. On…",
      "url": "https://timesofindia.indiatimes.com/videos/entertainment/hindi/anushka-sharma-gets-trolled-for-causing-unnecessary-traffic-jam-in-already-messed-up-road-for-her-event-what-nonsense-is-this/videoshow/96397546.cms",
      "urlToImage": "https://timesofindia.indiatimes.com/photo/96397546/size-107348/96397546.jpg",
      "publishedAt": "2022-12-21T10:37:17Z",
      "content": "Anushka Sharma\r\n was trolled by netizens for causing traffic jam due to her meet and greet event for a brand. Videos of the same also went viral and netizens slammed the brand as well as the actress … [+511 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "Jet CEO On IndiGo Fight: \"Crew Are Human Too\" - NDTV",
      "description": "The accompanying video showed a heated argument between the airhostess and a passenger (who is not visible). The crew member accused the passenger of talking to the staff harshly, which made one of them cry.",
      "url": "https://www.ndtv.com/feature/jet-ceo-on-indigo-fight-crew-are-human-too-3626265",
      "urlToImage": "https://c.ndtvimg.com/2022-03/99rtpnd8_indigo_625x300_31_March_22.jpg",
      "publishedAt": "2022-12-21T10:16:44Z",
      "content": "One of the travellers posted the argument's footage to Twitter.\r\nThe fight between an IndiGo crew member and a passenger onboard a flight has become one of the most talked-about topics online. Severa… [+3786 chars]"
      }
      ]
      }
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };
  
  

    return (
      <>
        <h1 className="heading">#Welcome to our daily NewsFeed</h1>
        <h2 className="subheading">
          - Top{" "}
          {props.newsGenre.toUpperCase().slice(0, 1) +
            props.newsGenre.slice(1)}{" "}
          News Headlines
        </h2>
        <hr />
        <br />
        <br />
        <div className="gridContainer">
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<div className="loaderDiv"><img className="fetchLoading" src={loading} alt="loading" /></div>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You are all caught up</b>
              </p>
            }
          >
            <div className="newsItemsGrid">
              {articles.map((x) => {
                  return (
                    <NewsItems
                      imgUrl={x["urlToImage"]}
                      title={x["title"]}
                      description={x["content"]}
                      newsUrl={x["url"]}
                      author={x["author"]}
                      publishedAt={x["publishedAt"]}
                      newsSource={x["source"]["name"]}
                    />
                  );
                })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
}

export default News;
