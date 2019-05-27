const express = require("express");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();
const port = process.env.PORT || 3000;
const newsApi = require("./newsapi");

const bodyParser = express.json();

//logging HTTP requests and responses
app.use(volleyball);
//cross-origin resource sharing
app.use(cors());
app.get("/", (req, res) => res.send(newsApi));

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
