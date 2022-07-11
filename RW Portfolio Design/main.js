/** Change Background Header */
function scrollHeader() {
	const header = document.getElementById('header')
	if (this.scrollY >= 50) header.classList.add('scroll-header')
	else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/** Services Modal */
const modalViews = document.querySelectorAll('.services__modal'),
	modalBtns = document.querySelectorAll('.services__button'),
	modalClose = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
	modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mBtn, i) => {
	mBtn.addEventListener('click', () => {
		modal(i)
	})
})

modalClose.forEach((mClose) => {
	mClose.addEventListener('click', () => {
		const tModal = document.querySelector('.services__modal.active-modal')
		tModal.classList.remove('active-modal')
	})
})

/** Mixed up filter */
let mixerPortfolio = mixitup('.work__container', {
	selectors: {
		target: '.work__card',
	},
	animation: {
		duration: 300,
	},
})

const workBtns = document.querySelectorAll('.work__item')
// const activeBtn = (e) => {
// 	const deactiveChildren = Array.from(e.target.parentNode.children)
// 	deactiveChildren.forEach((child) => child.classList.remove('active-work'))
// 	e.target.classList.add('active-work')
// }
const activeWork = (e) => {
	console.dir(e.target)
	workBtns.forEach((btn) => btn.classList.remove('active-work'))
	e.target.classList.add('active-work')
}

workBtns.forEach((btn) => {
	btn.addEventListener('click', activeWork)
})

/** Testimonial Swiper */
let testimoinalSwiper = new Swiper('.mySwiper', {
	spaceBetween: 24,
	loop: true,
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 48,
		},
	},
})

/** Scroll Sections Active Link */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link')
		} else {
			document
				.querySelector(`.nav__menu a[href*=${sectionId}]`)
				.classList.remove('active-link')
		}
	})
}

window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => (document.body.classList.contains(lightTheme) ? 'light' : 'dark')
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? 'bx bx-sun' : 'bx bx-moon'

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
	document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme)
	themeButton.classList[selectedIcon === 'bx bx-sun' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the light / icon theme
	document.body.classList.toggle(lightTheme)
	themeButton.classList.toggle(iconTheme)
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})

/**	Scroll reveal */
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	// reset: true,
})

sr.reveal('.home__data')
sr.reveal('.home__handle', { delay: 700 })
sr.reveal('.home__social, .home__scroll', { delay: 900, origin: 'bottom' })

/** window ready */
window.addEventListener('DOMContentLoaded', () => {
	modalViews.forEach((modal) => modal.classList.add('ready'))
})
