/**
 * http://usejsdoc.org/
 */
var express = require("express");
var head = express.Router();


/* GET HEADER PAGE*/

head.get("/",function(req,res){
	res.render("home.ejs");
});

// exports router
module.exports = head;