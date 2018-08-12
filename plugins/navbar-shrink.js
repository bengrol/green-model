$(document).ready(function() {

  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink')
      $('#logo').attr('src', 'images/Logo_stick.png')
    } else {
      $('nav').removeClass('shrink')
      $('#logo').attr('src', 'images/Logo_main.png')
    }
  })

})
