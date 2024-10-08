
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre   //propiedades
        this.edad = edad
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo  ${this.edad} años`) //metodo
    }
}

const persona1 = new Persona('Sea', 26)

persona1.saludar()