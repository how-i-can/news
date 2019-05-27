const NewsAPI = require("newsapi");
require("dotenv").config();
const API_KEY = process.env.NEWS_API_KEY;
const newsapi = new NewsAPI(API_KEY);
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2
  .topHeadlines({
    language: "en",
    country: "us"
  })
  .then(response => {
    console.log(response);
    /*
    {
      status: "ok",
      articles: [...]
    }
  */
  });
module.exports = newsapi;
