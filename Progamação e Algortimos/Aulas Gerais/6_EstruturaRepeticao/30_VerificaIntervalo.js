// 02) Solicitar um número entre 1 e 4. Se a pessoas digitar um número diferente, mostrar a mensagem "entrada inválida" e solicitar o número novamente. Se digitar correto mostrar o número digitado.

const prompt = require("readline-sync");

let numVerifica = 0;

do {
    numVerifica = Number(prompt.question("Digite um numero entre 1 e 4 (Digite -99 para encerrar):"));

    if (numVerifica === -99){
        break
    }

    if (numVerifica >= 1 && numVerifica <=4){
        console.log(`O numero digitado é ${numVerifica}`);
    }

    else{
        console.log(`O numero digitado é inválido`)
    }

} while (numVerifica != -99)