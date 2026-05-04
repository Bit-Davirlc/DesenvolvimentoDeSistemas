const lista = [1, 4, 3, 2, 7, 10, 5, 8, 6, 9, 15, 12, 11, 14, 13, 20, 18, 17, 16, 19];

function mergeSort(lista) {
    if (lista.length <= 1) return lista;

    let meio = Math.floor(lista.length / 2);
    let esquerda = mergeSort(lista.slice(0, meio));
    let direita = mergeSort(lista.slice(meio));

    return merge(esquerda, direita);
}

function merge(esq, dir) {
    let resultado = [];
    let i = 0, j = 0;

    while (i < esq.length && j < dir.length) {
        if (esq[i] < dir[j]) {
            resultado.push(esq[i++]);
        } else {
            resultado.push(dir[j++]);
        }
    }

    return [...resultado, ...esq.slice(i), ...dir.slice(j)];
}

console.log(mergeSort(lista));
