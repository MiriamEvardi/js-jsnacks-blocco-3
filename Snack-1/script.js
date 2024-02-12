//Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")

function reverseString(word) {
    let reverse = "";

    for (let i = word.length - 1; i >= 0; i--) {

        reverse += word[i];
    }
    document.getElementById("word").innerText = reverse;
}


reverseString("Parallelepipedo");
