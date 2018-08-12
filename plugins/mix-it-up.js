import mixitup from 'mixitup'

$(window).load(function() {

  mixitup('#menu-pricing',{
    selectors: {
      target: 'li'
    }
  })

  // console.log('applyied mixitup on', $('#menu-pricing li'), 'elements')

})
