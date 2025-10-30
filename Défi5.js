const prompt = require("prompt-sync")();

let tab = [1, 2, 3, 4];
let tab2 = [];

for (let i = 0; i < tab.length; i++) {
    tab2.push(tab[i]);
}

for (let i = tab.length -1; i >= 0; i--) {
    tab2.push(tab[i]);
}

console.log(tab2);
