import createTable from './createTable.js';
import { onClick, dragStart, dragEnd, dragEnter, dragOver, dragLeave, dragDrop } from './eventHandlers.js';

createTable(100, 100, 100);

const table = document.querySelector('table');
const cells = document.querySelectorAll('td');

// cells.forEach( cell => {
//     cell.addEventListener('click', onClick);
// });

table.addEventListener('click', onClick);

cells.forEach(cell => {
    cell.addEventListener('dragstart', dragStart);
    cell.addEventListener('dragend', dragEnd);
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('dragenter', dragEnter);
    cell.addEventListener('dragleave', dragLeave);
    cell.addEventListener('drop', dragDrop);
});