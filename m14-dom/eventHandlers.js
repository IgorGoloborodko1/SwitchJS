let dragged;

export function onClick(event) {
    if (event.target.nodeName !== 'TD') {
        return;
    }
    console.log(event.target);
}

export function dragStart(event) {
    dragged = event.target;
    setTimeout(() => this.className = 'hidden', 1);
}

export function dragEnd() {
    this.className = '';
}

export function dragOver(event) {
    event.preventDefault();
}

export function dragEnter(event) {
    event.preventDefault();
    this.className += ' hovered';
}

export function dragLeave(event) {
    if (event.target.nodeName !== 'TD') {
        return;
    }
    this.className = '';
}

export function dragDrop(event) {
    event.preventDefault();
    const draggedText = dragged.textContent;
    const targetText = this.textContent;

    this.textContent = draggedText;
    dragged.textContent = targetText;
    this.className = '';
}