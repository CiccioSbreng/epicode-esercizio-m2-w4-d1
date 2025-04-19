const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]


function cercaLavori(titolo, posizione) {
  titolo = titolo.toLowerCase()
  posizione = posizione.toLowerCase()

  //console.log("Titolo convertito in minuscolo:", titolo);
  //console.log("Posizione convertita in minuscolo:", posizione);

  let lavoriTrovati = []; // Creato array vuoto per memorizzare i risultati

  // cicliamo l'array jobs con un ciclo for
  for (let i = 0; i < jobs.length; i++) {
    let lavoro = jobs[i]

    //console.log("Analizzando:", lavoro.title, "-", lavoro.location);
   // console.log(jobs.length)

    // Controlliamo se il titolo e la location contengono la parola cercata
    if (lavoro.title.toLowerCase().includes(titolo) &&
      lavoro.location.toLowerCase().includes(posizione)) {
      lavoriTrovati.push(lavoro); // Se corrisponde, lo aggiungiamo all'array dei risultati
    }
  }

  return {
    risultati: lavoriTrovati,
    totale: lavoriTrovati.length
  };
}
// Questa funzione viene chiamata quando l'utente clicca "Cerca"
function avviaRicerca() {
  let titoloInserito = document.getElementById("inputLavoro").value
  let posizioneInserita = document.getElementById("inputLuogo").value

  let risultatiRicerca = cercaLavori(titoloInserito, posizioneInserita)

  let listaRisultati = document.getElementById("risultati")
  listaRisultati.innerHTML = ""; // dobbiamo pulire la lista prima di aggiungere i nuovi risultati    
              

    for (let i = 0; i < risultatiRicerca.risultati.length; i++) {
      let lavoro = risultatiRicerca.risultati[i]; // Prendiamo il lavoro corrente dall'array
      let elementoLista = document.createElement("li"); // Creiamo un nuovo elemento lista
      elementoLista.textContent = lavoro.title + " - " + lavoro.location; // Assegniamo il testo all'elemento
      listaRisultati.appendChild(elementoLista); // Aggiungiamo l'elemento alla lista nel DOM
  }


}
function cancellaRicerca() {
  document.getElementById("inputLavoro").value = ""; // Pulisci il campo  lavoro
  document.getElementById("inputLuogo").value = ""; // Pulisci il campo  posizione
  document.getElementById("risultati").innerHTML =""; // Pulisci i risultati 



}

