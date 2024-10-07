function divisores(numeros) {
    let divisores = [];
    for (let i = 1; i <= numeros; i++) {
        if (numeros % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

console.log(divisores(12));