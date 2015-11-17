'use strict';

var express = require('express');
var router = express.Router();
var User = require("../models/user");      

var authMiddleware = require('../config/auth');
	
router.get('/:id', authMiddleware, function(req, res) {
 	User.findById(req.params.id, function(err, user){
 		console.log(user);
  res.render("profiles", {user: user});
 	})
});

router.put("/:id", function(req, res){
	User.findByIdAndDelete(req.params.id, function(err, user){
 		console.log(user);
  res.render("index");
	})
})

// router.get("/info", function(req, res){
// 	res.status(err ? 400: 200).send(err ? "couldn't find user": user)
// 	User.findById(user._id)
// 	console.log("USER ID", user._id);
// });

module.exports = router;

// router.get("/profile", function(req,res){
//   var id = req.cookies.userId;
//   User.findById(id, function(err, user){
//     console.log("INSIDE LOGIN", user)
//     res.send(user)
//   })
// })