'use strict';

$(document).ready(init);

function init() {
	showPage();
  $('.logout').click(logout);
  $(".edit").click(editProf);
  $(".delete").click(deleteProf);
}

function showPage(){
	$(".hidden").removeClass("hidden")
}

function deleteProf(){
	var id = $(".edit").data("id")
	console.log("ID", id)
	 $.delete('/users' + id)
  .done(function(){
    window.location.replace('/');
  })
   .fail(function(err){
      console.log(fail)
      swal('Error:', err, 'error');
    });

}

function editProf(){

	var id = $(".edit").data("id")
		console.log(id)
	 $.put('/users' + id)
  .done(function(){
    window.location.replace('/register');
  })
   .fail(function(err){
      console.log(fail)
      swal('Error:', err, 'error');
    })

}

function logout() {
  $.post('/users/logout')
  .done(function(){
    window.location.replace('/');
  });
}