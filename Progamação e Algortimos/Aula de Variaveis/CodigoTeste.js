const prompt = require("readline-sync");

let valueInput;

// O loop continuará enquanto a entrada for diferente de aspas
while (valueInput !== '"') {
  
  console.log('--- Nova Venda (Digite " para sair) ---');
  valueInput = prompt.question("Digite o valor da compra: ");

  // Verifica se o usuário quer sair antes de processar os cálculos
  if (valueInput === '"') {
    console.log("Sistema encerrado.");
    break; 
  }

  // Converte a string para número para realizar os cálculos
  let numericValue = Number(valueInput);
  let discount;
  let finalValue;

  if (isNaN(numericValue)) {
    console.log("Por favor, digite um número válido ou aspas para sair.");
    continue; // Volta para o início do loop
  }

  // Sua lógica de descontos
  if (numericValue < 100) {
    discount = 0; // 0% de desconto
    finalValue = numericValue;
  } else if (numericValue >= 100 && numericValue < 200) {
    discount = 5; // 5%
    finalValue = numericValue * 0.95;
  } else if (numericValue >= 200 && numericValue < 500) {
    discount = 10; // 10%
    finalValue = numericValue * 0.9;
  } else {
    discount = 20; // 20%
    finalValue = numericValue * 0.8;
  }

  console.log(`O valor original: R$ ${numericValue.toFixed(2)}`);
  console.log(`Desconto aplicado: ${discount}%`);
  console.log(`Valor final: R$ ${finalValue.toFixed(2)}\n`);
}