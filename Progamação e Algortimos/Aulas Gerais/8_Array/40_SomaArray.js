// 2. Crie um array com 5 números e faça a soma de todos eles.

const listaNumeros = [1, 2, 4, 8, 16, 32, 64, 128, 256];
let soma = 0;

for(let i = 0; i < listaNumeros.length; i++){
    soma += listaNumeros[i];
    console.log(`${soma}`);
}