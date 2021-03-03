function mostrar()
{
	/*En el ingreso a un viaje en crucero nos solicitan nombre , 
	edad(mayores de 18),
	 sexo("f" o "m") y estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros.*/
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var elMasjoven;
	var elMasjovendos;
	var viejo;
	var sexoViejo;
	var nombreViejo;
	var promedioMujeres;
	var promedioHommbre;
	var contadorSolteros=0;
	var acumuladorSolteros=0;
	var contadorMujeres=0;
	var edadesMujeres=0;
	var contadorCasadas=0;
	var contadorViudas=0;
	var mujeresTotales;
	var flag=0;
	var flagDos=0;
	var seguir;

	do{
		nombre= prompt("Ingrese un nombre.");		

		edad= parseInt(prompt("Ingrese una edad (mayor de 18)"));
		while( edad < 18 || isNaN(edad)){
			edad= parseInt(prompt("Dato incorrecto. Ingrese una edad (mayor de 18)"));
		}

		sexo= prompt("Ingrese un sexo (m o f)");
		while( !(sexo == "m" || sexo == "f")){
			sexo= prompt("Dato incorrecto. Ingrese un sexo (m o f).");
		}

		estadoCivil= prompt("Ingrese un estado civil. (soltero, casado, viudo)");
		while( !(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo")){
			estadoCivil= prompt("Dato incorrecto. Ingrese un estado civil. (soltero, casado, viudo)");
		}

		if( flag ==0|| edad > viejo){
			viejo= edad;
			sexoViejo= sexo;
			nombreViejo= nombre;
		}
		flag= 1;
		if( sexo =="f" )
		{
			contadorMujeres++;
			edadesMujeres= edadesMujeres + edad;
		}

		switch(estadoCivil){
			case "soltero":
				if( sexo == "m")
				{
					contadorSolteros++;
					acumuladorSolteros= acumuladorSolteros + edad;			
				}				
				break;
			case "casado":
				if( sexo == "m")
				{
				if( flagDos ==0 || edad < elMasjoven ){
					elMasjoven= edad;
					elMasjovendos= nombre;
				}
				flagDos=1;
				}
				else
				{
					contadorCasadas++;
				}
				break;								
			case "viudo":
				if( sexo == "f")
				{
					contadorViudas++;
				}
				break;
		}

		seguir= prompt("¿Desea continuar?(si/no)");

	}while( seguir =="si")

	mujeresTotales= contadorCasadas + contadorViudas;
	promedioMujeres= edadesMujeres / contadorMujeres;
	promedioHommbre= acumuladorSolteros / contadorSolteros;
	alert("El nombre del hombre casado mas joves es "+elMasjovendos+" El pasajero más viejo es "+sexoViejo+" y se llama "+nombreViejo+" Hay un total de "+mujeresTotales+" mujeres casadas y viudas. El promedio de edad entre las mujeres es de "+promedioMujeres+" El promedio de edad entre hombres solteros es de "+promedioHommbre);
}
