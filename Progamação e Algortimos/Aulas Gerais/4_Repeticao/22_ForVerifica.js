//Ler 10 numeros e dizer quantos são negativos e positivos
const prompt = require("readline-sync");

let numNegativo = 0;
let numPositivo = 0;

for (let i = 0; i < 10; i++) {
  let valorNum = Number(
    prompt.question("Digite o número a ser avaliado:"),
  );

  if(valorNum < 0){
    numNegativo++;
  }
  else{
    numPositivo++;
  }
}

console.log(`Foram ${numPositivo} positivos e ${numNegativo} negativos`)
