// 01) Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de 21 anos. Total de pessoas com mais de 50 anos. O programa termina quando idade for =-99.

const prompt = require("readline-sync");

let idadeVerifica = 0;
let somaIdade_1 = 0;
let somaIdade_2 = 0;

do {
    idadeVerifica = Number(prompt.question("Digite a idade da pessoa (Digite -99 para encerrar):"));

    if (idadeVerifica === -99){
        break;
    }

    if(idadeVerifica < 21){
        somaIdade_1++;
        console.log(`Idade menor que 21 adicionada`)
    }
    else if(idadeVerifica > 50){
        somaIdade_2++;
        console.log(`Idade maior que 50 adicionada`)
    }
} while (idadeVerifica != -99);

console.log(`O total de pessoas menores de 21 anos é ${somaIdade_1} e de maiores de 50 é de ${somaIdade_2}`);