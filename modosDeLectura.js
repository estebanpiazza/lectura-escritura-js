//Metodo facil

// instalar prompt-sync
//Ejecutar ` node lectura.js `
// npm install prompt-sync
const prompt = require('prompt-sync')();

// Pide al usuario que introduzca su nombre
const nombre = prompt('¿Cuál es tu nombre? ');

// Muestra un saludo con el nombre
console.log(`Hola, ${nombre}!`);

//Metodo dificil
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cuál es tu nombre? ', (nombre) => {
  console.log(`Hola, ${nombre}!`);
  rl.close();
});


