function verificaOrdemCrescente(numeros) {
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeros[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(verificaOrdemCrescente([2, 1, 3, 4]));
