let selectedColor = 'blue'
const painting = document.querySelector('.painting')
painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor

})

//start with blue
//selected a colored box

let blue = document.querySelector('#blue')
let blue = document.querySelector('#red')
let blue = document.querySelector('#yellow')
let blue = document.querySelector('#green')

blue.addEventListener('click', function(){
    selectedColor = 'blue'
    console.log(selectedColor)
})

red.addEventListener('click', function(){
    selectedColor = 'red'
    console.log(selectedColor)
})

yellow.addEventListener('click', function(){
    selectedColor = 'yellow'
    console.log(selectedColor)
})

green.addEventListener('click', function(){
    selectedColor = 'green'
    console.log(selectedColor)
})