//tipo de numero entero y decimal
const entero=42
const decimal=3.14
console.log(typeof entero, typeof decimal)

//2.notacion cientifica
const cientifico=5e3

//3.infinito y NaN
const infinito=Infinity
const NoEsUnNumero= NaN

//4.operaciones aritmetica
//1.suma.resta,miltiplicacion, division
const suma= 4+4
const resta=7-3
const multiplicacion=4*9
const division= 24/12

//2.modulo y exponenciacion 
const modulo=15%8
const exponenciacion=2**3

//precision
const resultado=0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

//operaciones avanzada
const raizcuadrado= Math.sqrt(16)
const valorAbsoluto= Math.abs(-7)
const aleatorio=Math.random()
console.log(raizcuadrado)
console.log(valorAbsoluto)
console.log(aleatorio)