function moveTop() {
    let element = document.getElementById('meo');
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function moveLeft() {
    let element = document.getElementById('meo');
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function  moveRight() {
    let element = document.getElementById('meo');
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}
function moveBottom() {
    let element = document.getElementById('meo');
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveTop();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveBottom();
            break;
    }
}
function dichuyen() {
    window.addEventListener('keydown', moveSelection);
}
