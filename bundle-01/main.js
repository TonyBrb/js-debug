/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/*
1- Dovrebbe stampare in console la i che va da 0 a 4
2- No
3- Si a riga 14 i > 5 dovrebbe essere i < 5, perchè allo stato attuale non entrerebbe mai nel ciclo
*/


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

/*
1- Dovrebbe aggiungere 5 al numero che passiamo come parametro se quest'ultimo è pari e ritornarlo, altrimenti ritorna il numero stesso
2- Si, a riga 27 ci dovrebbe essere il doppio o il triplo uguale
3- No
*/


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

/*
1- Dovrebbe stampare in console la i che va da 0 a 4
2- Si, a riga 42 al posto delle virgole ci vanno i punti e virgola
3- No
*/


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/*
1- Dovrebbe restituire i numeri pari dell'array numbers
2- Si, a riga 58 dopo i++ non ci va il punto e virgola, a riga 59 ci vuole doppio o triplo uguale e dopo la parentesi tonda non ci va il punto e virgola
3- Si a riga 58 numbers.length - 1 è sbagliato, dovrebbe essere numbers.length, a riga 59 dovrebbe essere (numbers[i] % 2 === 0), a riga 60 dovrebbe quindi essere evenNumbers.push(numbers[i]); a riga 62 return evenNumbers dovrebbe essere dopo il for quindi a riga 63 dopo la graffa che chiude il for
*/