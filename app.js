let nav = document.querySelector('.header__nav');
let burger = document.querySelector('.hamburger');
let burgerFirstLine = document.querySelector('.hamburger__line:nth-child(1)');
let burgerSecondLine = document.querySelector('.hamburger__line:nth-child(2)');
let burgerThirdLine = document.querySelector('.hamburger__line:nth-child(3)');

burger.addEventListener('click', function () {
  burgerFirstLine.classList.toggle('hamburger__line-1');
  burgerSecondLine.classList.toggle('hamburger__line-2');
  burgerThirdLine.classList.toggle('hamburger__line-3');

  nav.classList.toggle('display__nav');
});

// Carousel
function showCarousel() {
  const element = document.querySelector('.carousel');

  if (window.innerWidth < 520) {
    element.classList.remove('my-works__imgs');
  } else {
    element.classList.add('my-works__imgs');
  }
}
window.addEventListener('resize', showCarousel);
window.addEventListener('DOMContentLoaded', showCarousel);
