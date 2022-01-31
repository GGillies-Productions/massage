let dayNight = document.querySelector('.dayNight')
let menuToggle = document.querySelector('.menuToggle')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')

dayNight.onclick = function(){
body.classList.toggle('dark')
dayNight.classList.toggle('active')
}

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

//random card function second page

let card3 = document.getElementById('card-3')
let btn = document.querySelector('.btn')

const cardPick = ["card-1", "card-2",  "card-4", "card-5" ]


btn.addEventListener('click', () => {
    const random = function randomCard(cardPick){
        return cardPick [Math.floor(Math.random()*cardPick.length)];
    }
    
    card3.id= (random(cardPick));
})






