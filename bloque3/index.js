const readline = require('readline'); //Para leer lineas que introduce el usuario
const moment = require('moment'); //para trabajar y formatear fechar

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Cuantas iteraciones quieres hacer?', function(iterations) {
    for (let i = 0; i < iterations; ++i) {
        console.log(i);
    }
    rl.close()
  });