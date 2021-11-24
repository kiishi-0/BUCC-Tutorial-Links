const burger = document.getElementById('burger');
const info = document.getElementById('info');
const menu = document.getElementById('menu-section');
const close = document.getElementById('close');

burger.addEventListener('click', ()=>{
    menu.style.right = 0;
    close.style.height = '100px'
});
close.addEventListener('click', ()=>{
    menu.style.right = "100%";
    close.style.height = '0'
})