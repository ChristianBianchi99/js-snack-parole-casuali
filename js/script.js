// DICHIARAZIONE VARIABILI
let nWords = document.getElementById('nWords');
let n = '';
let btn = document.getElementById('btn');
let phrase = '';
let phraseContainer = document.getElementById('phraseContainer')

// EVENT LISTENER
btn.addEventListener('click', function getRandomWords(){
    if(nWords.value != ''){
        n = nWords.value;
        getWords();
        console.log('ciao')
    }
});

// FUNZIONE PER LA CHIAMATA API
async function getWords(){
    // array di oggetti con le chiamate
    let promises = [];
    for(let i=0; i < n; i++){        
        promises.push(axios.get('https://flynn.boolean.careers/exercises/api/random/word'));
    }
    // nuovo array con gli oggetti delle chiamate e la richiesta di aspettare la fine di quest'ultime
    let results = await Promise.all(promises);
    // array filtrato con l'aggiunta dello spazio tra le parole
    phraseContainer.innerText = results.map(result => result.data.response).join(' ');
}
