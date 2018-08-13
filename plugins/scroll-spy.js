import debounce from 'lodash/debounce'

$('body').scrollspy({
  target: '#template-navbar',
  offset: 40 // Pixels to offset from top when calculating position of scroll.
})

document.location.hash = ''

function updateHash(event) {
  console.log('scrollspy detected')
  const data = event.target.firstChild.href.split('#')
  let hash = ''
  if (data.length === 2) {
    hash = data[1]
    console.log('hovering :', hash)
  } else {
    console.error('failed at detecting hovered section')
  }
  document.location.hash = hash
}

var updateHashDebounced = debounce(updateHash, 300)

$('body').on('activate.bs.scrollspy', updateHashDebounced)
