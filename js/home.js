$('.logo-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
});

const checkme = document.querySelector("#checkme")
const logoSlider = document.querySelector("#logo-slider")
const alllogo = document.querySelector("#all-logo")
const kontainer = document.querySelector("#kontainer")

checkme.addEventListener("click", function () {
    if (logoSlider.style.display === "block") {
        logoSlider.style.display = "block";
        alllogo.style.visibility = "hidden";
        kontainer.style.height = "200px";
        kontainer.style.width = "800px";
    } else {
        logoSlider.style.display = "none";
        alllogo.style.visibility = "visible";
        kontainer.style.height = "550px";
        kontainer.style.width = "1000px";

    }
})

