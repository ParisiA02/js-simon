/*
    1 definisco una funzione che generi dei numeri casuali
    2 faccio scorrere un timer per permettere di memorizzare i numeri
    3 richiedo di inserire numeri
    4 confronto
    5 stampo il confronto
*/

let numeri = [];

for(let i = 0; i < 5; i++){
    numeri[i] = randomNum();
}
let container = document.querySelector(".container");
container.innerHTML += numeri;

let numeriIndovinati = [];

let timer = document.querySelector(".timer");
let time = 5;

let risultato = document.querySelector(".risultato");

let clock = setInterval(() => {
    time--;
    timer.innerHTML = time;
    if(time === 0){
        clearInterval(clock);
        container.classList.add("display-none");
        timer.classList.add("display-none");
        checkNumeri();
        risultato.innerHTML += numeriIndovinati;
    }
}, 1000);


//funzioni
function randomNum(){
    let numero = Math.floor(Math.random() * 100 + 1);
    if (!(numeri.includes(numero))){
        numeri.push(numero);
    }
    return numero;
}

function checkNumeri() {
    let numeriIpotesi = []; 
    for(let i = 0; i < 5; i++){
        numeriIpotesi[i]= parseInt(prompt("Indovina i numeri: "));
    }
    for(let i = 0; i < numeri.length; i++){
        if((numeri.includes(numeriIpotesi[i]))){
            numeriIndovinati.push(numeriIpotesi[i]);
        }
    }
}