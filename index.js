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

