// Handles navigation transparency during scrolling!
transparent = true;
$(document).scroll(function() {
  if ($(this).scrollTop() > 150) {
    if (transparent) {
      transparent = false;
      $('.navbar').removeClass('navbar-transparent');
    }
  } else {
    if (!transparent) {
      transparent = true;
      $('.navbar').addClass('navbar-transparent');
    }
  }
});

$(document).ready(function() {
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
    event.preventDefault();
  });

  // Collapses responsive navigation after clicking on a link.
  $('.navbar-collapse a').click(function() {
    // Detecting media queries.
    var mq = window.matchMedia( "(max-width: 780px)" );
    if (mq.matches) {
      $(".navbar-collapse").collapse('hide');
    }
  });
});

// Instantiate FastClick to remedy touch delays
window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);