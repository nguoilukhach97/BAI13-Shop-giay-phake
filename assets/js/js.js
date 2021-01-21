
/*============== MENU SHOP ===============*/

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show');
        });
    }
}

showMenu('nav-toggle','nav-menu');

/*====== REMOVE MENU ======= */

const navLink = document.querySelectorAll('.nav_link');

navMenu = document.getElementById('nav-menu');

function linkAction(){
    navMenu.classList.remove('show');
}
navLink.forEach(x => x.addEventListener('click', linkAction));

/*============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

window.addEventListener('click',scrollActive);

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(x => {
        const sectionHeight = x.offsetHeight;

        const sectionTop = x.offsetTop - 50;
        sectionId = x.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active');
        }
        else{
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active');
        }
    });
}

/*==== Change color header=====*/

window.onscroll = ()=>{
    const nav = document.getElementById('header');

    if(this.scrollY >= 200){
        nav.classList.add('scroll-header');
    }
    else{
        nav.classList.remove('scroll-header');
    }
}