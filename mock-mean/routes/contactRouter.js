/**
 * http://usejsdoc.org/
 */
var express = require("express");

var cRoute = express.Router();

/* CONTACT PAGE*/
cRoute.get("/",function(req,res){
	res.render("contact.html");
});

// exports module
module.exports = cRoute;