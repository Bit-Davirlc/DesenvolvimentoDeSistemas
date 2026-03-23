// EX03: Crie uma função chamada classificar_imc(peso, altura) que calcule o IMC e retorne a classificação:
// Fórmula:
// IMC = peso / (altura * altura)
// Classificação:

// •	Abaixo de 18.5 → "Abaixo do peso"
// •	De 18.5 a 24.9 → "Peso normal"
// •	De 25 a 29.9 → "Sobrepeso"
// •	30 ou mais → "Obesidade"
// Depois:
// •	Peça o peso e a altura do usuário
// •	Use a função
// •	Exiba o IMC e a classificação

// Requisitos:
// •	Entrada: peso e altura
// •	Processamento: cálculo + se, senão se, senão
// •	Saída: valor do IMC + classificação

const prompt = require('readline-sync');

let valorPeso = Number(prompt.question("Digite o valor do peso do usuario em Kilograma (EX:72):"));
let valorAltura = Number(prompt.question("Digite o valor da altura do usuario em cm (EX: 188):"));

let imc = (valorPeso / (valorAltura * valorAltura)) * 10000;

if(imc < 18.5){
    console.log(`O IMC do usuario é de ${imc.toFixed(2)} e esta Abaixo do peso`);
}
else if(imc < 18.5 || imc < 24.9){
    console.log(`O IMC do usuario é de ${imc.toFixed(2)} e esta no Peso normal`);
}
else if(imc < 25 || imc < 29.9){
    console.log(`O IMC do usuario é de ${imc.toFixed(2)} e esta no Sobrepeso`);
}
else{
    console.log(`O IMC do usuario é de ${imc.toFixed(2)} e esta na Obesidade`);
}