import generateRndNumberInRange1To from './generateRndNumberInRange1To.js';

export default function createTable(numOfRows, numOfCells, maxNumber) {
    const root = document.getElementById('root');
    const table = document.createElement('table');
    fillRows(numOfRows, numOfCells, maxNumber, table);
    root.appendChild(table);
}

function fillRows(numOfRows, numOfCells, maxNumber, table) {
    for (let i = 0; i < numOfRows; i++) {
        const row = document.createElement('tr');
        fillCells(numOfCells, maxNumber, row);
        table.appendChild(row);
    }
}

function fillCells(numOfCells, maxNumber, row) {
    for (let i = 0; i < numOfCells; i++) {
        const cell = document.createElement('td');
        cell.textContent = generateRndNumberInRange1To(maxNumber);
        cell.setAttribute('draggable', 'true');
        row.appendChild(cell);
    }
}