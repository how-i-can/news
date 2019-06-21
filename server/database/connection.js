const monk = require("monk");
const database = monk("mongodb://127.0.0.1:27017/news");

module.exports = database;
