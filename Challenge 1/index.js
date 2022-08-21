;(function () {
	const burger = document.querySelector('.burgerIcon')
	const menu = document.querySelector('.menu')
	const overlay = document.querySelector('.slideOverlay')

	const handleOpen = () => {
		menu.classList.toggle('open')
		overlay.classList.toggle('open')
	}

	burger.addEventListener('click', handleOpen)
})()
