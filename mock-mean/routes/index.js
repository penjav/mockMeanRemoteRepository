/**
 * http://usejsdoc.org/
 */
var express = require("express");
var index = express.Router();

/*GET HOME PAGE */
index.get('/',function(req,res){
	res.render("test.ejs");
});

module.exports = index;