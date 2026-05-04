const lista = [1, 4, 3, 2, 7, 10, 5, 8, 6, 9, 15, 12, 11, 14, 13, 20, 18, 17, 16, 19];

function bubbleSort(lista) {
    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length - 1 - i; j++) {
            if (lista[j] > lista[j + 1]) {
                [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
            }
        }
    }
    return lista;
}

console.log(bubbleSort(lista));