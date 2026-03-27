//EX18: Realizar uma função Switch para selecionar entre opções.
const prompt = require("readline-sync");

console.log("---MENU DO VERIFICA RODIZIO---");
const option = prompt.question("QUAL FINAL DA PLACA:");

switch (true) {
  case (option === "1" || option === "2"):
    console.log("Segunda-feira");
    break;
  case (option === "3" || option === "4"):
    console.log("Terça-feira");
    break;
  case (option === "5" || option === "6"):
    console.log("Quarta-feira");
    break;
  case (option === "7" || option === "8"):
    console.log("Quinta-feira");
    break;
  case (option === "9" || option === "0"):
    console.log("Sexta-feira");
    break;
  default:
    console.log("Opção invalida. Tente novamente");
}
