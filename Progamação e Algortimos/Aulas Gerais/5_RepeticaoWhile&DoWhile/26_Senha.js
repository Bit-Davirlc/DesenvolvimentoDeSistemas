// 2. Senha correta
// Peça ao usuário uma senha e continue pedindo até ele digitar "1234" corretamente.

const prompt = require("readline-sync");

let senha = 0

do {
  senha = Number(prompt.question("Digite o numero:"));
} while (senha != 1234);

console.log(`Senha Correta`);
