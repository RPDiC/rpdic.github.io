/*
function changeJumbo(id1, content1, id2, content2, id3, content3) {
  var contentChange1 = document.getElementById(id1); 
  var contentChange2 = document.getElementById(id2); 
  var contentChange3 = document.getElementById(id3); 
  contentChange1.innerHTML = content1;
  contentChange2.innerHTML = content2;
  contentChange3.innerHTML = content3;

}*/

var main = function() {
  $('#about_tab').click(function() {
    $('.jumbotron').children().hide();
    $('.about').show();
  });
  $('#music_tab').click(function() {
    $('.jumbotron').children().hide();
    $('.music').show();
  });
  $('#portfolio_tab').click(function() {
    $('.jumbotron').children().hide();
    $('.portfolio').show();
  });
  $('#cv_tab').click(function() {
    $('.jumbotron').children().hide();
    $('.cv').show();
  });
  $('#contact_tab').click(function() {
    $('.jumbotron').children().hide();
    $('.contact').show();
  });
};

$(document).ready(main);
