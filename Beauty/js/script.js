"use strict"


window.addEventListener("DOMContentLoaded", () => {
	



	const menuBurger = document.querySelector('.menu__burger'),
		headerTop = document.querySelector('.header__top'),
		headerBottom = document.querySelector('.header__bottom'),
		forMobile = document.querySelector('.forMobile');
		
	menuBurger.addEventListener('click', () => {
		menuBurger.classList.toggle('_active');
		headerTop.classList.toggle('_active');
		headerBottom.classList.toggle('_active');
		forMobile.classList.toggle('_active');
		document.body.classList.toggle('_block');

	});


});