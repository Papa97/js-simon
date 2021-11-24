const container = document.getElementById('container');
const divNumeri = document.getElementById('numeri');
const arrNumeri = [];
const urNumeri = [];
const soluzione = [];

numeriRandom();

console.log(arrNumeri , 'questi sono i numeri mostrati');
// fa scomparire i numeri della soluzione dopo tot secondi
const num = arrNumeri.forEach(nume => {
    const clock = setInterval(function(){
        divNumeri.classList.add('display-none')
    },5000);
    divNumeri.innerHTML += nume + ' '; 
});


const clockUno = setTimeout(function(){
// serve per inserire i numeri dell'utente nel array urNumeri

    for (let i = 0; i < 5 ; i++){
        const numberUser = parseInt(prompt('inserisci il tuo numero'));
        urNumeri.push(numberUser);
        console.log(urNumeri[i]);
    }
// se i numeri inseriti sono giusti li mette nell'array soluzione
    for (let i = 0; i < arrNumeri.length; i++){
        if (arrNumeri[i] == urNumeri[i]){
            soluzione.push(urNumeri[i])
        }
    }
    
console.log(urNumeri, 'questo e ur Numeri');
console.log(soluzione,'questo e la tua soluzione');

},5001)


function numeriRandom() {
    for (let i = 0; i < 5; i++){
        let numArray = Math.floor(Math.random()*100) + 1;
        arrNumeri.push(numArray);
    }
}