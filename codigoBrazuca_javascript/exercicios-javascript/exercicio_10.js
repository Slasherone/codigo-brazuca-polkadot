function contarVogais(texto) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of texto) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(contarVogais("Banana"));
