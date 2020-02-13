function mostrar() {


    // pido el dato 
    var clave = prompt("ingrese el número clave.");
    // me fijo si el dato es invalido 
    while (clave != "utn750")
        // si estoy aca es porque el dato no es valido 
        // informo y pido nuevamente 
        clave = prompt("clave invalida. Reingrese clave:");
}

// si llegue a este punto del programa es porque
// ingresaron clave
alert("Clave correcta");

//FIN DE LA FUNCIÓN
