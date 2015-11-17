'use strict';

$(function(){
  $('#login').click(login);
})

function login(e) {
  e.preventDefault();

  var username = $('#username').val();
  var pw = $('#pw').val();

  $.post('/users/login', {username: username, password: pw})
  .done(function(data){
    console.log(data);
  })
  .fail(function(err){
    swal('Error:', err, 'error');
  });

}