let numero = 0
const p = document.getElementById("number")
p.innerHTML = numero
function mais() {
    p.innerHTML = ++numero
}
function menos() {
    p.innerHTML = --numero;
}
function zerar() {
    p.innerHTML = numero = 0
}