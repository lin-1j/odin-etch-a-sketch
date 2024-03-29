const GRIDLENGTH = 500;
let numSquares = 16;

const container = document.querySelector('.container');
container.style.width = `${GRIDLENGTH}px`;
container.style.height = `${GRIDLENGTH}px`;

let select = document.querySelector('#select');
select.addEventListener('click', () => {
    numSquares = prompt("Enter the number of squares per side: (1-30)");

    while (numSquares !== null && !(numSquares <= 30 && numSquares >= 1)) {
        numSquares = prompt("Enter the number of squares per side: (1-30)");
    }

    if (numSquares !== null) {
        createNewGrid();
    }
})

let currentColor = 'black';
let isMouseDown = false;

function createGridCells() {
    if (numSquares === null) {
        numSquares = 16;
    }
    
    for (let i = 0; i < (numSquares * numSquares); i++) {
        let grid = document.createElement('div');
        grid.style.width = `${GRIDLENGTH / numSquares - 2}px`;
        grid.style.height = `${GRIDLENGTH / numSquares - 2}px`;

        grid.classList.add('grid');
        container.appendChild(grid);
        
        grid.addEventListener('mousedown', () => {
            isMouseDown = true;
            changeBackgroundColor(grid);
        });
        grid.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
        grid.addEventListener('mouseover', () => {
            if (isMouseDown) {
                changeBackgroundColor(grid);
            }
        });
    }
}

function changeBackgroundColor(grid) {
    if (currentColor === 'black') {
        grid.style.backgroundColor = 'black';
    } else if (currentColor === 'rainbow') {
        grid.style.backgroundColor = getRandomColor();
    } else if (currentColor === 'progressive') {
        if (grid.style.backgroundColor == '') {
            grid.style.backgroundColor = 'black';
            grid.style.opacity = 0.1;
        } else if (grid.style.opacity >= 0.1 && grid.style.opacity < 1) {
            grid.style.opacity = getProgressiveColor(grid);
        }
        
    }
    
}

function createNewGrid() {
    container.textContent = '';
    createGridCells();
}

const reset = document.querySelector('.reset') 
reset.addEventListener('click', createNewGrid);

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', () => {
    currentColor = 'rainbow';
})

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const black = document.querySelector('.black'); 
black.addEventListener('click', () => {
    currentColor = 'black';
})

const progressive = document.querySelector('.progressive'); 
progressive.addEventListener('click', () => {
    currentColor = 'progressive';
})

function getProgressiveColor(grid) {
    let opacity = parseFloat(grid.style.opacity);
    opacity += 0.1;
    return opacity;
}

createGridCells();

