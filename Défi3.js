const prompt = require("prompt-sync")();

let tab = [1, 2, 2, 3, 4, 4, 5]
let tab1 = [];
for (let i = 0; i < tab.length; i++) {
    let exist = false;
    for (let j = 0; j < tab1.length; j++) {
        if (tab[i] === tab1[j]) {
            exist = true;
            break;
        }
    }
    if (exist == false) {
            
            tab1.push(tab[i]);
        }
}
console.log(tab1);
