$('.logo-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
});

$('.slider-kategori').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite:true
});


const checkme = document.querySelector("#checkme")
const logoSlider = document.querySelector("#logo-slider")
const alllogo = document.querySelector("#all-logo")
const kontainer = document.querySelector("#kontainer")

checkme.addEventListener("click", function () {
    if (logoSlider.style.display === "block") {
        logoSlider.style.display = "block";
        alllogo.style.visibility = "hidden";
        kontainer.style.height = "100%";
        kontainer.style.width = "100%";
    } else {
        logoSlider.style.display = "none";
        alllogo.style.visibility = "visible";
        kontainer.style.height = "100%";
        kontainer.style.width = "100%";

    }
})

$(document).ready(function() {
	$(".bg-loader").hide();
})



const post = document.querySelector('div');

function myFunction(x) {
    if (x.matches) { // If media query matches
        div.removeClass('');
     } else {
        div.removeClass('row');
    }
}
          
var x = window.matchMedia("(max-width: 900px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes