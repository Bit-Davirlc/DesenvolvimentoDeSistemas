const prompt = require("readline-sync");

let valueInput;

while (valueInput !== 'sair') {
  
  valueInput = prompt.question("Digite o valor da compra ou digite 'SAIR' para encerrar:");
  
  if (valueInput.toLowerCase() === 'sair') {
    console.log("Sistema encerrado.");
    break;
  }
  
  let valuePurchase = Number(valueInput)
  let discount;
  let finalValue;
  let discountLabel;
  
  if (isNaN(valuePurchase)) {
    console.log("Por favor, digite um número válido ou digite 'SAIR' para sair.");
    continue; // Volta para o início do loop
  }

  if (valuePurchase < 100) {
    discount = 1;
    discountLabel = "0";
    finalValue = valuePurchase;
  } else if (valuePurchase >= 100 && valuePurchase < 200) {
    discount = 0.95;
    discountLabel = "5%";
    finalValue = valuePurchase * discount;
  } else if (valuePurchase >= 200 && valuePurchase < 500) {
    discount = 0.90;
    discountLabel = "10%";
    finalValue = valuePurchase * discount;
  } else {
    discount = 0.80;
    discountLabel = "20%";
    finalValue = valuePurchase * discount;
  }

  console.log(`O valor final da compra sem desconto é de ${valuePurchase}.`);
  console.log(`O valor final da compra com desconto de ${discountLabel} é ${finalValue}.`);
}
