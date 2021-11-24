let numero = 0;
const p = document.getElementById("num");

function mais() {
  p.innerHTML = ++numero;
} 

function menos() {
    p.innerHTML = --numero;
}

function reset() {
    p.innerHTML = numero = 0;
}