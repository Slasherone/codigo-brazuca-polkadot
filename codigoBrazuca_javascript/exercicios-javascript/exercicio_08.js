function media(numeros) {
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    return soma / numeros.length;
}

console.log(media([5, 5, 5, 5]));
