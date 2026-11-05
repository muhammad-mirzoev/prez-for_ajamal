
const slides = document.querySelectorAll(".slide");
const counter = document.getElementById("current");
const progress = document.getElementById("progress");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentSlide = 0;

function showSlide(index) {
    currentSlide = Math.max(
        0,
        Math.min(index, slides.length - 1)
    );

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide);
    });

    counter.textContent = `0${currentSlide + 1}`;

    progress.style.width =
        `${((currentSlide + 1) / slides.length) * 100}%`;

    prev.disabled = currentSlide === 0;
    next.disabled = currentSlide === slides.length - 1;
}

next.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

prev.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "PageDown") {
        showSlide(currentSlide + 1);
    }

    if (event.key === "ArrowLeft" || event.key === "PageUp") {
        showSlide(currentSlide - 1);
    }

    if (event.key === "Home") {
        showSlide(0);
    }

    if (event.key === "End") {
        showSlide(slides.length - 1);
    }
});

showSlide(0);
