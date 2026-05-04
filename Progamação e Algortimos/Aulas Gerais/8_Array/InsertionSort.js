const lista = [1, 4, 3, 2, 7, 10, 5, 8, 6, 9, 15, 12, 11, 14, 13, 20, 18, 17, 16, 19];


function insertionSort(lista) {
    for (let i = 1; i < lista.length; i++) {
        let atual = lista[i];
        let j = i - 1;

        while (j >= 0 && lista[j] > atual) {
            lista[j + 1] = lista[j];
            j--;
        }

        lista[j + 1] = atual;
    }
    return lista;
}

console.log(insertionSort(lista));
