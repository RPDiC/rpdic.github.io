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
  var baseURL = "https://rpdic.github.io/";
  //load content for about tab
  $('#about').load(baseURL+'home', function() {
    $('#myNav').tab(); //initialize tabs 
  });
  $('#myNav').bind('show', function(func) {
    var pattern=/#.+gi 
    var contentID = func.target.toString().match(pattern)[0];
    
    $(contentID).load(baseURL+contentID.replace('#',''), function(){
      $('#myNav').tab();
    });
  });
};

$(document).ready(main);
