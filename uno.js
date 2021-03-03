/*Debemos realizar la carga de 5(cinco) productos de
 prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo
	 y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades
 y el fabricante
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en total */
function mostrar()
{
	var tipo;
	var precio;
	var unidad;
	var fabricante;
	var barbijoFabricante;
	var barbijoUnidades;
	var masUnidades;
	var fabricanteMayor;
	var jabones=0;
	var precioMayor;
	var flag=0;
	var flagDos=0;

	for(var i=0 ; i < 5 ; i++){

		tipo= prompt("Ingrese el tipo de producto.");
		while(!(tipo == "barbijo" || tipo =="jabon" || tipo == "alcohol")){
			alert("Dato incorrecto. Ingrese el tipo de producto.");
		}
		precio= parseInt(prompt("Ingrese el precio del producto."));
		while( precio < 100 || precio > 300){
			alert("Dato incorrecto. Ingrese el precio del producto.");
		}
		unidad= parseInt(prompt("Ingrese la cantidad de unidades del producto."));
		while(unidad <= 0 || unidad > 1000){
			alert("Dato incorrecto. Ingrese la cantidad de unidades del producto.");
		}
		fabricante= prompt("Ingrese el fabricante.");
		while( fabricante == null || fabricante =="" ){
			alert("Dato incorrecto. Ingrese el fabricante.");
		}

		if( flag ==0|| unidad > masUnidades){
			masUnidades= unidad;
			fabricanteMayor= fabricante;
		}
		switch(tipo){
			case "barbijo":
				if( flagDos ==0 ||precio > precioMayor){
					precioMayor= precio;
					barbijoFabricante= fabricante;
					barbijoUnidades= unidad;
				}
				flagDos= 1;
			break;
			case "jabon":
				jabones= unidad+jabones;
			break;
			case "alcohol":
			break;
		}
		flag= 1;
	}
	alert("Barbijo plus: unidades: "+barbijoUnidades+" frabricante: "+barbijoFabricante+" Tipo con mas unidades: "+fabricanteMayor+" Total de jabones: "+jabones);
}
