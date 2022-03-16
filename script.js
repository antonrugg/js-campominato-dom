const grid = document.getElementById('grid');
const buttonEasy = document.getElementById('easy');
const buttonMedium = document.getElementById('medium');
const buttonHard = document.getElementById('hard');

buttonEasy.addEventListener('click', () => {
    startGame(100, 'easy');
    generateBombs(100)
})
    
buttonMedium.addEventListener('click', () => {
    startGame(81, 'medium');
    generateBombs(81)
})

buttonHard.addEventListener('click', () => {
    startGame(49, 'hard');
    generateBombs(49)
})









function startGame(totCells, level) {
    const bombPositions = generateBombs(totCells);
    console.log(bombPositions);

    createElementsInGrid(totCells, level);
};


//generare 16 numeri casuali nello stesso range

function generateBombs(max) {
    const positions = [];
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
        cell.id = 'cell' + (i + 1);

        cell.className = 'cell';
        cell.classList.add(level);

        cell.innerText = (i + 1);

        grid.appendChild(cell);

        cell.addEventListener('click', () => {
            cell.classList.toggle('bg-red');
        })
    }
}

