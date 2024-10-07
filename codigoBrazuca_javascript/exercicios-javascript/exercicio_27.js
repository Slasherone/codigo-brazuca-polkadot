function somaPares(numeros) {
    return numeros.reduce((soma, num) => {
        if (num % 2 === 0) {
            return soma + num;
        } else {
            return soma;
        }
    }, 0);
}


console.log(somaPares([1, 2, 3, 4, 5, 6]));
