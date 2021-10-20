

const btn = document.getElementById('hamburguer')

function menuHamburg(){

const nav = document.getElementById('menu')
   nav.classList.toggle('active')

}

btn.addEventListener('click', menuHamburg)


// Slide responsivo

const box = document.querySelectorAll('#slide article')
const slideBtn = document.querySelectorAll('.slide-button button')

let i = 0
let tempo = 3000



function carrousel(){

   slideBtn[i].classList.remove('red')
   box[i].classList.remove("select")

   i++

   if( i >= box.length){
      i = 0
   }

   box[i].classList.add("select")

   slideBtn[i].classList.add('red')

}

const teste2 = box.classList

function slide(numero){
   

   box[numero].classList.add("select")
   slideBtn[numero].classList.add('red')

   

 }



function iniciarSlide(){ 
   setInterval(carrousel, tempo)
}

window.addEventListener('load', iniciarSlide)

const btnSlide = document.querySelectorAll('.slide-button button')


