console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const passagemComprada = true;

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
        console.log("Comprador NÃO é maior de idade, não pode ser vendido a passagem!");
}


console.log("Embarque: \n\n")
if(idadeComprador >=18 && passagemComprada == true ){
    console.log("Boa Viagem!");
}else{
    console.log("Você não pode embarcar! \n");
}
console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);