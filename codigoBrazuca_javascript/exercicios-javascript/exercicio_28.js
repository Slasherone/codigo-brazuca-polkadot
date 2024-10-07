function multiplicaLista(numeros) {
    return numeros.reduce((multiplicacao, num) => multiplicacao * num, 1);
}

console.log(multiplicaLista([1, 2, 3, 4]));
