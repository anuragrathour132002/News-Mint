## News Mint
News Mint is a web application that provides users with the latest news from around the world. The app utilizes the NewsAPI to gather news articles. key features of News Mint are its advanced filtering options and infinite scrolling functionality, which enables users to seamlessly browse through a virtually endless stream of news articles.


## You can visit the site here ->  [News Mint](https://news-mint.netlify.app/)

- This is a news app with real and live data fetching using news api. 
- Currently for deployment purposes the data is static and not updating.
- You can choose different genre for news
- You can choose different area for news


## Different libraries
  1. React-infinite-scroll
  2. React-top-loading


## How to run with actual live data
- Clone this repo
- Go to `src/News.jsx` 
  1. Uncomment Line 22 `// let parsedData = await data.json();` and comment the line 23-277 `let parsedData = {` line at
  2. DO the same proces at line 307 308
  3. In the terminal run the command `npm run start`
