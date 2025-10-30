const prompt = require('prompt-sync')();

let tab = [1, 2, 2, 3, 3, 4, 5, 5];
for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length; j++) {
        if (tab[i] == tab[j+1]) {
         tab.splice(j+1, 1);
    }
    }
}
console.log(tab);