// Boton enviar mensaje contacto

const boton = document.getElementById("boton-contacto")

boton.addEventListener('click', function(event){
    event.preventDefault();

    
})



const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const indicators = document.querySelectorAll(".indicator");
let currentIndex = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    indicators.forEach(i => i.classList.remove("active"));
    indicators[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
    });
});
