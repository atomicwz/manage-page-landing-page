

const btn = document.getElementById('hamburguer')

function menuHamburg(){

const nav = document.getElementById('menu')
   nav.classList.toggle('active')

}

btn.addEventListener('click', menuHamburg)
