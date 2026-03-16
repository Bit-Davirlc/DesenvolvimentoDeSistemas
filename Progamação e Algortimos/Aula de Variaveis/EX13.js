const prompt = require("readline-sync");
//Conferir o Loop para testes
while(age === 99){    
    
    let age = Number(prompt.question("Digite a idade do usuario:"));

    if (age <= 12) {
        console.log(`O Usuario é um(a) criança de ${age} anos`);
    } else if (age >= 13 && age <= 17) {
        console.log(`O Usuario é um(a) adolescente de ${age} anos`);
    } else if (age >= 18 && age <= 59) {
        console.log(`O Usuario é um(a) adulto de ${age} anos`);
    } else {
        console.log(`O Usuario é um(a) idoso de ${age} anos`);
    }
}