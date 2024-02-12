// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// Es:
// abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
// La nostra funzione viene dichiarata ad esempio così function tagliaArray(array, posizioneMin, posizioneMax)
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “posizioneMin” e “posizioneMax”
// Nel nostro caso, se la chiamassimo così tagliaArray(arrayNumeri, 2, 4) ci restituirebbe un array così composto:
// [2, 3, 4]



const arrayNumeri = [0, 1, 2, 3, 4, 5, 6];

let array = [];

function tagliaArray(array, posizioneMin, posizioneMax) {

    for (let i = 0; i < arrayNumeri.length; i++) {


        array = arrayNumeri.slice(posizioneMin, posizioneMax + 1);

    }
    return array;
}
tagliaArray(array, 2, 4);
document.getElementById("array").innerText = "L'array (" + arrayNumeri + ") dopo che è stato tagliato, risulta: " + tagliaArray(array, 2, 4);