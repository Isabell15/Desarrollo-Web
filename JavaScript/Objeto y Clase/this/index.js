

/*
this --- class

this objeto -- class
*/

class Persona{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}


const Persona1 = new Persona('Isa', 23)

console.log(Persona1)

Persona1.nuevoMetodo = function(){
    console.log(`Mi nombres ${this.nombre}`)
}