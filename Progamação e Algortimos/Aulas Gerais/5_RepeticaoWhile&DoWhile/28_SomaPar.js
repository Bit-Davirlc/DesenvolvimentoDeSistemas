const prompt = require("readline-sync");

let numVerifica = 0;
let somaPar = 0;
let operacaoConfirma = 0;

do {
  numVerifica = Number(
    prompt.question(
      "Digite o número par para a soma (Digite 0 para finalizar):",
    ),
  );
  operacaoConfirma = numVerifica % 2;
  console.log(`${operacaoConfirma}`);

  if (operacaoConfirma === 1) {
    console.log(`${operacaoConfirma}`);
    console.log(`O numero digitado é Impar`);
  } else {
    somaPar += numVerifica;
    console.log(`Numero par somado`);
  }
} while (numVerifica != 0);

console.log(`A soma dos numeros pares foi igual a ${somaPar}`);
