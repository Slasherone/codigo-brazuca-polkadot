function somaDigitos(numero) {
    let soma = 0;
    let numeroEmTexto = numero.toString();

    for (let i = 0; i < numeroEmTexto.length; i++) {
        soma += parseInt(numeroEmTexto[i]);
    }

    return soma;
}

console.log(somaDigitos(44));
