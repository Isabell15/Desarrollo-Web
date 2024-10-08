/*

estructura de datos

key / value 

objeto {
  propiedad: valor, 
  propiedad: valor, 
  propiedad: valor 
  Metodos()
}

*/

const persona = {
    nombre: "Lulu",
    edad: 45,
    direccion: {
        calle: "Av Santa lucia 187",
        ciudad: "CDMX",
    },
    saludar() {
        console.log(`Buen Dia, mi nombre es ${persona.nombre}`);
    },
};

// Imprimir el objeto

console.log(persona);

// Imprimir la propiedad nombre

console.log(persona.nombre);

// Imprimamos el metodo saludar

persona.saludar();


// Agrergamos una propiedad al objeto en este caso telefono

persona.telefono = "777-777-7777";

console.log(persona.telefono);

// Agregamos un metodo al objeto

persona.despedir = () => {
    console.log("Hasta pronto");
};

persona.despedir();

// Acceder a una propiedad de un objeto anidado o Metodo

//console.log(persona.direccion.calle);


// Eliminar una propiedad de un objeto

delete persona.telefono;

//console.log(persona.telefono);

// Eliminar un metodo de un objeto

delete persona.despedir;

//console.log(persona.despedir());