const menuButton = document.getElementById("menu-duymesi");
const navigationLinks = document.getElementById("naviqasiya-keçidleri");
const menuButtonIcon = menuButton.querySelector("i");
menuButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("open");
  const isOpen = navigationLinks.classList.contains("open");
  menuButtonIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});
navigationLinks.addEventListener("click", () => {
  navigationLinks.classList.remove("open");
  menuButtonIcon.className = "ri-menu-line";
});
const scrollRevealSettings = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};
ScrollReveal().reveal(".basliq-sekli img", {
  ...scrollRevealSettings,
  origin: "right",
});
ScrollReveal().reveal(".basliq-mezmunu p", {
  ...scrollRevealSettings,
  delay: 500,
});
ScrollReveal().reveal(".basliq-mezmunu h1", {
  ...scrollRevealSettings,
  delay: 1000,
});
ScrollReveal().reveal(".basliq-duymeleri", {
  ...scrollRevealSettings,
  delay: 1500,
});
ScrollReveal().reveal(".destinasiya-karti", {
  ...scrollRevealSettings,
  interval: 500,
});
ScrollReveal().reveal(".teqdimat-sekli img", {
  ...scrollRevealSettings,
  origin: "left",
});
ScrollReveal().reveal(".teqdimat-mezmunu h4", {
  ...scrollRevealSettings,
  delay: 500,
});
ScrollReveal().reveal(".teqdimat-mezmunu p", {
  ...scrollRevealSettings,
  delay: 1000,
});
ScrollReveal().reveal(".teqdimat-duymesi", {
  ...scrollRevealSettings,
  delay: 1500,
});
ScrollReveal().reveal(".statistika-karti", {
  ...scrollRevealSettings,
  interval: 500,
});
ScrollReveal().reveal(".kesisf-karti", {
  ...scrollRevealSettings,
  interval: 500,
});
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
