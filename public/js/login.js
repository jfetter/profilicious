'use strict';

$(function(){
  $('#login').click(login);
})

function login(e) {
  e.preventDefault();
  console.log('login');

  var username = $('#username').val();
  var pw = $('#pw').val();


  $.post('/users/login', {username: username, password: pw})
  .done(function(data){
    var id = data._id
    window.location.assign("/profiles/" + id);
  })//done
  .fail(function(err){
    $('#username').val('');
    $('#pw').val('');
    swal('Error:',  'invalid entry');
  });
}
