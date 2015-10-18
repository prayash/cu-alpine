var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
  oVal = ($(window).scrollTop() / 170);
  $(".blur").css("opacity", oVal);
});

$(document).ready(function() {

  // Aggregating Google Calendar Events
  $('#eventlist').gCalReader({
    calendarId:'en.usa#holiday@group.v.calendar.google.com',
    apiKey:'AIzaSyBNpHrFKKWxQxuMc9CffQ_3vjWttWIb3j0',
    sortDescending: false
  });

  // Binding animated scroll to navigation links
  $('a').bind('click',function(event) {
    var $anchor = $(this);

    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 60
    }, 800);
    /*
    if you don't want to use the easing effects:
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1000);
    */
    
    event.preventDefault();
  });
});