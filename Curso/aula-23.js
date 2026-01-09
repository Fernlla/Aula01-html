const fatorial = (Valor) => {
    if (Valor === 0|| Valor === 1) {
    return 1;
}
    return Valor * fatorial(Valor - 1);
    // 4 * Fatorial 3
    // 3 * Fatorial 2
    // 2 * Fatorial 1 -> 1
    // 1
}; 

console.log(fatorial(100));