const prompt = require('readline-sync');

let lado1 = Number(prompt.question("Digite o lado A:"));
let lado2 = Number(prompt.question("Digite o lado B:"));
let lado3 = Number(prompt.question("Digite o lado C:"));

if (lado1 === lado2 && lado1 == lado3){
    console.log(`O triangulo é Equilatero`);
}
else{
    console.log(`O triangulo não é equilatero ou não forma triângulo`);
}