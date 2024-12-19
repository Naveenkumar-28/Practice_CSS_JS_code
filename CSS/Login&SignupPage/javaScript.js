const SigninBtn=document.getElementById('SigninBtn')
const loginBtn=document.getElementById('loginBtn')
const notify=document.getElementById('notify')
const signinNotify=document.getElementById('signinNotify')
const loginNotify=document.getElementById('loginNotify')
console.log(SigninBtn);

SigninBtn.addEventListener('click',()=>{
    notify.style.transform=" translateX(100%)"
    loginNotify.classList.remove('block')
    loginNotify.classList.remove('none')
    signinNotify.classList.add('none')
    signinNotify.classList.add('block')
    notify.style.borderRadius="50% 0 0 30% "

})
loginBtn.addEventListener('click',()=>{
    notify.style.transform=" translateX(0%)"
    loginNotify.classList.add('block')
    loginNotify.classList.add('none')
    signinNotify.classList.remove('none')
    signinNotify.classList.remove('block')
     notify.style.borderRadius="0 50% 30% 0 "
})