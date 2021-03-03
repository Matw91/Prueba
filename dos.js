/*Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes
   para preparar comida al por mayor , hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.*/ //contador de vueltas
function mostrar()
{
  var peso;
   var precio;
   var alimento;
   var descuentoUno;
   var descuentoDos;
   var subtotal=0;
   var total;
   var masCaro;
   var alimentoCaro;
   var precioXalimento;
   var promedio;
   var flag=0;
   var contador=0;
   var acumuladorPeso=0;
   var seguir;

   do{
    peso = parseInt(prompt("Ingrese un peso entre 10 y 1000 kilos"));
    while( peso > 1000 || peso < 10 || isNaN(peso)){
      peso = parseInt(prompt("Dato incorrecto.Ingrese un peso entre 10 y 1000 kilos "));
    }
    precio = parseInt(prompt("Ingrese un precio "));
    while( precio < 0 || isNaN(precio)){
      precio = parseInt(prompt("Dato incorrecto.Ingrese un precio "));
    }
    alimento = prompt("Ingrese un alimento (v de vegetal, a de animal o m de mezcla) ");
    while(!( alimento == "v" || alimento == "a" || alimento == "m")){
      alimento = prompt("Dato incorrecto. Ingrese un alimento (v de vegetal, a de animal o m de mezcla). ");
    }

    if(flag == 0 || precio > masCaro){
      masCaro= precio;
      alimentoCaro= alimento;
    }
    flag= 1;
    precioXalimento= peso * precio;
    acumuladorPeso= acumuladorPeso + peso;
    subtotal= subtotal + precioXalimento;
    
    contador++;
    
    seguir= prompt("¿Desea continuar? (si/no)");
   }while(seguir == "si");
   
   promedio= subtotal/contador;

   if(acumuladorPeso > 300){
    descuentoUno= subtotal/4;
    total= subtotal-descuentoUno;
   }else if(acumuladorPeso > 100){
    descuentoDos= (subtotal/100)*15;
    total= subtotal-descuentoDos;     
   }else{
    total= subtotal;
   }

   alert("El alimento más caro es "+alimentoCaro+" ; el total bruto a pagar es "+subtotal+" ;el total neto a pagar es de "+total+" y el promedio de precio x kilo es de "+promedio);
  
}
