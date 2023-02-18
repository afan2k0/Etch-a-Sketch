const grid = document.querySelector('.grid');
for(let i = 0; i < 16; i++)
{
    let div = document.createElement('div');
    div.className = 'cell';
    grid.appendChild(div);
}