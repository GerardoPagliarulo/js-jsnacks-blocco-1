/**
 * Snack 1
 * 
 * L’utente inserisce due parole in successione, con due prompt. 
 * Il software stampa la parola più lunga. 
 * Utilizza una funzione per determinare e ritornare la parola più lunga.
 */

//  var parolaUtente1
//  var parolaUtente2

//  // L’utente inserisce due parole in successione, con due prompt.
//  parolaUtente1 = prompt('Inserisci una parola:').trim();
//  parolaUtente1 = parolaUtente1.toLowerCase();

//  parolaUtente2 = prompt('Inserisci una parola:').trim();
//  parolaUtente2 = parolaUtente2.toLowerCase();

//  // Stampare la parola più lunga
//  var parolaLunga = parolaLunghezza(parolaUtente1, parolaUtente2);
//  console.log('La parola più lunga è:', parolaLunga);


//  // Funzione
//  function parolaLunghezza(parola1, parola2) {

//      if (parola1.length > parola2.length) {
//         return parola1;
//      }
//      else if (parola1.length < parola2.length) {
//         return parola2;
//      }
     
//      return  'Le due parole sono uguali';
//  }




 /**
  * Snack 2
  * 
  * Inserisci un numero, 
  * se è pari stampa il numero, 
  * se è dispari stampa il numero successivo.
  */

//   var numeroUtente

//   // Imserisci un numero
//   numeroUtente = parseInt( prompt('Inserisci un numero:') );

//   // Se è pari stampa il numero, se è dispari stampa il numero successivo.
//   var numPariDispari = isPari(numeroUtente);
//   console.log(numPariDispari);

  
//   // Funzioni
//  function isPari(a) {
//      if (a % 2 == 0) {
//         return a;
//      }
    
//      return (a + 1);
//  }




/**
 * Snack 3
 * 
 * Generatore di “nomi cognomi” casuali: 
 * prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) 
 * e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), 
 * Gatsby vuole generare una falsa lista di 5 invitati.
 */

//  var listaNomi
//  var listaCognomi
//  var listaRandom 

//  // Liste
//  listaNomi = ['Michele', 'Fabio', 'Roberto'];
//  listaCognomi = ['Forghieri', 'Papagni', 'Marazzini'];
//  listaRandom = [];

//  for (var i = 0; i < 5; i++) {
//      var listaNomiRandom = Math.floor( Math.random() * ((listaNomi.length -1) + 1));
//      var listaCognomiRandom = Math.floor( Math.random() * ((listaCognomi.length - 1) + 1));

//      var nuovoNomeCognome = listaNomi[listaNomiRandom] + ' ' + listaCognomi[listaCognomiRandom];

//      listaRandom.push(nuovoNomeCognome);
//  }

//  console.log(listaRandom);




 /**
  * Snack 4
  * 
  * Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3) e 
  * fai la somma di tutti gli elementi che sono in posizione dispari. 
  * Prova prima senza funzione e poi con funzione.
  */

  var numInteri
//   var somma = 0;

  // Array di numeri interi
  numInteri = [1, 4, 2, 15, 120, 17, 3];

  // Invocazione
  var sommaPosizioneDispari = sommaPosizioneDispariArray (numInteri);
  console.log(sommaPosizioneDispari);

//   // Somma di tutti gli elementi che sono in posizione dispari
//   for (var i = 1; i < numInteri.length ; i += 2) {
//       var posizioneDispari = numInteri[i];
      
//       somma += numInteri[i];
//   }

//   console.log(somma);


// Funzione
function sommaPosizioneDispariArray(nomArray) {
    var risultato = 0;

    for (var i = 1; i < nomArray.length ; i += 2) {
        var posizioneDispari = nomArray[i];
      
        risultato += nomArray[i];
    }

    return risultato;
}






