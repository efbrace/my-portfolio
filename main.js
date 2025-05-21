// SCROLL EFFECT
document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const logo = document.querySelector("nav span");
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
    logo.classList.add("logoColor");
  } else {
    nav.classList.remove("scrolled");
    logo.classList.remove("logoColor");
  }
});
