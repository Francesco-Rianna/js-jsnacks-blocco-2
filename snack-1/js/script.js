// - L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo

// chiedo all'utente un numero
const userNumber = parseInt(prompt('dimmi un numero'))

// se il numero è pari lo stampo, se è dispari stampo il numero successivo 
if (userNumber % 2 === 0) {
    console.log(userNumber)
} else {
    console.log(userNumber + 1)
}
