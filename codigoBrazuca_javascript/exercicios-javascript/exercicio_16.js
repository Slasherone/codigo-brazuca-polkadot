function palindromo(texto) {
    const textoTratado = texto.replace(/\s+/g, '').toLowerCase(); // Remove espaços e converte para minúsculas
    const textoRevertido = textoTratado.split('').reverse().join('');
    return textoTratado === textoRevertido;
}

console.log(palindromo("ada"));
