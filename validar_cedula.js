/* Validar Cedula - v1.0.0 - 2015-07-14
 * http://github.com/jbravot/validar_cedula_ecuatotiana
 *
 * Copyleft (f) 2015 Jonathan Bravo <jjbravo88@gmail.com>;
 * Licensed under the MIT license */

;(function( Validar, undefined ){

	Validar.cedula = function(cedula){
		//verifica que los dos primeros dígitos correspondan a un valor entre 1 y NUMERO_DE_PROVINCIAS
        var prov = cedula.substring(0, 2);

        if (!((prov > 0) && (prov <= 24))) {
        	console.error("La cédula ingresada no es válida");
            return false;
        }

        //verifica que el último dígito de la cédula sea válido
        var d = new Array(10);
        //Asignamos el string a un array
        for (var i = 0; i < d.length; i++) {
            d[i] = parseInt(cedula[i]);
            
        }

        var imp = 0;
        var par = 0;

        //sumamos los duplos de posición impar
        for (var i = 0; i < d.length; i += 2) {
            d[i] = ((d[i] * 2) > 9) ? ((d[i] * 2) - 9) : (d[i] * 2);
            imp += d[i];
        }

        //sumamos los digitos de posición par
        for (var i = 1; i < (d.length - 1); i += 2) {
            par += d[i];
        }

        //Sumamos los dos resultados
        var suma = imp + par;
        
        //Restamos de la decena superior
		var tmp_1 = suma + 10;
		tmp_1 = tmp_1.toString();
	
        var d10 = parseInt(tmp_1.substring(0, 1) +  "0") - suma;
        
        //Si es diez el décimo dígito es cero        
        d10 = (d10 == 10) ? 0 : d10;

        //si el décimo dígito calculado es igual al digitado la cédula es correcta
        if (d10 == d[9]) {
        	return true;
        }else {
        	console.error("La cédula ingresada no es válida");
        	return false;
        }
	};
}( window.Validar = window.Validar || {}, undefined ));