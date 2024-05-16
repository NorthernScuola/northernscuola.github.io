const hamburger_menu = document.querySelector('nav .hamburger_menu');
const nav_list = document.querySelector('nav .nav_list');
const nav_item = document.querySelector('nav .nav_item');
const nav_item_a = document.querySelectorAll('nav .nav_item a');
const nav = document.querySelector('nav');


hamburger_menu.addEventListener("click", () => {
	hamburger_menu.classList.toggle("on_click");
	nav_list.classList.toggle("on_click");
});


nav_item_a.forEach((item) => {
	item.addEventListener('click', () => {
        hamburger_menu.classList.remove("on_click");
        nav_list.classList.remove("on_click");
	});
});

window.addEventListener("scroll", ()=> {
    if (document.documentElement.scrollTop > 80 ) {
        nav.classList.add("sticky");
    }
    else {
        nav.classList.remove("sticky");
    }
});