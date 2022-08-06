console.log('----JS----');

let count = 0;
const myCounter = document.getElementById('counter');

function plus() {
    myCounter.innerText = ++count;
}

function minus() {
    myCounter.innerText = --count;
}

function reset() {
    count = 0;
    document.getElementById('counter').innerText = 0;
}