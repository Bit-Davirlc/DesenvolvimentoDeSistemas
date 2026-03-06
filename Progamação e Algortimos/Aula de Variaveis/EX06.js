import { question } from 'readline-sync';

let numero1 = Number(question("Digite o primeiro numero:"));
let numero2 = Number(question("Digite o segundo numero:"));

// Calcule
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
if (numero2 !== 0) {
    var divisao = numero1 / numero2;
}
else {
    var divisao = "Divisão por zero não é permitida";
}

// Exiba os resultados
console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);