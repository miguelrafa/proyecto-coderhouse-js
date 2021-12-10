//Fade
    $('div').hide().fadeIn('3000');
    $("div").fadeIn('3000');


//Verificacion de Edad


let ageFormIndex = document.getElementById("ageForm");

ageFormIndex.addEventListener("submit", ageValidation);

function ageValidation(e) {
    e.preventDefault();
    let age = document.getElementById("age").value;

        if (age >= 18) {

            window.location.href = "./pages/inicio.html";


            }else{

                window.location.href = "./pages/agecontrol.html";


        }
 console.log(age)
}