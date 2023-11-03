/** 
Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe calcular el factorial del número recibido utilizando recursión.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso 
contrario debe mandar un mensaje de error y volver a solicitar el dato.
**/

/**
 * EJEMPLO:
    * 0! = 1
    * 2! = 1*2 = 2
    * 3! = 1*2*3 = 6
    * 4! = 1*2*3*4 = 24
    * n! = 1*2*...*(n-1)*n 
 */

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Insertar numero: '));

let resultado = 1
let numerosFactoriales = [];
let counter = 0;

if (1 <= numero){

    while(counter < numero) {
        numerosFactoriales.push(numero - counter);
        resultado *= numero - counter;
        counter++;
    }

    // Ordenar el arreglo para tener [1, 2, 3, ..., n] en lugar de [n, ...., 3, 2, 1]
    let numerosFactorialesOrdenados = numerosFactoriales.sort((a, b) => a - b);
    // converting the array into the factorial operation:
    //  [1, 2, 3, ..., n] => "1*2*3....*n" 
    let stringnumerosFactorialesOrdenados = numerosFactorialesOrdenados.join("*")
    
    console.log(`${numero}! = ${stringnumerosFactorialesOrdenados} = ${resultado}`);

}
else {
    console.log(`no valid number: ${numero}, please enter a possitive value.`);
}