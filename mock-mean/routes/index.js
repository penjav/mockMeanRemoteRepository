/**
 * http://usejsdoc.org/
 */
var express = require("express");
var index = express.Router();

/*GET Header PAGE */
index.get('/',function(req,res){
	res.render("header.ejs");
});

module.exports = index;