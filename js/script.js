

const btn = document.getElementById('hamburguer')

function menuHamburg() {

   const nav = document.getElementById('menu')
   nav.classList.toggle('active')

}

btn.addEventListener('click', menuHamburg)


//111111111

const box = document.querySelectorAll('#slide article')
const slideBtn = document.querySelectorAll('.slide-button button')
let i = 1

const passarSlide = () => {


   box.forEach((item) => {
      const estaAtivo = item.classList.contains('select')
      if (estaAtivo) item.classList.remove('select')
   })
   slideBtn.forEach((botao) => {
      const estaAtivo = botao.classList.contains('red')
      if (estaAtivo) botao.classList.remove('red')
   })

   box[i].classList.add('select')
   slideBtn[i].classList.add('red')
   i++

   if (i == box.length) {
      i = 0
   }

}

box.forEach(item => item.addEventListener('click', passarSlide)
)
slideBtn.forEach(item => item.addEventListener('click', passarSlide)
)









