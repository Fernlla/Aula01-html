const COMUSUMO_AUTOMOVEL = 12; // km/l

function GASTO_DE_GASOLINA(TempoGasto, velocidadeMedia) {
    const distacia = velocidadeMedia * TempoGasto;
    const consumoTotal = distacia / COMUSUMO_AUTOMOVEL;
    return consumoTotal.toFixed(3);
}

console.log ('Gasto de gasolina:', GASTO_DE_GASOLINA(10, 85), 'litros');
console.log ('Gasto de gasolina:', GASTO_DE_GASOLINA(2, 92), 'litros');
console.log ('Gasto de gasolina:', GASTO_DE_GASOLINA(22, 67), 'litros');