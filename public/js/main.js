'use strict';

$(document).ready(init);

function init() {
  $('#logout').click(logout);
}

function logout() {
  $.post('/users/logout')
  .done(function(){
    window.location.replace('/');
  });
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