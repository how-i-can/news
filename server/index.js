require("dotenv").config();
const express = require("express");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();
const port = process.env.PORT || 4000;
const axios = require("axios");
const firebase = require("firebase");
var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "",
  databaseURL: "",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
firebase.initializeApp(firebaseConfig);

const API_KEY = process.env.NEWS_API_KEY;
const pageSize = 5;
const newsApiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&apiKey=${API_KEY}`;
const loadSourcesApi = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`;
const bodyParser = express.json();
let globalNewSourceCategories = new Object();

//logging HTTP requests and responses
app.use(volleyball);
//cross-origin resource sharing
app.use(bodyParser);
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res, next) => {
  res.json({ message: "working" });
});
// GET top news headlines
app.get("/news", (req, res, next) => {
  axios
    .get(newsApiURL)
    .then((response) => {
      res.json(response.data.articles);
    })
    .catch((err) => {
      console.error(err);
    });

    axios
    .get(loadSourcesApi)
    .then( ( response ) => {
      //Check the status
      let jsonSources = response.data.sources;
      console.log(jsonSources);

      var sourceMap = response.data.sources.map( src => ({ id: src.id , name: src.name, category: src.category }));
      console.log("Map of sources");
      console.log(sourceMap);

      globalNewSourceCategories = sourceMap;
    })
    .catch(err => {
      console.error(err);
    });
});

//search top news headlines
//category name is filter
app.use("/news/search", (req, res, next) => {
  
  console.log("in search");
  let categoryFilter = '';
  if (req.body.category){
     categoryFilter = `&category=${req.body.category}`;
  }
  
  const searchNewsApi = `https://newsapi.org/v2/top-headlines?q=${req.body.query}&apiKey=${API_KEY}${categoryFilter}`;
  axios
    .get(searchNewsApi)
    .then((response) => {
      res.json(response.data.articles);
    })
    .catch((err) => {
      console.error(err);
    });
});

//search news by title-flexible to search by other params in the future
//source id is filter
app.use("/news/filter", (req, res, next) => {

  let categoryFilter = "";
  let searchNewsApi = `https://newsapi.org/v2/everything?qInTitle=${req.body.query}&pageSize=${pageSize}&sortBy=popularity&apiKey=${API_KEY}`;

  if (req.body.category){
    //sourceMap is an array of sources that was loaded the very first time the news search was queried.
    //get all the of the source ids associated with the category string and transform to a single comma delimted string
    //pass this as the source parameter to NewsApi
    var sourceIdList = sourceMap.filter( s => { if (s.category === req.body.category){ return s.id }} ).join(",");
    console.log( 'Sources' );
    console.log( sourceIdList );

    categoryFilter = `&source=${sourceIdList}`
    console.log("category filter is ");
    console.log(categoryFilter);
    searchNewsApi = searchNewsApi.concat(categoryFilter);
  }
  
  axios
    .get(searchNewsApi)
    .then((response) => {
      res.json(response.data.articles);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post("/signin", (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return res
        .status(201)
        .json({ message: `user ${data.user.id} signed in successfully` });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
});

app.post("/signup", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
  };
  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then((data) => {
      return res
        .status(201)
        .json({ message: `user ${data.user.id} signed up successfully` });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
});

app.post("/logout", (req, res) => {
  firebase
    .auth()
    .signOut()
    .then((data) => {
      return res
        .status(201)
        .json({ message: `user ${data.user.id} logged out successfully` });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
});

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
    stack: err.stack,
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}!`));
