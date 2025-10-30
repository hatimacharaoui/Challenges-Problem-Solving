const prompt = require("prompt-sync")();

let tab = [1, 1, 1, 0, 1, 1, 0];

let index = 0;
for (let i = 0; i < tab.length; i++) {
  if (tab[i] === 0) {
    index = i;
    break
  }
}

console.log(index);
