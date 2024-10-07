function quantidadeCaracter(texto, caracter) {
    let count = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            count++;
        }
    }
    return count;
}

console.log(quantidadeCaracter("ronaldinho", "a"));
