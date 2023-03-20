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

const button = document.querySelector(".button")
const button1 = document.querySelector(".button1")
const left = document.querySelector(".l")
const right = document.querySelector(".r")
const left1 = document.querySelector(".l1")
const right1 = document.querySelector(".r1")

button.addEventListener("mouseenter", function () {
    left.style = "margin-left : 0px; text-shadow:  2px 2px 20px rgba(53, 53, 53, 0);"
    right.style = "margin-right : 1px; text-shadow:  2px 2px 20px rgba(53, 53, 53, 0);"
})

button.addEventListener("mouseout", function () {
    left.style = "margin-left : -100px"
    right.style = "margin-right : -100px"
})

left.addEventListener("mouseenter", function () {
    left.style = "margin-left : 0px; text-shadow:  2px 2px 20px rgba(53, 53, 53, 0);"
    right.style = "margin-right : 1px; text-shadow:  2px 2px 20px rgba(53, 53, 53, 0);"
})

left.addEventListener("mouseout", function () {
    left.style = "margin-left : -100px"
    right.style = "margin-right : -100px"
})

right.addEventListener("mouseenter", function () {
    left.style = "margin-left : 0px; text-shadow:  2px 2px 20px rgba(53, 53, 53, 0);"
    right.style = "margin-right : 1px; text-shadow:  2px 2px 20px rgba(53, 53, 53, 0);"
})

right.addEventListener("mouseout", function () {
    left.style = "margin-left : -100px"
    right.style = "margin-right : -100px"
})


// haha
button1.addEventListener("mouseenter", function () {
    left1.style = "margin-left : 0px; text-shadow:  2px 2px 20px rgba(53, 53, 53, 0);"
    right1.style = "margin-right : 1px; text-shadow:  2px 2px 20px rgba(53, 53, 53, 0);"
})

button1.addEventListener("mouseout", function () {
    left1.style = "margin-left : -100px"
    right1.style = "margin-right : -100px"
})

left1.addEventListener("mouseenter", function () {
    left1.style = "margin-left : 0px; text-shadow:  2px 2px 20px rgba(53, 53, 53, 0);"
    right1.style = "margin-right : 1px; text-shadow:  2px 2px 20px rgba(53, 53, 53, 0);"
})

left1.addEventListener("mouseout", function () {
    left1.style = "margin-left : -100px"
    right1.style = "margin-right : -100px"
})

right.addEventListener("mouseenter", function () {
    left1.style = "margin-left : 0px; text-shadow:  2px 2px 20px rgba(53, 53, 53, 0);"
    right1.style = "margin-right : 1px; text-shadow:  2px 2px 20px rgba(53, 53, 53, 0);"
})

right.addEventListener("mouseout", function () {
    left1.style = "margin-left : -100px"
    right1.style = "margin-right : -100px"
})