var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes // retornamos estudiantes
 
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre = prompt("Ingrese Nombre De La Estudiante"); // ingresamos datos por teclado
    var puntosTecnicos = prompt("Ingrese Puntos Tecnicos");
    var puntosHSE = prompt("Ingrese Puntos de HSE");
    var estudiante = function(){ // creamos un objeto estudiante con sus propiedades
          this.nombre = nombre;
          this.puntosTecnicos = puntosTecnicos;
          this.puntosHSE = puntosHSE;
    }
    // estamos añadiendo los estudiantes agregados a nuestro array creado
    estudiantes.push(new estudiante); 
    // retornamos estudiante que ya habiamos creado
    return new estudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
  
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>"; // completamos con las propiedades del objeto estudiante
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
   //return estudiantes.map(mostrar);
   var alumna = "";// creamos un arreglo vacio
        estudiantes.forEach(function(propiedades){ // con el forEach nos ayudara a recorrer las propiedades de la lista de estudiantes
            alumna += mostrar(propiedades); 
        })
 
    return alumna;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    return estudiantes.filter(function(propiedades){ // flitramos las propiedades de ESTUDIANTE 
            return nombre.toLowerCase() == propiedades.nombre.toLowerCase()// comparamos que el nombre que buscamos se encuentre en lista de estudiantes
        });
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    return estudiantes.sort(function (a, b) { //sort nos ayudara a ordenar de mayor a menor
      return b.puntosTecnicos - a.puntosTecnicos; 
    });
    
        
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
     return estudiantes.sort(function (a, b) {// sort nos ayudara a ordenar de mayor a menor
      return b.puntosHSE - a.puntosHSE;
    });
}