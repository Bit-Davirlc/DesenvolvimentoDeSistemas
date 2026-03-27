//EX17: Realizar uma função Switch para selecionar entre opções.
const prompt = require("readline-sync");

console.log("---MENU DO BANCO--- \n1 - Saldo \n2 - Saque \n3 - Segurança \n4 - Atedimento");
const option = prompt.question("Escolha a opcao: ");

switch (parseInt(option)) {
  case 1:
    console.log("O seu saldo é de R$120.00");
    break;
  case 2:
    console.log("As notas disponiveis são de R$50, R$20");
    break;
  case 3:
    console.log("Adicione a função de dois fatores");
    break;
  case 4:
    console.log("Aguarde para ser atendido");
    break;
  default:
    console.log("Opção invalida. Tente novamente");
}
