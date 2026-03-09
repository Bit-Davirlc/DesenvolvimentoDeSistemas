let valorA = 10;
let valorB = 20;
//Variavel temp é usada para armazenar temporariamente o valor de valorA durante a troca
let temp;

temp = valorA;
valorA = valorB;
valorB = temp;

console.log(`valorA: ${valorA}`);
console.log(`valorB: ${valorB}`);