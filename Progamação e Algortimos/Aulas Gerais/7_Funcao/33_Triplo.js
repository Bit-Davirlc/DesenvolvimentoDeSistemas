// 1) Crie uma função que receba um número e retorne o triplo dele.

const prompt = require("readline-sync");

function calcularDobro(numero){
    return numero * 3;
}

let valor = prompt.question("Digite um numero: ");
let numero = Number(valor);

let resultado = calcularDobro(numero);
console.log(`O dobro é: ${resultado}`)