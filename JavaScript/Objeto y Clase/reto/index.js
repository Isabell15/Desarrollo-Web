/* 
Requerimientos del reto:

1 El usuario debe poder ingresar su usuario y contraseña

2 El sistema debe ser capaz de validar si el usuario y contraseña  por el usuario existen en la base de datos

3 Si el usuario y contraseña son correctos el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.

4 Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const userDatoBase = [
    {
        username: 'Itamar',
        password: '8890',
    },
    {
        username: 'Jose',
        password: '3467',
    },
    {
        username: 'Anabel',
        password: '1285',
    },
    {
        username: 'Elias',
        password: '3934',
    },
]

const usersTimeline = [
    {
        username: "Elias",
        timeline: "Me encata Javascript!",
    },
    {
        username: "Gemeni",
        timeline: "Bebeloper es lo mejor!",
    },
    {
        username: "Itamar",
        timeline: "A mi me gusta más el café que el té",
    },
    {
        username: "Fourth",
        timeline: "Yo hoy no quiero trabajar",
    },
]

const username = prompt(' Cual es tu usuario')
const password = prompt('Cual es tu contraseña')

function usuarioExistente(username, password) {
    for (let i = 0; i < userDatoBase.length; i++) {
        if (
            userDatoBase[i].username === username &&
            userDatoBase[i].password === password
        ) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (usuarioExistente(username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(usersTimeline);
    } else {
        alert("Oooh , usuario o contraseña incorrectos!");
    }
}

signIn(username, password);