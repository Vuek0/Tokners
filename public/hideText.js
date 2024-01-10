const partOfText = document.querySelector('.part__text')
const moreButton = document.getElementById('readMore')
let isTextHide = 1

moreButton.addEventListener('click', ()=>{
    if(isTextHide == 1){
        partOfText.style.display = "block"
        moreButton.textContent = "Hide"
        isTextHide--
    }else{
        partOfText.style.display = "none"
        moreButton.textContent = "Read more"
        isTextHide++
    }
    // partOfText.style.display = partOfText.style.display === 'none' ? 'block' : 'none'
})