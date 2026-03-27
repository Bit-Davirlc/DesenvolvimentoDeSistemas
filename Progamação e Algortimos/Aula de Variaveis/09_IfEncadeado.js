//EX09: Criação de condições para avaliação de aluno com base em média

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a primeira nota: ", function(n1) {
  rl.question("Digite a segunda nota: ", function(n2) {
    
    let nota1 = parseFloat(n1);
    let nota2 = parseFloat(n2);

    let media = (nota1 + nota2) / 2;

    console.log("Média: " + media.toFixed(2));

    if (media == 10) {
        console.log("MB");
    } else if(media >= 7.5){
        console.log("B");
    } else if(media >= 5.0){
        console.log("R");
    } else {
        console.log("I")
    }

    rl.close();
  });
});