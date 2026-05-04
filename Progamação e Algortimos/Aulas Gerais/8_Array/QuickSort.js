const lista = [1, 4, 3, 2, 7, 10, 5, 8, 6, 9, 15, 12, 11, 14, 13, 20, 18, 17, 16, 19];

function quickSort(lista) {
    if (lista.length <= 1) return lista;

    let pivo = lista[0];
    let menores = [];
    let maiores = [];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < pivo) {
            menores.push(lista[i]);
        } else {
            maiores.push(lista[i]);
        }
    }

    return [...quickSort(menores), pivo, ...quickSort(maiores)];
}

console.log(quickSort(lista));