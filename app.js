var express = require("express");
var app = express();    //gives an application instance
var morgan = require("morgan");
var nunjucks = require("nunjucks");
var routes = require("./routes"); //importing modularized routes
var fs = require("fs");
var path = require("path");
var mime = require("mime");

// var locals = {
//   title: "Some Title",
//   people: [
//     {name: 'Gandalf'},
//     {name: 'Hermione'}
//   ]
// };

//what about "app.set("views", __dirname + '/views')" ? Does this only apply to
//swig? Does nunjucks.configure("views", {noCache: true}) already give us where to find
//the files?

nunjucks.configure("views", {noCache: true}); //cache is turned off or on depending on if we're in development
// nunjucks.render("index.html", locals, function (err, output) {
//   if (err) return console.log(err)
//   console.log(output);
// });
// app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", nunjucks.render);//how to render html templates via nunjucks




app.use(morgan('dev')); //shortened version

//the typical way to use static middleware: 
app.use(express.static(__dirname + "/public"));



//manually written static file middleware
// app.use(function(req, res, next){
//   var mimeType = mime.lookup(req.path);
//   fs.readFile("./public" + req.path, function (err, fileBuffer) {
//     if (err) return next();
//     res.header("Content-Type", mimeType);
//     res.send(fileBuffer);
//   })
// });


//function below gets the logger info manually

// app.use('/', function(req, res, next){
//   console.log('requested ', req.method, req.path);
//   res.on('finish', function(){
//     console.log('responded: ', res.statusCode);
//   })//automatically log response code as well as request method/path
//   next();
// })

app.use('/', routes);     //directs any incoming request over to modularized routes
//
// app.get('/', function(req, res) {
//   res.render("index", locals);
// })
// //
// app.get('/news', function (req, res) {
//   res.json( { name: 'newsRoute', data: 12345 });
// });

app.listen(3000, function() {   //application instance is listening on port 3000
  console.log("listening in!");
});
