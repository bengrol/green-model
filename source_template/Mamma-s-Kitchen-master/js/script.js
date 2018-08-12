
/* =================================================================
            Load more button
===================================================================*/

$(document).ready(function() {
  $('#loadMenuContent').click(function(event) {

    $.get('php/ajax_menu.html', function(data) {
      $('#moreMenuContent').append(data)
    })
    event.preventDefault()
    $(this).hide()
  })
})

// Showing Icon in placeholder

$('.iconified').on('keyup', function() {
  var input = $(this)
  if (input.val().length === 0) {
    input.addClass('empty')
  } else {
    input.removeClass('empty')
  }
})

