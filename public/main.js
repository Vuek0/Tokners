let openOrNot = 0
const burger = document.getElementById('burgerButton')
const header = document.getElementById('header')
burger.addEventListener('click', ()=>{
    if(openOrNot == 0){
        header.classList.add('open')
        burger.classList.add('active')
        openOrNot++
    }else{
        burger.classList.remove('active')
        header.classList.remove('open')
        openOrNot--
    }
})
const mq = window.matchMedia("(max-width: 600px)");

const cards = document.getElementById('cards__slider')
let sliderIndicators = document.querySelectorAll('.slider__item')
let whichSlideNow = 2
if (mq.matches) {
    cards.addEventListener('touchstart', handleTouchStart, false)
    cards.addEventListener('touchmove', handleTouchMove, false)
}


function handleTouchStart(event){
    const firstTouch = event.touches[0]
    x1 = firstTouch.clientX
    y1 = firstTouch.clientY
}

function handleTouchMove(event){
    if(!x1 || !y1){
        return false
    }
    let x2 = event.touches[0].clientX
    let y2 = event.touches[0].clientY

    let xDiff = x2 - x1
    let yDiff = y2 - y1

    if(Math.abs(xDiff) > Math.abs(yDiff)){
        if(xDiff > 0 && whichSlideNow == 2){
            // right
            cards.style.transform = "translateX(360px)"
            whichSlideNow--
            sliderIndicators[1].classList.replace('slider__active', 'slider__nonactive')
            sliderIndicators[0].classList.replace('slider__nonactive', 'slider__active')            
        }
        else if(xDiff > 0 && whichSlideNow == 3){
            // right
            cards.style.transform = "translateX(0px)"
            whichSlideNow--
            sliderIndicators[2].classList.replace('slider__active', 'slider__nonactive')
            sliderIndicators[1].classList.replace('slider__nonactive', 'slider__active')
        }
        else if(xDiff < 1 && whichSlideNow == 1){
            // left
            cards.style.transform = "translateX(0px)"
            whichSlideNow++ 
            sliderIndicators[0].classList.replace('slider__active', 'slider__nonactive')
            sliderIndicators[1].classList.replace('slider__nonactive', 'slider__active')
        }
        else if(xDiff < 1 && whichSlideNow == 2){
            // left
            cards.style.transform = "translateX(-360px)"
            whichSlideNow++
            sliderIndicators[1].classList.replace('slider__active', 'slider__nonactive')
            sliderIndicators[2].classList.replace('slider__nonactive', 'slider__active')
        }else{

        }
    } else{
        
    }

    x1 = null;
    y1 = null;
}