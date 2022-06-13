const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 4) {
		header.style.backgroundColor = '#000';
	} else {
		header.style.backgroundColor = "rgba(0,0,0,70%)" ;
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

let bg1 = document.getElementsByClassName("bg1")[0];
let bg2 = document.getElementsByClassName("bg2")[0];
let bg3 = document.getElementsByClassName("bg3")[0];
let bg4 = document.getElementsByClassName("bg4")[0];
let bg5 = document.getElementsByClassName("bg5")[0];
let Anniv =document.querySelector("#hero h1");
let tagline =document.querySelector("#tagline h1");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    bg2.style.top = value * 0.2 + 'px';
    bg3.style.top = value * 0.3 + 'px';
    bg4.style.top = value * 0.4 + 'px';
    bg5.style.bottom = value * 0.2 + 'px';
    Anniv.style.bottom = value * 0.6 + 'px';
    tagline.style.left = value * 0.2 + 'px';
})


// Swipper
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });