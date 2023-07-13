# News Mint

You can visit the site here -> [News Mint]( )

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
