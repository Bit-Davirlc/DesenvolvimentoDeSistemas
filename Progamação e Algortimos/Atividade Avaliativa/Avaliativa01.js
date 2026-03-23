//EX01: Crie uma função chamada celsius_para_fahrenheit(c) que converta uma temperatura fornecida pelo usuário de Celsius para Fahrenheit.
// Fórmula:
// F = (C × 9/5) + 32
// Depois:
// •	Peça ao usuário uma temperatura em Celsius
// •	Use a formula para converter
// •	Exiba o resultado
// Requisitos:
// •	Entrada: temperatura em Celsius
// •	Processamento: cálculo na função
// •	Saída: temperatura em Fahrenheit

const prompt = require('readline-sync');

let celsiusTemp = Number(prompt.question("Digite a temperatura a ser convertida para Fahrenheit:"));

let fahrenheitTemp;

fahrenheitTemp = (celsiusTemp*(9/5)) + 32

console.log(`A temperatura de ${celsiusTemp}ºC é equivalente a ${fahrenheitTemp}ºF`);