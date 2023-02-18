const grid = document.querySelector('.grid');
const btnReset = document.querySelector('.btn-reset');
const btnChange = document.querySelector('.btn-change')

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.className = 'cell';
    grid.appendChild(div);
}



grid.addEventListener(
    "mouseover",
    e => {
        if (e.target && e.target.matches('.cell')) {
            const hoveredDiv = e.target;
            hoveredDiv.style.backgroundColor = '#000000';
        }
    });

btnReset.addEventListener(
    'click', e => {
        let cells = document.querySelector('.grid').children;
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = 'white';
        }
    });

btnChange.addEventListener(
    'click', e => {
        const x = prompt('how many rows: ');
        const y = prompt('how many columns: ');
        resizeGrid(x, y);
    }
)

function resizeGrid(x, y) {
    const columns = `repeat(${x}, 1fr)`;
    const rows = `repeat(${y}, 1fr)`;
    grid.remove();
    grid.style.gridTemplateColumns = columns;
    grid.style.gridTemplateRows = rows;
    const newGrid = document.createElement('div');
    newGrid.className = 'grid';
    newGrid.style.cssText = `display: grid;grid-template-columns: repeat(${x}, 1fr);grid-template-rows: repeat(${y}, 1fr);justify-content: center;align-content: center;height: 90vh;`;
    document.body.appendChild(newGrid);
}