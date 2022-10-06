//Il programma dovrà chiedere all'utente:

 //il numero di chilometri che vuole percorrere
 const kmUtente = Number(prompt('Quanti kilometri vuoi percorrere?'))
 console.log(kmUtente);
 //e l'età del passeggero.
 const etaUtente = Number(prompt('Quanti anni hai?'))
 console.log(etaUtente);
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
const prezzoBiglietto = kmUtente * 0.21

//va applicato uno sconto del 20% per i minorenni
let prezzoBigliettoMinori = 0
let scontoMinori = 0
let prezzoBigliettoOver = 0 
let scontoOver = 0

if (etaUtente < 18) {
  scontoMinori = (prezzoBiglietto * 20)/100
  prezzoBigliettoMinori = prezzoBiglietto - scontoMinori
  prezzoBigliettoMinori = prezzoBigliettoMinori.toFixed(2);
  console.log(prezzoBigliettoMinori);
  document.getElementById('prezzo_finale').innerHTML = 'Il tuo prezzo è' + ' ' + prezzoBigliettoMinori + ' ' + '€';
} else if (etaUtente > 65){
    scontoOver = (prezzoBiglietto * 40)/100;
    prezzoBigliettoOver = prezzoBiglietto - scontoOver;
    prezzoBigliettoOver = prezzoBigliettoOver.toFixed(2);
    console.log(prezzoBigliettoOver);
    document.getElementById('prezzo_finale').innerHTML = 'Il tuo prezzo è' + ' ' + prezzoBigliettoOver + ' ' + '€';

} else {
    console.log(prezzoBiglietto);
    document.getElementById('prezzo_finale').innerHTML = 'Il tuo prezzo è' + ' ' + prezzoBiglietto + ' ' + '€';

}


//va applicato uno sconto del 40% per gli over 65.