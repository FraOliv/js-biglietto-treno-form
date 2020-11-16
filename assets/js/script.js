// il programma calcola il prezzo del biglietto del treno
// in base all'età e ai km che l'utente vuole percorrere
// se l'utente è minorenne sconto 20%
// se l'utente è over 65 sconto 40%


// al click del bottone crea calocolo il prezzo del biglietto

var btn = document.getElementById("btnCrea");

btn.addEventListener("click", function () {

  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;

  var nomeUtente = nome + " " + cognome;

  console.log(nomeUtente);

  var km = document.getElementById("km").value;

  console.log(km);

  var eta = document.getElementById("categoria").value;

  console.log(eta);

  // calcolo del prezzo del BIGLIETTO

  var euroAlKm = 0.21;
  var PrezzoStandard = km * euroAlKm
  var prezzoFinale;

  if (eta == "Minorenne") {
    prezzoFinale = PrezzoStandard - (PrezzoStandard * 0.2);
  } else if (eta == "Over65") {
    prezzoFinale = PrezzoStandard - (PrezzoStandard * 0.4);
  } else {
    prezzoFinale = PrezzoStandard;
  }

  // creo in modo random il numero del treno

  var numMaxtreno = 100000;
  var numMinTreno = 90000;

  var numeroTreno = Math.floor(Math.random() * (numMaxtreno - numMinTreno +1)) + numMinTreno;

  // creo in modo random il numero della carrozza del treno

  var numMaxcarrozza = 10;
  var numMincarrozza = 1;

  var numeroCarrozza = Math.floor(Math.random() * (numMaxcarrozza - numMincarrozza +1)) + numMincarrozza;

  // output per l'utente

  document.getElementById('nomePasseggero').innerHTML = nomeUtente;

  document.getElementById('numeroTreno').innerHTML = numeroTreno;

  document.getElementById('carrozza').innerHTML = numeroCarrozza;

  document.getElementById('prezzoBiglietto').innerHTML = prezzoFinale.toFixed(2) + " euro";

  document.getElementById('categoriaUtente').innerHTML = eta;

  // creo una classe per far vedere i dati nascosti e sovrascivo
  // la classe creata in html (.biglietto)

  document.getElementById('bigliettoTreno').className = "bigliettoVisibile";

});

// al click del bottone annulla elimino tutti i dati inseriti

btn = document.getElementById("btnAnnulla");

btn.addEventListener("click", function () {

  var nome = document.getElementById("nome").value = "";
  var cognome = document.getElementById("cognome").value = "";
  var km = document.getElementById("km").value = "";
  var eta = document.getElementById("categoria").value = "Maggiorenne";

  // reinserisco la classe creata in html (.biglietto) e
  // sovrascivo la classe creata con js (.bigliettoVisibile)

  document.getElementById('bigliettoTreno').className = "biglietto";

});