export default function createTable(numOfRows, numOfCells, cellsInnerTextNumCeil) {
    const root = document.getElementById('root');
    const table = document.createElement('table');

    fillRows(numOfRows, numOfCells, cellsInnerTextNumCeil, table);

    root.appendChild(table);
}

function fillRows(numOfRows, numOfCells, cellsInnerTextNumCeil, table) {
    for (let i = 0; i < numOfRows; i++) {
        const row = document.createElement('tr');
        fillCells(numOfCells, cellsInnerTextNumCeil, row);
        table.appendChild(row);
    }
}

function fillCells(numOfCells, cellsInnerTextNumCeil, row) {
    for (let i = 0; i < numOfCells; i++) {
        const cell = document.createElement('td');
        cell.textContent = generateRndNumberInRange(cellsInnerTextNumCeil);
        cell.setAttribute('draggable', 'true');
        row.appendChild(cell);
    }
}

function generateRndNumberInRange(rangeCeil) {
    const rndNumber = Math.floor((Math.random() * rangeCeil) + 1);
    return rndNumber.toString();
}