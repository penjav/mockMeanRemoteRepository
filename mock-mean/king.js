/**
 * http://usejsdoc.org/
 */
var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var favicon = require("serve-favicon");
var http = require("http");


var indexRouter = require("./routes/index");
var aboutr = require("./routes/abmenu");
var contactr = require("./routes/contactRouter");
var head = require("./routes/head");


// create express object
var co = express();
// set config
co.set("views",path.resolve(__dirname,"views"));
co.set("port",process.env.PORT || 3000);
//co.set("view engine","ejs");
//ejs provides a .renderFile() method with the same signature with express expects,
//path,options,callback.
// app.engine() method is to map the EJS template engine to ".html" files.

co.engine("html", require("ejs").renderFile);
co.set("view engine","html");

// set middleware
co.use(express.static(path.resolve(__dirname,"public")));
co.use(favicon(path.join(__dirname,"public/img","favicon.ico")));
co.use(logger("dev"));

//router middleware
co.use("/",indexRouter);
co.use("/about",aboutr);
co.use("/contact",contactr);
co.use("/header",head);

// require routers

// listen to port
co.listen(co.get("port"), function(){
	console.log("server started on ",co.get("port"));
});

module.exports = co;