const prompt = require('readline-sync');

let num = Number(prompt.question("Digite o valor:"));

if (num > 100){
    console.log(`Numero maior que 100`);
};