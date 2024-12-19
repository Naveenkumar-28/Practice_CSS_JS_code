const hover=document.querySelectorAll('#hover')
const move_circle=document.getElementById('move_circle')

hover.forEach((child,index)=>{
    child.addEventListener("click",()=>{
        hover.forEach((item)=>{
            item.classList.remove('active')
        })
        child.classList.add('active')   
    })
})