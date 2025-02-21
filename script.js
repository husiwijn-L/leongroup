const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".sl"); 
const l = document.querySelector(".l");
const r = document.querySelector(".r");
const textSlides = document.querySelectorAll(".slide"); 

let point = 0;

function testSlid() {
    slider.style.transform = `translateX(-${point * 100}%)`; 
    updateTextSlide(); 
}

function updateTextSlide() {
    textSlides.forEach(slide => slide.classList.remove("current-slide"));

    textSlides[point].classList.add("current-slide");
}


r.addEventListener("click", () => {
    if (point < slides.length - 1) {
        point++;
    } else {
        point = 0;
    }
    testSlid();
});

l.addEventListener("click", () => {
    if (point > 0) {
        point--;
    } else {
        point = slides.length - 1;
    }
    testSlid();
});

updateTextSlide();