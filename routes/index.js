var express = require("express");
var router = express.Router(); //creates a new router instance
                              //but this is NOT a new app.
var tweetBank = require("../tweetBank");


router.get('/', function(req, res, next) {
  var allTweets = tweetBank.list();
  res.render("index", { title: "Twitter.js", tweets: allTweets, showForm: true});
});

router.get('/users/:name', function (req, res, next) {
  var tweetsByUser = tweetBank.find({name: req.params.name});
  res.render("index", { title: "Twitter.js", tweets: tweetsByUser});
});

router.get('/tweets/:id', function (req, res, next) {
  var tweetByID = tweetBank.find({ id: +req.params.id});
  res.render("index", { title: "Twitter.js", tweets: tweetByID});
});

router.post('/tweets', function (req, res, next) {
  tweetBank.add(req.body.name, req.body.text);
  res.redirect('/');
})

module.exports = router;
