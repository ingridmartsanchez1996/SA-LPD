/**
 * Instrucciones:

Crear un programa en Javascript que realice lo siguiente:
Debe pedirle al usuario que intente adivinar el número secreto por prompt o por input, dicho número será del 1 al 100.
Si el usuario no adivina el número secreto, debe mostrar un mensaje por consola o DOM diciendo: “Ups, el número secreto es incorrecto, vuelve a intentarlo. ” y volver a solicitarle que ingrese un número.
Si el usuario adivina el número secreto debe de mostrar un mensaje por consola o DOM diciendo: “Felicidades, adivinaste el número secreto”. Además debe imprimir por consola o DOM la lista de números introducidos antes de adivinar el número secreto.
El número secreto puede ser introducido manualmente o generar un número aleatorio, pero recuerda que debe ser del 1 al 100.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub y adjuntar el link.
Puedes implementar un tipo de ayuda para que el usuario se guíe en caso de que el número introducido sea menor o mayor al número secreto.
 
 */

const prompt = require('prompt-sync')();

max = 100;
min = 1;
numeroSecreto = Math.floor((Math.random() * (max - min + 1)) + min);

do {
    var introducirNumberoSecreto = prompt('¿Quieres introducir un numero secreto? [si/no]]: ');
    if (introducirNumberoSecreto == "si") {
        numeroSecreto = parseInt(prompt('Insertar un numero secreto del 1 al 100: '));
        if (isNaN(numeroSecreto)) {
            console.log('Error: Introduce un número válido:');
        } else if (1 > numeroSecreto > 100){
            console.log('Inserta un número entre 1 y 100.');
        } else {
            break;
        }
    }
    else {
        break;
    } 
} while(true);

intentosAnteriores = [];

do {
    var n = parseInt(prompt('Insertar numero del 1 al 100: '));
    if (isNaN(n)) {
        console.log('Error: Introduce un número válido:');
    } else if (n != numeroSecreto){
        console.log('Ups, el número secreto es incorrecto, vuelve a intentarlo.');
        intentosAnteriores.push(n);
        if (n < numeroSecreto) {
            console.log('Inserta un número más grande');
        } else {
            console.log('Inserta un número más chico:');
        }
    }
} while(n != numeroSecreto);

console.log('Felicidades, adivinaste el número secreto.');
console.log(intentosAnteriores);

