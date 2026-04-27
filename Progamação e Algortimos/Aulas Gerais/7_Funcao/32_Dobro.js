const prompt = require("readline-sync");

function calcularDobro(numero){
    return numero * 2;
}

let valor = prompt.question("Digite um numero: ");
let numero = Number(valor);

let resultado = calcularDobro(numero);
console.log(`O dobro é: ${resultado}`)