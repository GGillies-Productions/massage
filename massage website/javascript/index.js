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
let card1 = document.querySelector('.card-1')
let card2 = document.querySelector('.card-2')
let card3 = document.querySelector('.card-3')
let card4 = document.querySelector('.card-4')
let card5 = document.querySelector('.card-5')
let btn = document.querySelector('.btn')

const cardPick = [card1, card2,  card4, card5 ]


btn.onclick = function() {
    const random = function randomCard(cardPick){
        return cardPick [Math.floor(Math.random()*cardPick.length)];
    }
    console.log(random(cardPick));
}

//console.log(random(cardPick));
