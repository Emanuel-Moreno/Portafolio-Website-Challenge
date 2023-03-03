const btnsun = document.querySelector('.btnsun');
const btnmoon = document.querySelector('.btnmoon');
const navback = document.querySelector('.container__header');
const linav = document.querySelectorAll('.linav');
const navbtn = document.querySelector('.nav__btn');
const bannerImg = document.querySelector('.banner__inicio');
const bannerCont = document.querySelector('.container__banner');
const bannerName =document.querySelector('.name');
const bannerJob= document.querySelector('.job');
const bannerRed= document.querySelectorAll('.banner__red');
const about= document.querySelector('.sobremi');
const aboutInteres = document.querySelectorAll('.interes');
const aboutBtn= document.querySelector('.btncv');
const portafolio= document.querySelector('.portafolio');
const contact= document.querySelector('.contacto');
const inputs = document.querySelectorAll('.input');
const btnMen= document.querySelector('.btnmen');
const footer =document.querySelector('footer');
const footerRed =document.querySelectorAll('.afoot');
const navBtnResponsive =document.querySelector('.nav__responsive');
const nav = document.querySelector('nav');
const userImg = document.querySelector('.container__banner--img');
let navCondition = false;

userImg.style.backgroundImage = 'url(img/profile.jpg)'
bannerImg.style.backgroundImage = 'url(img/fondoluz2.png)'
navBtnResponsive.addEventListener('click', ()=>{
    if(!navCondition){
        nav.classList.add('responsive');
        navCondition = true
    }
    else{
       navSelect();
    }
})
linav.forEach(li => li.addEventListener('click', ()=>{
    navSelect();
}))
function navSelect(){
    
    nav.classList.remove('responsive');
    navCondition = false;
}

btnmoon.addEventListener('click', ()=>{
    navback.classList.add('active')
    linav.forEach(li => li.classList.add('active'))
    navbtn.classList.add('active');
    btnsun.classList.add('active');
    btnmoon.classList.add('active');
    bannerImg.classList.add('active')
    bannerCont.classList.add('active');
    bannerName.classList.add('active');
    bannerJob.classList.add('active');
    bannerRed.forEach(li => li.classList.add('active'));
    about.classList.add('active');
    aboutInteres.forEach(li => li.classList.add('active'));
    aboutBtn.classList.add('active');
    portafolio.classList.add('active');
    contact.classList.add('active');
    inputs.forEach(li => li.classList.add('active'));
    btnMen.classList.add('active');
    footer.classList.add('active');
    footerRed.forEach(li => li.classList.add('active'));
    nav.classList.add('active')
    bannerImg.style.backgroundImage = 'url(img/fondonoct1.png)'
    
});
btnsun.addEventListener('click', ()=>{
    navback.classList.remove('active')
    linav.forEach(li => li.classList.remove('active'))
    navbtn.classList.remove('active');
    btnsun.classList.remove('active');
    btnmoon.classList.remove('active');
    bannerImg.classList.remove('active')
    bannerCont.classList.remove('active');
    bannerName.classList.remove('active');
    bannerJob.classList.remove('active');
    bannerRed.forEach(li => li.classList.remove('active'))
    about.classList.remove('active');
    aboutInteres.forEach(li => li.classList.remove('active'))
    aboutBtn.classList.remove('active');
    portafolio.classList.remove('active');
    contact.classList.remove('active');
    inputs.forEach(li => li.classList.remove('active'));
    btnMen.classList.remove('active');
    footer.classList.remove('active');
    footerRed.forEach(li => li.classList.remove('active'));
    nav.classList.remove('active')
    bannerImg.style.backgroundImage = 'url(img/fondoluz2.png)'
})