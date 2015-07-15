# * Validar Cedula - v1.0.0 - 2015-07-14
# * http://github.com/jbravot/validar_cedula_ecuatotiana
# *
# * Copyleft (f) 2015 Jonathan Bravo <jjbravo88@gmail.com>;
# * Licensed under the MIT license 
def validarCedula(cedula):
    #verifica que los dos primeros dígitos correspondan a un valor entre 1 y NUMERO_DE_PROVINCIAS
    prov = int(cedula[0:2])

    if not (prov > 0 and prov <= 24):
    	#addError("La cédula ingresada no es válida");
        return False

    #verifica que el último dígito de la cédula sea válido
    d = [0,0,0,0,0,0,0,0,0,0];
    #Asignamos el string a un array
    for i in range(10):
        d[i] = int(cedula[i])

    imp = 0
    par = 0
    #sumamos los duplos de posición impar
    for i in range(0, len(d), 2):
        if (d[i] * 2) > 9:
            d[i] = (d[i] * 2) - 9
        else:
            d[i] = (d[i] * 2)

        imp = imp + d[i]

    #sumamos los digitos de posición par
    for i in range(1, len(d) - 1, 2):
        par = par + d[i]

    #Sumamos los dos resultados
    suma = imp + par

    #Restamos de la decena superior
    tmp_1 = int(suma) + 10
    tmp_1 = str(tmp_1)

    d10 = int(tmp_1[0:1] +  "0") - suma

    #Si es diez el décimo dígito es cero
    if d10 == 10:
        d10 = 0
    else:
        d10 = d10

    #si el décimo dígito calculado es igual al digitado la cédula es correcta
    if d10 == d[9]:
    	return True
    else:
    	return False