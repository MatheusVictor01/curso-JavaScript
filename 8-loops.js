console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 13;
const estaAcompanhada = false;
let  temPassagemComprada = false;
const destino = "iracema";

console.log("\nDestinos possivéis: \n");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador =0;
let destinoExiste = false;
while(contador<3){
    
  if(listaDeDestinos[contador] == destino){
    destinoExiste = true;
    break;
  }
    contador +=1;
}
console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste){
  console.log("Boa viagem!");
} else{
  console.log("Desculpa tivemos um erro!");
}

for(let cont = 0 ;cont < 3 ; cont ++){
    
  if(listaDeDestinos[contador] == destino){
    destinoExiste = true;
  }

}