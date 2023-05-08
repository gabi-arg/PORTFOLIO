const menuBackground = document.querySelector('.menu-background')
const menu = document.querySelector('#menu');
const menuClose = document.querySelector('#menu-close')

menuBackground.style.display = 'none'
menuClose.style.display = 'none';


menu.addEventListener('click', ()=> {
    menuBackground.style.display = 'flex';
    menuClose.style.display = 'flex';
    menu.style.display = 'none';
});


menuClose.addEventListener('click', ()=>{
    menuBackground.style.display = 'none';
    menuClose.style.display = 'none';
    menu.style.display = 'flex';
})