const prompt = require('readline-sync');

let num = Number(prompt.question("Digite o numero:"));

if (num > 0){
    console.log(`Numero maior que 0`);
}
else if (num == 0){
    console.log(`Numero igual a 0`)
}
else{
    console.log(`Numero menor que 0`);
}