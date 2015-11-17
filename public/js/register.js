'use strict';

var id;

$(function(){
  $('#register').click(register);
  $("#submit").click(sendToProfile)
})

function register(e) {
  e.preventDefault();

  var username = $('#username').val();
  var pw1 = $('#pw1').val();
  var pw2 = $('#pw2').val();

  if(pw1 !== pw2){
    $('#pw1').val('');
    $('#pw2').val('');
    swal('Error:', 'Passwords do not match.', 'error');
  } else {
    $.post('/users/register', {username: username, password: pw1})
    .done(function(data){
      $(".hidden").removeClass("hidden")
      id = data._id
    })
    .fail(function(err){
      swal('Error:', err, 'error');
    });
  }
}

function sendToProfile(){
  window.location.replace('/profiles/' + id);
}
