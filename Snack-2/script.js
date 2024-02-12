// Scrivi una funzione che fonda due array presi come parametri (date per scontato che abbiano lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3const
const lettersArray = ["a", "b", "c"];


const numbersArray = [1, 2, 3];
let mixedArray = [];


for (let i = 0; i < lettersArray.length; i++) {

    mixedArray.push(numbersArray[i]);
    mixedArray.push(lettersArray[i]);


}

document.getElementById("array").innerText = mixedArray;