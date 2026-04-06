// 3. Soma até parar
// Peça números ao usuário e some tudo. O programa deve parar quando o usuário digitar 0.

const prompt = require("readline-sync");

let numSomar = 0
let numEscolhido = 0

do {
  numEscolhido = Number(prompt.question("Digite o numero (Digite 0 para sair):"));
  numSomar += numEscolhido;
} while (numEscolhido != 0);

console.log(`A soma dos numeros foi igual a ${numSomar}`);
