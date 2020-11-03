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