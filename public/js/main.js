'use strict';

$(document).ready(init);

function init() {
	$(".log-in").on("click", login)
	$(".regist").on("click", register)
}

function login(){
	window.location.replace("/login/") ;
}

function register(){
	window.location.replace("/register/") ;
}



function loadUserPage(){
	console.log("LOAD USER PAGE")
	var username = ($)
	$.get("/profiles/")
		.done(function(data){
 		console.log("BACK AT THE FRONT END",data)

  })//done
  .fail(function(err){
    console.error("ERROR", err)
  });
}