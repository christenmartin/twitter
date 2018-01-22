var express = require("express");
var app = express();    //gives an application instance
var morgan = require("morgan");

var logger = morgan("dev");

app.use(logger); //shortened version

//function below gets the logger info manually

// app.use('/', function(req, res, next){
//   console.log('requested ', req.method, req.path);
//   res.on('finish', function(){
//     console.log('responded: ', res.statusCode);
//   })//automatically log response code as well as request method/path
//   next();
// })

app.get('/', function(req, res) {
  res.send("you got the root route\n");
})
//
app.get('/news', function (req, res) {
  res.json( { name: 'newsRoute', data: 12345 });
});

app.listen(3000, function() {   //application instance is listening on port 3000
  console.log("listening in!");
});
