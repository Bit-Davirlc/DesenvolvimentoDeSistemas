// 1. Contador até 0
// Peça um número e faça uma contagem regressiva até 0 usando while.

const prompt = require("readline-sync");

let contDown = Number(prompt.question("Digite o numero:"));

while(contDown >= 0){
    console.log(`${contDown}`);
    contDown--;
}