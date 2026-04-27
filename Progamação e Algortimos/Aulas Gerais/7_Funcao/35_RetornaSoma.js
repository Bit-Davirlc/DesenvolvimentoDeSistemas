// 3) Crie uma função que receba dois números e retorne a soma.

const prompt = require("readline-sync");
const alert = console.log;

let i = 0;

function somaDois(a, b){
    return a + b;
} 

let primeiroNum = Number(prompt.question(`Digite o primeiro numero: `));
let segundoNum = Number(prompt.question(`Digite o segundo numero: `));

let resultado = somaDois(primeiroNum, segundoNum);

alert(`A soma dos numeros é ${resultado}`);