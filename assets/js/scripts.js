// Boton enviar mensaje contacto

const boton = document.getElementById("boton-contacto")

boton.addEventListener('click', function(event){
    event.preventDefault();

    const input1 = document.getElementById("validationCustom01").value
    const input2 = document.getElementById("validationCustom02").value
    const input3 = document.getElementById("validationCustom03").value
    const input4 = document.getElementById("validationCustom04").value
    const input5 = document.getElementById("mensaje-contacto").value
    const inputemail = document.getElementById("validationCustomUsername").value

    const msjval1 = document.getElementById("msjvalidation1")
    const msjval2 = document.getElementById("msjvalidation2")
    const msjval3 = document.getElementById("msjvalidation3")
    const msjval4 = document.getElementById("msjvalidation4")
    const msjval5 = document.getElementById("msjvalidation5")
    const msjvalemail = document.getElementById("msjvalidationemail")

    function validar(input, msjval){
        if(input == ""){
            msjval.innerHTML = "<p style= 'color: red;'> Malo </p>";
            return false;
        }
        else{
            msjval.innerHTML = "<p style= 'color: green;'> Bueno </p>";
            return true;
        }

    }

    const val1 = validar(input1, msjval1)
    const val2 =validar(input2, msjval2)
    const val3 =validar(input3, msjval3)
    const val4 =validar(input4, msjval4)
    const val5 =validar(input5, msjval5)
    const val6 =validar(inputemail, msjvalemail)

    if (val1 && val2 && val3 && val4 && val5 && val6){
        alert("Mensaje Enviado")
    } 
    else{
        alert("No se pudo enviar el formulario")
    }
    

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
