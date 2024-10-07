function fibonacci(n) {

    let termoDesejado = n - 2;

    let a = 0;
    let b = 1;
    let c = 0;
    let fibonacci = "";

    fibonacci += a + " " + b;

    for (let i = 1; i <= termoDesejado; i++) {
        c = a + b;
        fibonacci += " " + c;
        a = b;
        b = c;
    }

    return fibonacci;
}

console.log(fibonacci(10));
