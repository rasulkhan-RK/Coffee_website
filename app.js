let searchBtn = document.querySelector("#search-btn");
let serachForm = document.querySelector(".serach-form");


searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle("ri-xrp-line");
    serachForm.classList.toggle("active");
});



window.onscroll = () => {
    searchBtn.classList.remove("ri-xrp-line");
    serachForm.classList.remove("active");
    cartContainer.classList.remove('active');
    nav.classList.remove('active');
}


let cartBtn = document.getElementById("cart-btn");
let cartContainer = document.querySelector(".cart-items-container");

 cartBtn.addEventListener("click", () => {
    cartContainer.classList.toggle('active');
 });


 let nav = document.querySelector(".links");
 document.querySelector("#menu-btn").onclick = () =>{
    nav.classList.toggle('active');
 };

 $(document).ready(function(){

    // $(window).scroll(function(){
    //     if($(this).scrollTop()>600){
    //         $(".header").addClass('active');
    //     }
    //     else{
    //         $('.header').removeClass('active');
    //     }
    // });

    // ScrollReveal({
    //     distance : "120px",
    //     duration : 2000,
    //     delay : 200,
    //     position: 'Relative'
    // });

    // ScrollReveal().reveal('.header .logo' ,{
    //     origin : "left"
    // });








 });

