
class animal {
    constructor(nombre, tipo){
        this.nombre = nombre
        this.tipo = tipo
    }
    emitirSonido(){
        console.log('El animal esta emitiendo un sonido')
    }
}

class Lobo extends animal{
    constructor(nombre, tipo, raza){
        super(nombre,tipo)
        this.raza =raza
    }
    emitirSonido(){
        console.log('El lobo aúlla')
    }
    correr(){
        console.log(`${this.nombre} corre ferozmente`)
    }
}

const lobo1 = new Lobo ('Benji', 'Lobo', 'lobo de alaska')

console.log(lobo1)
lobo1.correr()
lobo1.emitirSonido()

lobo1.nuevoMetodo = function (){
    console.log('Este es un nuevo metodo')
}

Lobo.prototype.segundoMetodo = function(){
    console.log('Es otro nuevo metodo')
}