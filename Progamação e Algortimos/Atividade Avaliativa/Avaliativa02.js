//EX02: Crie uma função chamada calcular_salario(salario_base, vendas) que calcule o salário final de um funcionário:
// Se o funcionário vender mais de R$ 3.000, ele recebe um bônus de 10% sobre o salário base.
// Caso contrário, ele recebe apenas o salário base.
// Depois:
// •	Peça ao usuário o salário base e o valor das vendas
// •	Use a função
// •	Exiba o salário final
// Requisitos:
// •	Entrada: salário base e valor das vendas
// •	Processamento: se simples
// •	Saída: salário final

const prompt = require('readline-sync');

let salarioBase = Number(prompt.question("Digite o valor base do salario do funcionario:"));
let valorVendas = Number(prompt.question("Digite o valor vendido pelo funcionario:"));

let calcularSalario

if (valorVendas > 3000){
    calcularSalario = salarioBase * 1.1
    console.log(`O salario base do funcionario é de R$${salarioBase.toFixed(2)} e recebeu o bonus de 10% logo seu salário final foi de R$${calcularSalario.toFixed(2)} `)
}

else{
    calcularSalario = salarioBase * 1
    console.log(`O salario base do funcionario é de R$${salarioBase.toFixed(2)}, mas não recebeu o bonus de 10% logo seu salário final foi de R$${calcularSalario.toFixed(2)} `)
}

