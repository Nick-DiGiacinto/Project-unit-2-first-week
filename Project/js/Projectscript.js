const barraDiNavigazione = document.getElementsByTagName('nav')[0]
const bottoneNavbar = barraDiNavigazione.querySelector('button')
const main = document.getElementById('trending')
const body = document.getElementsByTagName('body')[0]

/* aggiungo un event listener sullo scroll per far cambiare colore
 alla navbar e al bottone */
window.addEventListener('scroll', function() {
    let scroll = this.scrollY
    console.log(scroll)
    console.log(main.offsetTop)
    if (scroll >= main.offsetTop) {
        barraDiNavigazione.classList.remove('yellow')
        barraDiNavigazione.classList.add('white')
        bottoneNavbar.classList.remove('black')
        bottoneNavbar.classList.add('green') } else if (scroll < main.offsetTop) {
        barraDiNavigazione.classList.remove('white')
        barraDiNavigazione.classList.add('yellow')
        bottoneNavbar.classList.remove('green')
        bottoneNavbar.classList.add('black')
    }
})