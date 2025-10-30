const prompt = require("prompt-sync")();

let Bouteilles = +prompt("entrer un nombre : ");

let total = 0;
let vides = 0;

while (Bouteilles > 0) {
  total = total + Bouteilles;
  vides = vides + Bouteilles;
  Bouteilles = Math.floor(vides / 3);
  vides = vides % 3;
}

console.log(total);
