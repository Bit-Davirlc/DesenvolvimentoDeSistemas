const prompt = require('readline-sync');

let prova1 = Number(prompt.question("Digite a nota da prova 1:"));
let prova2 = Number(prompt.question("Digite a nota da prova 2:"));
let prova3 = Number(prompt.question("Digite a nota da prova 3:"));

let mediaFinal = ((prova1 * 2) + (prova2 * 3) + (prova3 * 5)) / (2 + 3 + 5);

// Exiba os resultados
console.log(`(${prova1 * 2} + ${prova2 * 3} + ${prova3 * 5}) / (2 + 3 + 5)`);
console.log(`Prova 1: ${prova1}`);
console.log(`Prova 2: ${prova2}`);
console.log(`Prova 3: ${prova3}`);
console.log(`Média Ponderada: ${mediaFinal}`);