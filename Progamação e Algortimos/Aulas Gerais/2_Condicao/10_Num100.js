//EX10: Responder quando o numero for maior que 100.
const prompt = require('readline-sync');

let num = Number(prompt.question("Digite o valor:"));

if (num > 100){
    console.log(`Numero maior que 100`);
};