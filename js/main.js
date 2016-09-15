var main = function() {
  $('#myNav').on('click','.about',(function() {
    
    $('.content').hide();
    $('.about').show();
  });
  $('#myNav').on('click','.music',(function() {
    $('.content').hide();
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
