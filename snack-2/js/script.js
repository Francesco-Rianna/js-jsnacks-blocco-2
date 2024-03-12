// - L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt('dimmi una parola')
const secondWord = prompt('dimmi una parola')

if (firstWord.length > secondWord.length) {
    alert(firstWord)
    alert(secondWord)
} else {
    alert(secondWord)
    alert(firstWord)
}