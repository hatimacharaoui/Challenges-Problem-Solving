const prompt = require("prompt-sync")();

let mot = prompt("entrer un mot : ")
let envers = "";

for (let i = mot.length -1; i >= 0 ; i--) {
    envers = envers + mot[i];
}
let Vérification = false;
if (envers == mot) {
    Vérification = true;
}
console.log(Vérification)
