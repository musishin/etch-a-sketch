const gridContainer = document.querySelector('#grid-container');
const resetBtn = document.querySelector('#reset-btn');
const blackBtn = document.querySelector('#black-btn');
const grayBtn = document.querySelector('#gray-btn');
const blueBtn = document.querySelector('#blue-btn');
const redBtn = document.querySelector('#red-btn');
const greenBtn = document.querySelector('#green-btn');
const randomBtn = document.querySelector('#random-btn');
const shadingBtn = document.querySelector('#shading-btn');
let shadeColor = 'gainsboro';
let mousedown = false;
let mouseenter = false;
let randomToggle = false;

createGrid(50);
setupGridSquares();

resetBtn.addEventListener('click', () => {
    let gridSize = document.getElementById('size-input').value;
    if(gridSize > 100) {
        gridSize = 100;
    }
    resetGrid(gridSize);
});

blackBtn.addEventListener('click', () => {
    randomToggle = false;
    shadeColor = 'black';
});

grayBtn.addEventListener('click', () => {
    randomToggle = false;
    shadeColor = 'gainsboro';
});

blueBtn.addEventListener('click', () => {
    randomToggle = false;
    shadeColor = 'cornflowerblue';
});

redBtn.addEventListener('click', () => {
    randomToggle = false;
    shadeColor = 'lightcoral';
});

greenBtn.addEventListener('click', () => {
    randomToggle = false;
    shadeColor = 'darkseagreen';
});

randomBtn.addEventListener('click', () => {
    randomToggle = true;
});

shadingBtn.addEventListener('click', () => {
    randomToggle = false;
});



/* functions */

function setupGridSquares() {

    const gridSquares = Array.from(document.getElementsByClassName('grid-square'));
    gridSquares.forEach(function(element) {
        element.addEventListener('mousedown', function(e) {
            mousedown = true;
            if(mousedown && mouseenter) {
                if(!randomToggle) {
                    e.target.style.backgroundColor = shadeColor;
                }
                else {
                    let rgb1 = Math.floor(Math.random() * Math.floor(255));
                    let rgb2 = Math.floor(Math.random() * Math.floor(255));
                    let rgb3 = Math.floor(Math.random() * Math.floor(255));
                    e.target.style.backgroundColor = 'rgb('+rgb1+', '+rgb2+', '+rgb3+')';
                }
            }
        })
        element.addEventListener('mouseup', function() {
            mousedown = false;
            mouseenter = false;
        })
        element.addEventListener('mouseenter', function(e) {
            mouseenter = true;
            if(mousedown && mouseenter) {
                if(!randomToggle) {
                    e.target.style.backgroundColor = shadeColor;
                }
                else {
                    let rgb1 = Math.floor(Math.random() * Math.floor(255));
                    let rgb2 = Math.floor(Math.random() * Math.floor(255));
                    let rgb3 = Math.floor(Math.random() * Math.floor(255));
                    e.target.style.backgroundColor = 'rgb('+rgb1+', '+rgb2+', '+rgb3+')';
                }
            }
        })
    });

}

function createGrid(squaresPerSide) {

    let heightAndWidth = 800/(squaresPerSide);

    for(let numOfRows = 1; numOfRows <= squaresPerSide; numOfRows++) {
        let newRow = document.createElement('div');
        newRow.classList.add('new-row');
        newRow.style.height = heightAndWidth + 'px';
        gridContainer.appendChild(newRow);

        for(let squareCount = 1; squareCount <= squaresPerSide; squareCount++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.width = heightAndWidth + 'px';
            gridSquare.style.height = heightAndWidth + 'px';
            newRow.appendChild(gridSquare);
        }
    }

}

function resetGrid(squaresPerSide) {

    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(squaresPerSide);
    setupGridSquares();

}