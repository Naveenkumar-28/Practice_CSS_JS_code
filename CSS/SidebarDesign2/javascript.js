const Close =document.getElementById('close_btn')
const sidebar =document.getElementById('sidebar_container')
const content_icon_box=document.querySelectorAll('#content_icon_box')
// console.log(content_icon_box);

Close.addEventListener('click',()=>{
    sidebar.classList.toggle('open')
})

content_icon_box.forEach((icon)=>{
    // icon.classList.remove('active')
    
    icon.addEventListener('click',()=>{
       
        content_icon_box.forEach((item)=>{
            item.classList.remove('active')
        })
        icon.classList.add('active')
    })
  
    
})