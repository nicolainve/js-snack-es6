/** 
 * JSnack 1
 * Creare un array di oggetti
 * Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e peso.
 * Stampare a schermo la bici con peso minore con handlebars.
*/

var bikes = [
    {
        name: 'Canyon',
        weight: 7
    },
    {
        name: 'Specialized',
        weight: 8
    },
    {
        name: 'Trek',
        weight: 9
    }
];

let lightCycle = null;

bikes.forEach((element) => {
    if (lightCycle == null || lightCycle.weight > element.weight) {
        lightCycle = element;
    }
});

const {name, weight} = lightCycle;
$('.container').html(
    `<div>
        <h3>La bici più leggera è la ${name}</h3>
        <h3>Il suo peso è di ${weight}kg</h3>
    </div>`
);


/**
 * JSnack 2
    Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
    Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
    Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array) compresa tra i due numeri inseriti dall'utente.
*/

const drivers = ['Vettel', 'Raikkonen', 'Hamilton', 'Leclerc', 'Bottas', 'Verstappen'];

let tot = drivers.length - 1;

let min = parseInt( prompt('Inserisci un numero tra 0 e ' + tot).trim() );

let max = parseInt( prompt('Inserisci un numero tra ' + min + ' e ' + tot).trim() );

let newArray = [];

drivers.forEach((element, index) => {
    if (index <= min && index >= max) {
        newArray.push(element);
    }
});

newArray = drivers.filter((element, index) => {
    return min <= index && max >= index;
});

console.log(newArray);