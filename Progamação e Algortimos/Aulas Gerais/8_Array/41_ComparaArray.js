// 3. Crie um array com números e descubra qual é o maior valor.

const listaNumeros = [23, 57, 12, 45, 9, 66, 31, 54, 78];

let numTemp = listaNumeros[0];

for (let i = 1; i < listaNumeros.length; i++) {
  if (listaNumeros[i] > numTemp) {
    numTemp = listaNumeros[i];
  }
}

console.log(`Maior valor: ${numTemp}`);
