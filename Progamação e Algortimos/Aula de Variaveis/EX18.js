//EX18: Realizar uma função Switch para selecionar entre opções.
const prompt = require("readline-sync");

console.log("---MENU DO VERIFICA RODIZIO---");
const option = prompt.question("QUAL FINAL DA PLACA:");

switch (parseInt(option)) {
  case 1:
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
  case 4:
    console.log("Terça-feira");
    break;
  case 5:
  case 6:
    console.log("Quarta-feira");
    break;
  case 7:
  case 8:
    console.log("Quinta-feira");
    break;
  case 9:
  case 0:
    console.log("Sexta-feira");
    break;
  default:
    console.log("Opção invalida. Tente novamente");
}
