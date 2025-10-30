const prompt = require("prompt-sync")();

let tab = [1, 2, 2, 3, -4, 4, 5];
let somme = 0;
for (let i = 0; i < tab.length; i++) {
  if (tab[i] < 0) {
    break;
  } else {
    somme = somme + tab[i];
  }
}

console.log(somme);
