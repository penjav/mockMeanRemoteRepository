/**
 * http://usejsdoc.org/
 */
var express = require("express");
var aboutMenu = express.Router();

/* GET ABOUT PAGE*/
aboutMenu.get("/",function(req,res){
	res.render("about.html");
});



//exports router
module.exports = aboutMenu;