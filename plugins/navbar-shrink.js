
import throttle from 'lodash/throttle'

function updateNavbar() {
  if ($(document).scrollTop() > 50) {
    // console.log('shrinking navbar...')
    $('nav').addClass('shrink')
    $('#logo').attr('src', '/images/Logo_stick.png')
  } else {
    $('nav').removeClass('shrink')
    $('#logo').attr('src', '/images/Logo_main.png')
  }
}

var updateNavbarThrottled = throttle(updateNavbar, 1000)

$(document).ready(function() {

  $(window).scroll(updateNavbarThrottled)

})
