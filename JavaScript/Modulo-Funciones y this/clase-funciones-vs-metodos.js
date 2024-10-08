
//capacidades que tienen las funciones al igual que otros objetos 

//1.Pasar funciones como argumentos ----callback
/*
function a() {}
function b(a) {}
b(a)

//retornar funciones

function a() {
function b() {}
return b 
}

//asignar funciones a variable --expresion de funcion

const a = function() {}

//tener propiedades y metodos

function a () {}
const obj={}
a.call(obj)

//anidar funciones --nested functions

function a (){
    function b(){
        function c(){

        }
        c()
    }
    b()
}
a()


//sera posible almacenar funciones en objetos
*/
const rocket={
    name:'Lobo 5',
    launchMessage: function launchMessage(){
        console.log('🌙')
    }
}
rocket.launchMessage()