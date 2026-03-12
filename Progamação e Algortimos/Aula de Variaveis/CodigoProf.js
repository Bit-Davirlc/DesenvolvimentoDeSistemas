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

    console.log("Média: " + media);

    if (media > 6) {
      console.log("Aluno aprovado");
    } else {
      console.log("Aluno reprovado");
    }

    rl.close();
  });
});