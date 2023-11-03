/** 
DESCRIPCION: 
   Crear un programa en Javascript que realice lo siguiente:
Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso
contrario debe mandar un mensaje de error y volver a solicitar los datos
**/

// Using promt-sync package because it is the lest verbose way to get user inputs from console in nodejs.
// Reference: https://www.codecademy.com/article/getting-user-input-in-node-js
const prompt = require('prompt-sync')();

function convertirTemperatura() {
    let temperaturaCelsius;

while (true) {
  let entrada = prompt("Introduce una temperatura en grados Celsius: ");
  temperaturaCelsius = parseInt(entrada);

  // La función isNaN (Is Not a Number) verifica si el valor de celsius no es un número.
  // Si celsius no es un número válido (por ejemplo, si el usuario ingresa texto o
  // caracteres no numéricos), esta condición se evaluará como verdadera (true).

  // typeof celsius === 'number' => Esta parte del código asegura que la variable celsius
  // es de tipo "number" (número).

  if (typeof temperaturaCelsius === 'number') {
    break; // Sale del bucle si es un número entero válido
  } else {
    console.log("Por favor, introduce un valor entero válido.");
  }
}

// Realizar la conversión
let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
let temperaturaKelvin = temperaturaCelsius + 273.15;

// Imprimir los resultados de las conversiones
console.log("Temperatura en grados Fahrenheit: " + temperaturaFahrenheit);
console.log("Temperatura en Kelvin: " + temperaturaKelvin);
}

// Llama a la función para iniciar el programa
convertirTemperatura();

