// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

// chiedo il numero di 4 cifre all'utente 
const userNumber = prompt('dammi un numero a quattro cifre')
// console.log(userNumber)

// do una variabile somma che mi servirà dopo
let sum = 0
// inizio un ciclo for per scorrere le 4 cifre che mi ha dato l'utente 
for (let i = 0; i < userNumber.length; i++) {
    let thisNumber = parseInt(userNumber[i])
    console.log(userNumber[i])
    sum += thisNumber
}
console.log(sum)