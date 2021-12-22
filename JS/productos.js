//Declaracion variables


let responseTotal
let discount
let responseTotalDiscount
const tituloResumenCompra = 'Resumen Compra'
let resumeTotalArray = []
let totalArray = []

//Fade JQUery

$('div').hide().fadeIn('3000');
$("div").fadeIn('3000');


//Titulo Resumen Compra        

$("#resumenCompra").append(`<div>${tituloResumenCompra}</div>`);


//Funciones

//Funcion Suma

function sumTotal(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20) {

    return (t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9 + t10 + t11 + t12 + t13 + t14 + t15 + t16 + t17 + t18 + t19 + t20)

};


//Funcion Total Producto

function totalProd(quantity, product) {

    return (quantity * product)

};

//Funcion Descuento

function discountFunc(tot) {

    return (parseFloat(tot * 0.90))

};

//Function Resumen Fixed

$.fn.ResumenFixed = function(){
    
    $("#resumenFixed").append(`<li>${textnode}</li>`)

        $(".resumenCompraFixed").css({
                "position": "fixed",
                "min-width": "175px",
                "min-height": "75px",
                "background-color": "rgb(65, 212, 122)",
                "top": "14%",
                "right": "2.5%", 
                "z-index": "100000",
                "font-family": "Mulish, sans-serif",
                "justify-content": "center", 
                "align-items": "center",
                "border-radius": "5px",
                "box-shadow": "2px 2px 8px  1px rgba(0,0,0,0.35)"
            });

        $("#buyListFinal").append(`<li>${textnode}</li>`);        

}

//Function Resumen Total Discount

$.fn.ResponseTotalDiscount = function(){

        $(".resumenCompraFixed").css({
            "position": "fixed",
            "min-width": "175px",
            "min-height": "75px",
            "background-color": "rgb(65, 212, 122)",
            "top": "14%",
            "right": "2.5%", 
            "z-index": "100000",
            "display": "none",
            "font-family": "Mulish, sans-serif",
            "justify-content": "center", 
            "align-items": "center",
            "border-radius": "5px",
            "box-shadow": "2px 2px 8px  1px rgba(0,0,0,0.35)"
        });

        $ ("#buyList").append(`<div id="response">${responseTotalDiscount}</div>`);

        $ ("#buyList").append(`<div class="btn-group btn-final" role="group" aria-label="Response Total Discount">
        <button id="finalConfirmation" type="button" class="btn btn-final-group btn-dark font-weight-bold btn-lg btn-raised">Comprar</button>
        <button id="reload" type="button" class="btn btn-final-group btn-dark font-weight-bold btn-lg btn-raised">Cancelar</button>
        </div>`);

        $(".btn-final").css({
            "padding-top": "20px",
        });

        $(".btn-final-group").css({
            "margin-left": "10px",
            "margin-right": "10px",
        });

        $('#reload').click(function() {
            location.reload();
            sessionStorage.clear();
            
        });

    //Confirmacion Final

    $('#finalConfirmation').click(function() {

        $('#buyList').hide().fadeIn('5000');
        $("#buyList").fadeIn('5000');

        $( "#response" ).replaceWith( "<div>Muchas gracias!</div>" );

        $( ".finalText" ).replaceWith( "<h2>Drinks Market</h2>" );

        $(".btn-group").hide();

        $ ("#buyList").append(`<div id="confirmacionProcesado" class="confirmacionProcesado"><h4>Tu compra ha sido procesada con exito</h4></div>
        <div class="btn-group btn-final" role="group" aria-label="Response Total">            
        <button id="exit" type="button" class="btn btn-final-group btn-dark font-weight-bold btn-lg btn-raised">Salir</button>
        </div>`);

        $(".confirmacionProcesado").css({
            "margin-top": "20px",
            "margin-bottom": "20px",
            "padding-top": "10px",
            "padding-bottom": "10px",
            "background-color": "rgb(255, 217, 0)",
        });


        $('#exit').click(function() {

            location.reload();
            sessionStorage.clear();

        });

    });

};

//Function Resumen Total

$.fn.ResponseTotal = function(){

        $(".resumenCompraFixed").css({
            "position": "fixed",
            "min-width": "175px",
            "min-height": "75px",
            "background-color": "rgb(65, 212, 122)",
            "top": "14%",
            "right": "2.5%", 
            "z-index": "100000",
            "display": "none",
            "font-family": "Mulish, sans-serif",
            "justify-content": "center", 
            "align-items": "center",
            "border-radius": "5px",
            "box-shadow": "2px 2px 8px  1px rgba(0,0,0,0.35)"
        });

        $ ("#buyList").append(`<div id="response">${responseTotal}</div>`);

        $ ("#buyList").append(`<div class="btn-group btn-final" role="group" aria-label="Response Total">
        <button id="finalConfirmation" type="button" class="btn btn-final-group btn-dark font-weight-bold btn-lg btn-raised">Comprar</button>
        <button id="reload" type="button" class="btn btn-final-group btn-dark font-weight-bold btn-lg btn-raised">Cancelar</button>
        </div>`);

        $(".btn-final").css({
            "padding-top": "20px",
        });

        $(".btn-final-group").css({
            "margin-left": "10px",
            "margin-right": "10px",
        });

        $('#reload').click(function() {
            location.reload();
            sessionStorage.clear();
       
        });

        //Confirmacion Final

        $('#finalConfirmation').click(function() {

            $('#buyList').hide().fadeIn('5000');
            $("#buyList").fadeIn('5000');

            $( "#response" ).replaceWith( "<div>Muchas gracias!</div>" );

            $(".btn-group").hide();



            $ ("#buyList").append(`<div id="confirmacionProcesado" class="confirmacionProcesado"><h4>Tu compra ha sido procesada con exito</h4></div>
            <div class="btn-group btn-final" role="group" aria-label="Response Total">            
            <button id="exit" type="button" class="btn btn-final-group btn-dark font-weight-bold btn-lg btn-raised">Salir</button>
            </div>`);


            $(".confirmacionProcesado").css({
                "margin-top": "20px",
                "margin-bottom": "20px",
                "padding-top": "10px",
                "padding-bottom": "10px",
                "background-color": "rgb(255, 217, 0)",
            });


            $('#exit').click(function() {

                location.reload();
                sessionStorage.clear();

            });
       
        });

};





//Clase Producto Bebidas

class ProductBebidas {
        constructor(tipo, precio, cantidad, idproducto) {
        this.tipo = tipo;
        this.precio = precio;
        this.cantidad = cantidad;
        this.idproducto = idproducto;
        }

};

const prodBebidas1 = new ProductBebidas("Red Bull", 100, 0, "prod1");
const prodBebidas2 = new ProductBebidas("Monster", 100, 0, "prod2");
const prodBebidas3 = new ProductBebidas("Fusion", 100, 0, "prod3");
const prodBebidas4 = new ProductBebidas("Red Bull Tropical", 100, 0, "prod4");
const prodBebidas5 = new ProductBebidas("Casillero del Diablo - Chardonnay", 200, 0, "prod5");
const prodBebidas6 = new ProductBebidas("Concha y Toro - Tinto Merlot", 200, 0, "prod6");
const prodBebidas7 = new ProductBebidas("Santa Elena - Chardonnay", 200, 0, "prod7");
const prodBebidas8 = new ProductBebidas("Santa Elena - Tinto Merlot", 200, 0, "prod8");
const prodBebidas9 = new ProductBebidas("Heineken", 300, 0, "prod9");
const prodBebidas10 = new ProductBebidas("Corona", 300, 0, "prod10");
const prodBebidas11 = new ProductBebidas("Stella Artois", 300, 0, "prod11");
const prodBebidas12 = new ProductBebidas("Sol", 300, 0, "prod12");
const prodBebidas13 = new ProductBebidas("Chandon Brute", 400, 0, "prod13");
const prodBebidas14 = new ProductBebidas("Chandon Rose", 400, 0, "prod14");
const prodBebidas15 = new ProductBebidas("Mumm", 400, 0, "prod15");
const prodBebidas16 = new ProductBebidas("Veuve Clicquot", 400, 0, "prod16");
const prodBebidas17 = new ProductBebidas("Coca Cola", 50, 0, "prod17");
const prodBebidas18 = new ProductBebidas("Pepsi", 50, 0, "prod18");
const prodBebidas19 = new ProductBebidas("Schweppes", 50, 0, "prod19");
const prodBebidas20 = new ProductBebidas("Sprite", 50, 0, "prod20");




//Productos


//Producto1

$(document).ready(function(){

    $("#prod1").submit(function(e){
        e.preventDefault();
   
    prodBebidas1.cantidad = $("#cant1").val();

    let totalProd1 = totalProd(prodBebidas1.cantidad, prodBebidas1.precio);

    console.log(`${prodBebidas1.tipo}: Cantidad: ${prodBebidas1.cantidad} Total: \$${totalProd1}`)

    sessionStorage.setItem(prodBebidas1.idproducto, `${prodBebidas1.tipo}: Cantidad: ${prodBebidas1.cantidad} Total: \$${totalProd1}`);

    //Resumen compra Product1

    if (totalProd1 > 0){

        textnode = prodBebidas1.tipo + ":  Cantidad: " + prodBebidas1.cantidad + " Total: $" + totalProd1;
        
        $.fn.ResumenFixed();

    }
   
    //Prod1 en JSON

    let totalProd1Json = JSON.stringify(totalProd1);

    sessionStorage.setItem("TotalProducto1", totalProd1Json);    

    });

});


//Producto2

$(document).ready(function(){

    $("#prod2").submit(function(e){
        e.preventDefault();
   
    prodBebidas2.cantidad = $("#cant2").val();

    let totalProd2 = totalProd(prodBebidas2.cantidad, prodBebidas2.precio);

    console.log(`${prodBebidas2.tipo}: Cantidad: ${prodBebidas2.cantidad} Total: \$${totalProd2}`)

    sessionStorage.setItem(prodBebidas2.idproducto, `${prodBebidas2.tipo}: Cantidad: ${prodBebidas2.cantidad} Total: \$${totalProd2}`);

    //Resumen compra Product2
    
    if (totalProd2 > 0){

        
        textnode = prodBebidas2.tipo + ":  Cantidad: " + prodBebidas2.cantidad + " Total: $" + totalProd2;        
        
        $.fn.ResumenFixed();

    }

    //Prod2 en JSON

    let totalProd2Json = JSON.stringify(totalProd2);

    sessionStorage.setItem("TotalProducto2", totalProd2Json);    

    });

});


//Product3

$(document).ready(function(){

    $("#prod3").submit(function(e){
        e.preventDefault();
   
    prodBebidas3.cantidad = $("#cant3").val();

    let totalProd3 = totalProd(prodBebidas3.cantidad, prodBebidas3.precio);

    console.log(`${prodBebidas3.tipo}: Cantidad: ${prodBebidas3.cantidad} Total: \$${totalProd3}`)

    sessionStorage.setItem(prodBebidas3.idproducto, `${prodBebidas3.tipo}: Cantidad: ${prodBebidas3.cantidad} Total: \$${totalProd3}`);

    //Resumen compra Product3

    if (totalProd3 > 0){

        textnode = prodBebidas3.tipo + ":  Cantidad: " + prodBebidas3.cantidad + " Total: $" + totalProd3;
        
        $.fn.ResumenFixed();

    }


    //Prod3 en JSON

    let totalProd3Json = JSON.stringify(totalProd3);

    sessionStorage.setItem("TotalProducto3", totalProd3Json);
  
    });

});


//Product4

$(document).ready(function(){

    $("#prod4").submit(function(e){
        e.preventDefault();
   
    prodBebidas4.cantidad = $("#cant4").val();

    let totalProd4 = totalProd(prodBebidas4.cantidad, prodBebidas4.precio);

    console.log(`${prodBebidas4.tipo}: Cantidad: ${prodBebidas4.cantidad} Total: \$${totalProd4}`)

    sessionStorage.setItem(prodBebidas4.idproducto, `${prodBebidas4.tipo}: Cantidad: ${prodBebidas4.cantidad} Total: \$${totalProd4}`);

    //Resumen compra Product4

    if (totalProd4 > 0){

        textnode = prodBebidas4.tipo + ":  Cantidad: " + prodBebidas4.cantidad + " Total: $" + totalProd4;
        
        $.fn.ResumenFixed();

    }

    //Prod4 en JSON

    let totalProd4Json = JSON.stringify(totalProd4);

    sessionStorage.setItem("TotalProducto4", totalProd4Json);

    });

});


//Product5

$(document).ready(function(){

    $("#prod5").submit(function(e){
        e.preventDefault();
   
    prodBebidas5.cantidad = $("#cant5").val();

    let totalProd5 = totalProd(prodBebidas5.cantidad, prodBebidas5.precio);

    console.log(`${prodBebidas5.tipo}: Cantidad: ${prodBebidas5.cantidad} Total: \$${totalProd5}`)

    sessionStorage.setItem(prodBebidas5.idproducto, `${prodBebidas5.tipo}: Cantidad: ${prodBebidas5.cantidad} Total: \$${totalProd5}`);

    
    //Resumen compra Product5

    if (totalProd5 > 0){

        textnode = prodBebidas5.tipo + ":  Cantidad: " + prodBebidas5.cantidad + " Total: $" + totalProd5;
        
        $.fn.ResumenFixed();

    }

    //Prod5 en JSON

    let totalProd5Json = JSON.stringify(totalProd5);

    sessionStorage.setItem("TotalProducto5", totalProd5Json);   

    });

});

//Product6

$(document).ready(function(){

    $("#prod6").submit(function(e){
        e.preventDefault();
   
    prodBebidas6.cantidad = $("#cant6").val();

    let totalProd6 = totalProd(prodBebidas6.cantidad, prodBebidas6.precio);

    console.log(`${prodBebidas6.tipo}: Cantidad: ${prodBebidas6.cantidad} Total: \$${totalProd6}`)

    sessionStorage.setItem(prodBebidas6.idproducto, `${prodBebidas6.tipo}: Cantidad: ${prodBebidas6.cantidad} Total: \$${totalProd6}`);
    
    //Resumen compra Product6

    if (totalProd6 > 0){

        textnode = prodBebidas6.tipo + ":  Cantidad: " + prodBebidas6.cantidad + " Total: $" + totalProd6;
        
        $.fn.ResumenFixed();

    }

    //Prod6 en JSON

    let totalProd6Json = JSON.stringify(totalProd6);

    sessionStorage.setItem("TotalProducto6", totalProd6Json);   

    });

});


//Product7

$(document).ready(function(){

    $("#prod7").submit(function(e){
        e.preventDefault();
   
    prodBebidas7.cantidad = $("#cant7").val();

    let totalProd7 = totalProd(prodBebidas7.cantidad, prodBebidas7.precio);

    console.log(`${prodBebidas7.tipo}: Cantidad: ${prodBebidas7.cantidad} Total: \$${totalProd7}`)

    sessionStorage.setItem(prodBebidas7.idproducto, `${prodBebidas7.tipo}: Cantidad: ${prodBebidas7.cantidad} Total: \$${totalProd7}`);
    
    
    //Resumen compra Product7

    if (totalProd7 > 0){

        textnode = prodBebidas7.tipo + ":  Cantidad: " + prodBebidas7.cantidad + " Total: $" + totalProd7;
        
        $.fn.ResumenFixed();

    }

    //Prod7 en JSON

    let totalProd7Json = JSON.stringify(totalProd7);

    sessionStorage.setItem("TotalProducto7", totalProd7Json);
   
    });

});


//Product8

$(document).ready(function(){

    $("#prod8").submit(function(e){
        e.preventDefault();
   
    prodBebidas8.cantidad = $("#cant8").val();

    let totalProd8 = totalProd(prodBebidas8.cantidad, prodBebidas8.precio);

    console.log(`${prodBebidas8.tipo}: Cantidad: ${prodBebidas8.cantidad} Total: \$${totalProd8}`)

    sessionStorage.setItem(prodBebidas8.idproducto, `${prodBebidas8.tipo}: Cantidad: ${prodBebidas8.cantidad} Total: \$${totalProd8}`);

    
    //Resumen compra Product8

    if (totalProd8 > 0){

        textnode = prodBebidas8.tipo + ":  Cantidad: " + prodBebidas8.cantidad + " Total: $" + totalProd8;
        
        $.fn.ResumenFixed();

    }

    //Prod8 en JSON

    let totalProd8Json = JSON.stringify(totalProd8);

    sessionStorage.setItem("TotalProducto8", totalProd8Json);    

    });

});


//Product9

$(document).ready(function(){

    $("#prod9").submit(function(e){
        e.preventDefault();
   
    prodBebidas9.cantidad = $("#cant9").val();

    let totalProd9 = totalProd(prodBebidas9.cantidad, prodBebidas9.precio);

    console.log(`${prodBebidas9.tipo}: Cantidad: ${prodBebidas9.cantidad} Total: \$${totalProd9}`)

    sessionStorage.setItem(prodBebidas9.idproducto, `${prodBebidas9.tipo}: Cantidad: ${prodBebidas9.cantidad} Total: \$${totalProd9}`);

    
    //Resumen compra Product9

    if (totalProd9 > 0){

        textnode = prodBebidas9.tipo + ":  Cantidad: " + prodBebidas9.cantidad + " Total: $" + totalProd9;
        
        $.fn.ResumenFixed();

    }

    //Prod9 en JSON

    let totalProd9Json = JSON.stringify(totalProd9);

    sessionStorage.setItem("TotalProducto9", totalProd9Json);  

    });

});


//Product10

$(document).ready(function(){

    $("#prod10").submit(function(e){
        e.preventDefault();
   
    prodBebidas10.cantidad = $("#cant10").val();

    let totalProd10 = totalProd(prodBebidas10.cantidad, prodBebidas10.precio);

    console.log(`${prodBebidas10.tipo}: Cantidad: ${prodBebidas10.cantidad} Total: \$${totalProd10}`)

    sessionStorage.setItem(prodBebidas10.idproducto, `${prodBebidas10.tipo}: Cantidad: ${prodBebidas10.cantidad} Total: \$${totalProd10}`);
    
    //Resumen compra Product10

    if (totalProd10 > 0){

        textnode = prodBebidas10.tipo + ":  Cantidad: " + prodBebidas10.cantidad + " Total: $" + totalProd10;
        
        $.fn.ResumenFixed();

    }

    //Prod10 en JSON

    let totalProd10Json = JSON.stringify(totalProd10);

    sessionStorage.setItem("TotalProducto10", totalProd10Json);  

    });

});


//Product11

$(document).ready(function(){

    $("#prod11").submit(function(e){
        e.preventDefault();
   
    prodBebidas11.cantidad = $("#cant11").val();

    let totalProd11 = totalProd(prodBebidas11.cantidad, prodBebidas11.precio);

    console.log(`${prodBebidas11.tipo}: Cantidad: ${prodBebidas11.cantidad} Total: \$${totalProd11}`)

    sessionStorage.setItem(prodBebidas11.idproducto, `${prodBebidas11.tipo}: Cantidad: ${prodBebidas11.cantidad} Total: \$${totalProd11}`);

    
    //Resumen compra Product11

    if (totalProd11 > 0){

        textnode = prodBebidas11.tipo + ":  Cantidad: " + prodBebidas11.cantidad + " Total: $" + totalProd11;
        
        $.fn.ResumenFixed();

    }

    //Prod11 en JSON

    let totalProd11Json = JSON.stringify(totalProd11);

    sessionStorage.setItem("TotalProducto11", totalProd11Json);   

    });

});


//Product12

$(document).ready(function(){

    $("#prod12").submit(function(e){
        e.preventDefault();
   
    prodBebidas12.cantidad = $("#cant12").val();

    let totalProd12 = totalProd(prodBebidas12.cantidad, prodBebidas12.precio);

    console.log(`${prodBebidas12.tipo}: Cantidad: ${prodBebidas12.cantidad} Total: \$${totalProd12}`)

    sessionStorage.setItem(prodBebidas12.idproducto, `${prodBebidas12.tipo}: Cantidad: ${prodBebidas12.cantidad} Total: \$${totalProd12}`);

    
    //Resumen compra Product12

    if (totalProd12 > 0){

        textnode = prodBebidas12.tipo + ":  Cantidad: " + prodBebidas12.cantidad + " Total: $" + totalProd12;
        
        $.fn.ResumenFixed();

    }

    //Prod12 en JSON

    let totalProd12Json = JSON.stringify(totalProd12);

    sessionStorage.setItem("TotalProducto12", totalProd12Json);   

    });

});


//Product13


$(document).ready(function(){

    $("#prod13").submit(function(e){
        e.preventDefault();
   
    prodBebidas13.cantidad = $("#cant13").val();

    let totalProd13 = totalProd(prodBebidas13.cantidad, prodBebidas13.precio);

    console.log(`${prodBebidas13.tipo}: Cantidad: ${prodBebidas13.cantidad} Total: \$${totalProd13}`)

    sessionStorage.setItem(prodBebidas13.idproducto, `${prodBebidas13.tipo}: Cantidad: ${prodBebidas13.cantidad} Total: \$${totalProd13}`);

    
    //Resumen compra Product13

    if (totalProd13 > 0){

        textnode = prodBebidas13.tipo + ":  Cantidad: " + prodBebidas13.cantidad + " Total: $" + totalProd13;
        
        $.fn.ResumenFixed();

    }

    //Prod13 en JSON

    let totalProd13Json = JSON.stringify(totalProd13);

    sessionStorage.setItem("TotalProducto13", totalProd13Json);    

    });

});


//Product14


$(document).ready(function(){

    $("#prod14").submit(function(e){
        e.preventDefault();
   
    prodBebidas14.cantidad = $("#cant14").val();

    let totalProd14 = totalProd(prodBebidas14.cantidad, prodBebidas14.precio);

    console.log(`${prodBebidas14.tipo}: Cantidad: ${prodBebidas14.cantidad} Total: \$${totalProd14}`)

    sessionStorage.setItem(prodBebidas14.idproducto, `${prodBebidas14.tipo}: Cantidad: ${prodBebidas14.cantidad} Total: \$${totalProd14}`);

    
    //Resumen compra Product14

    if (totalProd14 > 0){

        textnode = prodBebidas14.tipo + ":  Cantidad: " + prodBebidas14.cantidad + " Total: $" + totalProd14;
        
        $.fn.ResumenFixed();

    }

    //Prod14 en JSON

    let totalProd14Json = JSON.stringify(totalProd14);

    sessionStorage.setItem("TotalProducto14", totalProd14Json);

    });

});


//Product15


$(document).ready(function(){

    $("#prod15").submit(function(e){
        e.preventDefault();
   
    prodBebidas15.cantidad = $("#cant15").val();

    let totalProd15 = totalProd(prodBebidas15.cantidad, prodBebidas15.precio);

    console.log(`${prodBebidas15.tipo}: Cantidad: ${prodBebidas15.cantidad} Total: \$${totalProd15}`)

    sessionStorage.setItem(prodBebidas15.idproducto, `${prodBebidas15.tipo}: Cantidad: ${prodBebidas15.cantidad} Total: \$${totalProd15}`);

    
    
    //Resumen compra Product15

    if (totalProd15 > 0){

        textnode = prodBebidas15.tipo + ":  Cantidad: " + prodBebidas15.cantidad + " Total: $" + totalProd15;
        
        $.fn.ResumenFixed();

    }

    //Prod15 en JSON

    let totalProd15Json = JSON.stringify(totalProd15);

    sessionStorage.setItem("TotalProducto15", totalProd15Json);

  
    });

});




//Product16


$(document).ready(function(){

    $("#prod16").submit(function(e){
        e.preventDefault();
   
    prodBebidas16.cantidad = $("#cant16").val();

    let totalProd16 = totalProd(prodBebidas16.cantidad, prodBebidas16.precio);

    console.log(`${prodBebidas16.tipo}: Cantidad: ${prodBebidas16.cantidad} Total: \$${totalProd16}`)

    sessionStorage.setItem(prodBebidas16.idproducto, `${prodBebidas16.tipo}: Cantidad: ${prodBebidas16.cantidad} Total: \$${totalProd16}`);

    
    
    //Resumen compra Product16

    if (totalProd16 > 0){

        textnode = prodBebidas16.tipo + ":  Cantidad: " + prodBebidas16.cantidad + " Total: $" + totalProd16;
        
        $.fn.ResumenFixed();

    }

    //Prod16 en JSON

    let totalProd16Json = JSON.stringify(totalProd16);

    sessionStorage.setItem("TotalProducto16", totalProd16Json);   


    });

});


//Product17

$(document).ready(function(){

    $("#prod17").submit(function(e){
        e.preventDefault();
   
    prodBebidas17.cantidad = $("#cant17").val();

    let totalProd17 = totalProd(prodBebidas17.cantidad, prodBebidas17.precio);

    console.log(`${prodBebidas17.tipo}: Cantidad: ${prodBebidas17.cantidad} Total: \$${totalProd17}`)

    sessionStorage.setItem(prodBebidas17.idproducto, `${prodBebidas17.tipo}: Cantidad: ${prodBebidas17.cantidad} Total: \$${totalProd17}`);
    
    
    //Resumen compra Product17

    if (totalProd17 > 0){

        textnode = prodBebidas17.tipo + ":  Cantidad: " + prodBebidas17.cantidad + " Total: $" + totalProd17;
        
        $.fn.ResumenFixed();

    }

    //Prod17 en JSON

    let totalProd17Json = JSON.stringify(totalProd17);

    sessionStorage.setItem("TotalProducto17", totalProd17Json);    


    });

});


//Product18


$(document).ready(function(){

    $("#prod18").submit(function(e){
        e.preventDefault();
   
        prodBebidas18.cantidad = $("#cant18").val();

    let totalProd18 = totalProd(prodBebidas18.cantidad, prodBebidas18.precio);

    console.log(`${prodBebidas18.tipo}: Cantidad: ${prodBebidas18.cantidad} Total: \$${totalProd18}`)

    sessionStorage.setItem(prodBebidas18.idproducto, `${prodBebidas18.tipo}: Cantidad: ${prodBebidas18.cantidad} Total: \$${totalProd18}`);
    
    //Resumen compra Product18

    if (totalProd18 > 0){
       
        textnode = prodBebidas18.tipo + ":  Cantidad: " + prodBebidas18.cantidad + " Total: $" + totalProd18;

        $.fn.ResumenFixed();

    }

    //Prod18 en JSON

    let totalProd18Json = JSON.stringify(totalProd18);

    sessionStorage.setItem("TotalProducto18", totalProd18Json);
   
    });

});



//Product19


$(document).ready(function(){

    $("#prod19").submit(function(e){
        e.preventDefault();
   
        prodBebidas19.cantidad = $("#cant19").val();

    let totalProd19 = totalProd(prodBebidas19.cantidad, prodBebidas19.precio);

    console.log(`${prodBebidas19.tipo}: Cantidad: ${prodBebidas19.cantidad} Total: \$${totalProd19}`)

    sessionStorage.setItem(prodBebidas19.idproducto, `${prodBebidas19.tipo}: Cantidad: ${prodBebidas19.cantidad} Total: \$${totalProd19}`);  
       
    //Resumen compra Product19

    if (totalProd19 > 0){

        textnode = prodBebidas19.tipo + ":  Cantidad: " + prodBebidas19.cantidad + " Total: $" + totalProd19;

        $.fn.ResumenFixed();

    }


    //Prod19 en JSON

    let totalProd19Json = JSON.stringify(totalProd19);

    sessionStorage.setItem("TotalProducto19", totalProd19Json);    

    });

});


//Product20


$(document).ready(function(){

$("#prod20").submit(function(e){
    e.preventDefault();

    prodBebidas20.cantidad = $("#cant20").val();

    let totalProd20 = totalProd(prodBebidas20.cantidad, prodBebidas20.precio);

    console.log(`${prodBebidas20.tipo}: Cantidad: ${prodBebidas20.cantidad} Total: \$${totalProd20}`)

    sessionStorage.setItem(prodBebidas20.idproducto, `${prodBebidas20.tipo}: Cantidad: ${prodBebidas20.cantidad} Total: \$${totalProd20}`);  
    
    //Resumen compra Product20

    if (totalProd20 > 0){

        textnode = prodBebidas20.tipo + ":  Cantidad: " + prodBebidas20.cantidad + " Total: $" + totalProd20;
       
        $.fn.ResumenFixed();
    
    }

    //Prod20 en JSON

    let totalProd20Json = JSON.stringify(totalProd20);

    sessionStorage.setItem("TotalProducto20", totalProd20Json); 


    });

});


//Total Boton Compra


$(document).ready(function(){
    $("#irCarrito, #shopCart, #shopCartText").click(function(){

    $("#irCarrito").hide();

    $(".hideFinal").hide();

    $( ".finalText" ).replaceWith( "<h2>Drinks Market</h2>" );   
    
            let totalProd1 = JSON.parse(sessionStorage.getItem("TotalProducto1"));

            let totalProd2 = JSON.parse(sessionStorage.getItem("TotalProducto2"));

            let totalProd3 = JSON.parse(sessionStorage.getItem("TotalProducto3"));

            let totalProd4 = JSON.parse(sessionStorage.getItem("TotalProducto4"));

            let totalProd5 = JSON.parse(sessionStorage.getItem("TotalProducto5"));

            let totalProd6 = JSON.parse(sessionStorage.getItem("TotalProducto6"));

            let totalProd7 = JSON.parse(sessionStorage.getItem("TotalProducto7"));

            let totalProd8 = JSON.parse(sessionStorage.getItem("TotalProducto8"));

            let totalProd9 = JSON.parse(sessionStorage.getItem("TotalProducto9"));

            let totalProd10 = JSON.parse(sessionStorage.getItem("TotalProducto10"));

            let totalProd11 = JSON.parse(sessionStorage.getItem("TotalProducto11"));

            let totalProd12 = JSON.parse(sessionStorage.getItem("TotalProducto12"));

            let totalProd13 = JSON.parse(sessionStorage.getItem("TotalProducto13"));

            let totalProd14 = JSON.parse(sessionStorage.getItem("TotalProducto14"));

            let totalProd15 = JSON.parse(sessionStorage.getItem("TotalProducto15"));

            let totalProd16 = JSON.parse(sessionStorage.getItem("TotalProducto16"));

            let totalProd17 = JSON.parse(sessionStorage.getItem("TotalProducto17"));

            let totalProd18 = JSON.parse(sessionStorage.getItem("TotalProducto18"));

            let totalProd19 = JSON.parse(sessionStorage.getItem("TotalProducto19"));

            let totalProd20 = JSON.parse(sessionStorage.getItem("TotalProducto20"));



//Resumen de Productos Seleccionados


        resumeTotalArray.push(totalProd1, totalProd2, totalProd3, totalProd4, totalProd5, totalProd6, totalProd7, totalProd8, totalProd9, totalProd10, totalProd11, totalProd12, totalProd13, totalProd14, totalProd15, totalProd16, totalProd17, totalProd18, totalProd19, totalProd20,)
                   
        resumeTotalArray = ['VAS A COMPRAR LOS SIGUIENTES PRODUCTOS:  /// Energizantes: ', prodBebidas1.cantidad , ' /// Vinos: ', prodBebidas2.cantidad , ' /// Cervezas: ', prodBebidas3.cantidad , ' /// Espumantes: ' , prodBebidas4.cantidad , ' /// Gaseosas: ' , prodBebidas5.cantidad]

        console.log("ResumeTotalArray: " + resumeTotalArray)


//Total      

            let total = sumTotal(totalProd1, totalProd2, totalProd3, totalProd4, totalProd5, totalProd6, totalProd7, totalProd8, totalProd9, totalProd10, totalProd11, totalProd12, totalProd13, totalProd14, totalProd15, totalProd16, totalProd17, totalProd18, totalProd19, totalProd20);
            
            console.log("TOTAL: " + total);
            

//Verificacion para realizar Descuento

        if (total > 1000) {

            discount = discountFunc(total);           

        //Valor total con Descuento

        responseTotalDiscount = 'Tu compra es de $' + total + '. Tenes un descuento de 10%. TOTAL A PAGAR: $' + discount;     

        $.fn.ResponseTotalDiscount();

        
        }else{            

        //Valor total sin Descuento

        responseTotal = 'TENES QUE PAGAR UN TOTAL DE: $' + total; 

        $.fn.ResponseTotal();

        }


    });


});



