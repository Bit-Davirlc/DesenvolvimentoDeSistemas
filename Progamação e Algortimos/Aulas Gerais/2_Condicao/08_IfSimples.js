//EX08: Criação de condição para verificação de desconto em abastecimento de combustivel.

const prompt = require('readline-sync');

let combustivelAbastecido = Number(prompt.question("Quanto combustivel sera abastecido? (Valor do combustivel R$6,00)\n"));
let valor = (combustivelAbastecido * 6)

while (combustivelAbastecido < 0){
    console.log(`Valor inválido! Digite um valor maior que 0.`)
    combustivelAbastecido = Number(prompt.question("Quanto combustivel sera abastecido?"))
}

if (combustivelAbastecido > 20){
    console.log(`A quantidade de combustivel abastecido foi de ${combustivelAbastecido} e o valor total foi de ${valor}, e não tera desconto`)
}
else{
    console.log(`A quantidade de combustivel abastecido foi de ${combustivelAbastecido} e o valor total foi de ${valor} e tera desconto`)
}
