const mobileMenu = document.querySelector(".mobile-nav");

if (mobileMenu) {
	const menuButton = mobileMenu.querySelector("summary");
	const menuLinks = mobileMenu.querySelectorAll("nav a");

	const updateMenuState = () => {
		menuButton.setAttribute("aria-label", mobileMenu.open ? "Fermer le menu" : "Ouvrir le menu");
		menuButton.setAttribute("aria-expanded", String(mobileMenu.open));
	};

	mobileMenu.addEventListener("toggle", updateMenuState);
	menuLinks.forEach((link) => {
		link.addEventListener("click", () => {
			mobileMenu.open = false;
			updateMenuState();
		});
	});

	updateMenuState();
}