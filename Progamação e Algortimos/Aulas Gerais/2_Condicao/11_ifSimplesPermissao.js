//EX11: Definir se permitido ou negado a partir da idade digitada
const prompt = require('readline-sync');

let num = Number(prompt.question("Digite a idade:"));

if (num >= 18){
    console.log(`Acesso Permitido`);
}
else{
    console.log(`Acesso Negado`);
}