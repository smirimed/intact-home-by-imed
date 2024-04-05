let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
let filter =document.querySelector(".filter")

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
    filter.classList.toggle("filtred");
    
    

});

window.onscroll = () => {
    navbar.classList.remove("active");
    filter.classList.remove("filtred");

};

let paragraphe = document.querySelector(".paragraph");
let button = document.querySelector(".toggle-button");
button.addEventListener("click",function () {
    paragraphe.classList.toggle("hide")
  })
let paragraphe1 = document.querySelector(".paragraph1");
let button1 = document.querySelector(".toggle-button1");
button1.addEventListener("click",function () {
    paragraphe1.classList.toggle("hide")
  })
let paragraphe2 = document.querySelector(".paragraph2");
let button2 = document.querySelector(".toggle-button2");
button2.addEventListener("click",function () {
    paragraphe2.classList.toggle("hide")
  })
