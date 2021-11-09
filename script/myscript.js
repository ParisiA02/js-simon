/*
    1 numeri generati casualmente
    2 timer per memorizzare
    3 richiesta inserire numeri
    4 confronto
    5 stampa confronto
*/

let numeri = [];

for(let i = 0; i < 5; i++){
    numeri[i] = randomNum();
}
let container = document.querySelector(".container");
container.innerHTML += numeri;

let timer = document.querySelector(".timer");
let time = 5;

let clock = setInterval(() => {
    time--;
    timer.innerHTML = time;
    if(time === 0){
        clearInterval(clock);
    }
}, 1000);


let numeriIpotesi = []; 
for(let i = 0; i < 5; i++){
    numeriIpotesi[i]= parseInt(prompt("Indovina i numeri: "));
}

let numeriIndovinati = [];
for(let i = 0; i < numeri.length; i++){
    if((numeri.includes(numeriIpotesi[i]))){
        numeriIndovinati.push(numeriIpotesi[i]);
    }
}
container.innerHTML += numeriIndovinati;

//funzioni
function randomNum(){
    let numero = Math.floor(Math.random() * 100 + 1);
    if (!(numeri.includes(numero))){
        numeri.push(numero);
    }
    return numero;
}