// switch (expresion) {
//     case valor1:
//         // codigo a ejecutar
//         break;
//     case valor2:
//         //codigo a ejecutar
//         break;
//     case valor3:
//         //codigo a ejecutar
//         break;
//     case valor4:
//         //codigo a ejecutar
//         break;
//     default:
//     //codigo
// }
let expr = "Melocoton";

switch (
expr // ===
) {
    case "Cereza":
        console.log("Las Cereza cuestan $20 la bolsa");
        break;
    case "Pera":
        console.log("Las Pera cuestan $12 la bolsa");
        break;
    case "Fresa":
        console.log("El Fresa esta en $30 la bolsa");
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $ 4 dolares los kilos");
        break;
    default:
        console.log(`Lo siento, no contamos con ${ expr }`);
}

console.log("¿Hay algo más que desees?");