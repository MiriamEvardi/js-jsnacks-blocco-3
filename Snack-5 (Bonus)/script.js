// Scrivi una funzione che accetti una stringa come parametro e restituisca la stessa stringa ma con le iniziali delle parole tutte in maiuscolo
// Es: funzioneEsempio("nel mezzo del cammin di nostra vita")  :freccia_destra:  "Nel Mezzo Del Cammin Di Nostra Vita"


function upperCase(string) {

    let splittedWords = string.split(" ");

    for (let i = 0; i < splittedWords.length; i++) {

        splittedWords[i] = splittedWords[i].charAt(0).toUpperCase() + splittedWords[i].slice(1);
    }

    console.log(splittedWords)

    let sentence = splittedWords.join(" ");

    return sentence;

}





let commedia = upperCase("nel mezzo del cammin di nostra vita");

document.getElementById("word").innerText = commedia;