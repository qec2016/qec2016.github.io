(function() {
	var button = document.querySelector(".main-nav__menu-toggle");
	var links = document.querySelector(".main-nav__links__group");

	function toggleNav() {

		//if button is active, hide menu and make button inactive
		if (button.classList.contains("main-nav__menu-toggle--active")) {
			//remove classes
			links.classList.remove("main-nav__links__group--visible");
			button.classList.remove("main-nav__menu-toggle--active");
			button.style.transform = "rotate(0deg)";
			//change to icon to hamburger menu
			setTimeout(function(){
				button.innerHTML = "☰";
			}, 100);

		}

		//if button is inactive, show menu and make button active
		else {
			//add classes
			links.classList.add("main-nav__links__group--visible");
			button.classList.add("main-nav__menu-toggle--active");
			//change icon to x
			button.innerHTML = "&#x2715";
			button.style.transform = "rotate(90deg)";
		}
	}

	button.addEventListener("click", toggleNav);
})();