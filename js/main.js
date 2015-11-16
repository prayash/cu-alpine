// Handles navigation transparency during scrolling!
transparent = true;
$(document).scroll(function() {
  if( $(this).scrollTop() > 150 ) {
    if(transparent) {
      transparent = false;
      $('nav[role="navigation"]').removeClass('navbar-transparent');
    }
  } else {
    if( !transparent ) {
      transparent = true;
      $('nav[role="navigation"]').addClass('navbar-transparent');
    }
  }
});

$(document).ready(function() {
  // Initiate fancybox (used for gallery).
  // if (window.location.href == about.html) 
  $('.fancybox').fancybox();

  // Aggregating Google Calendar Events
  $('#eventlist').gCalReader({
    calendarId:'cualpine@gmail.com',
    apiKey:'AIzaSyBNpHrFKKWxQxuMc9CffQ_3vjWttWIb3j0',
    sortDescending: false
  });

  // Makes the menu black when toggled in mobile mode.
  $('.navbar-toggle').click(function(e) {
    if ($('nav[role="navigation"]').hasClass('navbar-transparent')) {
      $('nav[role="navigation"]').removeClass('navbar-transparent');
    }
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

  // Collapses responsive navigation after clicking on a link.
  $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });
});