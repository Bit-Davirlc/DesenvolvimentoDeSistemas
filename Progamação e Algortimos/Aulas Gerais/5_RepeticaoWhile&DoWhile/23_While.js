const prompt = require("readline-sync");

let Teste = Number(prompt.question("Digite o numero:"));

while (Teste != 1) {
  console.log(`O numero é diferente de 1`);
  Teste = Number(prompt.question("Digite um novo numero:"));
}
