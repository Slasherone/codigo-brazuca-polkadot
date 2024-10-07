function alteraVogais(texto) {
    return texto.replace(/[aeiouAEIOU]/g, '*');
}

console.log(alteraVogais("Hello, World!"));
