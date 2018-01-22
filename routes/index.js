var express = require("express");
var router = express.Router(); //creates a new router instance
                              //but this is NOT a new app.
var tweetBank = require("../tweetBank");


router.get('/', function(req, res, next) {
  var allTweets = tweetBank.list();
  res.render("index", { title: "Twitter.js", tweets: allTweets});
});

module.exports = router;
