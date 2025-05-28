console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,   
);

listaDeDestinos.push(`Manaus`); // Adicionando um item na lista.
console.log("Destinos possivéis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // Removendo  um item na lista.
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[2]);
