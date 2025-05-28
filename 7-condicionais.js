console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
console.log("Destinos possivéis:");
console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade.");
//     listaDeDestinos.splice(1,1); //removendo item
// }else{
//     if(estaAcompanhada){ //a pessoa estiver acompanhada
//         console.log("A pessoa está acompanhada");
//         listaDeDestinos.splice(1,1); //removendo item
//     }else {
//     console.log("Comprador NÃO é maior de idade, não pode ser vendido a passagem!")
//     }
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Compra efetuada.");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
        console.log("Comprador NÃO é maior de idade, não pode ser vendido a passagem!")
    }

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);