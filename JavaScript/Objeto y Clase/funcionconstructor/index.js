

// const persona = {
// nombre: 'suseth',
// apellido: 'Rodriguez',
// edad:22
// }

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

// Creamos una instancia de Persona

const Persona1 = new Persona('Gemeni', 'Sant', 19)

console.log(Persona1)

// Crear otra instancia de Persona
const Persona2 = new Persona('Fourth', 'Sanch', 21)

console.log(Persona2)

// Agregaramos una propiedad a la clase persona

Persona.prototype.telefono = '63233-321-12'

// Crear una sola propiedad para una instancia

Persona1.nacionalidad = 'Austria'

console.log(Persona1)
console.log(Persona2)

// Crear un metodo para la clase Persona

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona1.saludar()
Persona2.saludar()
