// Scrivi una funzione  che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente
// Es: riordina("webmaster") :freccia_destra: "abeemrstw"




function isOrdered(word) {

    return word.split("")
        .sort()
        .join("");
}

let randomWord = "webmaster";

document.getElementById("word").innerText = isOrdered(randomWord);