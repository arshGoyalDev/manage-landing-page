/* mobile nav bar */
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".menu")

menuBtn.addEventListener("click", function(){
  menuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("mobile-menu");
  document.body.classList.toggle("scroll-hidden")  
})


// testimonials section effect
var swiper = new Swiper('.swiper-container', {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0,
    slideShadows: true,
  },
  loop: true
});


// email validation
let email = document.getElementById("mail");
let text = document.getElementById("text");
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

email.addEventListener("keydown", function(){
  if (email.value.match(pattern)){
    text.innerHTML = (" ");
    email.style.color = "#000"
  } 
  else {
    text.innerHTML  = ("Please enter a valid email address");
    email.style.color = "hsl(12, 88%, 59%)"
  }
})