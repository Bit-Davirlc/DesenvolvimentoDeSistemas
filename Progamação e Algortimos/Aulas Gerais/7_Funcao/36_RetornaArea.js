const prompt = require("readline-sync");
const alert = console.log;

function multiplicaDois(a, b){
    return a * b;
}

let primeiroNum = Number(prompt.question(`Digite o primeiro valor:`));
let segundoNum = Number(prompt.question(`Digite o segundo valor:`));

let resultado = multiplicaDois(primeiroNum, segundoNum);

alert(`A área é de: ${resultado}`);