/*

for in ---> objetos 

propiedades = valor

array, string

item

for (varible in objeto) {
código
}

*/

const listaDeCompras = {
    manzana: 15,
    pera: 2,
    naranja: 21,
    uva: 10,
};

for (fruta in listaDeCompras) {
    console.log(fruta);
}

for (fruta in listaDeCompras) {
    console.log(`${ fruta } : ${ listaDeCompras[fruta]}`);
}

for (fruta of listaDeCompras) {
    console.log(fruta);
}