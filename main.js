/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
const hamburgerIcon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  const isOpen = navMenu.classList.contains("left-[0]");
  navMenu.classList.toggle("left-[0]");
  navMenu.classList.toggle("left-[-100%]");
  hamburgerIcon.classList.toggle("ri-menu-4-line");
  hamburgerIcon.classList.toggle("ri-close-line");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("left-[0]");
    navMenu.classList.add("left-[-100%]");
    hamburgerIcon.classList.remove("ri-close-line");
    hamburgerIcon.classList.add("ri-menu-4-line");
  });
});

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/