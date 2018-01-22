//this obviously isn't a working database, so the tweets won't persist.
//but we can seed anew each time the app begins

'use strict';

var _ = require("lodash");

var data = [];

function add(name, text) {
  data.push( { name: name, text: text, id: data.length});
}

function list() {
  return _.cloneDeep(data);
}

function find(properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find};   //when we require the tweetBank
//file elsewhere, we'll be able to call anything listed in module.exports as a function
//in the other file

var randArrayEl = function(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
}

var getFakeName = function() {
  var fakeFirsts = ["Nimit", "Dave", "Shanna", "Charlotte", "Scott", "Ayana",
  "Omri", "Gabriel", "Joe"];
  var fakeLasts = ["Hashington", "Stackson", "McQueue", "OLogn", "Ternary", "Claujure",
  "Dunderproto", "Binder", "Docsreader", "Ecma"];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

console.log(data);
