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
const scrollUp = () =>{
	const scrollUp = document.getElementById('scrollUp')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('showScroll')
						: scrollUp.classList.remove('showScroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.navMenu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('activeLink')
		}else{
			sectionsClass.classList.remove('activeLink')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:200,
    // reset: true
})
sr.reveal(`.homeContent`)
sr.reveal(`.homeBoard`, {delay: 400, distance:'100px', origin:'right'})
sr.reveal(`.homePizza`, {delay: 800, distance:'100px', origin:'bottom', rotate:{z:-90}})
sr.reveal(`.homeIngredient`,{delay: 1600, interveal: 100})
sr.reveal(`.aboutData`,{origin:'right'})
sr.reveal(`.aboutImage`,{origin:'left'})
sr.reveal(`.popularContainer`,{origin:'top'})
sr.reveal(`.recipeData`,{origin:'right'})
sr.reveal(`.recipeImg`,{origin:'left'})
sr.reveal(`.productsCard`,{origin:'top'})
sr.reveal(`.contactInfo`,{origin:'right'})
sr.reveal(`.contactImage`,{origin:'left'})
sr.reveal(`footer`,{origin:'top'})

