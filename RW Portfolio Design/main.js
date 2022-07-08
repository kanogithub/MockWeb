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
