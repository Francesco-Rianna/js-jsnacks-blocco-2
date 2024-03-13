// - Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari., 
const numbers = [5, 7, 8, 9, 3, 2, 1, 4];
// prendo gli elementi del dom
const redElement = document.querySelector('.red');
const greenElement = document.querySelector('.green');
// creo le variabiali red element e green element per poi stamparle in pagina dopo

// scorro gli elementi dell'array con un ciclo for
for (let i = 0; i < numbers.length; i++) {
    let thisNumber = numbers[i]
    if (thisNumber % 2 === 0) {
        greenElement.append(thisNumber)

    } else {
        redElement.append(thisNumber)
    }

}