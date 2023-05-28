//burger
const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');
burger.addEventListener('click', function(){
    burger.classList.toggle('burger-on');
    navMenu.classList.toggle('hidden');
});

//bar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('bar-fixed');
    }else{
        header.classList.remove('bar-fixed');
    }
}
