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

const button1 = document.querySelector('#btn-one')
button1.addEventListener('click', function(event) {
  event.target.style.color = 'black'
  event.stopPropagation()
})

const divClick = document.querySelector('#div-border')
divClick.addEventListener('click', function(event) {
  event.currentTarget.style.border = '1px solid red'
})

const button3 = document.querySelector('#btn-three')
button3.addEventListener('dblclick', function(event) {
  event.target.style.borderColor = 'red'
})

const img1 = document.querySelector('#img-one')
img1.addEventListener('mouseenter', function(event) {
  event.target.style.border = '2px dashed green'
})

img1.addEventListener('mouseleave', function(event) {
  event.target.style.border = 'none'
})

const img4 = document.querySelector('#img-four')
img4.addEventListener('mousedown', function(event) {
  event.target.style.opacity = '0'
})

img4.addEventListener('mouseup', function(event) {
  event.target.style.opacity = '1'
})

const p = document.querySelector('p')
p.addEventListener('copy', function(event) {
  alert('copying')
})

const img2 = document.querySelector('#img-two')
img2.addEventListener('contextmenu', function(event) {
  event.target.style.border = '2px solid yellow'
})

img2.addEventListener('mouseout', function(event) {
  event.target.style.border = 'none'
})

const navStop = document.querySelector('nav')
navStop.addEventListener('click', function(event) {
  event.preventDefault()
  alert(`You can't click`)
})
