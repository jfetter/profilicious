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


  if(pw1 !== pw2 || pw1.length < 1 || username.length < 1){
    $('#pw1').val('');
    $('#pw2').val('');
    alert('invalid password.');
  } else {
      $("#un").text(username).data("pw", $("#pw1").val()); 
      $(".hidden").removeClass("hidden")
      $(".lab").addClass("hidden")
  }
}

function sendToProfile(){
      var username = $('#un').text();
      var pw1 = $('#un').data("pw");
      console.log("PW1etc", pw1, username)
      var image = $("#image").val();
      var email = $("#email").val();
      var tree = $("#tree").val();
      var tree_fall = $("#tree_fall").val();
    $.post('/users/register', {username: username, password: pw1, email: email, image: image, tree: tree, tree_fall: tree_fall})
      .done(function(data){
        console.log(data)
        id = data._id
        console.log(id)
        window.location.replace('/profiles/' + id);
    })
    .fail(function(err){
      console.log(fail)
      swal('Error:', err, 'error');
    });
}
