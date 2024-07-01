let currentSlider = 0;
const totalSliders = 4;

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");

function updateSlide(newIndex){
    images[currentSlider].classList.remove("active");
    currentSlider = newIndex;
    images[currentSlider].classList.add("active");

    updateIndicator(currentSlider);
}

function updateIndicator(index){
    dots.forEach((dot) => dot.style.backgroundColor = "transparent");
    dots[index].style.backgroundColor = "#8052ec";
}

function prev(){
    const newIndex = ( currentSlider -1 + totalSliders) % totalSliders;
    updateSlide(newIndex);
}

function next(){
    const newIndex = ( currentSlider + 1 ) % totalSliders;
    updateSlide(newIndex);
}

function dot(index){
    updateSlide(index);
}

updateSlide(0);
