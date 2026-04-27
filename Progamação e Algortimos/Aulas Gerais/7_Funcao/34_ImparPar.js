// 2) Crie uma função que receba um número e retorne se ele é par ou ímpar.

const prompt = require("readline-sync");
const alert = console.log;

function ParImpar(numero){
    
    let numComp = Number(numero);

    if (numComp % 2 === 0){
        return "O numero é par"
    }
    else{
        return "O numero é impar"
    }
};

let valor = prompt.question(`Digite um numero para comparar: `)
let resultado = ParImpar(valor);

alert(resultado);