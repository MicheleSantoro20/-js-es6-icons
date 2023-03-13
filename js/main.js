/*Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente. */

let containerDom = document.getElementById('container');

const colors = [0, 1, 2, 3, 4, 5, 6, 7 ,8 ,9 , 'a', 'b', 'c', 'd', 'e', 'f']

let color = "";

let animals = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color
	}
];

animals.forEach (element => {
    element.color = randomcolor(colors);
})

animals.forEach(element => {
    let animalsCreateBox = `<div class="flex"><i class="fa-solid ${element.prefix}${element.name}   box" style="color:#${element.color}"></i></div>`
    containerDom.innerHTML += animalsCreateBox ;
});


let selectDom = document.getElementById('selector');


selectDom.addEventListener ('change', 
    function(){
        const filteredItems = animals.filter (element => {
            if (element.type == selectDom.value) {
                return element;
            } else if ( selectDom.value == "all") {
                return element;
            }
        })

        containerDom.innerHTML = '';
        filteredItems.forEach(element => {
            let animalsCreateBox = `<div class="flex"><i class="fa-solid ${element.prefix}${element.name}   box" style="color:#${element.color}"></i></div>`
            containerDom.innerHTML += animalsCreateBox ;
        });
})

function randomcolor(colors) {
    let combinazione = "";
    let generazione = [];
    for (let i = 0; i < 6; i++ ) {
        let numeroCasuale = Math.floor(Math.random() * colors.length);

        
        generazione.push (numeroCasuale);

        combinazione += colors[numeroCasuale]
    }
    console.log(generazione);
    console.log(combinazione);
    return combinazione

}
