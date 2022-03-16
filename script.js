// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco(attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js / css /
//con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi nel range 1 - 100.
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba -
//la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
//     BONUS:
//     1 - quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// 2 - quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
// 3 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:

// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

let positions = [];
const grid = document.getElementById('grid');
const buttonEasy = document.getElementById('easy');
const buttonMedium = document.getElementById('medium');
const buttonHard = document.getElementById('hard');

buttonEasy.addEventListener('click', () => {
    startGame(100, 'easy');
    generateBombs(100)
    grid.classList.remove('noClick');
})
    
buttonMedium.addEventListener('click', () => {
    startGame(81, 'medium');
    generateBombs(81)
    grid.classList.remove('noClick');
})

buttonHard.addEventListener('click', () => {
    startGame(49, 'hard');
    generateBombs(49)
    grid.classList.remove('noClick');
})


function showAlert(message) {
    const grid = document.getElementById('grid');

    const alertMessage = `
    <div class="game-alert">
    <duv class="game-alert-message">
    ${message}
    </div>
    </div>
    `;

    grid.innerHTML = grid.innerHTML + alertMessage;
}


function startGame(totCells, level) {
    const bombPositions = generateBombs(totCells);
    console.log(bombPositions);

    createElementsInGrid(totCells, level);
};




//generare 16 numeri casuali nello stesso range

function generateBombs(max) {
    
    while (positions.length < 16) {
        const position = generateRandomNumber(1, max);
        
        if (positions.includes(position) === false) {
            positions.push(position)
        }
    }
    return positions;
}



function generateRandomNumber(min, max) {
    const range = max - min + 1;

    return Math.floor(Math.random() * range) + min;
}


function createElementsInGrid(totalCells, level) {
    const grid = document.getElementById('grid');

    grid.innerHTML = '';

    for (let i = 0; i < totalCells; i++){
        const cell = document.createElement('div');
        cell.id = i + 1;

        cell.className = 'cell';
        cell.classList.add(level);

        cell.innerText = (i + 1);
       

        grid.appendChild(cell);

        cell.addEventListener('click', () => {

            
            for (i = 0; i <= positions.length; i++){
                if (cell.innerText == positions[i]) {
                    cell.classList.add('bg-green');
                    grid.classList.add('noClick');
                    showAlert('YOU LOST!')
                    
                } else {
                    cell.classList.add('bg-red');
                }
            }
            
        })
    }
}


