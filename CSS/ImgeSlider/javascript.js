const leftBtn = document.getElementById('leftBtn')
const rightBtn = document.getElementById('rightBtn')
const image_slider = document.getElementById('image_slider')
const imageDots=document.getElementById('imageDots')


let imagePosition = 0;
let imageTranlatePosition = 0;

let clientWidth = image_slider.clientWidth
const imageSliderLength = image_slider.children.length

image_slider.style.width=`calc(${imageSliderLength*clientWidth}px)`

clientWidth = image_slider.clientWidth

leftBtn.addEventListener('click', () => {
    if (imagePosition == 0) {
        imagePosition += (imageSliderLength - 1)
        dotChage()
        imageSliderChanger()
        return;
    }
    if (imagePosition <= imageSliderLength) {
        imagePosition--
        dotChage()
        imageSliderChanger()
        return;

    }

})
rightBtn.addEventListener('click', () => {
    if (imagePosition < (imageSliderLength - 1)) {

        imagePosition++
       imageSliderChanger()
        dotChage()
        return;
    }
    if (imagePosition == (imageSliderLength - 1)) {
        imagePosition = 0
       imageSliderChanger()
        dotChage()
    }

})
const imageSliderChanger=()=>{
    imageTranlatePosition = imagePosition * (clientWidth / imageSliderLength)
    image_slider.style.transform = ` translateX(-${imageTranlatePosition}px)`;
}


for (let i=0 ;i<imageSliderLength;i++){
    const dot=document.createElement('div')
    dot.classList.add('dot')
    imageDots.appendChild(dot)
    
}

const dots=document.querySelectorAll('.dot')
const dotChage=()=>{
    dots.forEach((child)=>{
        child.classList.remove('active')
    })
    dots[imagePosition].classList.add('active')
}
dots.forEach((child,index)=>{
    child.addEventListener('click',()=>{

        imagePosition=index
        imageSliderChanger()
        dotChage()
    })

})

dotChage()