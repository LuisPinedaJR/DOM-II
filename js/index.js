// Your code goes here

// 'mouseover`
// `keydown`
// `wheel`
// `drag / drop`
// `load`
// `focus`
// `resize`
// `scroll`
// `select`
// `dblclick`

// Nest two similar events somewhere in the site and prevent the event propagation properly
// Stop the navigation items from refreshing the page by using `preventDefault()`

let linksHov = document.querySelectorAll('.nav-link').forEach(el => {
  el.addEventListener('mouseover', () => {
    el.style.color = 'red'
  })
})

const keyP = document.addEventListener('keydown', () => {
  alert('You pressed a key')
})

const wheeling = document
  .querySelectorAll('.text-content')
  .addEventListener('onwheel', () => {
    let scale = 1
    event.preventDefault()
    scale += event.deltaY * -0.01
    scale = Math.min(Math.max(0.125, scale), 4)
    el.style.transform = `scale(${scale})`
  })
