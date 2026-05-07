// 4. Peça ao usuário 3 números usando prompt, armazene os valores em um array e mostre a média deles.

const prompt = require("readline-sync");
const alert = console.log;

const numArm = [];

let soma = 0;
let valor;

while (valor != 0) {
  valor = Number(prompt.question(`Digite um numero para inserir no array: `));
  if (valor == 0) {
    break;
  }
  numArm.push(valor);
  soma += valor;
}

let media = 0;

media = soma / numArm.length;

alert(numArm);
alert(`A média é: ${media}`);
