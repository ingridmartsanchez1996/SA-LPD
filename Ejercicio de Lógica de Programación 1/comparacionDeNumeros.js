// Usando el npm package manager de nodejs
// https://www.npmjs.com/package/prompt-sync

/** 
DESCRIPCION: 
   Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el 
número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor
a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por 
consola o por el DOM diciendo que los números son iguales.
**/

const prompt = require('prompt-sync')();

// Para solicitar al usuario 3 numeros por promt y guardarlos en sus respectivas variables:
let numero1 = parseInt(prompt("Introduce el primer número: "));
let numero2 = parseInt(prompt("Introduce el segundo número: "));
let numero3 = parseInt(prompt("Introduce el tercer número: "));

// Verificar si los números son iguales
if (numero1 === numero2 && numero2 === numero3) {
    console.log("Los números son iguales. El programa se detendrá.");
    // NOTA: Tambien se puede colocar return en lugar de else, para que el programa
    // se detenga si los 3 numeros son iguales.
  } else {

// Crear un array con los números introducidos por el usuario:
let numeros = [numero1, numero2, numero3];

// Ordenar los números de mayor a menor:
numeros.sort((a, b) => b - a);

// Imprimir los números de mayor a menor:
console.log(numeros);

// Ordenar los números de menor a mayor:
numeros.sort((a, b) => a - b);

// Imprimir los números  de mayor a menor:
console.log(numeros)

}

    