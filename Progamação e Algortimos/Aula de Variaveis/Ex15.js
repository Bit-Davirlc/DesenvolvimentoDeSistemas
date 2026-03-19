//EX15: Definir qual o tipo de triangulo.
const prompt = require('readline-sync');

let lado1 = Number(prompt.question("Digite o lado A:"));
let lado2 = Number(prompt.question("Digite o lado B:"));
let lado3 = Number(prompt.question("Digite o lado C:"));

if (lado1 === lado2 && lado1 == lado3){
    console.log(`O triangulo é Equilatero`);
}
else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log(`O triangulo é Isósceles`);
}
else if (lado1 != lado2 && lado1 != lado3 && lado3 != lado2){
    console.log(`O triangulo é Escaleno`);
};