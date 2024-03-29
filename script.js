const GRIDLENGTH = 500;
let rows = 16;
let cols = 16;

const container = document.querySelector('.container');
container.style.width = `${GRIDLENGTH}px`;
container.style.height = `${GRIDLENGTH}px`;

function createGridCells() {
    for (let i = 0; i < (rows * cols); i++) {
        let grid = document.createElement('div');
        grid.style.width = `${GRIDLENGTH / cols - 2}px`;
        grid.style.height = `${GRIDLENGTH / rows - 2}px`;

        grid.classList.add('grid');
        container.appendChild(grid);
    }
}

createGridCells();