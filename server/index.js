require("dotenv").config();
const express = require("express");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();
const port = process.env.PORT || 4000;
const axios = require("axios");

const API_KEY = process.env.NEWS_API_KEY;
const newsApiURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const bodyParser = express.json();

//logging HTTP requests and responses
app.use(volleyball);
//cross-origin resource sharing
app.use(bodyParser);
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res, next) => {
  res.json({message : "working"})
})
// GET top news headlines
app.get("/news", (req, res, next) => {
  axios
    .get(newsApiURL)
    .then(response => {
      res.json(response.data.articles);
    })
    .catch(err => {
      console.error(err);
    });
});

//search top news headlines
app.use("/news/search", (req, res, next) => {
  const searchNewsApi = `https://newsapi.org/v2/top-headlines?q=${req.body.query}&apiKey=${API_KEY}`
  axios
    .get(searchNewsApi)
    .then(response => {
      res.json(response.data.articles);
    })
    .catch(err => {
      console.error(err);
    });
})

//Error Handling
function notFound(req, res, next) {
  res.status(404);
  const error = new Error("Not Found - " + req.originalUrl);
  //next forwards an error
  //next() is a function that tells the code to go on to the NEXT middleware so that it can do its thing
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}!`));


// -- firebase --
const firebaseConfig = {
  apiKey: "AIzaSyBbue1B15iaiWJCDBi007N-D7OE9gZ8TKg",
  authDomain: "perch-51baf.firebaseapp.com",
  databaseURL: "https://perch-51baf.firebaseio.com",
  projectId: "perch-51baf",
  storageBucket: "perch-51baf.appspot.com",
  messagingSenderId: "898150122093",
  appId: "1:898150122093:web:54b4f2c47e05ced9747564"
};
