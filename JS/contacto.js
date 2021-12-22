//Fade
$('div').hide().fadeIn('3000');
$("div").fadeIn('3000');

//Contacto

$(document).ready(function(){



    $("#clickContact").click(function(){

        $("#hideform").hide();

        $(".hideContactImage").hide();

        $('.changeTituloHeader').hide().fadeIn('3000');
        $(".changeTituloHeader").fadeIn('3000'); 

        $ (".changeTituloHeader").text("Muchas Gracias");

        $('.contactForm').hide().fadeIn('3000');
        $(".contactForm").fadeIn('3000'); 

        $ (".contactForm").append(`<div class="container-fluid text-center imagenInicio hideInicio">	
        <img class="mx-auto" src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="Drinks Market">
        </div>`)
 
       

        


                                       
            



        
    });

});