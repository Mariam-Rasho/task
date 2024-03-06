const icon = document.querySelectorAll(".icon");
const pathIcon = document.querySelectorAll(".icon >svg>path");
console.log(pathIcon);
console.log(icon);
const mIcon = document.getElementById("middle-icon");
console.log(mIcon);
let i = 0;
let j = 0;
setInterval(() => {
    icon[i].classList.add("bg-slate-600", "shadow-md");

    mIcon.innerHTML = icon[i].innerHTML;
    // console.log(mIcon.innerHTML);
    icon[i].childNodes[1].style.fill = "white"
    j = i;
    i = (i + 1) % icon.length;
}, 15000);
setInterval(() => {
    icon[j].classList.remove("bg-slate-600");
    icon[j].classList.add("bg-gray-300");
    icon[j].childNodes[1].style.fill = "#3B5D3E";
}, 14900);



let swiper = new Swiper(".mySwiper", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
slidesPerView:'auto',
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});