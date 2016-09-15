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
  $('#myNav').on('click','.about',(function() {
    $('.jumbotron').children().hide();
    $('.about').show();
  });
  $('#myNav').on('click','.music',(function() {
    $('.jumbotron').children().hide();
    $('.music').show();
  });
  $('#myNav').on('click','.portfolio',(function() {
    $('.jumbotron').children().hide();
    $('.portfolio').show();
  });
  $('#myNav').on('click','.cv',(function() {
    $('.jumbotron').children().hide();
    $('.cv').show();
  });
  $('#myNav').on('click','.contact'(function() {
    $('.jumbotron').children().hide();
    $('.contact').show();
  });
};

$(document).ready(main);
