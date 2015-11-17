'use strict';

var express = require('express');
var router = express.Router();
var authMiddleware = require('../config/auth');


router.get('/', function(req, res) {
	console.log(" routed to render index", req.body)
  res.render('index', {data: req.body, title: 'Welcome '});
});

router.get('/register', function(req, res) {
  res.render('register', {title: 'Register'});
});

router.get('/login', function(req, res) {
  res.render('login', {title: 'Login'});
});

module.exports = router;
