/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('navMenu'),
      navToggle = document.getElementById('navToggle'),
      navClose = document.getElementById('navClose')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.navLink')

const linkAction = () =>{
    const navMenu = document.getElementById('navMenu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('headerShadow') 
                       : header.classList.remove('headerShadow')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SWIPER POPULAR ===============*/
const popularSwiper = new Swiper('.popularSwiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,
  })

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

