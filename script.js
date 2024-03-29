const GRIDLENGTH = 500;
let numSquares = 16;

const container = document.querySelector('.container');
container.style.width = `${GRIDLENGTH}px`;
container.style.height = `${GRIDLENGTH}px`;

let select = document.querySelector('#select');
select.addEventListener('click', () => {
    numSquares = prompt("Enter the number of squares per side: (1-30)");

    while (!(numSquares <= 30 && numSquares >= 1)) {
        numSquares = prompt("Enter the number of squares per side: (1-30)");
    }

    createNewGrid();
})

function createGridCells() {
    for (let i = 0; i < (numSquares * numSquares); i++) {
        let grid = document.createElement('div');
        grid.style.width = `${GRIDLENGTH / numSquares - 2}px`;
        grid.style.height = `${GRIDLENGTH / numSquares - 2}px`;

        grid.classList.add('grid');
        container.appendChild(grid);

        grid.addEventListener('mouseover', changeBackgroundColor);
    }
}

function changeBackgroundColor() {
    this.style.backgroundColor = 'black';
}

function createNewGrid() {
    container.textContent = '';
    createGridCells();
}


createGridCells();

