let grid = document.querySelector('.grid');
const btnReset = document.querySelector('.btn-reset');
const btnChange = document.querySelector('.btn-change')



function makeGrid(x)
{
    grid.style.setProperty('--grid-rows', x);
    grid.style.setProperty('--cell-size', `${800/x}px`);
    grid.replaceChildren();
    for (let i = 0; i < x*x; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.setProperty('--color-var', 'white');
        grid.appendChild(cell);
    }
    document.body.appendChild(grid);
}
makeGrid(16);

grid.addEventListener(
    "mouseover",
    e => {
        if (e.target && e.target.matches('.cell')) {
            const hoveredDiv = e.target;
            if(hoveredDiv.style.backgroundColor == '' || hoveredDiv.style.backgroundColor == 'white')
            {
                console.log(hoveredDiv.style.backgroundColor);
                hoveredDiv.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                console.log(hoveredDiv.style.backgroundColor);
            }
            else
            {
                console.log(rgb2hex(hoveredDiv.style.backgroundColor));
                hoveredDiv.style.backgroundColor = newShade(rgb2hex(hoveredDiv.style.backgroundColor), -10);
            }
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
        const x = prompt('how many squares per side: ');
        makeGrid(x);
    }
)

const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;

const newShade = (hexColor, magnitude) => {
    hexColor = hexColor.replace(`#`, ``);
    if (hexColor.length === 6) {
        const decimalColor = parseInt(hexColor, 16);
        let r = (decimalColor >> 16) + magnitude;
        r > 255 && (r = 255);
        r < 0 && (r = 0);
        let g = (decimalColor & 0x0000ff) + magnitude;
        g > 255 && (g = 255);
        g < 0 && (g = 0);
        let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
        b > 255 && (b = 255);
        b < 0 && (b = 0);
        return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
    } else {
        return hexColor;
    }
};