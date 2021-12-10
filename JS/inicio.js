//Fade

    $('div').hide().fadeIn('3000');
    $("div").fadeIn('3000');
  

//Recomendations

$(document).ready(function(){



    $("#clickrecommendations").click(function(){

        $("#titleWines").hide();

        $("#clickrecommendations, .hideInicio").hide();
 
        const URLJSON = "../data/datos.json";

        $.getJSON(URLJSON, function(respuesta, estado){     

            if (estado === "success"){

                let misDatos = respuesta;

                for (const dato of misDatos) {   

                    $('#recommendations').hide().fadeIn('3000');
                    $("#recommendations").fadeIn('3000');

                   $ ("#recommendations").prepend(`<div>
                                                        <ul class="list-group">
                                                        <li class="list-group-item">${dato.Nombre} / ${dato.Marca}</li>                                                                                               
                                                   </div>`)
                    }
            }

            $('.changeTituloHeader').hide().fadeIn('3000');
            $(".changeTituloHeader").fadeIn('3000');             


            $ (".changeTituloHeader").text("Nuestras Recomendaciones");

            $ (".btn-group").append(`<div>
            <button id="clickrecommendations" type="button" class="btn btnRecommendations btn-dark font-weight-bold btn-lg btn-raised">Volver Inicio</button>                                                                                               
                                           </div>`);
           
            $(".btnRecommendations").css({
                                        "margin-left": "10px",
                                        "margin-right": "10px",
                                        "margin-top": "20px",
                                        "margin-bottom": "20px",
                        });


                        $ ("#recommendations").append(`<div class="container-fluid text-center imagenInicio hideInicio">	
                                <img class="mx-auto" src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Drinks Market">
                            </div>`)



                                       
             $('.btnRecommendations').click(function() {
                                        location.reload();
                        });



        });
    });

});