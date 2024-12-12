const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slider-item");
const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const paginationCircles = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function changeSlide(index) {
    hideSlide();
    removeActiveClass();
    currentSlideIndex = index;
    addActiveClass();
    showSlide();
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide() {
    slides[currentSlideIndex].classList.add("block");
}

function hideSlide() {
    slides[currentSlideIndex].classList.remove("block");
}

function nextSlide() {
    hideSlide();
    removeActiveClass();
    currentSlideIndex++;
    if (currentSlideIndex > slides.length - 1) {
        currentSlideIndex = 0;
    }
    addActiveClass();
    showSlide();
}

function prevSlide() {
    hideSlide();
    removeActiveClass();
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    addActiveClass();
    showSlide();
}

arrowRight.addEventListener("click", nextSlide);
arrowLeft.addEventListener("click", prevSlide);

addPagination();
showSlide();
addActiveClass();
