const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro numero: ", (n1) => {
    rl.question("Digite o segundo numero: ", (n2) => {

        let numero1 = Number(n1);
        let numero2 = Number(n2);

        let soma = numero1 + numero2;
        let subtracao = numero1 - numero2;
        let multiplicacao = numero1 * numero2;

        let divisao;
        if (numero2 !== 0) {
            divisao = numero1 / numero2;
        } else {
            divisao = "Divisão por zero não é permitida";
        }

        console.log(`Soma: ${soma}`);
        console.log(`Subtração: ${subtracao}`);
        console.log(`Multiplicação: ${multiplicacao}`);
        console.log(`Divisão: ${divisao}`);

        rl.close();
    });
});