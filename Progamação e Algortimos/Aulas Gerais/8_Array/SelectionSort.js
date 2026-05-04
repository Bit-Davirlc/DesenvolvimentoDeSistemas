const lista = [1, 4, 3, 2, 7, 10, 5, 8, 6, 9, 15, 12, 11, 14, 13, 20, 18, 17, 16, 19];

function selectionSort(lista) {
    for (let i = 0; i < lista.length; i++) {
        let menor = i;

        for (let j = i + 1; j < lista.length; j++) {
            if (lista[j] < lista[menor]) {
                menor = j;
            }
        }

        [lista[i], lista[menor]] = [lista[menor], lista[i]];
    }
    return lista;
}

console.log(selectionSort(lista));
